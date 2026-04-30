'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import PhoneImage from '../../assets/iPhone14Pro.png';
import { useTranslations } from 'next-intl';

export default function ProblemSolution() {
  const t = useTranslations();
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const leftCardVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  const rightCardVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" as const },
    },
  };

  return (
    <section className="bg-white py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          className="relative flex flex-col items-center justify-center min-h-125 md:min-h-175"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >

          {/* Central Image - Updated for Clarity */}
          <motion.div 
            className="relative w-full max-w-5xl flex items-center justify-center my-8 md:my-0"
            variants={imageVariants}
          >
             <div className="w-full h-auto flex flex-col items-center justify-center ">
                <Image
                  src={PhoneImage}
                  alt="Quassama App Dashboard"
                  className="w-full h-auto object-contain"
                  priority
                  quality={100}
                  unoptimized
                />
             </div>
          </motion.div>

          {/* Top Left Card */}
          <motion.div 
            className="bg-white p-6 md:p-10 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] max-w-xl w-full md:absolute md:top-0 md:left-0 lg:left-4 z-20 border border-gray-100"
            variants={leftCardVariants}
          >
             <h3 className="text-[#3A7068] text-2xl md:text-3xl font-bold mb-4">
                {t('problemSolution.leftCard.title')}
             </h3>
             <p className="text-gray-600 text-lg leading-relaxed">
                {t('problemSolution.leftCard.description')}
             </p>
          </motion.div>

          {/* Bottom Right Card */}
          <motion.div 
            className="bg-white p-6 md:p-10 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] max-w-xl w-full md:absolute md:bottom-0 md:right-0 lg:right-4 z-20 border border-gray-100 mt-6 md:mt-0"
            variants={rightCardVariants}
          >
             <h3 className="text-[#3A7068] text-2xl md:text-3xl font-bold mb-4">
                {t('problemSolution.rightCard.title')}
             </h3>
             <p className="text-gray-600 text-lg leading-relaxed">
                {t('problemSolution.rightCard.description')}
             </p>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}