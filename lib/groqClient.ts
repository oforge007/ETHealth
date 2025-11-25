import axios from 'axios'

interface GroqMessage {
  role: 'user' | 'assistant'
  content: string
}

const GROQ_API_KEY = process.env.NEXT_PUBLIC_GROQ_API_KEY || ''

export async function callGroqAPI(messages: GroqMessage[]): Promise<string> {
  try {
    const response = await axios.post(
      'https://api.groq.com/openai/v1/chat/completions',
      {
        model: 'mixtral-8x7b-32768',
        messages: [
          {
            role: 'system',
            content:
              'You are a helpful medical assistant providing general health information and symptoms guidance. Always remind users that you are not a doctor and they should consult a healthcare professional for serious conditions. Keep responses concise and appropriate for mobile.',
          },
          ...messages,
        ],
        temperature: 0.7,
        max_tokens: 500,
      },
      {
        headers: {
          Authorization: `Bearer ${GROQ_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    )

    return response.data.choices[0].message.content
  } catch (error) {
    console.error('Groq API error:', error)
    throw new Error('Failed to get AI response')
  }
}

export function getMedicalAdviceOffline(symptom: string): string {
  const symptomKey = Object.keys({
    Fever: null,
    Cough: null,
    Headache: null,
    'Sore Throat': null,
  }).find(
    (key) =>
      key.toLowerCase().includes(symptom.toLowerCase()) || symptom.toLowerCase().includes(key.toLowerCase())
  )

  if (symptomKey) {
    const advice: Record<string, string[]> = {
      Fever: ['Take paracetamol as directed', 'Rest well', 'Drink plenty of water', 'If fever persists > 3 days, see a doctor'],
      Cough: ['Drink warm fluids', 'Use cough drops', 'Get rest', 'If persistent, consult a doctor'],
      Headache: ['Rest in a dark room', 'Take paracetamol', 'Stay hydrated', 'Avoid screens if possible'],
      'Sore Throat': ['Gargle with salt water', 'Drink warm tea', 'Use lozenges', 'Rest your voice'],
    }
    return `**Advice for ${symptomKey}:**\n${advice[symptomKey]?.join('\n') || 'Please consult a doctor'}`
  }

  return 'I cannot provide specific advice for this. Please consult a healthcare professional.'
}
