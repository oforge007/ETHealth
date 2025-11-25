'use client'

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import useAuthStore from '@/store/authStore'
import { t } from '@/lib/i18n'
import Link from 'next/link'

export default function HomePage() {
  const router = useRouter()
  const { user, isAuthenticated } = useAuthStore()
  const [language, setLanguage] = useState<'en' | 'sw'>('en')

  useEffect(() => {
    useAuthStore.getState().hydrateFromStorage()
  }, [])

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/auth/login')
    }
  }, [isAuthenticated, router])

  if (!isAuthenticated || !user) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin">⏳</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-earth-tan">
      {/* Header */}
      <header className="sticky top-0 bg-primary-700 text-white shadow-lg z-50">
        <div className="max-w-md mx-auto px-4 py-3 flex justify-between items-center">
          <div>
            <h1 className="font-bold text-xl">💚 ETHealth</h1>
            <p className="text-xs text-primary-100">{t('app.tagline', language)}</p>
          </div>
          <button
            onClick={() => setLanguage(language === 'en' ? 'sw' : 'en')}
            className="bg-primary-600 text-white rounded-full px-3 py-1 text-xs font-semibold"
          >
            {language === 'en' ? 'Sw' : 'En'}
          </button>
        </div>
      </header>

      {/* Wallet Balance Card */}
      <div className="max-w-md mx-auto px-4 py-4">
        <div className="bg-white rounded-2xl p-6 shadow-md border-2 border-primary-200">
          <p className="text-sm text-gray-600 mb-2">{t('wallet.balance', language)}</p>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-primary-50 rounded-lg p-3">
              <p className="text-2xl font-bold text-primary-700">$5.50</p>
              <p className="text-xs text-primary-600">{t('wallet.cusd', language)}</p>
            </div>
            <div className="bg-accent-tan rounded-lg p-3">
              <p className="text-2xl font-bold text-earth-brown">KES 200</p>
              <p className="text-xs text-earth-brown">{t('wallet.ckes', language)}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="max-w-md mx-auto px-4 py-4 space-y-3">
        {/* AI Chatbot */}
        <Link href="/chat">
          <button className="w-full bg-gradient-to-r from-primary-600 to-primary-500 text-white rounded-xl p-4 shadow-md active:scale-95 transition-transform">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🤖</span>
              <div className="text-left">
                <p className="font-semibold text-sm">Free AI Health Chat</p>
                <p className="text-xs opacity-90">Symptom checker & advice</p>
              </div>
            </div>
          </button>
        </Link>

        {/* Doctors */}
        <Link href="/doctors">
          <button className="w-full bg-gradient-to-r from-accent-gold to-accent-yellow text-earth-brown rounded-xl p-4 shadow-md active:scale-95 transition-transform">
            <div className="flex items-center gap-3">
              <span className="text-2xl">⚕️</span>
              <div className="text-left">
                <p className="font-semibold text-sm">Book Consultation</p>
                <p className="text-xs">Connect with doctors</p>
              </div>
            </div>
          </button>
        </Link>

        {/* Dashboard */}
        <Link href="/dashboard">
          <button className="w-full bg-white text-primary-700 rounded-xl p-4 shadow-md border-2 border-primary-300 active:scale-95 transition-transform">
            <div className="flex items-center gap-3">
              <span className="text-2xl">📋</span>
              <div className="text-left">
                <p className="font-semibold text-sm">Dashboard</p>
                <p className="text-xs opacity-75">History & prescriptions</p>
              </div>
            </div>
          </button>
        </Link>

        {/* Referral */}
        <Link href="/referral">
          <button className="w-full bg-white text-earth-brown rounded-xl p-4 shadow-md border-2 border-accent-gold active:scale-95 transition-transform">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🎁</span>
              <div className="text-left">
                <p className="font-semibold text-sm">Refer & Earn</p>
                <p className="text-xs opacity-75">Get 100 cUSD credit</p>
              </div>
            </div>
          </button>
        </Link>
      </div>

      {/* Featured Packages */}
      <div className="max-w-md mx-auto px-4 py-6">
        <h2 className="text-lg font-bold text-primary-900 mb-4">MiniPay Exclusive Offers</h2>
        <div className="space-y-3">
          <div className="bg-white rounded-lg p-4 border-l-4 border-primary-600 shadow-sm">
            <p className="font-semibold text-sm">🏥 BYON8 Consultation</p>
            <p className="text-xs text-gray-600">500 cUSD • Expert doctors</p>
          </div>
          <div className="bg-white rounded-lg p-4 border-l-4 border-accent-gold shadow-sm">
            <p className="font-semibold text-sm">⚕️ Zuri Health Specialist</p>
            <p className="text-xs text-gray-600">400 cUSD • Specialists available</p>
          </div>
        </div>
      </div>

      {/* Subscription Plans */}
      <div className="max-w-md mx-auto px-4 py-6 pb-20">
        <h2 className="text-lg font-bold text-primary-900 mb-4">Subscription Plans</h2>
        <div className="space-y-2">
          <button className="w-full text-left bg-white rounded-lg p-3 border border-gray-300 text-sm">
            <p className="font-semibold">Basic - Free 🆓</p>
            <p className="text-xs text-gray-600">AI chat only</p>
          </button>
          <button className="w-full text-left bg-primary-50 rounded-lg p-3 border-2 border-primary-500 text-sm">
            <p className="font-semibold">Standard - 800 cUSD/mo ⭐</p>
            <p className="text-xs text-gray-600">4 consultations + prescription</p>
          </button>
          <button className="w-full text-left bg-white rounded-lg p-3 border border-gray-300 text-sm">
            <p className="font-semibold">Premium - 2,000 cUSD/mo 👑</p>
            <p className="text-xs text-gray-600">Unlimited consultations</p>
          </button>
        </div>
      </div>

      {/* Bottom Nav */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 max-w-md mx-auto">
        <div className="flex justify-around p-3">
          <Link href="/dashboard" className="flex flex-col items-center text-primary-600 text-xs font-semibold">
            <span className="text-lg">📊</span>
            <p>Dashboard</p>
          </Link>
          <Link href="/chat" className="flex flex-col items-center text-gray-600 text-xs font-semibold">
            <span className="text-lg">💬</span>
            <p>Chat</p>
          </Link>
          <Link href="/profile" className="flex flex-col items-center text-gray-600 text-xs font-semibold">
            <span className="text-lg">👤</span>
            <p>Profile</p>
          </Link>
        </div>
      </div>
    </div>
  )
}
