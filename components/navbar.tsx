'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/lib/auth-context';
import { Leaf } from 'lucide-react';
import { DonasiModal } from '@/components/donasi-modal';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated, logout } = useAuth();
  const pathname = usePathname();

  // Hide navbar on admin pages
  if (pathname?.startsWith('/admin')) {
    return null;
  }

  const navLinks = [
    { href: '/', label: 'Beranda' },
    { href: '/tentang', label: 'Tentang' },
    { href: '/program', label: 'Program' },
    { href: '/berita', label: 'Berita' },
    { href: '/galeri', label: 'Galeri' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <img
              src="/logo-huut.png"
              alt="Logo Sahabat Nusantara"
              className="h-10 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname?.startsWith(link.href));
              return (
                <Link key={link.href} href={link.href}
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${isActive ? 'bg-emerald-50 text-emerald-700 font-bold' : 'text-gray-700 hover:text-emerald-600 hover:bg-emerald-50'
                    }`}>
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* CTA and Admin */}
          <div className="flex items-center gap-2">
            <DonasiModal />


            {/* Mobile Menu Button */}
            <button onClick={() => setIsOpen(!isOpen)}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen
                  ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname?.startsWith(link.href));
              return (
                <Link key={link.href} href={link.href}
                  className={`block px-3 py-2 text-base font-medium rounded-md transition-colors ${isActive ? 'bg-emerald-50 text-emerald-700 font-bold' : 'text-gray-700 hover:text-emerald-600 hover:bg-emerald-50'
                    }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </nav>
  );
}
