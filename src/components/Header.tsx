'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  const isMusteri = pathname?.startsWith('/musteri');
  const isCekici = pathname?.startsWith('/cekici');

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.svg"
                alt="ÇekiciApp Logo"
                width={150}
                height={40}
                className="h-8 w-auto"
              />
            </Link>
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
              Ana Sayfa
            </Link>
            <Link
              href="/musteri"
              className={`text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium ${
                isMusteri
                  ? 'bg-primary-100 text-primary-700'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              Müşteri Girişi
            </Link>
            <Link
              href="/cekici"
              className={`text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium ${
                isCekici
                  ? 'bg-primary-100 text-primary-700'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              Çekici Girişi
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
} 