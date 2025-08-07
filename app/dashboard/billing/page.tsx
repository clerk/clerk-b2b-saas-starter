'use client';

import { useAuth, useUser, PricingTable } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Link from 'next/link';
import { ClerkLogo } from '../../_components/clerk-logo';

export default function BillingPage() {
  const { isSignedIn, isLoaded } = useAuth();
  const { user } = useUser();
  const router = useRouter();

  // Redirect if not signed in
  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      router.replace('/sign-in');
    }
  }, [isSignedIn, isLoaded, router]);

  // Show loading state while Clerk is loading
  if (!isLoaded || !isSignedIn) {
    return (
      <div className='absolute top-0 right-0 bottom-0 left-0 z-1 flex flex-col items-center justify-center bg-white'>
        <div className='h-8 w-8 animate-spin rounded-full border-b-2 border-gray-900'></div>
      </div>
    );
  }

  return (
    <div className='min-h-screen bg-white'>
      {/* Navigation */}
      <nav className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='flex h-16 items-center justify-between'>
          <div className='flex items-center'>
            <Link href='/dashboard'>
              <ClerkLogo />
            </Link>
            <Link
              href='/dashboard'
              className='ml-3 text-xl font-bold text-gray-900'
            >
              SaaS Starter
            </Link>
          </div>
          <div className='hidden md:block'>
            <div className='flex items-center space-x-8'>
              <Link
                href='/dashboard'
                className='text-gray-600 hover:text-gray-900'
              >
                Dashboard
              </Link>
              <Link href='/billing' className='font-medium text-blue-600'>
                Billing
              </Link>
              <Link
                href='/pricing'
                className='text-gray-600 hover:text-gray-900'
              >
                Pricing
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Billing Header */}
      <div className='mx-auto max-w-7xl px-4 pt-12 pb-8 sm:px-6 lg:px-8'>
        <div className='text-center'>
          <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl'>
            Billing & Subscription
          </h1>
          <p className='mx-auto mt-4 max-w-2xl text-lg leading-8 text-gray-600'>
            Manage your subscription, view billing history, and upgrade your
            plan.
          </p>
        </div>
      </div>

      {/* User Info Section */}
      <div className='mx-auto max-w-7xl px-4 pb-8 sm:px-6 lg:px-8'>
        <div className='rounded-lg bg-gray-50 p-6'>
          <div className='flex items-center space-x-4'>
            <div className='flex h-12 w-12 items-center justify-center rounded-full bg-blue-600'>
              <span className='text-lg font-semibold text-white'>
                {user?.firstName?.[0] ||
                  user?.emailAddresses?.[0]?.emailAddress?.[0] ||
                  'U'}
              </span>
            </div>
            <div>
              <h3 className='text-lg font-semibold text-gray-900'>
                {user?.firstName} {user?.lastName}
              </h3>
              <p className='text-sm text-gray-600'>
                {user?.emailAddresses?.[0]?.emailAddress}
              </p>
              {user?.organizationMemberships?.[0] && (
                <p className='text-sm text-gray-500'>
                  Organization:{' '}
                  {user.organizationMemberships[0].organization.name}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Clerk Pricing Table */}
      <div className='mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8'>
        <div className='overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm'>
          <div className='px-6 py-8'>
            <h2 className='mb-6 text-2xl font-bold text-gray-900'>
              Choose Your Plan
            </h2>
            <PricingTable forOrganizations />
          </div>
        </div>

        {/* Additional Billing Information */}
        <div className='mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2'>
          <div className='rounded-lg border border-gray-200 bg-white p-6 shadow-sm'>
            <h3 className='mb-4 text-lg font-semibold text-gray-900'>
              Billing Information
            </h3>
            <div className='space-y-3 text-sm text-gray-600'>
              <p>• Secure payments processed by Stripe</p>
              <p>• Cancel or change your plan anytime</p>
              <p>• Prorated billing on plan changes</p>
              <p>• 14-day free trial on all paid plans</p>
            </div>
          </div>

          <div className='rounded-lg border border-gray-200 bg-white p-6 shadow-sm'>
            <h3 className='mb-4 text-lg font-semibold text-gray-900'>
              Need Help?
            </h3>
            <div className='space-y-3 text-sm text-gray-600'>
              <p>
                • View our{' '}
                <Link
                  href='/pricing'
                  className='text-blue-600 hover:text-blue-700'
                >
                  pricing FAQ
                </Link>
              </p>
              <p>• Contact support for billing questions</p>
              <p>• Request enterprise pricing</p>
              <p>• Download invoices and receipts</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
