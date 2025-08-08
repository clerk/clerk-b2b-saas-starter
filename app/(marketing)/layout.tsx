import { Header } from './header'
import { Footer } from './footer'

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className='flex flex-col flex-1 w-full'>{children}</main>
      <Footer />
    </>
  );
}