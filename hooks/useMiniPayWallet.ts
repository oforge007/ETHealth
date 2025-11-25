import { useEffect, useState } from 'react'
import { useAccount, useBalance } from 'wagmi'
import useAuthStore from '@/store/authStore'

export function useMiniPayWallet() {
  const { address, isConnected } = useAccount()
  const { setWallet } = useAuthStore()
  const [isLoading, setIsLoading] = useState(true)

  const { data: cusdBalance } = useBalance({
    address: address as `0x${string}`,
    token: process.env.NEXT_PUBLIC_CUSD_ADDRESS as `0x${string}`,
  })

  const { data: ckesBalance } = useBalance({
    address: address as `0x${string}`,
    token: process.env.NEXT_PUBLIC_CKES_ADDRESS as `0x${string}`,
  })

  useEffect(() => {
    if (isConnected && address) {
      setWallet({
        address,
        connected: true,
        cusdBalance: cusdBalance?.value ? Number(cusdBalance.value) : 0,
        ckesBalance: ckesBalance?.value ? Number(ckesBalance.value) : 0,
        isLoading: false,
      })
    }
    setIsLoading(false)
  }, [isConnected, address, cusdBalance, ckesBalance, setWallet])

  return {
    address,
    isConnected,
    isLoading,
    cusdBalance: cusdBalance?.value ? Number(cusdBalance.value) : 0,
    ckesBalance: ckesBalance?.value ? Number(ckesBalance.value) : 0,
  }
}
