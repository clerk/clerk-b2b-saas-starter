'use client';

import { useUser, PricingTable } from '@clerk/nextjs';
import Link from 'next/link';

export default function BillingPage() {
  const { user } = useUser();

  return (
    <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
      {/* Billing Header */}
      <div className='pb-8 text-center'>
        <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl'>
          Billing & Subscription
        </h1>
        <p className='mx-auto mt-4 max-w-2xl text-lg leading-8 text-gray-600'>
          Manage your subscription, view billing history, and upgrade your plan.
        </p>
      </div>

      {/* User Info Section */}
      <div className='pb-8'>
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
      <div className='pb-24'>
        <div className='overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm'>
          <div className='px-6 py-8'>
            <h2 className='mb-6 text-2xl font-bold text-gray-900'>
              Choose Your Plan
            </h2>
            <PricingTable forOrganizations />
          </div>
        </div>
      </div>
    </div>
  );
}
