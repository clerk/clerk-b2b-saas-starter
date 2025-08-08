import Link from 'next/link'

const links = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'Pricing',
    href: '/pricing',
  },
  {
    title: 'Sign in',
    href: '/sign-in',
  },
  {
    title: 'Sign up',
    href: '/sign-up',
  }
]

export function Footer() {
  return (
    <footer className="border-t bg-white py-12 dark:bg-transparent">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-wrap justify-between gap-6">
          <span className="text-muted-foreground order-last block text-center text-sm md:order-first">© {new Date().getFullYear()} Acme Co., All rights reserved</span>
          <div className="order-first flex flex-wrap justify-center gap-6 text-sm md:order-last">
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="text-muted-foreground hover:text-primary block duration-150">
                <span>{link.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}