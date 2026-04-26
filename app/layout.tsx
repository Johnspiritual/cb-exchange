import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

export const metadata: Metadata = {
  title: 'CB Exchange | Vietnam to Africa Shipping, Supplier Sourcing & USDT Payments',
  description: 'We help you buy from Vietnam, pay suppliers with USDT, and deliver to your doorstep in Africa. Fast, secure, and trusted cargo shipping services.',
  keywords: 'Vietnam shipping, Africa imports, USDT payments, supplier sourcing, cargo shipping Nigeria, Vietnam to Nigeria',
  openGraph: {
    title: 'CB Exchange | Vietnam to Africa Shipping & Payments',
    description: 'Fast, secure cargo shipping from Vietnam to Africa. Supplier sourcing and USDT payment services.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
