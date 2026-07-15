'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';


export default function Features() {
  const t = useTranslations();
  const features = [
    {
      icon: (
        <svg className="w-8 h-8 md:w-10 md:h-10 text-[#3A7068]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: t('features.items.groupExpense.title'),
      description: t('features.items.groupExpense.description'),
      highlight: false
    },
    {
      icon: (
        <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
        </svg>
      ),
      title: t('features.items.voiceDetection.title'),
      description: t('features.items.voiceDetection.description'),
      highlight: true
    },
    {
      icon: (
        <svg className="w-8 h-8 md:w-10 md:h-10 text-[#3A7068]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
      title: t('features.items.organization.title'),
      description: t('features.items.organization.description'),
      highlight: false
    },
    {
        icon: (
          <svg className="w-8 h-8 md:w-10 md:h-10 text-[#3A7068]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
          </svg>
        ),
        title: t('features.items.budget.title'),
        description: t('features.items.budget.description'),
        highlight: false
      },
      {
        icon: (
          <svg className="w-8 h-8 md:w-10 md:h-10 text-[#3A7068]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
          </svg>
        ),
        title: t('features.items.cloudSync.title'),
        description: t('features.items.cloudSync.description'),
        highlight: false
      },
      {
        icon: (
          <svg className="w-8 h-8 md:w-10 md:h-10 text-[#3A7068]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        ),
        title: t('features.items.security.title'),
        description: t('features.items.security.description'),
        highlight: false
      }
  ];
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };

  return (
    <section id="features" className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-[#3A7068] text-3xl md:text-5xl font-bold mb-12 text-center md:text-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={titleVariants}
        >
          {t('features.title')}
        </motion.h2>
        
        {/* UPDATED: Changed lg:grid-cols-4 to lg:grid-cols-3 for a perfect 2x3 grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {/* AI Assistant Chat — wide showcase card */}
          <motion.div
            className="sm:col-span-2 lg:col-span-3 rounded-2xl p-6 md:p-10 bg-[#457B74] text-white shadow-lg border border-gray-100 transition-shadow duration-300 hover:shadow-xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
            variants={cardVariants}
            whileHover={{ y: -5 }}
          >
            <div>
              <div className="mb-6">
                <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-white">
                {t('features.items.aiAssistant.title')}
              </h3>
              <p className="text-sm md:text-base leading-relaxed text-gray-100">
                {t('features.items.aiAssistant.description')}
              </p>
            </div>

            {/* Chat screen example */}
            <div className="bg-white rounded-2xl shadow-xl p-4 md:p-5 w-full max-w-md mx-auto md:mx-0 md:justify-self-end">
              {/* Chat header */}
              <div className="flex items-center gap-3 pb-3 mb-4 border-b border-gray-100">
                <div className="relative">
                  <div className="w-9 h-9 rounded-full bg-[#3A7068] flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
                    </svg>
                  </div>
                  <span className="absolute bottom-0 end-0 w-2.5 h-2.5 bg-green-400 rounded-full ring-2 ring-white" />
                </div>
                <span className="text-sm font-bold text-gray-900">Quassama AI</span>
              </div>

              {/* Messages */}
              <div className="flex flex-col gap-3">
                <motion.div
                  className="flex justify-end"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                >
                  <div className="bg-[#3A7068] text-white text-sm leading-snug px-4 py-2.5 rounded-2xl rounded-ee-md max-w-[85%]">
                    {t('features.items.aiAssistant.chat.question')}
                  </div>
                </motion.div>
                <motion.div
                  className="flex justify-start"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.9 }}
                >
                  <div className="bg-gray-100 text-gray-800 text-sm leading-snug px-4 py-2.5 rounded-2xl rounded-es-md max-w-[85%]">
                    {t('features.items.aiAssistant.chat.answer')}
                  </div>
                </motion.div>
              </div>

              {/* Input bar */}
              <div className="mt-4 flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2.5">
                <span className="text-sm text-gray-400 flex-1 truncate">
                  {t('features.items.aiAssistant.chat.placeholder')}
                </span>
                <svg className="w-5 h-5 text-[#3A7068] flex-shrink-0 rtl:-scale-x-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                </svg>
              </div>
            </div>
          </motion.div>

          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className={`rounded-2xl p-6 md:p-8 flex flex-col h-full transition-shadow duration-300 hover:shadow-xl border border-gray-100 ${
                feature.highlight
                  ? "bg-[#457B74] text-white shadow-lg"
                  : "bg-white text-gray-900 border-gray-200"
              }`}
              variants={cardVariants}
              whileHover={{ y: -5 }}
            >
              <div className="mb-6">
                {feature.icon}
              </div>
              <h3 className={`text-xl font-bold mb-4 whitespace-pre-line ${feature.highlight ? "text-white" : "text-gray-900"}`}>
                {feature.title}
              </h3>
              <p className={`text-sm leading-relaxed ${feature.highlight ? "text-gray-100" : "text-gray-600"}`}>
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}