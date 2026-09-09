'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function InstagramIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export function YoutubeIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

export function TiktokIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.86 4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-2.04-.52 4.9 4.9 0 0 1-.58-.45z" />
    </svg>
  );
}

export function Footer() {
  const pathname = usePathname();

  // Sembunyikan footer di halaman dashboard admin
  if (pathname?.startsWith('/admin')) {
    return null;
  }

  const socialLinks = [
    {
      name: 'Instagram',
      handle: '@yayasan.sahabatnusantara',
      url: 'https://www.instagram.com/yayasan.sahabatnusantara',
      icon: InstagramIcon,
    },
    {
      name: 'YouTube',
      handle: '@sahabatnusantarabandung',
      url: 'https://www.youtube.com/@sahabatnusantarabandung',
      icon: YoutubeIcon,
    },
    {
      name: 'TikTok',
      handle: '@sahabat.nusantara13',
      url: 'https://www.tiktok.com/@sahabat.nusantara13',
      icon: TiktokIcon,
    },
  ];

  return (
    <footer className="bg-gray-950 text-gray-400 py-12 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-10">
          {/* Kolom 1: Tentang Yayasan */}
          <div className="lg:col-span-1">
            <h4 className="text-white font-bold text-sm mb-3">Yayasan Sahabat Nusantara</h4>
            <p className="text-xs text-gray-400 leading-relaxed mb-4">
              Organisasi masyarakat sipil yang mendorong keadilan sosial, pendidikan, dan kelestarian lingkungan hidup di Indonesia.
            </p>
            {/* Quick Icon Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-gray-900 flex items-center justify-center text-gray-400 hover:text-emerald-400 hover:bg-gray-800 transition-colors"
                  aria-label={item.name}
                >
                  <item.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Kolom 2: Pilar Program */}
          <div>
            <h4 className="text-white font-bold text-sm mb-3">Pilar Program</h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="/program/penghijauan" className="hover:text-emerald-400 transition-colors">Penghijauan & Reboisasi</Link></li>
              <li><Link href="/program/pendidikan" className="hover:text-emerald-400 transition-colors">Pendidikan & Kapasitas</Link></li>
              <li><Link href="/program/pengelolaan-sampah" className="hover:text-emerald-400 transition-colors">Pengelolaan Sampah</Link></li>
              <li><Link href="/program/konservasi-air" className="hover:text-emerald-400 transition-colors">Konservasi Air</Link></li>
            </ul>
          </div>

          {/* Kolom 3: Legalitas Resmi */}
          <div>
            <h4 className="text-white font-bold text-sm mb-3">Legalitas Resmi</h4>
            <ul className="space-y-2 text-xs">
              <li><span className="text-gray-300">Akta Notaris No. 01 (2025)</span></li>
              <li><span className="text-gray-300">AHU-0000732.AH.01.04</span></li>
              <li><span className="text-gray-300">NIB: 1301250085449</span></li>
            </ul>
          </div>

          {/* Kolom 4: Kantor Pusat */}
          <div>
            <h4 className="text-white font-bold text-sm mb-3">Kantor Pusat</h4>
            <p className="text-xs text-gray-400 leading-relaxed mb-2">
              Jl. Cingised Komp. Pertanian No. 15, Cisaranten Endah, Arcamanik, Kota Bandung
            </p>
            <p className="text-xs text-gray-400">
              WhatsApp: <span className="text-gray-300">0852-1135-2636</span>
            </p>
          </div>

          {/* Kolom 5: Media Sosial */}
          <div>
            <h4 className="text-white font-bold text-sm mb-3">Media Sosial</h4>
            <ul className="space-y-2.5 text-xs">
              {socialLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-emerald-400 transition-colors group"
                  >
                    <item.icon className="w-4 h-4 text-emerald-500 group-hover:text-emerald-400 flex-shrink-0" />
                    <span className="truncate">{item.handle}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-900 pt-8 text-center text-xs text-gray-500">
          <p>&copy; 2025 Yayasan Sahabat Nusantara. Semua Hak Dilindungi.</p>
        </div>
      </div>
    </footer>
  );
}
