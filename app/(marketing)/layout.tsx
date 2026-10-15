import { Header } from './header';
import { Footer } from './footer';
import { Toast } from './toast';
import { USING_DEMO_KEY } from '@/contants/placeholder';

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      {USING_DEMO_KEY && <Toast />}
      <main className='flex w-full flex-1 flex-col'>{children}</main>
      <Footer />
    </>
  );
}
