import { SignUp } from '@clerk/nextjs';

export default function Page() {
  return (
    <div className='flex min-h-[calc(100vh-100px)] justify-center py-24'>
      <SignUp />
    </div>
  );
}
