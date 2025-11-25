'use client'

import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import useAuthStore from '@/store/authStore'

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const { isAuthenticated } = useAuthStore()

  useEffect(() => {
    const userData = localStorage.getItem('ethealthUser')
    if (userData) {
      try {
        const user = JSON.parse(userData)
        useAuthStore.getState().setUser(user)
      } catch (e) {
        console.error('Failed to hydrate user:', e)
      }
    }
  }, [])

  return <>{children}</>
}
