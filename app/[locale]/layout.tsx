import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import '../globals.css'

const _geist = Geist({
  subsets: ['latin']
})

const _geistMono = Geist_Mono({
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Roota Growth',
  description:
    'Premium IT staffing connecting leading European companies with top Indonesian developer talent',

  icons: {
    icon: '/logoooo.png',
    apple: '/logoooo.png'
  }
}

export function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'de' },
    { locale: 'fr' },
    { locale: 'nl' }
  ]
}

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  return (
    <html lang={locale}>
      <body className="font-sans antialiased text-foreground">
        {children}

        {process.env.NODE_ENV === 'production' &&
          <Analytics />
        }
      </body>
    </html>
  )
}