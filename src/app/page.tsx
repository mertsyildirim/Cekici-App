import Header from '@/components/Header'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        {/* Hero Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Yolda Kaldığınızda Yanınızdayız
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                ÇekiciApp ile en yakın çekiciyi anında bulun. 7/24 hizmet, güvenilir çözüm ortağınız.
              </p>
              <div className="flex items-center gap-6">
                <div className="bg-white p-4 rounded-lg shadow-lg">
                  <Image
                    src="/qr-code.png"
                    alt="ÇekiciApp QR Kod"
                    width={120}
                    height={120}
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Hemen İndirin</h3>
                  <p className="text-gray-600">QR kodu okutarak uygulamayı indirin</p>
                </div>
              </div>
            </div>
            <div className="relative h-[500px]">
              <Image
                src="/hero-image.png"
                alt="ÇekiciApp Mobil Uygulama"
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>
          </div>
        </div>

        {/* Özellikler */}
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center mb-12">Neden ÇekiciApp?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-blue-600 text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-2">Hızlı Hizmet</h3>
              <p className="text-gray-600">En yakın çekiciyi anında bulun ve yolunuza devam edin.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-blue-600 text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold mb-2">Güvenli Ödeme</h3>
              <p className="text-gray-600">Güvenli ödeme seçenekleri ile işlemlerinizi tamamlayın.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-blue-600 text-4xl mb-4">📍</div>
              <h3 className="text-xl font-semibold mb-2">Konum Takibi</h3>
              <p className="text-gray-600">Çekicinin konumunu gerçek zamanlı olarak takip edin.</p>
            </div>
          </div>
        </div>

        {/* İstatistikler */}
        <div className="bg-blue-600 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">10.000+</div>
                <div>Mutlu Müşteri</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">1.000+</div>
                <div>Çekici Ortağı</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">81</div>
                <div>İlde Hizmet</div>
              </div>
            </div>
          </div>
        </div>

        {/* Nasıl Çalışır */}
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center mb-12">Nasıl Çalışır?</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-4">1</div>
              <h3 className="text-xl font-semibold mb-2">Uygulamayı İndirin</h3>
              <p className="text-gray-600">QR kodu okutarak uygulamayı indirin</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-4">2</div>
              <h3 className="text-xl font-semibold mb-2">Konumunuzu Paylaşın</h3>
              <p className="text-gray-600">Bulunduğunuz yeri belirleyin</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-4">3</div>
              <h3 className="text-xl font-semibold mb-2">Çekici Çağırın</h3>
              <p className="text-gray-600">Size en yakın çekiciyi seçin</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-4">4</div>
              <h3 className="text-xl font-semibold mb-2">Yola Devam Edin</h3>
              <p className="text-gray-600">Güvenle yolunuza devam edin</p>
            </div>
          </div>
        </div>

        {/* İletişim CTA */}
        <div className="container mx-auto px-4 py-16">
          <div className="bg-gray-50 rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Hemen Başlayın</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Yolda kalma durumlarında güvenilir çözüm ortağınız olmak için buradayız.
              Hemen uygulamayı indirin ve güvende kalın.
            </p>
            <a
              href="/download"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Uygulamayı İndir
            </a>
          </div>
        </div>
      </div>
    </>
  )
} 