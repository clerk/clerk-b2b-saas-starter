'use client';

import { toast } from 'sonner';
import { useEffect } from 'react';
import Link from 'next/link';

export const Toast = () => {
  useEffect(() => {
    setTimeout(() => {
      toast.warning('Attention: Demo keys in use', {
        description: (
          <>
            This project is using shared Clerk keys for demonstration purposes.
            Create a Clerk application in the Clerk Dashboard and use its keys.
            <br />
            <Link
              className='font-bold underline'
              href='https://dashboard.clerk.com'
            >
              Clerk Dashboard
            </Link>
          </>
        ),
        duration: Infinity,
        richColors: true,
        dismissible: true,
        position: 'top-center',
      });
    }, 1000);
  }, []);
  return null;
};
