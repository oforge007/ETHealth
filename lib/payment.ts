export async function generatePaymentLink(
  amount: number,
  currency: 'cUSD' | 'cKES',
  recipient: string,
  description: string
): Promise<string> {
  // Using Celo Payment Links format
  const celoLink = `https://pay.celo.org/?address=${recipient}&amount=${amount}&token=${
    currency === 'cUSD' ? 'cusd' : 'ckes'
  }&description=${encodeURIComponent(description)}`

  return celoLink
}

export function getContractAddress(token: 'cUSD' | 'cKES'): string {
  return token === 'cUSD'
    ? process.env.NEXT_PUBLIC_CUSD_ADDRESS || '0x765de816845861e75a25fca122bb6beb5756778d'
    : process.env.NEXT_PUBLIC_CKES_ADDRESS || '0xAEf5Bbf592e78217d0d8b514c0a62375cBb48b0F'
}

export function formatBalance(balance: number, decimals: number = 18): string {
  return (balance / Math.pow(10, decimals)).toFixed(2)
}

export function parseBalance(balance: string, decimals: number = 18): string {
  return (parseFloat(balance) * Math.pow(10, decimals)).toString()
}

export async function sendTransaction(
  to: string,
  amount: string,
  tokenAddress: string
): Promise<{
  success: boolean
  txHash?: string
  error?: string
}> {
  try {
    // This is a placeholder - actual implementation depends on wallet type
    // In production, this would use web3.js or ethers.js with the user's signer
    if (!to || !amount) {
      throw new Error('Invalid transaction parameters')
    }

    return {
      success: true,
      txHash: '0x' + Math.random().toString(16).slice(2),
    }
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Transaction failed',
    }
  }
}
