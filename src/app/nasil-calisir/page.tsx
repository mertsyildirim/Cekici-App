import Header from '@/components/Header'
import Image from 'next/image'

export default function NasilCalısırPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-12">Nasıl Çalışır?</h1>

          <div className="max-w-4xl mx-auto">
            {/* Müşteriler İçin */}
            <div className="mb-16">
              <h2 className="text-3xl font-semibold mb-8 text-center">Müşteriler İçin</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <span className="text-2xl">📱</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">1. Uygulamayı İndirin</h3>
                      <p className="text-gray-600">App Store veya Google Play'den ÇekiciApp'i indirin ve hesabınızı oluşturun.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <span className="text-2xl">📍</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">2. Konumunuzu Paylaşın</h3>
                      <p className="text-gray-600">Yolda kaldığınız yeri uygulama üzerinden paylaşın.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <span className="text-2xl">🚛</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">3. Çekiciyi Seçin</h3>
                      <p className="text-gray-600">Size en yakın çekicileri görün ve size uygun olanı seçin.</p>
                    </div>
                  </div>
                </div>
                <div className="relative h-[400px]">
                  <Image
                    src="/app-screenshot.png"
                    alt="ÇekiciApp Ekran Görüntüsü"
                    fill
                    style={{ objectFit: 'contain' }}
                  />
                </div>
              </div>
            </div>

            {/* Çekiciler İçin */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-3xl font-semibold mb-8 text-center">Çekiciler İçin</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-6">
                  <div className="text-4xl mb-4">💼</div>
                  <h3 className="text-xl font-semibold mb-2">Kayıt Olun</h3>
                  <p className="text-gray-600">Gerekli belgelerinizle başvurunuzu yapın.</p>
                </div>
                <div className="text-center p-6">
                  <div className="text-4xl mb-4">✅</div>
                  <h3 className="text-xl font-semibold mb-2">Onay Alın</h3>
                  <p className="text-gray-600">Başvurunuz onaylandıktan sonra sisteme dahil olun.</p>
                </div>
                <div className="text-center p-6">
                  <div className="text-4xl mb-4">💰</div>
                  <h3 className="text-xl font-semibold mb-2">Kazanmaya Başlayın</h3>
                  <p className="text-gray-600">Talepleri değerlendirin ve kazancınızı artırın.</p>
                </div>
              </div>
              <div className="text-center mt-8">
                <a
                  href="/cekici-ol"
                  className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
                >
                  Çekici Olarak Katılın
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
} 