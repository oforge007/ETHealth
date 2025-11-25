'use client'

import React, { useState, useRef, useEffect } from 'react'
import useAuthStore from '@/store/authStore'
import { t } from '@/lib/i18n'
import { getMedicalAdviceOffline } from '@/lib/groqClient'

interface Message {
  role: 'user' | 'assistant'
  content: string
  timestamp: number
}

export default function ChatPage() {
  const { user } = useAuthStore()
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: 'Hello! I\'m your health assistant. Describe your symptoms and I\'ll provide guidance. Remember, I\'m not a doctor - for serious issues, book a consultation.',
      timestamp: Date.now(),
    },
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    const userMessage: Message = {
      role: 'user',
      content: input,
      timestamp: Date.now(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput('')
    setIsLoading(true)

    try {
      // Use offline advice first, then try Groq API
      const advice = getMedicalAdviceOffline(input)
      const assistantMessage: Message = {
        role: 'assistant',
        content: advice,
        timestamp: Date.now(),
      }
      setMessages((prev) => [...prev, assistantMessage])
    } catch (error) {
      console.error('Chat error:', error)
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: 'Sorry, I encountered an error. Please try again.',
          timestamp: Date.now(),
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="h-screen flex flex-col bg-gradient-to-b from-primary-50 to-white">
      {/* Header */}
      <header className="bg-primary-700 text-white p-4 shadow-md">
        <h1 className="font-bold text-lg">🤖 Health Assistant</h1>
        <p className="text-xs text-primary-100 mt-1">{t('chat.disclaimer', 'en')}</p>
      </header>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div
              className={`chat-bubble ${
                msg.role === 'user' ? 'chat-bubble-user' : 'chat-bubble-bot'
              }`}
            >
              <p className="text-sm whitespace-pre-wrap break-words">{msg.content}</p>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="chat-bubble chat-bubble-bot">
              <p className="text-sm">⏳ Thinking...</p>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <form
        onSubmit={handleSendMessage}
        className="border-t border-gray-200 bg-white p-4 flex gap-2"
      >
        <input
          type="text"
          placeholder={t('chat.placeholder', 'en')}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 px-4 py-3 rounded-lg border border-gray-300 text-sm"
          disabled={isLoading}
        />
        <button
          type="submit"
          disabled={isLoading || !input.trim()}
          className="bg-primary-600 text-white px-4 py-3 rounded-lg font-semibold text-sm active:scale-95 transition-transform disabled:opacity-50"
        >
          {t('chat.send', 'en')}
        </button>
      </form>
    </div>
  )
}
