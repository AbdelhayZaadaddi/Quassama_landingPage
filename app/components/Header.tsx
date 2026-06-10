"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslations } from "next-intl";

const APP_STORE_URL = 'https://apps.apple.com/us/app/quassama/id6752957774';
const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.quassama.app';

const NAV_LINKS = [
  { key: 'home',       href: '#hero'        },
  { key: 'howItWorks', href: '#how-it-works' },
  { key: 'savings',    href: '#savings'      },
  { key: 'features',   href: '#features'     },
  { key: 'reviews',    href: '#reviews'      },
  { key: 'compare',    href: '#compare'      },
  { key: 'pricing',    href: '#pricing'      },
  { key: 'faq',        href: '#faq'          },
] as const;

export default function Header() {
  const t = useTranslations('header');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleDownloadClick = () => {
    const ua = navigator.userAgent;
    const isApple = /iPad|iPhone|iPod|Macintosh|MacIntel/.test(ua);
    window.open(isApple ? APP_STORE_URL : PLAY_STORE_URL, '_blank');
  };

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 bg-[#3A7068] text-white transition-shadow duration-300 ${
        scrolled ? 'shadow-lg' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-18">

          {/* Logo */}
          <a href="#hero" className="shrink-0 flex items-center gap-2">
            <Image
              src="/logo1.png"
              alt="Quassama Logo"
              width={36}
              height={36}
              className="h-9 w-auto"
            />
            <span className="font-semibold text-xl tracking-wide">Quassama</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map(({ key, href }) => (
              <a
                key={key}
                href={href}
                className="px-3 py-1.5 rounded-md text-sm font-medium text-white/85 hover:text-white hover:bg-white/10 transition-colors"
              >
                {t(`nav.${key}`)}
              </a>
            ))}
          </nav>

          {/* Desktop right side */}
          <div className="hidden lg:flex items-center gap-3">
            <LanguageSwitcher />
            <a
              href="https://app.quassama.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-md text-sm font-medium text-white/85 border border-white/30 hover:text-white hover:border-white/60 hover:bg-white/10 transition-colors"
            >
              {t('loginAccount')}
            </a>
            <button
              onClick={handleDownloadClick}
              className="bg-[#F3E5AB] text-[#2A524D] cursor-pointer px-5 py-2 rounded-md text-sm font-semibold hover:bg-[#ece0a6] transition-colors"
            >
              {t('downloadApp')}
            </button>
          </div>

          {/* Mobile right side */}
          <div className="lg:hidden flex items-center gap-2">
            <LanguageSwitcher />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-gray-200 focus:outline-none p-2"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-[#2f5c55] border-t border-white/10">
          <nav className="px-4 pt-3 pb-4 space-y-1">
            {NAV_LINKS.map(({ key, href }) => (
              <a
                key={key}
                href={href}
                onClick={closeMenu}
                className="block px-3 py-2.5 rounded-md text-sm font-medium text-white/90 hover:text-white hover:bg-white/10 transition-colors"
              >
                {t(`nav.${key}`)}
              </a>
            ))}
            <div className="pt-3 border-t border-white/10 mt-2 space-y-2">
              <a
                href="https://app.quassama.com"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="block w-full text-center border border-white/30 text-white px-6 py-2.5 rounded-md text-sm font-medium hover:bg-white/10 transition-colors"
              >
                {t('loginAccount')}
              </a>
              <button
                onClick={() => { handleDownloadClick(); closeMenu(); }}
                className="w-full bg-[#F3E5AB] text-[#2A524D] px-6 py-2.5 rounded-md text-sm font-semibold hover:bg-[#ece0a6] transition-colors"
              >
                {t('downloadApp')}
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
