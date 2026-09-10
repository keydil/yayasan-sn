'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function InstagramIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

export function YoutubeIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

export function TiktokIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 2.89 3.5 2.77 1.81-.03 3.33-1.46 3.48-3.27.08-1.7.04-3.41.04-5.11V0h-.01z" />
    </svg>
  );
}

export function WhatsappIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
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
      url: 'https://instagram.com/yayasan.sahabatnusantara',
      icon: InstagramIcon,
      ariaLabel: 'Instagram Yayasan Sahabat Nusantara',
    },
    {
      name: 'YouTube',
      url: 'https://youtube.com/@sahabatnusantarabandung',
      icon: YoutubeIcon,
      ariaLabel: 'YouTube Yayasan Sahabat Nusantara',
    },
    {
      name: 'TikTok',
      url: 'https://tiktok.com/@sahabat.nusantara13',
      icon: TiktokIcon,
      ariaLabel: 'TikTok Yayasan Sahabat Nusantara',
    },
  ];

  const programLinks = [
    { title: 'Penghijauan & Reboisasi', href: '/program/penghijauan' },
    { title: 'Pendidikan & Kapasitas', href: '/program/pendidikan' },
    { title: 'Pengelolaan Sampah', href: '/program/pengelolaan-sampah' },
    { title: 'Konservasi Air', href: '/program/konservasi-air' },
  ];

  return (
    <footer className="w-full bg-gray-50 border-t border-gray-200 text-gray-700" data-purpose="main-footer">
      {/* BEGIN: MainFooterContent */}
      <div className="max-w-screen-2xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 pt-16 pb-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 xl:gap-14">
          
          {/* Kolom 1: Brand, About & Media Sosial Bulat */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <img
                src="/huut-premium.jpeg"
                alt="Logo Yayasan Sahabat Nusantara"
                className="h-12 sm:h-14 md:h-16 w-auto object-contain mix-blend-multiply"
              />
            </Link>
            <p className="text-xs text-gray-600 leading-relaxed font-normal">
              Organisasi masyarakat sipil yang mendorong keadilan sosial, pendidikan, dan pemulihan ekosistem demi terciptanya bumi yang lestari.
            </p>

            {/* Media Sosial Bulat Minimalis */}
            <div className="flex items-center gap-2.5 pt-1">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  aria-label={item.ariaLabel}
                  className="w-9 h-9 rounded-full bg-white border border-gray-200 text-gray-700 flex items-center justify-center hover:bg-[#183b2b] hover:text-white hover:border-[#183b2b] hover:-translate-y-1 hover:shadow-sm transition-all duration-200 ease-in-out cursor-pointer"
                  href={item.url}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <item.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Kolom 2: Pilar Program */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900 flex items-center justify-between pb-2 mb-2 border-b border-gray-200">
              <span>Pilar Program</span>
              <span className="text-gray-400 font-mono text-[11px] font-normal">04</span>
            </h4>
            <ul className="divide-y divide-gray-100 text-xs">
              {programLinks.map((item) => (
                <li key={item.title}>
                  <Link
                    className="py-2.5 flex items-center justify-between text-gray-600 hover:text-emerald-700 transition-colors group cursor-pointer"
                    href={item.href}
                  >
                    <span className="group-hover:translate-x-1 group-hover:text-emerald-800 font-medium transition-all duration-200">
                      {item.title}
                    </span>
                    <span className="text-gray-300 group-hover:text-emerald-600 group-hover:translate-x-1.5 transition-all duration-200 text-xs font-semibold">
                      &rarr;
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kolom 3: Sekretariat & Kontak */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900 pb-2 mb-1 border-b border-gray-200">
              Sekretariat &amp; Kontak
            </h4>
            <p className="text-xs text-gray-600 leading-relaxed">
              Jl. Cingised Komp. Pertanian No. 15, RT 001 / RW 005, Kel. Cisaranten Endah, Kec. Arcamanik, Kota Bandung
            </p>
            <div className="pt-1 flex flex-col gap-2">
              <a
                className="inline-flex items-center justify-between px-3.5 py-2 rounded-md border border-[#cbead8] bg-[#f0fdf4] text-gray-900 hover:bg-[#e4f9ec] hover:border-[#8ad6af] hover:shadow-xs hover:-translate-y-0.5 transition-all duration-200 text-xs font-medium group cursor-pointer"
                href="https://wa.me/6285211352636"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="flex items-center gap-2">
                  <WhatsappIcon className="w-4 h-4 text-[#0d6b4f] shrink-0 group-hover:scale-110 transition-transform duration-200" />
                  <span className="text-gray-900 font-medium">WhatsApp: 0852-1135-2636</span>
                </span>
                <span className="text-xs font-semibold text-[#0d6b4f] group-hover:text-emerald-800 transition-colors">
                  Hubungi
                </span>
              </a>
              <a
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-md border border-gray-200 bg-white text-gray-700 hover:border-emerald-300 hover:bg-emerald-50/40 hover:text-emerald-800 hover:shadow-xs hover:-translate-y-0.5 transition-all duration-200 text-xs font-medium group cursor-pointer"
                href="mailto:yayasan.sn@gmail.com"
              >
                <svg className="w-4 h-4 text-gray-400 group-hover:text-emerald-600 group-hover:scale-110 transition-all duration-200 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="truncate group-hover:font-medium transition-all">yayasan.sn@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Kolom 4: Legalitas Lembaga */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900 pb-2 mb-1 border-b border-gray-200">
              Legalitas Lembaga
            </h4>
            <dl className="text-xs text-gray-600 space-y-2.5 font-normal">
              <div className="flex justify-between items-baseline gap-2">
                <dt className="text-gray-500">Akta Notaris</dt>
                <dd className="font-medium text-gray-800 text-right">No. 01 (2025)</dd>
              </div>
              <div className="flex justify-between items-baseline gap-2">
                <dt className="text-gray-500">Kemenkumham RI</dt>
                <dd className="font-medium text-gray-800 text-right">AHU-0000732.AH.01.04</dd>
              </div>
              <div className="flex justify-between items-baseline gap-2">
                <dt className="text-gray-500">NIB</dt>
                <dd className="font-medium text-gray-800 text-right">1301250085449</dd>
              </div>
            </dl>
          </div>

        </div>
      </div>
      {/* END: MainFooterContent */}

      {/* BEGIN: BottomBar */}
      <div className="border-t border-gray-200 bg-gray-100/60 py-6 px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="max-w-screen-2xl mx-auto text-center text-xs text-gray-500 font-normal leading-relaxed">
          <p>© 2025 Yayasan Sahabat Nusantara. Seluruh hak cipta dilindungi.</p>
        </div>
      </div>
      {/* END: BottomBar */}
    </footer>
  );
}
