'use client'

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import useAuthStore from '@/store/authStore'
import { User } from '@/types'
import { t } from '@/lib/i18n'

export default function LoginPage() {
  const router = useRouter()
  const { user, setUser } = useAuthStore()
  const [step, setStep] = useState<'connect' | 'profile'>('connect')
  const [profile, setProfile] = useState<Partial<User>>({
    name: '',
    age: 25,
    gender: 'M',
    country: 'Kenya',
    phone: '',
  })
  const [walletAddress] = useState('0x1234...abcd')

  useEffect(() => {
    if (user) {
      router.push('/')
    }
  }, [user, router])

  const handleConnect = async () => {
    // Simulate wallet connection
    setStep('profile')
  }

  const handleCompleteProfile = async () => {
    const newUser: User = {
      address: walletAddress,
      name: profile.name || 'User',
      age: profile.age || 25,
      gender: profile.gender || 'M',
      country: profile.country || 'Kenya',
      phone: profile.phone,
      createdAt: Date.now(),
    }
    setUser(newUser)
    router.push('/')
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-earth-tan flex flex-col">
      {/* Logo */}
      <div className="flex-1 flex flex-col items-center justify-center px-4">
        <h1 className="text-4xl font-bold text-primary-700 mb-2">💚 ETHealth</h1>
        <p className="text-center text-sm text-gray-600 mb-8">{t('app.tagline', 'en')}</p>

        {step === 'connect' ? (
          <div className="w-full max-w-sm">
            <button
              onClick={handleConnect}
              className="w-full bg-gradient-to-r from-primary-600 to-primary-500 text-white rounded-xl p-4 font-semibold shadow-lg active:scale-95 transition-transform mb-4"
            >
              🔗 {t('auth.connectWallet', 'en')}
            </button>
            <p className="text-xs text-center text-gray-600">
              Connect your MiniPay wallet to get started. Your healthcare journey begins here!
            </p>
          </div>
        ) : (
          <div className="w-full max-w-sm space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-2">{t('auth.enterName', 'en')}</label>
              <input
                type="text"
                placeholder="Your full name"
                value={profile.name || ''}
                onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-2">{t('auth.selectAge', 'en')}</label>
              <input
                type="number"
                min="1"
                max="120"
                value={profile.age || 25}
                onChange={(e) => setProfile({ ...profile, age: parseInt(e.target.value) })}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-2">{t('auth.selectGender', 'en')}</label>
              <select
                value={profile.gender || 'M'}
                onChange={(e) => setProfile({ ...profile, gender: e.target.value as 'M' | 'F' | 'Other' })}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm"
              >
                <option value="M">Male</option>
                <option value="F">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-2">{t('auth.selectCountry', 'en')}</label>
              <select
                value={profile.country || 'Kenya'}
                onChange={(e) => setProfile({ ...profile, country: e.target.value as 'Kenya' | 'Nigeria' | 'Other' })}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm"
              >
                <option value="Kenya">Kenya</option>
                <option value="Nigeria">Nigeria</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-2">{t('auth.phone', 'en')}</label>
              <input
                type="tel"
                placeholder="+254..."
                value={profile.phone || ''}
                onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm"
              />
            </div>

            <button
              onClick={handleCompleteProfile}
              className="w-full bg-gradient-to-r from-primary-600 to-primary-500 text-white rounded-xl p-4 font-semibold shadow-lg active:scale-95 transition-transform"
            >
              ✓ {t('auth.complete', 'en')}
            </button>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="p-4 text-center text-xs text-gray-600">
        <p>🔐 Your data is stored securely on your device • Powered by Celo blockchain</p>
      </div>
    </div>
  )
}
