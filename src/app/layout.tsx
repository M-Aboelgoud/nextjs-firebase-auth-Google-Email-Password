import { authOptions } from '../../pages/api/auth/[...nextauth]';
import { getServerSession } from 'next-auth';
import './globals.css';
import { Inter } from 'next/font/google';
import SessionProvider from './SessionProvider';
import ClientLayout from './ClientLayout';

const inter = Inter({ subsets: ['latin'] });

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider session={session}>
          <ClientLayout>
            {children}
          </ClientLayout>
        </SessionProvider>
      </body>
    </html>
  );
}
