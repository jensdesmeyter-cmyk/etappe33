// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['nl', 'fr', 'en'],
    defaultLocale: 'nl'
  },
   eslint: {
    ignoreDuringBuilds: true,
  }
};

module.exports = nextConfig;

