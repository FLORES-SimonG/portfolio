import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  i18n: {
    locales: ['en', 'es', 'de'],
    defaultLocale: 'en',
  },
};

export default nextConfig;
