'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link'

interface Talep {
  id: string;
  aciliyet: string;
  aracTuru: string;
  ihtiyacSebebi: string;
  konum: string;
  mesafe: string;
  ucret: number;
}

export default function CekiciPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    phone: '',
    company: '',
    plate: '',
    location: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Form gönderme işlemi burada yapılacak
    console.log('Form data:', formData);
  };

  const [talepler] = useState<Talep[]>([
    {
      id: '1',
      aciliyet: 'acil',
      aracTuru: 'otomobil',
      ihtiyacSebebi: 'kaza',
      konum: 'Kadıköy, İstanbul',
      mesafe: '2.5 km',
      ucret: 250
    },
    {
      id: '2',
      aciliyet: 'normal',
      aracTuru: 'ticari',
      ihtiyacSebebi: 'ariza',
      konum: 'Üsküdar, İstanbul',
      mesafe: '4.8 km',
      ucret: 350
    }
  ]);

  const handleTalepKabul = (talepId: string) => {
    // API çağrısı yapılacak
    console.log('Talep kabul edildi:', talepId);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Çekici Portalı
        </h1>
        <p className="text-xl text-gray-600">
          Siparişlerinizi yönetin ve müşterilere hizmet verin
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Aktif Siparişler</h2>
          <div className="space-y-4">
            <div className="border-b pb-4">
              <p className="text-gray-600">Henüz aktif siparişiniz bulunmuyor.</p>
            </div>
            <Link
              href="/cekici/siparisler"
              className="text-blue-600 hover:text-blue-800 font-medium inline-block"
            >
              Tüm Siparişleri Görüntüle →
            </Link>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Durumunuz</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Çevrimiçi Durumu</span>
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                Çevrimiçi
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Konum</span>
              <span className="text-gray-900">İstanbul, Kadıköy</span>
            </div>
            <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Konumu Güncelle
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Performans</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600">0</div>
            <div className="text-gray-600">Bugünkü Sipariş</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600">0</div>
            <div className="text-gray-600">Bekleyen Sipariş</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600">0</div>
            <div className="text-gray-600">Tamamlanan Sipariş</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600">0</div>
            <div className="text-gray-600">Toplam Kazanç</div>
          </div>
        </div>
      </div>
    </div>
  );
} 