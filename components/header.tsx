import Link from 'next/link';
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { ClerkLogo } from '@/app/_components/clerk-logo';

interface HeaderProps {
  variant?: 'marketing' | 'dashboard';
  currentPage?: string;
}

export function Header({ variant = 'marketing', currentPage }: HeaderProps) {
  if (variant === 'marketing') {
    return (
      <nav className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='flex h-16 items-center justify-between'>
          <div className='flex items-center'>
            <ClerkLogo />
            <Link href='/' className='ml-3 text-xl font-bold text-gray-900'>
              SaaS Starter
            </Link>
          </div>
          <SignedOut>
            <div className='hidden md:block'>
              <div className='flex items-center space-x-8'>
                <Link
                  href='/pricing'
                  className={
                    currentPage === 'pricing'
                      ? 'font-medium text-blue-600'
                      : 'text-gray-600 hover:text-gray-900'
                  }
                >
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
          </SignedOut>
          <SignedIn>
            <div className='hidden md:block'>
              <div className='flex items-center space-x-8'>
                <Link
                  href='/dashboard'
                  className='rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700'
                >
                  Dashboard
                </Link>
                <UserButton />
              </div>
            </div>
          </SignedIn>
        </div>
      </nav>
    );
  }

  // Dashboard variant would be handled by the existing SiteHeader component
  // since it's already well-integrated with the sidebar system
  return null;
}
