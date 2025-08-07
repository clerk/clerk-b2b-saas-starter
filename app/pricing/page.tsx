'use client';

import Link from 'next/link';
import { ClerkLogo } from '../_components/clerk-logo';
import { PricingTable } from '@clerk/nextjs';

export default function PricingPage() {
  return (
    <div className='min-h-screen bg-white'>
      {/* Navigation */}
      <nav className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='flex h-16 items-center justify-between'>
          <div className='flex items-center'>
            <Link href='/'>
              <ClerkLogo />
            </Link>
            <Link href='/' className='ml-3 text-xl font-bold text-gray-900'>
              SaaS Starter
            </Link>
          </div>
          <div className='hidden md:block'>
            <div className='flex items-center space-x-8'>
              <Link href='/pricing' className='font-medium text-blue-600'>
                Pricing
              </Link>
              <Link
                href='/sign-in'
                className='text-gray-600 hover:text-gray-900'
              >
                Sign In
              </Link>
              <Link
                href='/sign-up'
                className='rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700'
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Pricing Header */}
      <div className='mx-auto max-w-7xl px-4 pt-20 pb-16 sm:px-6 lg:px-8'>
        <div className='text-center'>
          <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
            Simple, transparent pricing
          </h1>
          <p className='mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600'>
            Choose the perfect plan for your team. Start free and scale as you
            grow.
          </p>
        </div>
      </div>

      {/* Clerk Pricing Table */}
      <div className='mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8'>
        <PricingTable
          forOrganizations
          appearance={{
            elements: {
              pricingTable: {
                '--grid-min-size': '18rem', // 4 columns at larger screen sizes
              },
            },
          }}
        />
      </div>

      {/* FAQ Section */}
      <div className='mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8'>
        <div className='mt-16'>
          <h2 className='text-center text-3xl font-bold tracking-tight text-gray-900'>
            Frequently asked questions
          </h2>
          <div className='mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2'>
            <div>
              <h3 className='text-lg font-semibold text-gray-900'>
                Can I change my plan later?
              </h3>
              <p className='mt-2 text-gray-600'>
                Yes, you can upgrade or downgrade your plan at any time. Changes
                will be reflected in your next billing cycle.
              </p>
            </div>
            <div>
              <h3 className='text-lg font-semibold text-gray-900'>
                Do you offer annual billing?
              </h3>
              <p className='mt-2 text-gray-600'>
                Yes, we offer annual billing with a 20% discount. Contact us to
                set up annual billing for your account.
              </p>
            </div>
            <div>
              <h3 className='text-lg font-semibold text-gray-900'>
                What payment methods do you accept?
              </h3>
              <p className='mt-2 text-gray-600'>
                We accept all major credit cards, PayPal, and bank transfers for
                Enterprise customers.
              </p>
            </div>
            <div>
              <h3 className='text-lg font-semibold text-gray-900'>
                Is there a free trial?
              </h3>
              <p className='mt-2 text-gray-600'>
                Yes, all paid plans come with a 14-day free trial. No credit
                card required to get started.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
