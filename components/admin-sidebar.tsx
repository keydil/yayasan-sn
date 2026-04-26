'use client';

import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { useAuth } from '@/lib/auth-context';
import { Button } from '@/components/ui/button';
import { Leaf } from 'lucide-react';

const MENU_ITEMS = [
{
label: 'Dashboard',
href: '/admin/dashboard',
icon: '📊',
},
{
label: 'Manajemen Anggota',
href: '/admin/members',
icon: '👥',
},
{
label: 'Laporan',
href: '/admin/reports',
icon: '📄',
},
{
label: 'Pengaturan',
href: '/admin/settings',
icon: '⚙️',
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
<aside className="w-64 bg-white border-r border-gray-200 h-screen flex flex-col fixed left-0 top-0">
    {/* Logo Section */}
    <div className="p-6 border-b border-gray-200">
        <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center text-white">
                <Leaf className="w-6 h-6" />
            </div>
            <div className="flex-1">
                <h1 className="font-bold text-gray-900 text-sm">Yayasan Sahabat</h1>
                <p className="text-xs text-gray-500">Admin Portal</p>
            </div>
        </div>
    </div>

    {/* Menu Items */}
    <nav className="flex-1 px-4 py-6">
        <ul className="space-y-2">
            {MENU_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            return (
            <li key={item.href}>
                <Link href={item.href} className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium
                    transition-colors ${ isActive ? 'bg-emerald-50 text-emerald-700 border-l-4 border-emerald-600'
                    : 'text-gray-700 hover:bg-gray-50' }`}>
                <span className="text-xl">{item.icon}</span>
                <span>{item.label}</span>
                </Link>
            </li>
            );
            })}
        </ul>
    </nav>

    {/* User Section */}
    <div className="p-4 border-t border-gray-200 space-y-4">
        <div className="px-4 py-3 bg-gray-50 rounded-lg">
            <p className="text-xs text-gray-500">Logged in as</p>
            <p className="text-sm font-medium text-gray-900 truncate">{userEmail}</p>
        </div>
        <Button onClick={handleLogout} variant="outline" className="w-full text-red-600 border-red-200 hover:bg-red-50">
            Logout
        </Button>
    </div>
</aside>
);
}
