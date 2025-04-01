import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../../globals.css'
import Header from '../../components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ÇekiciApp - Müşteri Portalı',
  description: 'En yakın çekiciyi hızlı ve kolay bir şekilde bulun',
}

export default function MusteriLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
    </div>
  )
} 