import { ClerkProvider } from '@clerk/nextjs';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { Footer } from './_components/footer';
import './globals.css';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
});

const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
});

export const metadata: Metadata = {
  title: 'B2B SaaS Starter',
  description:
    'A modern B2B SaaS starter with organization management and authentication',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        cssLayerName: 'clerk',
      }}
      afterSignOutUrl='/sign-in'
      signInForceRedirectUrl='/dashboard'
      signUpForceRedirectUrl='/onboarding'
      signInUrl='/sign-in'
      signUpUrl='/sign-up'
    >
      <html lang='en' className={`${geistSans.variable} ${geistMono.variable}`}>
        <body className='bg-neutral-50 antialiased'>
          {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
