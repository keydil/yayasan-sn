'use client';

import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { useAuth } from '@/lib/auth-context';
import { Button } from '@/components/ui/button';
import { Leaf, LayoutDashboard, Newspaper, Image, Users, LogOut } from 'lucide-react';

const MENU_ITEMS = [
  {
    label: 'Dashboard',
    href: '/admin/dashboard',
    icon: LayoutDashboard,
  },
  {
    label: 'Kelola Berita',
    href: '/admin/berita',
    icon: Newspaper,
  },
  {
    label: 'Kelola Galeri',
    href: '/admin/galeri',
    icon: Image,
  },
  {
    label: 'Kelola Pengurus',
    href: '/admin/pengurus',
    icon: Users,
  },
];

export function AdminSidebar() {
  const { logout, userEmail } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  const handleLogout = async () => {
    await logout();
    router.push('/');
  };

  return (
    <aside className="w-64 bg-slate-900 text-white h-screen flex flex-col fixed left-0 top-0 z-40 border-r border-slate-800 shadow-2xl">
      {/* Logo Header */}
      <div className="p-6 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-emerald-900/50">
            <Leaf className="w-6 h-6" />
          </div>
          <div>
            <h1 className="font-bold text-white text-sm tracking-wide">Sahabat Nusantara</h1>
            <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800">
              CMS Admin
            </span>
          </div>
        </div>
      </div>

      {/* Menu Navigation */}
      <nav className="flex-1 px-3 py-6 space-y-1">
        <p className="px-3 text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">
          Manajemen Konten
        </p>
        {MENU_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href || pathname.startsWith(item.href + '/');
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-3.5 py-3 rounded-xl font-medium text-sm transition-all duration-200 ${
                isActive
                  ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-900/40 font-bold'
                  : 'text-slate-300 hover:bg-slate-800 hover:text-white'
              }`}
            >
              <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-slate-400'}`} />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Footer / User Profile */}
      <div className="p-4 border-t border-slate-800 space-y-3 bg-slate-950/50">
        <div className="px-3 py-2.5 bg-slate-800/60 rounded-xl border border-slate-700/50">
          <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Login Sebagai</p>
          <p className="text-xs font-semibold text-emerald-300 truncate">{userEmail || 'yayasan.sn@gmail.com'}</p>
        </div>
        <Button
          onClick={handleLogout}
          variant="outline"
          className="w-full bg-red-950/30 border-red-800/50 text-red-400 hover:bg-red-900 hover:text-white font-medium text-xs py-2 rounded-xl transition-all flex items-center justify-center gap-2"
        >
          <LogOut className="w-4 h-4" /> Keluar
        </Button>
      </div>
    </aside>
  );
}
