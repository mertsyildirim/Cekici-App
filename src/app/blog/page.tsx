import Header from '@/components/Header'
import Image from 'next/image'
import Link from 'next/link'

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: 'Yolda Kalma Durumunda Yapılması Gerekenler',
      excerpt: 'Aracınızla yolda kaldığınızda panik yapmadan uygulamanız gereken adımları sizler için derledik.',
      image: '/blog/post-1.jpg',
      date: '15 Mart 2024',
      author: 'ÇekiciApp Ekibi'
    },
    {
      id: 2,
      title: 'Çekici Hizmetinde Güvenlik İpuçları',
      excerpt: 'Çekici hizmeti alırken dikkat etmeniz gereken güvenlik önlemleri ve önemli ipuçları.',
      image: '/blog/post-2.jpg',
      date: '10 Mart 2024',
      author: 'ÇekiciApp Ekibi'
    },
    {
      id: 3,
      title: 'ÇekiciApp ile Kazancınızı Artırın',
      excerpt: 'Çekici operatörleri için ÇekiciApp platformunun sunduğu fırsatlar ve kazanç potansiyeli.',
      image: '/blog/post-3.jpg',
      date: '5 Mart 2024',
      author: 'ÇekiciApp Ekibi'
    }
  ]

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-12">Blog</h1>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <span>{post.date}</span>
                      <span className="mx-2">•</span>
                      <span>{post.author}</span>
                    </div>
                    <h2 className="text-xl font-semibold mb-3">
                      <Link href={`/blog/${post.id}`} className="hover:text-blue-600 transition duration-300">
                        {post.title}
                      </Link>
                    </h2>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <Link
                      href={`/blog/${post.id}`}
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 transition duration-300"
                    >
                      Devamını Oku
                      <svg
                        className="w-4 h-4 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"
                        ></path>
                      </svg>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
} 