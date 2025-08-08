import Link from 'next/link';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { ArrowRight, Fingerprint, CreditCard, Building } from 'lucide-react';
import { SignUpButton } from '@clerk/nextjs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function HomePage() {
  return (
    <>
      <section className='w-full max-w-6xl px-4 flex flex-col items-center mx-auto gap-4 mt-32 text-center'>
        <Badge variant="secondary">
          Get started for free
        </Badge>
        <h1 className='leading-tighter max-w-4xl text-4xl font-semibold tracking-tight text-balance lg:leading-[1.1] lg:font-semibold xl:text-5xl xl:tracking-tighter'>
          Build your B2B SaaS <span className='block text-primary'>faster than ever</span>
        </h1>
        <p className='text-foreground max-w-3xl text-base text-balance sm:text-lg'>
          Complete authentication, organization management, and billing
          infrastructure so you can focus on building your core product.
        </p>
        <div className='flex w-full items-center justify-center gap-2 pt-2 **:data-[slot=button]:shadow-none'>
          <SignUpButton>
            <Button
            >
              Get Started
            </Button>
          </SignUpButton>
          <Button variant='ghost' asChild>
            <Link
              href='/pricing'
            >
              View pricing <ArrowRight className='size-4' />
            </Link>
          </Button>
        </div>
      </section>

      <section className='w-full max-w-6xl mx-auto mt-32 px-4'>
        <header className='flex flex-col items-center mx-auto gap-2 text-center'>
          <h2 className='leading-tighter max-w-xl text-2xl font-semibold tracking-tight text-balance lg:leading-[1.1] lg:font-semibold xl:text-4xl xl:tracking-tighter'>
            Everything you need to launch
          </h2>
          <p className='text-foreground max-w-3xl text-base text-balance sm:text-lg'>
            Built-in features that would take months to develop from scratch
          </p>
        </header>
        <div className='mt-8 grid grid-cols-3 gap-4 '>
          <Card>
            <CardHeader>
              <Building className='size-8 mb-4' />
              <CardTitle>Organization Management</CardTitle>
              <CardDescription>Multi-tenant architecture with team invites, role-based access control, and organization switching.</CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <Fingerprint className='size-8 mb-4' />
              <CardTitle>Secure Authentication</CardTitle>
              <CardDescription>
                Enterprise-grade security with SSO, MFA, and compliance features built in.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CreditCard className='size-8 mb-4' />
              <CardTitle>Subscription Billing</CardTitle>
              <CardDescription>Flexible pricing tiers with usage tracking, invoicing, and payment processing.</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>
    </>
  );
}
