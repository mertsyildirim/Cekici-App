# ÇekiciApp

ÇekiciApp, müşterilerin en yakın çekiciyi bulmasını ve çekici sürücülerinin talepleri yönetmesini sağlayan bir web uygulamasıdır.

## Özellikler

### Müşteri Tarafı
- En yakın çekiciyi çağırma
- Aciliyet seviyesi belirleme
- Araç türü seçimi
- İhtiyaç sebebi belirtme
- Konum bilgisi girme
- Çağrı durumu takibi

### Çekici Tarafı
- Yakındaki talepleri görüntüleme
- Talep detayları
- Ücretlendirme sistemi
- Rota optimizasyonu
- Talep kabul/red sistemi

## Teknolojiler

- Next.js 14
- TypeScript
- Tailwind CSS
- MongoDB
- NextAuth.js

## Kurulum

1. Projeyi klonlayın:
```bash
git clone https://github.com/yourusername/cekiciapp.git
cd cekiciapp
```

2. Bağımlılıkları yükleyin:
```bash
npm install
```

3. `.env.local` dosyasını oluşturun ve gerekli değişkenleri ayarlayın:
```
MONGODB_URI=mongodb://localhost:27017/cekiciapp
NEXTAUTH_SECRET=your-secret-key-here
NEXTAUTH_URL=http://localhost:3000
```

4. Geliştirme sunucusunu başlatın:
```bash
npm run dev
```

5. Tarayıcınızda http://localhost:3000 adresini açın.

## Geliştirme

- `npm run dev`: Geliştirme sunucusunu başlatır
- `npm run build`: Projeyi derler
- `npm run start`: Derlenmiş projeyi çalıştırır
- `npm run lint`: Kod kalitesi kontrolü yapar

## Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Detaylar için [LICENSE](LICENSE) dosyasına bakın. 