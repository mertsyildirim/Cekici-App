import Header from '@/components/Header'

export default function Home() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        {/* Hero Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              ÇekiciApp ile Yolda Kalma
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              7/24 çekici hizmeti için güvenilir çözüm ortağınız
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="/musteri"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
              >
                Çekici Çağır
              </a>
              <a
                href="/cekici"
                className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition duration-300"
              >
                Çekici Girişi
              </a>
            </div>
          </div>
        </div>

        {/* Özellikler */}
        <div className="container mx-auto px-4 py-16">
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

        {/* Alt Bilgi */}
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Neden ÇekiciApp?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              ÇekiciApp, yolda kalan sürücüler ile güvenilir çekici hizmetlerini buluşturan modern bir platformdur. 
              7/24 hizmet, şeffaf fiyatlandırma ve profesyonel destek ile yanınızdayız.
            </p>
          </div>
        </div>
      </div>
    </>
  )
} 