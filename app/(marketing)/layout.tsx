import { Header } from './header';
import { Footer } from './footer';
import { Toast } from './toast';

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <Toast />
      <main className='flex w-full flex-1 flex-col'>{children}</main>
      <Footer />
    </>
  );
}
