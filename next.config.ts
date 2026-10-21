import { randomBytes } from 'node:crypto';
import type { NextConfig } from 'next';

// The development-only demo sends an invalid placeholder through Clerk's
// middleware headers. Give that request data a per-process encryption key.
if (
  process.env.NODE_ENV === 'development' &&
  !process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY &&
  !process.env.CLERK_SECRET_KEY
) {
  process.env.CLERK_ENCRYPTION_KEY ||= randomBytes(32).toString('hex');
}

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  // https://nextjs.org/docs/app/api-reference/config/next-config-js/devIndicators
  devIndicators: {
    position: 'bottom-right',
  },
};

export default nextConfig;
