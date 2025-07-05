/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true // bật App Router
  },
  i18n: {
    locales: ['de', 'en', 'ja', 'fr'],
    defaultLocale: 'de'
  },
  images: {
    domains: [
      'cdn.kimisushi.de', // nếu bạn dùng ảnh từ CDN riêng
      'images.unsplash.com',
      'res.cloudinary.com'
    ]
  }
};

module.exports = nextConfig;
