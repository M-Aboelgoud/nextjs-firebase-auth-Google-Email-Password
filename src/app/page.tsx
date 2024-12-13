'use client';
import { signOut, useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

export default function Home() {
  const session = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/signin');
    },
  });

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="mb-4">Welcome, {session?.data?.user?.email}</div>
      <button 
        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
        onClick={() => signOut()}
      >
        Logout
      </button>
    </div>
  );
}

Home.requireAuth = true;
