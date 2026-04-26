import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { AuthProvider } from '@/lib/auth-context'
import { Navbar } from '@/components/navbar'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Yayasan Sahabat Nusantara | Organisasi Lingkungan Indonesia',
  description: 'Yayasan Sahabat Nusantara adalah organisasi nirlaba yang berdedikasi untuk pelestarian lingkungan dan keberlanjutan di Indonesia.',
  metadataBase: new URL('https://yayasan-sn.vercel.app'),
  openGraph: {
    title: 'Yayasan Sahabat Nusantara | Aksi Nyata Untuk Bumi',
    description: 'Sistem Informasi & Edukasi Pelestarian Lingkungan. Mari bergabung melakukan aksi nyata demi masa depan Indonesia.',
    url: 'https://yayasan-sn.vercel.app',
    siteName: 'Yayasan Sahabat Nusantara',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Thumbnail Yayasan Sahabat Nusantara',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  generator: 'nextjs.app',
  icons: {
    icon: '/icon.png',
    apple: '/icon.png', // Biar di iPhone juga muncul icon yang sama
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