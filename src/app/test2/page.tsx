'use client';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

export default function TestPage2() {
  const session = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/signin');
    },
  });

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Test Page 2</h1>
      <p>This is test page 2 content.</p>
    </div>
  );
} 