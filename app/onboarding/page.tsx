'use client';

import {
  useAuth,
  useUser,
  CreateOrganization,
  OrganizationList,
  OrganizationSwitcher,
} from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { ClerkLogo } from '../_components/clerk-logo';

export default function OnboardingPage() {
  const { isSignedIn, isLoaded } = useAuth();
  const { user } = useUser();
  const router = useRouter();

  // Redirect if not signed in
  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      router.replace('/sign-in');
    }
  }, [isSignedIn, isLoaded, router]);

  // Check if user already has an organization and redirect to dashboard
  useEffect(() => {
    if (isLoaded && user && user.organizationMemberships.length > 0) {
      router.replace('/dashboard');
    }
  }, [user, isLoaded, router]);

  // Show loading state while Clerk is loading
  if (!isLoaded || !isSignedIn) {
    return (
      <div className='absolute top-0 right-0 bottom-0 left-0 z-1 flex flex-col items-center justify-center bg-white'>
        <div className='h-8 w-8 animate-spin rounded-full border-b-2 border-gray-900'></div>
      </div>
    );
  }

  const hasOrgs = (user?.organizationMemberships.length || 0) > 0;

  return (
    <div className='flex min-h-screen flex-col items-center justify-center bg-white px-4'>
      <div className='w-full max-w-md space-y-8'>
        <div className='text-center'>
          <h2 className='mt-6 text-3xl font-bold tracking-tight text-gray-900'>
            Create your organization
          </h2>
          <p className='mt-2 text-sm text-gray-600'>
            An organization workspace is required to get started.
          </p>
        </div>

        <div className='mt-8'>
          <CreateOrganization
            afterCreateOrganizationUrl='/dashboard'
            skipInvitationScreen={true}
          />
        </div>

        {/* TODO: will be made moot by after-auth improvements */}
        {hasOrgs ? (
          <div className='mt-8'>
            Select an organization:{' '}
            <OrganizationSwitcher hidePersonal skipInvitationScreen />
          </div>
        ) : null}
      </div>
    </div>
  );
}
