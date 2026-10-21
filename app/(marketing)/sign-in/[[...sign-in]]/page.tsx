import { SignIn } from '@clerk/nextjs';
import { Suspense } from 'react';

export default function SignInPage() {
  return (
    <div className='bg-muted flex w-full flex-1 items-center justify-center p-6 md:p-10'>
      <Suspense fallback={null}>
        <SignIn />
      </Suspense>
    </div>
  );
}
