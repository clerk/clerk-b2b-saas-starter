import { ClerkProvider } from '@clerk/nextjs';
import { shadcn } from '@clerk/themes';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { ThemeProvider } from '@/components/theme-provider';

import { PUBLISHABLE_KEY } from '@/contants/placeholder';

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
  title: 'Clerk - B2B SaaS Starter',
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
      publishableKey={PUBLISHABLE_KEY}
      appearance={{
        theme: shadcn,
      }}
    >
      <html
        lang='en'
        className={`${geistSans.variable} ${geistMono.variable} h-full`}
        suppressHydrationWarning
      >
        <body className='flex min-h-full flex-col antialiased'>
          <ThemeProvider
            attribute='class'
            defaultTheme='system'
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
