import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { AuthProvider } from '@/lib/auth-context'
import { Navbar } from '@/components/navbar'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Yayasan Sahabat Nusantara | Pelestarian Lingkungan Indonesia',
  description: 'Yayasan Sahabat Nusantara hadir sebagai wadah aksi nyata untuk pelestarian lingkungan. Bersama kita jaga kelestarian alam dan berdayakan masyarakat Nusantara.',
  metadataBase: new URL('https://www.sahabatnusantara.id'),
  keywords: ['yayasan', 'lingkungan', 'konservasi', 'Indonesia', 'pelestarian', 'sahabat nusantara', 'keberlanjutan', 'edukasi lingkungan'],
  authors: [{ name: 'Yayasan Sahabat Nusantara' }],
  openGraph: {
    title: 'Yayasan Sahabat Nusantara',
    description: 'Wadah aksi nyata untuk pelestarian lingkungan. Mari bergabung menjaga kelestarian alam dan memberdayakan masyarakat Nusantara.',
    url: 'https://www.sahabatnusantara.id',
    siteName: 'Yayasan Sahabat Nusantara',
    images: [
      {
        url: 'https://www.sahabatnusantara.id/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Yayasan Sahabat Nusantara — Aksi Nyata Untuk Bumi Indonesia',
        type: 'image/jpeg',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yayasan Sahabat Nusantara',
    description: 'Wadah aksi nyata untuk pelestarian lingkungan. Mari bergabung menjaga kelestarian alam Nusantara.',
    images: ['https://www.sahabatnusantara.id/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  generator: 'nextjs.app',
  icons: {
    icon: '/icon.png',
    apple: '/icon.png',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#10b981',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" className="bg-background">
      <body className="font-sans antialiased text-foreground">
        <AuthProvider>
          <Navbar />
          {children}
        </AuthProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}