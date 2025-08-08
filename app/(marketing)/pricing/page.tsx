import { PricingTable } from "@clerk/nextjs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function PricingPage() {
  return (
    <>
      <section className='w-full max-w-6xl px-4 flex flex-col items-center mx-auto gap-4 mt-16 md:mt-32 text-center'>
        <h1 className='leading-tighter max-w-4xl text-4xl font-semibold tracking-tight text-balance lg:leading-[1.1] lg:font-semibold xl:text-5xl xl:tracking-tighter'>
          Simple, transparent pricing
        </h1>
        <p className='text-foreground max-w-3xl text-base text-balance sm:text-lg'>
          Choose the perfect plan for your team. Start free and scale as you
          grow.
        </p>
      </section>

      <section className="mt-4 md:mt-8 w-full max-w-6xl mx-auto px-4">
        <PricingTable />
      </section>

      <section className="mt-16 md:mt-32 w-full max-w-2xl mx-auto px-4">
        <header className='flex flex-col items-center mx-auto gap-2 text-center'>
          <h2 className='leading-tighter max-w-xl text-2xl font-semibold tracking-tight text-balance lg:leading-[1.1] lg:font-semibold xl:text-4xl xl:tracking-tighter'>
            Frequently Asked Questions
          </h2>
          <p className='text-foreground max-w-3xl text-base text-balance sm:text-lg'>
            Everything you need to know about our pricing and billing.
          </p>
        </header>
        <Accordion type="single" collapsible className="mt-8">
          <AccordionItem value="item-1">
            <AccordionTrigger>Can I change my plan later?</AccordionTrigger>
            <AccordionContent>
              Yes, you can upgrade or downgrade your plan at any time. Changes
              will be reflected in your next billing cycle.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Do you offer annual billing?</AccordionTrigger>
            <AccordionContent>
              Yes, we offer annual billing with a 20% discount. Contact us to
              set up annual billing for your account.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>What payment methods do you accept?</AccordionTrigger>
            <AccordionContent>
              We accept all major credit cards, PayPal, and bank transfers for
              Enterprise customers.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Do you offer a free trial?</AccordionTrigger>
            <AccordionContent>
              Yes, all paid plans come with a 14-day free trial. No credit
              card required to get started.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </>
  );
}