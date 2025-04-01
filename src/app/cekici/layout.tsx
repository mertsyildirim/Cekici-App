import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../../globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ÇekiciApp - Çekici Portalı',
  description: 'Çekici operatörleri için yönetim paneli',
}

export default function CekiciLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-xl font-semibold text-gray-800">ÇekiciApp Portal</span>
            </div>
            <div className="flex items-center space-x-4">
              <a href="/cekici/dashboard" className="text-gray-600 hover:text-gray-900">Panel</a>
              <a href="/cekici/orders" className="text-gray-600 hover:text-gray-900">Siparişler</a>
              <a href="/cekici/profile" className="text-gray-600 hover:text-gray-900">Profil</a>
            </div>
          </div>
        </div>
      </nav>
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
    </div>
  )
} 