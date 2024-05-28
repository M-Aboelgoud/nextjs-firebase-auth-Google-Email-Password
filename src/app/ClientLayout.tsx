'use client';

import { usePathname, redirect } from 'next/navigation';
import Home from './page';

export default function ClientLayout({ session, children }: { session: any, children: React.ReactNode }) {
  const pathname = usePathname();

  const publicPages = ['/signin', '/signup', '/forgot-password'];

  if (!session && !publicPages.includes(pathname)) {
    redirect('/signin'); // Redirect to sign-in page if there's no session and the current page is not public
    return null; // Ensure nothing is rendered while redirecting
  }

  return (
    <>
      {children}
      {session && pathname === '/' && <Home />}
    </>
  );
}