import Link from 'next/link';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ArrowRight, Fingerprint, CreditCard, Building } from 'lucide-react';
import { SignUpButton } from '@clerk/nextjs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function HomePage() {
  return (
    <>
      <section className='mx-auto mt-16 md:mt-32 flex w-full max-w-6xl flex-col items-center gap-4 px-4 text-center'>
        <Badge variant='secondary' asChild>
          <Link
            href='https://clerk.com'
            target='_blank'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 128 128'
              fill='none'
            >
              <circle cx='64' cy='64' r='20' fill='#6C47FF' />
              <path
                d='M99.5716 10.788C101.571 12.1272 101.742 14.9444 100.04 16.646L85.4244 31.2618C84.1035 32.5828 82.0542 32.7914 80.3915 31.9397C75.4752 29.421 69.9035 28 64 28C44.1177 28 28 44.1177 28 64C28 69.9035 29.421 75.4752 31.9397 80.3915C32.7914 82.0542 32.5828 84.1035 31.2618 85.4244L16.646 100.04C14.9444 101.742 12.1272 101.571 10.788 99.5716C3.97411 89.3989 0 77.1635 0 64C0 28.6538 28.6538 0 64 0C77.1635 0 89.3989 3.97411 99.5716 10.788Z'
                fill='#BAB1FF'
              />
              <path
                d='M100.04 111.354C101.742 113.056 101.571 115.873 99.5717 117.212C89.3989 124.026 77.1636 128 64 128C50.8364 128 38.6011 124.026 28.4283 117.212C26.4289 115.873 26.2581 113.056 27.9597 111.354L42.5755 96.7382C43.8965 95.4172 45.9457 95.2085 47.6084 96.0603C52.5248 98.579 58.0964 100 64 100C69.9036 100 75.4753 98.579 80.3916 96.0603C82.0543 95.2085 84.1036 95.4172 85.4245 96.7382L100.04 111.354Z'
                fill='#6C47FF'
              />
            </svg>{' '}
            Powered by Clerk
          </Link>
        </Badge>
        <h1 className='leading-tighter max-w-4xl text-4xl font-semibold tracking-tight text-balance lg:leading-[1.1] lg:font-semibold xl:text-5xl xl:tracking-tighter'>
          Build your B2B SaaS{' '}
          <span className='text-primary block'>faster than ever</span>
        </h1>
        <p className='text-foreground max-w-3xl text-base text-balance sm:text-lg'>
          Complete authentication, organization management, and billing
          infrastructure so you can focus on building your core product.
        </p>
        <div className='flex w-full items-center justify-center gap-2 pt-2 **:data-[slot=button]:shadow-none'>
          <SignUpButton>
            <Button>Get Started</Button>
          </SignUpButton>
          <Button variant='ghost' asChild>
            <Link href='/pricing'>
              View pricing <ArrowRight />
            </Link>
          </Button>
        </div>
      </section>

      <section className='mx-auto mt-16 md:mt-32 w-full max-w-6xl px-4'>
        <header className='mx-auto flex flex-col items-center gap-2 text-center'>
          <h2 className='leading-tighter max-w-xl text-2xl font-semibold tracking-tight text-balance lg:leading-[1.1] lg:font-semibold xl:text-4xl xl:tracking-tighter'>
            Everything you need to launch
          </h2>
          <p className='text-foreground max-w-3xl text-base text-balance sm:text-lg'>
            Built-in features that would take months to develop from scratch
          </p>
        </header>
        <div className='mt-8 grid grid-cols-1 md:grid-cols-3 gap-4'>
          <Card>
            <CardHeader>
              <Building className='mb-4 size-8' />
              <CardTitle>Organization Management</CardTitle>
              <CardDescription>
                Multi-tenant architecture with team invites, role-based access
                control, and organization switching.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <Fingerprint className='mb-4 size-8' />
              <CardTitle>Secure Authentication</CardTitle>
              <CardDescription>
                Enterprise-grade security with SSO, MFA, and compliance features
                built in.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CreditCard className='mb-4 size-8' />
              <CardTitle>Subscription Billing</CardTitle>
              <CardDescription>
                Flexible pricing tiers with usage tracking, invoicing, and
                payment processing.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>
    </>
  );
}
