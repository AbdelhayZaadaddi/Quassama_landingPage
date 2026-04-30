'use client';

import { useLocale, useTranslations } from 'next-intl';
import { useRouter, usePathname, Locale } from '@/i18n/routing';
import { useTransition, useState } from 'react';

export default function LanguageSwitcher() {
  const t = useTranslations();
  const [isPending, startTransition] = useTransition();
  const [isOpen, setIsOpen] = useState(false);
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const languages = [
    { code: 'en', label: t('language.options.en.subLabel'), flag: '🇺🇸' },
    { code: 'ar', label: t('language.options.ar.subLabel'), flag: '🇲🇦' },
    { code: 'fr', label: t('language.options.fr.subLabel'), flag: '🇫🇷' },
  ];

  const currentLanguage = languages.find((lang) => lang.code === locale);

  function handleChangeLocale(nextLocale: Locale) {
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
      setIsOpen(false);
    });
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        disabled={isPending}
        className="flex items-center cursor-pointer gap-2 px-6 py-2 rounded-md text-white hover:bg-white/10 transition-colors font-medium"
      >
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
          />
        </svg>
        <span className="hidden sm:inline">{currentLanguage?.label}</span>
      </button>

      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setIsOpen(false)} 
          />
          
          <div className="absolute end-0 mt-2 w-40 bg-white rounded-lg shadow-lg z-50 overflow-hidden border border-gray-100">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleChangeLocale(lang.code as Locale)}
                disabled={isPending}
                className={`block cursor-pointer w-full text-start px-4 py-3 hover:bg-gray-100 transition-colors text-gray-700 text-sm ${
                  lang.code === locale
                    ? "bg-gray-100 font-semibold text-[#3A7068]"
                    : ""
                } ${isPending ? "opacity-50 cursor-not-allowed" : ""}`}
              >
                <span className="me-2">{lang.flag}</span>
                {lang.label}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}