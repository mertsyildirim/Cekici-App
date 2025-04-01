'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link'

export default function MusteriPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    phone: '',
    carModel: '',
    carPlate: '',
    location: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Form gönderme işlemi burada yapılacak
    console.log('Form data:', formData);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Çekici Hizmeti Alın
        </h1>
        <p className="text-xl text-gray-600">
          En yakın çekiciyi hızlı ve kolay bir şekilde bulun
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Konumunuzu Belirtin</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Adres
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Adresinizi girin"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Açıklama
            </label>
            <textarea
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              rows={3}
              placeholder="Araç durumu hakkında bilgi verin"
            />
          </div>
          <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Çekici Çağır
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Aktif Siparişlerim</h3>
          <p className="text-gray-600 mb-4">Henüz aktif siparişiniz bulunmuyor.</p>
          <Link
            href="/musteri/siparisler"
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            Tüm Siparişleri Görüntüle →
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Favori Çekiciler</h3>
          <p className="text-gray-600 mb-4">Henüz favori çekiciniz bulunmuyor.</p>
          <Link
            href="/musteri/favoriler"
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            Favorileri Görüntüle →
          </Link>
        </div>
      </div>
    </div>
  );
} 