export interface User {
  address: string
  name: string
  age: number
  gender: 'M' | 'F' | 'Other'
  country: 'Kenya' | 'Nigeria' | 'Other'
  phone?: string
  createdAt: number
}

export interface ConsultationSession {
  id: string
  userId: string
  provider: 'byon8' | 'zuri_health'
  type: 'consultation' | 'chat' | 'prescription'
  status: 'pending' | 'active' | 'completed' | 'cancelled'
  startTime: number
  endTime?: number
  cost: number
  currency: 'cUSD' | 'cKES'
  notes?: string
}

export interface ChatMessage {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: number
  metadata?: {
    symptoms?: string[]
    recommendations?: string[]
  }
}

export interface Prescription {
  id: string
  userId: string
  consultationId: string
  medications: Array<{
    name: string
    dosage: string
    frequency: string
    duration: string
  }>
  instructions: string
  doctorName: string
  createdAt: number
  expiresAt: number
}

export interface SubscriptionPlan {
  id: string
  name: 'Basic' | 'Standard' | 'Premium'
  price: number
  currency: 'cUSD' | 'cKES'
  consultations: number | 'unlimited'
  features: string[]
  billingCycle: 'monthly' | 'yearly'
}

export interface Transaction {
  id: string
  userId: string
  type: 'payment' | 'refund' | 'credit'
  amount: number
  currency: 'cUSD' | 'cKES'
  description: string
  status: 'pending' | 'confirmed' | 'failed'
  txHash?: string
  createdAt: number
}

export interface WalletState {
  address: string | null
  cusdBalance: number
  ckesBalance: number
  connected: boolean
  chainId: number
  isLoading: boolean
}
