'use client'; // Required for Framer Motion in Next.js App Router

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import HandPhone from '../../assets/hand.png';

export default function Hero() {
  // Animation variants for staggered text entry
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Time between each element appearing
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" as const } 
    },
  };

  return (
    <section className="bg-[#3A7068] w-full overflow-hidden relative">
      <div className="max-w-7xl mx-auto pt-10 md:pt-16">
        <div className="flex flex-col md:flex-row items-center md:items-end justify-between gap-12">
          
          {/* Left Column: Animated Text & Buttons */}
          <motion.div 
            className="flex-1 space-y-8 text-center md:text-left z-10 w-full px-4 sm:px-6 lg:px-8 pb-10 md:pb-20"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight tracking-tight"
              variants={itemVariants}
            >
              <span className="text-white block mb-2">
                Speak Your <span className="text-[#F3E5AB]">Expenses.</span>
              </span>
              <span className="text-white block">
                Control Your{' '}
                <span className="inline-block bg-[#F3E5AB] text-[#2A524D] px-4 py-1 rounded-2xl mt-2 md:mt-0">
                  Budget.
                </span>
              </span>
            </motion.h1>

            <motion.p 
              className="text-gray-200 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto md:mx-0"
              variants={itemVariants}
            >
              Quassama helps friends, families, and teams track shared expenses, split costs fairly, and 
              stay organized — all in one simple app.
            </motion.p>

            <motion.div 
              className="flex flex-col space-y-3" // Changed slightly to stack buttons + trust signal cleanly
              variants={itemVariants}
            >
              <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-4">
                {/* Google Play Button */}
                <a 
                  href="https://play.google.com/store/apps/details?id=com.quassama.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-100 transition-all hover:scale-105 active:scale-95 border border-gray-300 w-full sm:w-48 justify-center"
                >
                <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current text-black" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                <div className="text-left">
                    <div className="text-[10px] font-medium uppercase">Get it on</div>
                    <div className="text-md font-bold leading-none">Google Play</div>
                </div>
                </a>

                {/* App Store Button */}
                <a 
                  href="https://apps.apple.com/us/app/quassama/id6752957774"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-100 transition-all hover:scale-105 active:scale-95 border border-gray-300 w-full sm:w-48 justify-center"
                >
                <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current text-black" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.37 12.36,4.26 13,3.5Z" />
                </svg>
                <div className="text-left">
                    <div className="text-[10px] font-medium uppercase">Download on the</div>
                    <div className="text-md font-bold leading-none">App Store</div>
                </div>
                </a>
              </div>

              {/* Added Trust Signal Here */}
              <div className="flex items-center justify-center md:justify-start gap-2 pt-1 pl-1">
                <svg className="w-4 h-4 text-[#F3E5AB] opacity-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <p className="text-xs text-gray-200 font-medium">
                  Encrypted & Private • Cancel anytime
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Animated Image */}
          <motion.div 
            className="flex-1 w-full flex items-end justify-center md:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
             <div 
                className="w-full relative"
                style={{
                  maskImage: 'linear-gradient(to left, transparent 0%, black 15%, black 85%, transparent 100%), linear-gradient(to top, transparent 0%, black 10%)',
                  WebkitMaskImage: 'linear-gradient(to left, transparent 0%, black 10%), linear-gradient(to top, transparent 0%, black 10%)',
                  maskComposite: 'intersect',
                  WebkitMaskComposite: 'source-in'
                }}
             >
                <Image 
                  src={HandPhone} 
                  alt="Quassama App Interface" 
                  className="w-full h-auto object-contain block align-bottom md:translate-x-4"
                  priority
                />
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}