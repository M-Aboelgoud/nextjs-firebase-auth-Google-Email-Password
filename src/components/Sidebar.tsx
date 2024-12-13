'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const pathname = usePathname();
  
  const menuItems = [
    { label: 'Dashboard', path: '/' },
    { label: 'Jobs', path: '/jobs' },
    { label: 'Test Page 2', path: '/test2' },
    { label: 'Test Page 3', path: '/test3' },
  ];

  return (
    <div className="w-64 bg-gray-800 min-h-screen p-4">
      <div className="mb-8">
              <h1 className="text-white text-xl font-bold">Hr process handler</h1>
      </div>
      <nav>
        {menuItems.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className={`block py-2 px-4 rounded mb-2 ${
              pathname === item.path
                ? 'bg-gray-700 text-white'
                : 'text-gray-300 hover:bg-gray-700 hover:text-white'
            }`}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  );
} 