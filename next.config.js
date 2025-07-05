/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['de', 'en', 'ja', 'fr'],
    defaultLocale: 'de'
  },
  images: {
    domains: [
      'cdn.kimisushi.de',
      'images.unsplash.com',
      'res.cloudinary.com'
    ]
  }
};

module.exports = nextConfig;
