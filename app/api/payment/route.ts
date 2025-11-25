import { NextRequest, NextResponse } from 'next/server'

interface PaymentRequest {
  amount: number
  currency: 'cUSD' | 'cKES'
  recipient: string
  description: string
  userAddress: string
}

export async function POST(request: NextRequest) {
  try {
    const body: PaymentRequest = await request.json()
    const { amount, currency, recipient, description, userAddress } = body

    if (!amount || !recipient || !userAddress) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Generate Celo Payment Link
    const tokenParam = currency === 'cUSD' ? 'cusd' : 'ckes'
    const celoPaymentUrl = `https://pay.celo.org/?address=${recipient}&amount=${amount}&token=${tokenParam}&description=${encodeURIComponent(description)}`

    return NextResponse.json({
      success: true,
      paymentLink: celoPaymentUrl,
      amount,
      currency,
      recipient,
      description,
    })
  } catch (error) {
    console.error('Payment API error:', error)
    return NextResponse.json(
      { error: 'Failed to create payment' },
      { status: 500 }
    )
  }
}
