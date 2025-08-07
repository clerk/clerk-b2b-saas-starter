import { redirect, RedirectType } from 'next/navigation';

export default function Page() {
  redirect('/sign-up', RedirectType.replace);
}
