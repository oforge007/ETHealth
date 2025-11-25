'use client'

import React from 'react'
import { PARTNERS } from '@/lib/constants'
import { t } from '@/lib/i18n'

export default function DoctorsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-earth-tan">
      <header className="bg-primary-700 text-white p-4 shadow-md">
        <h1 className="font-bold text-lg">⚕️ Partner Doctors</h1>
        <p className="text-xs text-primary-100 mt-1">Book instant consultations</p>
      </header>

      <div className="max-w-md mx-auto px-4 py-4 space-y-4">
        {PARTNERS.map((partner) => (
          <div
            key={partner.id}
            className="bg-white rounded-xl shadow-md overflow-hidden border-2 border-primary-100"
          >
            <div className="p-4">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-3xl">{partner.image}</span>
                <div>
                  <p className="font-bold text-lg">{partner.name}</p>
                  <p className="text-xs text-gray-600">{partner.description}</p>
                </div>
              </div>

              <div className="my-3 space-y-1">
                {partner.features.map((feature) => (
                  <p key={feature} className="text-xs text-gray-700">
                    ✓ {feature}
                  </p>
                ))}
              </div>

              <div className="bg-primary-50 rounded-lg p-3 mb-3">
                <p className="text-xs text-gray-600">MiniPay Exclusive</p>
                <p className="text-2xl font-bold text-primary-700">{partner.consultationPrice} cUSD</p>
                <p className="text-xs text-gray-600">~${(partner.consultationPrice / 100).toFixed(0)}</p>
              </div>

              <button className="w-full bg-gradient-to-r from-primary-600 to-primary-500 text-white rounded-lg p-3 font-semibold text-sm active:scale-95 transition-transform">
                {t('consultation.contact', 'en')}
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="h-20" />
    </div>
  )
}
