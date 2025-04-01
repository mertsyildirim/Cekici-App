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
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            ÇekiciApp
          </Link>
          <nav className="hidden md:flex space-x-8">
            <Link href="/hakkimizda" className="text-gray-600 hover:text-blue-600">
              Hakkımızda
            </Link>
            <Link href="/nasil-calisir" className="text-gray-600 hover:text-blue-600">
              Nasıl Çalışır?
            </Link>
            <Link href="/iletisim" className="text-gray-600 hover:text-blue-600">
              İletişim
            </Link>
            <Link href="/blog" className="text-gray-600 hover:text-blue-600">
              Blog
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <a
              href="/download"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Uygulamayı İndir
            </a>
          </div>
        </div>
      </div>
    </header>
  );
} 