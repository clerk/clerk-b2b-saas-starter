import { UserButton } from '@clerk/nextjs';
import { auth } from '@clerk/nextjs/server';
import { ClerkLogo } from '../_components/clerk-logo';
import { CodeSwitcher } from '../_components/code-switcher';
import { UserDetails } from '../_components/user-details';
import { LearnMore } from '../_components/learn-more';

export default async function Page() {
  // Check if the user requesting this page is authenticated (signed in) and if not, require authentication before allowing access
  // See here for information https://clerk.com/docs/references/nextjs/auth#protect-pages-and-routes
  await auth.protect({
    unauthenticatedUrl: '/sign-in',
  });

  return (
    <main className='mx-auto w-full max-w-[80rem] bg-white px-10'>
      <div className='grid grid-cols-1 gap-10 pb-10 md:grid-cols-[1fr_20.5rem]'>
        <div>
          <header className='flex h-16 w-full items-center justify-between gap-4'>
            <ClerkLogo />
            <div className='flex items-center gap-2'>
              <UserButton
                appearance={{
                  elements: {
                    userButtonAvatarBox: 'size-8',
                  },
                }}
              />
            </div>
          </header>
          <UserDetails />
        </div>
        <div className='flex flex-col md:pt-16'>
          <CodeSwitcher />
        </div>
      </div>
      <LearnMore />
    </main>
  );
}
