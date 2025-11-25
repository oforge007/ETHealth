'use client'

import React, { useState } from 'react'
import useAuthStore from '@/store/authStore'
import { t } from '@/lib/i18n'

export default function ProfilePage() {
  const { user, logout } = useAuthStore()
  const [language, setLanguage] = useState<'en' | 'sw'>('en')
  const [showSettings, setShowSettings] = useState(false)

  if (!user) {
    return <div>Loading...</div>
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white pb-20">
      <header className="bg-primary-700 text-white p-4 shadow-md">
        <h1 className="font-bold text-lg">👤 {t('common.profile', 'en')}</h1>
      </header>

      <div className="max-w-md mx-auto px-4 py-4 space-y-4">
        {/* Profile Card */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-2xl p-6 shadow-lg">
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-3xl font-bold">{user.name}</p>
              <p className="text-primary-100 text-sm mt-1">
                {user.age} years • {user.gender} • {user.country}
              </p>
            </div>
            <span className="text-3xl">💚</span>
          </div>
          <div className="bg-primary-600 bg-opacity-50 rounded-lg p-3 mt-3">
            <p className="text-xs opacity-90">Wallet Address</p>
            <p className="font-mono text-sm">{user.address.slice(0, 6)}...{user.address.slice(-4)}</p>
          </div>
        </div>

        {/* Profile Info */}
        <div className="bg-white rounded-lg p-4 border border-gray-200">
          <h3 className="font-bold text-sm mb-3">Personal Information</h3>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Full Name</span>
              <span className="font-semibold">{user.name}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Age</span>
              <span className="font-semibold">{user.age}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Gender</span>
              <span className="font-semibold">{user.gender === 'M' ? 'Male' : user.gender === 'F' ? 'Female' : 'Other'}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Country</span>
              <span className="font-semibold">{user.country}</span>
            </div>
            {user.phone && (
              <div className="flex justify-between">
                <span className="text-gray-600">Phone</span>
                <span className="font-semibold">{user.phone}</span>
              </div>
            )}
          </div>
        </div>

        {/* Settings */}
        <div className="bg-white rounded-lg p-4 border border-gray-200">
          <button
            onClick={() => setShowSettings(!showSettings)}
            className="w-full text-left font-bold text-sm flex justify-between items-center"
          >
            {t('common.settings', 'en')}
            <span>{showSettings ? '▼' : '▶'}</span>
          </button>
          {showSettings && (
            <div className="mt-3 space-y-3 border-t pt-3">
              <div className="flex justify-between items-center">
                <span className="text-sm">Language</span>
                <button
                  onClick={() => setLanguage(language === 'en' ? 'sw' : 'en')}
                  className="bg-primary-100 text-primary-700 px-3 py-1 rounded text-xs font-semibold"
                >
                  {language === 'en' ? 'English' : 'Swahili'}
                </button>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Dark Mode</span>
                <input type="checkbox" className="w-4 h-4" />
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Notifications</span>
                <input type="checkbox" className="w-4 h-4" defaultChecked />
              </div>
            </div>
          )}
        </div>

        {/* Logout Button */}
        <button
          onClick={logout}
          className="w-full bg-red-600 text-white rounded-lg p-3 font-semibold text-sm active:scale-95 transition-transform"
        >
          {t('common.logout', 'en')}
        </button>
      </div>
    </div>
  )
}
