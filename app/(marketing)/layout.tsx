import { Header } from './header';
import { Footer } from './footer';

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className='flex w-full flex-1 flex-col'>{children}</main>
      <Footer />
    </>
  );
}
