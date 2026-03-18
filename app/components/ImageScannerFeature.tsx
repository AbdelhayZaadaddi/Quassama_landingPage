'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function ImageScannerFeature() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" as const } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } },
  };

  const scannerLineVariants = {
    hidden: { top: "0%" },
    visible: {
      top: "100%",
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse" as const,
        ease: "linear" as const,
      },
    },
  };

  return (
    <section className="bg-[#f8faf9] py-20 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {/* Text Content */}
          <motion.div variants={textVariants} className="order-2 lg:order-1">
            <div className="inline-flex items-center space-x-2 bg-[#e8f1f0] text-[#3A7068] px-4 py-2 rounded-full font-medium text-sm mb-6">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>New Feature</span>
            </div>

            <h2 className="text-[#3A7068] text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Snap a Receipt. <br />
              <span className="text-gray-900">Extract Instantly.</span>
            </h2>

            <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-8">
              No more manual entry. Just take a photo of your receipt or facture, and let Quassama's AI instantly extract the amount, date, and category. Effortless expense logging in seconds.
            </p>

            <ul className="space-y-4 mb-8">
              {[
                'Instant AI extraction',
                'Supports multiple receipt formats',
                'Categorizes automatically'
              ].map((item, i) => (
                <li key={i} className="flex items-center text-gray-700 font-medium">
                  <svg className="w-6 h-6 text-[#3A7068] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Abstract Scanning Animation */}
          <motion.div variants={imageVariants} className="order-1 lg:order-2 flex justify-center lg:justify-end py-10 lg:py-0">
            <div className="relative w-full max-w-sm aspect-[3/4] bg-white rounded-3xl overflow-hidden border border-gray-100 flex items-center justify-center p-8">

              {/* Receipt Background */}
              <div className="w-full h-full bg-[#fcfcfc] border border-gray-100  rounded-xl p-6 relative">
                {/* Header */}
                <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4 opacity-50"></div>
                <div className="w-24 h-4 bg-gray-200 rounded mx-auto mb-8 opacity-50"></div>

                {/* Items */}
                <div className="space-y-4 mb-8">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="flex justify-between items-center">
                      <div className="w-32 h-3 bg-gray-200 rounded opacity-60"></div>
                      <div className="w-12 h-3 bg-gray-200 rounded opacity-60"></div>
                    </div>
                  ))}
                </div>

                {/* Total */}
                <div className="border-t border-dashed border-gray-300 pt-4 flex justify-between items-center">
                  <div className="w-16 h-4 bg-gray-300 rounded font-bold"></div>
                  <div className="w-20 h-5 bg-[#3A7068] rounded font-bold opacity-80"></div>
                </div>

                {/* Scanning Overlay */}
                <motion.div
                  className="absolute left-0 w-full h-1 bg-[#3A7068] shadow-[0_0_15px_rgba(58,112,104,0.8)] z-20"
                  variants={scannerLineVariants}
                />

                {/* Scanner Highlight Gradient */}
                <motion.div
                  className="absolute left-0 w-full h-32 bg-gradient-to-b from-transparent to-[#3A7068]/20 z-10"
                  variants={scannerLineVariants}
                  style={{ translateY: '-100%' }}
                />
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-[#3A7068]"></div>
              <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-[#3A7068]"></div>
              <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-[#3A7068]"></div>
              <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-[#3A7068]"></div>

            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
