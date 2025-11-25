'use client'

import React from 'react'
import { WagmiConfig, createConfig, http } from 'wagmi'
import { celo, celoAlfajores } from 'wagmi/chains'

const chains = [celo, celoAlfajores]

export const config = createConfig({
  chains,
  transports: {
    [celo.id]: http(process.env.NEXT_PUBLIC_CELO_MAINNET_RPC || 'https://forno.celo.org'),
    [celoAlfajores.id]: http(process.env.NEXT_PUBLIC_CELO_ALFAJORES_RPC || 'https://alfajores-forno.celo-testnet.org'),
  },
})

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <WagmiConfig config={config}>
      {children}
    </WagmiConfig>
  )
}
