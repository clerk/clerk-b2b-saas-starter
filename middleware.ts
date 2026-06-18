import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

import { PUBLISHABLE_KEY } from '@/contants/placeholder';

const isProtectedRoute = createRouteMatcher(['/dashboard(.*)']);

export default clerkMiddleware(
  async (auth, req) => {
    if (isProtectedRoute(req)) await auth.protect();
  },
  // https://clerk.com/docs/references/nextjs/clerk-middleware#dynamic-keys
  () => {
    return {
      publishableKey: PUBLISHABLE_KEY,
      secretKey: process.env.CLERK_SECRET_KEY!,
    };
  },
);

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};
