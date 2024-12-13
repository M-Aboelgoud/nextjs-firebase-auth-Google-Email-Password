'use client';

import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import Sidebar from '@/components/Sidebar';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data: session, status } = useSession();
  
  // Don't show sidebar during loading state or when not authenticated
  const showSidebar = status === 'authenticated' && session;

  // Only redirect from protected pages
  if (status === 'unauthenticated' && 
      !window.location.pathname.startsWith('/signin') && 
      !window.location.pathname.startsWith('/signup')) {
    redirect('/signin');
  }

  return (
    <div className="flex min-h-screen">
      {showSidebar && <Sidebar />}
      <main className={`${showSidebar ? 'flex-1' : 'w-full'}`}>
        {children}
      </main>
    </div>
  );
}