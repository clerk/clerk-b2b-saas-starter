import Link from 'next/link';
import { Header } from '@/components/header';

export default function HomePage() {
  return (
    <div className='min-h-screen bg-white'>
      {/* Navigation */}
      <Header variant='marketing' />

      {/* Hero Section */}
      <div className='mx-auto max-w-7xl px-4 pt-20 pb-16 sm:px-6 lg:px-8'>
        <div className='text-center'>
          <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
            Build your B2B SaaS
            <span className='block text-blue-600'>faster than ever</span>
          </h1>
          <p className='mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600'>
            Complete authentication, organization management, and billing
            infrastructure so you can focus on building your core product.
          </p>
          <div className='mt-10 flex items-center justify-center gap-x-6'>
            <Link
              href='/sign-up'
              className='rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'
            >
              Get started
            </Link>
            <Link
              href='/pricing'
              className='text-sm leading-6 font-semibold text-gray-900'
            >
              View pricing <span aria-hidden='true'>→</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className='mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8'>
        <div className='text-center'>
          <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
            Everything you need to launch
          </h2>
          <p className='mx-auto mt-4 max-w-2xl text-lg text-gray-600'>
            Built-in features that would take months to develop from scratch
          </p>
        </div>
        <div className='mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
          <div className='relative rounded-lg border border-gray-200 bg-white p-8 shadow-sm'>
            <div className='flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600'>
              <svg
                className='h-6 w-6 text-white'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0z'
                />
              </svg>
            </div>
            <h3 className='mt-6 text-lg font-semibold text-gray-900'>
              Organization Management
            </h3>
            <p className='mt-2 text-gray-600'>
              Multi-tenant architecture with team invites, role-based access
              control, and organization switching.
            </p>
          </div>

          <div className='relative rounded-lg border border-gray-200 bg-white p-8 shadow-sm'>
            <div className='flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600'>
              <svg
                className='h-6 w-6 text-white'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z'
                />
              </svg>
            </div>
            <h3 className='mt-6 text-lg font-semibold text-gray-900'>
              Secure Authentication
            </h3>
            <p className='mt-2 text-gray-600'>
              Enterprise-grade security with SSO, MFA, and compliance features
              built in.
            </p>
          </div>

          <div className='relative rounded-lg border border-gray-200 bg-white p-8 shadow-sm'>
            <div className='flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600'>
              <svg
                className='h-6 w-6 text-white'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z'
                />
              </svg>
            </div>
            <h3 className='mt-6 text-lg font-semibold text-gray-900'>
              Subscription Billing
            </h3>
            <p className='mt-2 text-gray-600'>
              Flexible pricing tiers with usage tracking, invoicing, and payment
              processing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
