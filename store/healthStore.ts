import { create } from 'zustand'
import { ConsultationSession, Transaction, Prescription } from '@/types'

interface HealthStore {
  consultations: ConsultationSession[]
  transactions: Transaction[]
  prescriptions: Prescription[]
  addConsultation: (consultation: ConsultationSession) => void
  addTransaction: (transaction: Transaction) => void
  addPrescription: (prescription: Prescription) => void
  getConsultations: (userId: string) => ConsultationSession[]
  getTransactions: (userId: string) => Transaction[]
  getPrescriptions: (userId: string) => Prescription[]
  hydrateFromStorage: () => void
}

const useHealthStore = create<HealthStore>((set, get) => ({
  consultations: [],
  transactions: [],
  prescriptions: [],
  addConsultation: (consultation) => {
    set((state) => ({
      consultations: [...state.consultations, consultation],
    }))
    if (typeof window !== 'undefined') {
      const state = get()
      localStorage.setItem('ethealthConsultations', JSON.stringify(state.consultations))
    }
  },
  addTransaction: (transaction) => {
    set((state) => ({
      transactions: [...state.transactions, transaction],
    }))
    if (typeof window !== 'undefined') {
      const state = get()
      localStorage.setItem('ethealthTransactions', JSON.stringify(state.transactions))
    }
  },
  addPrescription: (prescription) => {
    set((state) => ({
      prescriptions: [...state.prescriptions, prescription],
    }))
    if (typeof window !== 'undefined') {
      const state = get()
      localStorage.setItem('ethealthPrescriptions', JSON.stringify(state.prescriptions))
    }
  },
  getConsultations: (userId) => get().consultations.filter((c) => c.userId === userId),
  getTransactions: (userId) => get().transactions.filter((t) => t.userId === userId),
  getPrescriptions: (userId) => get().prescriptions.filter((p) => p.userId === userId),
  hydrateFromStorage: () => {
    if (typeof window !== 'undefined') {
      try {
        const consultations = localStorage.getItem('ethealthConsultations')
        const transactions = localStorage.getItem('ethealthTransactions')
        const prescriptions = localStorage.getItem('ethealthPrescriptions')
        set({
          consultations: consultations ? JSON.parse(consultations) : [],
          transactions: transactions ? JSON.parse(transactions) : [],
          prescriptions: prescriptions ? JSON.parse(prescriptions) : [],
        })
      } catch (e) {
        console.error('Failed to hydrate health store from storage:', e)
      }
    }
  },
}))

export default useHealthStore
