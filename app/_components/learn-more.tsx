interface Card {
  title: string;
  description: string;
  href: string;
  linkText: string;
}

const cards: Card[] = [
  {
    title: "Authenticate requests with JWT's",
    description:
      'Clerk empowers you to authenticate same and cross origin requests using a Clerk generated JWT',
    href: 'https://clerk.com/docs/backend-requests/overview?utm_source=nextjs-app-quickstart&utm_medium=template_repos&utm_term=JWT',
    linkText: 'Request authentication',
  },
  {
    title: 'Build an onboarding flow',
    description: `Leverage customizable session tokens, public metadata, and Middleware to create a custom onboarding experience.`,
    href: 'https://clerk.com/docs/guides/add-onboarding-flow?utm_source=nextjs-app-quickstart&utm_medium=template_repos&utm_term=onboarding',
    linkText: 'Onboarding flow',
  },
  {
    title: 'Customize components',
    description:
      "Customize the look and feel of your application with Clerk's prebuilt components.",
    href: 'https://clerk.com/docs/customization/overview?utm_source=nextjs-app-quickstart&utm_medium=template_repos&utm_term=customization',
    linkText: 'Customization',
  },
  {
    title: 'Support subscriptions',
    description:
      'Subscription billing without the headache: add subscription billing to your application with a few clicks and start collecting money.',
    href: 'https://clerk.com/docs/billing/overview?utm_source=nextjs-app-quickstart&utm_medium=template_repos&utm_term=billing',
    linkText: 'Billing',
  },
  {
    title: 'Explore the B2B suite',
    description:
      'Built for B2B SaaS: create and switch between orgs, manage and invite members, and assign custom roles.',
    href: 'https://clerk.com/docs/organizations/overview?utm_source=nextjs-app-quickstart&utm_medium=template_repos&utm_term=organizations',
    linkText: 'Organizations',
  },
  {
    title: 'Deploy to Production',
    description:
      'Production instances are meant to support high volumes of traffic and by default, have a more strict security posture.',
    href: 'https://clerk.com/docs/deployments/overview?utm_source=nextjs-app-quickstart&utm_medium=template_repos&utm_term=deploy-to-prod',
    linkText: 'Production',
  },
];

export function LearnMore() {
  return (
    <div className='relative bg-white' id='features'>
      <div className='mx-auto w-full gap-8 pt-16 pb-24 md:grid md:max-w-300 md:grid-cols-[1fr_3fr]'>
        <div>
          <span className='text-[0.8125rem]/5 font-medium text-[#6C47FF]'>
            What's next
          </span>
          <h2 className='mt-2 mb-3 text-xl/[1.625rem] font-semibold tracking-tight text-[#131316]'>
            Learn more from our&nbsp;resources
          </h2>
          <p className='text-[0.8125rem]/5 text-[#5E5F6E]'>
            Prebuilt components to handle essential functionality like user
            sign-in, sign-up, and account management.
          </p>
        </div>
        <div className='grid gap-8 md:grid-cols-2 xl:grid-cols-3'>
          {cards.map(card => (
            <a
              key={card.title}
              href={card.href}
              target='_blank'
              className='flex flex-col overflow-hidden rounded-lg border border-[#F2F2F4]'
            >
              <div className='flex-1 space-y-1 bg-[#FAFAFB] px-4 py-3'>
                <h3 className='text-sm font-medium tracking-tight text-[#131316]'>
                  {card.title}
                </h3>
                <p className='text-[0.8125rem]/5 text-[#5E5F6E]'>
                  {card.description}
                </p>
              </div>
              <div className='flex items-center gap-1.5 border-t border-[#EDEDF0] bg-[#F5F5F7] px-4 py-2 text-[0.8125rem]/5 font-medium text-[#131316]'>
                {card.linkText}
                <svg
                  width='16'
                  height='16'
                  viewBox='0 0 16 16'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <rect
                    x='2'
                    y='2'
                    width='12'
                    height='12'
                    rx='3'
                    fill='#EEEEF0'
                  />
                  <path
                    d='M5.75 10.25L10.25 5.75M10.25 5.75H6.75M10.25 5.75V9.25'
                    stroke='#9394A1'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
