'use client'

import React, { useState } from 'react'
import useAuthStore from '@/store/authStore'
import { REFERRAL_MESSAGE, REFERRAL_CREDIT } from '@/lib/constants'
import { t } from '@/lib/i18n'

export default function ReferralPage() {
  const { user } = useAuthStore()
  const [copied, setCopied] = useState(false)

  const referralLink = `${process.env.NEXT_PUBLIC_APP_URL || 'https://ethealthapp.com'}?ref=${user?.address}`
  const referralText = `${REFERRAL_MESSAGE}${referralLink}`

  const handleCopyLink = () => {
    navigator.clipboard.writeText(referralLink)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleShareViaWhatsApp = () => {
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(referralText)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-earth-tan pb-20">
      <header className="bg-primary-700 text-white p-4 shadow-md">
        <h1 className="font-bold text-lg">🎁 {t('referral.title', 'en')}</h1>
      </header>

      <div className="max-w-md mx-auto px-4 py-4 space-y-4">
        {/* Hero Card */}
        <div className="bg-gradient-to-r from-accent-gold to-accent-yellow text-earth-brown rounded-2xl p-6 shadow-lg">
          <p className="text-3xl font-bold mb-2">🌟 Earn Rewards</p>
          <p className="text-sm opacity-90">
            {t('referral.earn', 'en')}.
          </p>
          <p className="text-lg font-bold mt-3">{REFERRAL_CREDIT} cUSD = ~${(REFERRAL_CREDIT / 100).toFixed(0)}</p>
        </div>

        {/* How it works */}
        <div className="bg-white rounded-lg p-4 border border-gray-200">
          <h3 className="font-bold text-sm mb-3">How it works</h3>
          <div className="space-y-2 text-sm">
            <div className="flex gap-2">
              <span className="bg-primary-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs flex-shrink-0">
                1
              </span>
              <p>Share your unique referral link</p>
            </div>
            <div className="flex gap-2">
              <span className="bg-primary-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs flex-shrink-0">
                2
              </span>
              <p>Friend signs up with your link</p>
            </div>
            <div className="flex gap-2">
              <span className="bg-primary-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs flex-shrink-0">
                3
              </span>
              <p>You both get {REFERRAL_CREDIT} cUSD bonus</p>
            </div>
          </div>
        </div>

        {/* Referral Link */}
        <div className="bg-white rounded-lg p-4 border border-primary-300">
          <p className="text-xs text-gray-600 mb-2">Your referral link</p>
          <div className="bg-primary-50 rounded p-2 font-mono text-xs break-all mb-3">{referralLink}</div>
          <button
            onClick={handleCopyLink}
            className="w-full bg-primary-600 text-white rounded-lg p-2 font-semibold text-sm active:scale-95 transition-transform mb-2"
          >
            {copied ? '✓ Copied!' : '📋 Copy Link'}
          </button>
        </div>

        {/* Share Options */}
        <div className="space-y-2">
          <button
            onClick={handleShareViaWhatsApp}
            className="w-full bg-green-600 text-white rounded-lg p-3 font-semibold text-sm active:scale-95 transition-transform"
          >
            💬 Share via WhatsApp
          </button>
          <button
            onClick={() => {
              const text = `Share via Email: ${referralText}`
              navigator.share ? navigator.share({ title: 'ETHealth', text }) : alert(text)
            }}
            className="w-full bg-blue-600 text-white rounded-lg p-3 font-semibold text-sm active:scale-95 transition-transform"
          >
            📧 Share via Email
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white rounded-lg p-4 border border-gray-200 text-center">
            <p className="text-2xl font-bold text-primary-700">0</p>
            <p className="text-xs text-gray-600">Referrals</p>
          </div>
          <div className="bg-white rounded-lg p-4 border border-gray-200 text-center">
            <p className="text-2xl font-bold text-primary-700">0 cUSD</p>
            <p className="text-xs text-gray-600">Earned</p>
          </div>
        </div>
      </div>
    </div>
  )
}
