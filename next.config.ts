import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      '*.css': {
        loaders: ['@tailwindcss/turbopack'],
        as: '*.css',
      },
    },
  },
  // https://nextjs.org/docs/app/api-reference/config/next-config-js/devIndicators
  devIndicators: {
    position: 'bottom-right',
  },
};

export default nextConfig;
