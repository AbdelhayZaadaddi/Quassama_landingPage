'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

// Store URLs
const APP_STORE_URL = 'https://apps.apple.com/us/app/quassama/id6752957774';
const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.quassama.app';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleDownloadClick = () => {
    const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
    
    // Check for iOS devices (iPhone, iPad, iPod)
    const isIOS = /iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream;
    
    // Check for Mac
    const isMac = /Macintosh|MacIntel|MacPPC|Mac68K/.test(userAgent);
    
    // Check for Android
    const isAndroid = /Android/.test(userAgent);
    
    // Check for Windows
    const isWindows = /Win/.test(userAgent);
    
    if (isIOS || isMac) {
      // Redirect to App Store
      window.open(APP_STORE_URL, '_blank');
    } else if (isAndroid || isWindows) {
      // Redirect to Play Store
      window.open(PLAY_STORE_URL, '_blank');
    } else {
      // Default fallback - you can choose which store to show
      // or show a modal letting user choose
      window.open(PLAY_STORE_URL, '_blank');
    }
  };

  return (
    <header className="bg-[#3A7068] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center gap-2">
			{/* Assuming logo1.png is the logo file in public */}
            <Image
              src="/logo1.png"
              alt="Quassama Logo"
              width={40}
              height={40}
              className="h-10 w-auto"
            />
            <span className="font-semibold text-2xl tracking-wide">Quassama</span>
          </div>

          {/* Desktop Navigation */}
          {/* <nav className="hidden md:flex space-x-8 items-center">
            <Link href="/" className="hover:text-gray-200 transition-colors">
              Home
            </Link>
            <Link href="/how-it-works" className="hover:text-gray-200 transition-colors">
              How it Work
            </Link>
            <Link href="/features" className="hover:text-gray-200 transition-colors">
              Features
            </Link>
            <Link href="/use-cases" className="hover:text-gray-200 transition-colors">
              Use Cases
            </Link>
          </nav> */}

          {/* CTA Button (Desktop) */}
          <div className="hidden md:flex items-center">
            <button 
              onClick={handleDownloadClick}
              className="bg-[#F3E5AB] text-[#2A524D] px-6 py-2 rounded-md font-medium hover:bg-[#ece0a6] transition-colors"
            >
              Download app
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white p-2"
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger Icon */}
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#2f5c55]">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {/* <Link
              href="/"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#3A7068] transition-colors"
            >
              Home
            </Link>
            <Link
              href="/how-it-works"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#3A7068] transition-colors"
            >
              How it Work
            </Link>
            <Link
              href="/features"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#3A7068] transition-colors"
            >
              Features
            </Link>
            <Link
              href="/use-cases"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-[#3A7068] transition-colors"
            >
              Use Cases
            </Link> */}
            <div className="mt-4 px-3">
              <button 
                onClick={handleDownloadClick}
                className="w-full bg-[#F3E5AB] text-[#2A524D] px-6 py-2 rounded-md font-medium hover:bg-[#ece0a6] transition-colors"
              >
                Download app
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
