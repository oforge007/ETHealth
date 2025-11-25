import type { Metadata, Viewport } from 'next'
import './globals.css'
import { Providers } from './providers'

export const metadata: Metadata = {
  title: 'ETHealth - Healthcare for the Unbanked',
  description: 'Healthcare for the unbanked – powered by MiniPay & Celo. Connect to telemedicine providers instantly.',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'ETHealth',
    description: 'Healthcare for the unbanked – powered by MiniPay & Celo',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: 'cover',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#22c55e" />
      </head>
      <body className="bg-white text-gray-900 antialiased">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
