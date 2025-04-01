import Header from '@/components/Header'

export default function HakkimizdaPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-12">Hakkımızda</h1>
          
          <div className="max-w-3xl mx-auto space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Vizyonumuz</h2>
              <p className="text-gray-600 leading-relaxed">
                ÇekiciApp olarak, Türkiye'nin her noktasında yolda kalan sürücülere en hızlı ve güvenilir çekici hizmetini 
                sunmayı hedefliyoruz. Modern teknoloji ile geleneksel çekici hizmetini birleştirerek, sektörde devrim yaratmayı amaçlıyoruz.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Misyonumuz</h2>
              <p className="text-gray-600 leading-relaxed">
                Yolda kalan sürücülere 7/24, hızlı ve güvenilir hizmet sunarak, zor anlarında yanlarında olmak. 
                Şeffaf fiyatlandırma ve profesyonel hizmet anlayışımızla sektörde güvenilir bir marka olmak.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Değerlerimiz</h2>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Müşteri memnuniyeti odaklı hizmet</li>
                <li>7/24 kesintisiz destek</li>
                <li>Şeffaf ve adil fiyatlandırma</li>
                <li>Profesyonel ve güvenilir hizmet</li>
                <li>Teknolojik altyapı ile hızlı çözüm</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg mt-12">
              <h2 className="text-2xl font-semibold mb-4">Çekici Olmak İster Misiniz?</h2>
              <p className="text-gray-600 mb-6">
                ÇekiciApp ailesine katılarak, Türkiye'nin en büyük çekici ağının bir parçası olun. 
                Düzenli iş potansiyeli, adil kazanç ve profesyonel destek ile işinizi büyütün.
              </p>
              <a
                href="/cekici-ol"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
              >
                Hemen Başvur
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
} 