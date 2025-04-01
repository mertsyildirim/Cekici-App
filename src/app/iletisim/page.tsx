import Header from '@/components/Header'

export default function IletisimPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-12">İletişim</h1>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* İletişim Formu */}
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h2 className="text-2xl font-semibold mb-6">Bize Ulaşın</h2>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 mb-2">
                      Ad Soyad
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-2">
                      E-posta
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-gray-700 mb-2">
                      Konu
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-gray-700 mb-2">
                      Mesajınız
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300"
                  >
                    Gönder
                  </button>
                </form>
              </div>

              {/* İletişim Bilgileri */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-semibold mb-6">İletişim Bilgileri</h2>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="bg-blue-100 p-3 rounded-full">
                        <span className="text-2xl">📍</span>
                      </div>
                      <div>
                        <h3 className="font-semibold">Adres</h3>
                        <p className="text-gray-600">İstanbul, Türkiye</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="bg-blue-100 p-3 rounded-full">
                        <span className="text-2xl">📧</span>
                      </div>
                      <div>
                        <h3 className="font-semibold">E-posta</h3>
                        <p className="text-gray-600">info@cekiciapp.com</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="bg-blue-100 p-3 rounded-full">
                        <span className="text-2xl">📱</span>
                      </div>
                      <div>
                        <h3 className="font-semibold">Telefon</h3>
                        <p className="text-gray-600">+90 (XXX) XXX XX XX</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sosyal Medya */}
                <div>
                  <h2 className="text-2xl font-semibold mb-6">Sosyal Medya</h2>
                  <div className="flex space-x-4">
                    <a href="#" className="bg-blue-100 p-3 rounded-full hover:bg-blue-200 transition duration-300">
                      <span className="text-2xl">📱</span>
                    </a>
                    <a href="#" className="bg-blue-100 p-3 rounded-full hover:bg-blue-200 transition duration-300">
                      <span className="text-2xl">📸</span>
                    </a>
                    <a href="#" className="bg-blue-100 p-3 rounded-full hover:bg-blue-200 transition duration-300">
                      <span className="text-2xl">🐦</span>
                    </a>
                    <a href="#" className="bg-blue-100 p-3 rounded-full hover:bg-blue-200 transition duration-300">
                      <span className="text-2xl">💼</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
} 