'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/auth-context';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Link from 'next/link';
import { Leaf } from 'lucide-react';

export default function LoginPage() {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [error, setError] = useState('');
const [isLoading, setIsLoading] = useState(false);
const router = useRouter();
const { login } = useAuth();

const handleSubmit = async (e: React.FormEvent) => {
e.preventDefault();
setError('');
setIsLoading(true);

try {
const success = await login(email, password);
if (success) {
router.push('/admin/dashboard');
} else {
setError('Email atau password salah. Coba lagi.');
}
} catch (err) {
setError('Terjadi kesalahan. Silakan coba lagi.');
} finally {
setIsLoading(false);
}
};

return (
<main className="min-h-screen bg-gradient-to-br from-white via-emerald-50 to-white flex items-center justify-center p-4">
    <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
            <Link href="/" className="inline-flex items-center gap-2 mb-6">
            <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center">
                <Leaf className="w-7 h-7 text-white" />
            </div>
            <span className="text-2xl font-bold text-gray-900 hidden sm:inline">
                Yayasan Sahabat Nusantara
            </span>
            </Link>

            <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Portal Anggota
            </h1>
            <p className="text-gray-600">
                Kelola data anggota dan program organisasi
            </p>
        </div>

        {/* Login Card */}
        <Card className="bg-white border-0 shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
                {error && (
                <div className="p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm">
                    {error}
                </div>
                )}

                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                        Email
                    </label>
                    <input id="email" type="email" value={email} onChange={(e)=> setEmail(e.target.value)}
                    placeholder="yayasan.sn@gmail.com"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent"
                    disabled={isLoading}
                    />
                </div>

                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-900 mb-2">
                        Password
                    </label>
                    <input id="password" type="password" value={password} onChange={(e)=> setPassword(e.target.value)}
                    placeholder="Masukkan password"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent"
                    disabled={isLoading}
                    />
                    {/* <p className="text-xs text-gray-500 mt-2">
                        Demo: <code className="bg-gray-100 px-2 py-1 rounded">admin123</code>
                    </p> */}
                </div>

                <Button type="submit" disabled={isLoading || !email || !password}
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2.5 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                    {isLoading ? 'Sedang masuk...' : 'Masuk'}
                </Button>
            </form>

            <div className="mt-6 pt-6 border-t border-gray-200 text-center">
                <p className="text-sm text-gray-600 mb-3">
                    Belum memiliki akun?
                </p>
                <Link href="/">
                <Button variant="outline" className="w-full border-emerald-600 text-emerald-600 hover:bg-emerald-50">
                    Kembali ke Beranda
                </Button>
                </Link>
            </div>
        </Card>

        {/* Info Box
        <div className="mt-8 p-6 bg-emerald-50 border border-emerald-200 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2">
                Demo Credentials
            </h3>
            <div className="space-y-2 text-sm text-gray-600 mb-3">
                <p>Email: <strong>admin@sahabat-nusantara.org</strong></p>
                <p>Password: <strong>admin123</strong></p>
            </div>
            <p className="text-xs text-gray-500">
                Siap untuk integrasi Supabase Auth! Gunakan demo credentials di atas atau tambahkan user di Supabase
                dashboard.
            </p>
        </div> */}
    </div>
</main>
);
}
