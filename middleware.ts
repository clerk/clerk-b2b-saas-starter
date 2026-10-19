import { clerkMiddleware } from '@clerk/nextjs/server';

import { PUBLISHABLE_KEY, USING_DEMO_KEY } from '@/contants/placeholder';

// Protected pages check auth themselves with `auth.protect()`.
export default clerkMiddleware({
  publishableKey: PUBLISHABLE_KEY,
  ...(process.env.NODE_ENV === 'development' &&
  USING_DEMO_KEY &&
  !process.env.CLERK_SECRET_KEY
    ? { secretKey: 'sk_test_gototheclerkdashboard' }
    : {}),
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};
