'use client'

import React from 'react'
import useHealthStore from '@/store/healthStore'
import useAuthStore from '@/store/authStore'
import { t } from '@/lib/i18n'

export default function DashboardPage() {
  const { user } = useAuthStore()
  const { getConsultations, getTransactions, getPrescriptions } = useHealthStore()

  const consultations = user ? getConsultations(user.address) : []
  const transactions = user ? getTransactions(user.address) : []
  const prescriptions = user ? getPrescriptions(user.address) : []

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white pb-20">
      <header className="bg-primary-700 text-white p-4 shadow-md">
        <h1 className="font-bold text-lg">📊 {t('common.dashboard', 'en')}</h1>
      </header>

      <div className="max-w-md mx-auto px-4 py-4 space-y-6">
        {/* Summary Cards */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white rounded-lg p-4 border-l-4 border-primary-600 shadow-sm">
            <p className="text-xs text-gray-600">Consultations</p>
            <p className="text-2xl font-bold text-primary-700">{consultations.length}</p>
          </div>
          <div className="bg-white rounded-lg p-4 border-l-4 border-accent-gold shadow-sm">
            <p className="text-xs text-gray-600">Prescriptions</p>
            <p className="text-2xl font-bold text-earth-brown">{prescriptions.length}</p>
          </div>
        </div>

        {/* Consultation History */}
        <div>
          <h2 className="text-lg font-bold text-primary-900 mb-3">{t('dashboard.history', 'en')}</h2>
          {consultations.length > 0 ? (
            <div className="space-y-2">
              {consultations.map((c) => (
                <div key={c.id} className="bg-white rounded-lg p-3 border border-gray-200 text-sm">
                  <p className="font-semibold capitalize">{c.provider.replace('_', ' ')}</p>
                  <p className="text-xs text-gray-600">
                    {c.status} • {new Date(c.startTime).toLocaleDateString()}
                  </p>
                  <p className="text-primary-700 font-semibold">{c.cost} {c.currency}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-sm text-gray-600 bg-white rounded-lg p-3">No consultations yet</p>
          )}
        </div>

        {/* Transaction History */}
        <div>
          <h2 className="text-lg font-bold text-primary-900 mb-3">{t('dashboard.transactions', 'en')}</h2>
          {transactions.length > 0 ? (
            <div className="space-y-2">
              {transactions.map((t) => (
                <div key={t.id} className="bg-white rounded-lg p-3 border border-gray-200 text-sm">
                  <p className="font-semibold capitalize">{t.description}</p>
                  <p className="text-xs text-gray-600">{new Date(t.createdAt).toLocaleDateString()}</p>
                  <p className={t.type === 'payment' ? 'text-red-600' : 'text-green-600'}>
                    {t.type === 'payment' ? '-' : '+'}
                    {t.amount} {t.currency}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-sm text-gray-600 bg-white rounded-lg p-3">No transactions yet</p>
          )}
        </div>

        {/* Prescriptions */}
        <div>
          <h2 className="text-lg font-bold text-primary-900 mb-3">{t('dashboard.prescriptions', 'en')}</h2>
          {prescriptions.length > 0 ? (
            <div className="space-y-2">
              {prescriptions.map((p) => (
                <div key={p.id} className="bg-white rounded-lg p-3 border border-gray-200 text-sm">
                  <p className="font-semibold">Dr. {p.doctorName}</p>
                  <p className="text-xs text-gray-600">{new Date(p.createdAt).toLocaleDateString()}</p>
                  <p className="text-xs mt-2 text-gray-700">{p.medications.length} medication(s)</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-sm text-gray-600 bg-white rounded-lg p-3">No prescriptions yet</p>
          )}
        </div>
      </div>
    </div>
  )
}
