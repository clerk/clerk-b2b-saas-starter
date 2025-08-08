import { ClerkProvider } from '@clerk/nextjs';
import { shadcn } from '@clerk/themes';
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
        theme: shadcn
      }}
    >
      <html lang='en' className={`${geistSans.variable} ${geistMono.variable}`}>
        <body className='antialiased'>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
