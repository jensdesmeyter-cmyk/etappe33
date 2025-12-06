import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n.ts');

export default withNextIntl({
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true, // If you want to skip linting during build
  },

async rewrites() {
    return [
      {
        source: '/admin',
        destination: '/admin/index.html',
      },
    ];
  },
  
});




