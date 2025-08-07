'use client';

import { SignIn, useAuth } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { ClerkLogo } from '../../_components/clerk-logo';

export default function Page() {
  const { isSignedIn, isLoaded } = useAuth();
  const router = useRouter();

  // If the user is already signed in, redirect them to the `/dashboard` page
  useEffect(() => {
    if (isLoaded && isSignedIn) {
      router.replace('/dashboard');
    }
  }, [isSignedIn, isLoaded, router]);

  // Show loading state while Clerk is loading or user is being redirected
  if (!isLoaded || (isLoaded && isSignedIn)) {
    return (
      <div className='absolute top-0 right-0 bottom-0 left-0 z-1 flex flex-col items-center justify-center bg-white'>
        <div className='h-8 w-8 animate-spin rounded-full border-b-2 border-gray-900'></div>
      </div>
    );
  }

  return (
    <main className='mx-auto w-full max-w-[75rem] border-r border-l border-[#F2F2F2] bg-white'>
      <div className='mx-auto grid w-full grid-cols-1 place-items-center gap-8 bg-[url("/light-logo.png")] bg-size-[35rem] bg-position-[left_45%_top_1rem] bg-no-repeat py-16 md:h-[calc(100dvh-100px)] md:grid-cols-2'>
        <div className='flex gap-1 md:gap-6'>
          <ClerkLogo />
          <div className='pb-6'>
            <h1 className='text-5xl font-bold tracking-tight text-[#131316]'>
              Auth starts here
            </h1>
            <p className='max-w-[30rem] pt-3 text-[1.0625rem] text-[#5E5F6E]'>
              This is Clerk's <code>{`<SignIn />`}</code> component.
            </p>
            <p className='max-w-[30rem] text-[1.0625rem] text-[#5E5F6E]'>
              Give it a try by signing in as your first user.
            </p>
          </div>
        </div>

        <SignIn />
      </div>
    </main>
  );
}
