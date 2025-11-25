import { create } from 'zustand'
import { User, WalletState } from '@/types'

interface AuthState {
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
  wallet: WalletState
  setUser: (user: User | null) => void
  setWallet: (wallet: Partial<WalletState>) => void
  logout: () => void
  hydrateFromStorage: () => void
}

const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  isLoading: false,
  wallet: {
    address: null,
    cusdBalance: 0,
    ckesBalance: 0,
    connected: false,
    chainId: 44787,
    isLoading: false,
  },
  setUser: (user) => {
    set({ user, isAuthenticated: !!user })
    if (typeof window !== 'undefined' && user) {
      localStorage.setItem('ethealthUser', JSON.stringify(user))
    }
  },
  setWallet: (wallet) => {
    set((state) => ({
      wallet: { ...state.wallet, ...wallet },
    }))
  },
  logout: () => {
    set({ user: null, isAuthenticated: false })
    if (typeof window !== 'undefined') {
      localStorage.removeItem('ethealthUser')
      localStorage.removeItem('ethealthWallet')
    }
  },
  hydrateFromStorage: () => {
    if (typeof window !== 'undefined') {
      const storedUser = localStorage.getItem('ethealthUser')
      if (storedUser) {
        try {
          const user = JSON.parse(storedUser)
          set({ user, isAuthenticated: true })
        } catch (e) {
          console.error('Failed to hydrate user from storage:', e)
        }
      }
    }
  },
}))

export default useAuthStore
