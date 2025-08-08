import { PricingTable } from '@clerk/nextjs';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  TypographyH1,
  TypographyH2,
  TypographyLead,
} from '@/components/ui/typography';

export default function PricingPage() {
  return (
    <>
      <section className='mx-auto mt-16 flex w-full max-w-6xl flex-col items-center gap-4 px-4 text-center md:mt-32'>
        <TypographyH1>Simple, transparent pricing</TypographyH1>
        <TypographyLead>
          Choose the perfect plan for your team. Start free and scale as you
          grow.
        </TypographyLead>
      </section>

      <section className='mx-auto mt-8 w-full max-w-[1440px] px-4'>
        <PricingTable forOrganizations />
      </section>

      <section className='mx-auto my-16 w-full max-w-2xl px-4 md:my-32'>
        <header className='mx-auto flex flex-col items-center gap-2 text-center'>
          <TypographyH2>Frequently Asked Questions</TypographyH2>
          <TypographyLead>
            Everything you need to know about our pricing and billing.
          </TypographyLead>
        </header>
        <Accordion type='single' collapsible className='mt-8'>
          <AccordionItem value='item-1'>
            <AccordionTrigger>Can I change my plan later?</AccordionTrigger>
            <AccordionContent>
              Yes, you can upgrade or downgrade your plan at any time. Changes
              will be reflected in your next billing cycle.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-2'>
            <AccordionTrigger>Do you offer annual billing?</AccordionTrigger>
            <AccordionContent>
              Yes, we offer annual billing with a 20% discount. Contact us to
              set up annual billing for your account.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-3'>
            <AccordionTrigger>
              What payment methods do you accept?
            </AccordionTrigger>
            <AccordionContent>
              We accept all major credit cards, PayPal, and bank transfers for
              Enterprise customers.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-4'>
            <AccordionTrigger>Do you offer a free trial?</AccordionTrigger>
            <AccordionContent>
              Yes, all paid plans come with a 14-day free trial. No credit card
              required to get started.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </>
  );
}
