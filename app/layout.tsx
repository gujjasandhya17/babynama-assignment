'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 min-h-screen flex flex-col`}
      >
        {/* Navigation Bar */}
        <nav
          role="navigation"
          aria-label="Primary"
          className="bg-white shadow p-4 flex justify-center space-x-8"
        >
          <Link
            href="/"
            className={`font-semibold focus:outline-none focus:ring-2 focus:ring-blue-600 rounded transition ${
              isActive('/') ? 'text-blue-600 underline' : 'text-gray-700 hover:text-blue-600'
            }`}
            aria-current={isActive('/') ? 'page' : undefined}
          >
            Home
          </Link>
          <Link
            href="/webinars"
            className={`font-semibold focus:outline-none focus:ring-2 focus:ring-blue-600 rounded transition ${
              isActive('/webinars')
                ? 'text-blue-600 underline'
                : 'text-gray-700 hover:text-blue-600'
            }`}
            aria-current={isActive('/webinars') ? 'page' : undefined}
          >
            Webinars
          </Link>
        </nav>

        {/* Main content area */}
        <main className="flex-grow max-w-5xl mx-auto p-6">{children}</main>

        {/* Footer */}
        <footer className="bg-white shadow-inner p-4 text-center text-gray-600 text-sm">
          &copy; {new Date().getFullYear()} Babynama. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
