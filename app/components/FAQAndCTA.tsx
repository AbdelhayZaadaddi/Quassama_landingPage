'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';

export default function FAQ() {
  const t = useTranslations('faq');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Définition de la liste basée sur les clés JSON
  const faqs = [
    {
      question: t('items.q1.question'),
      answer: t('items.q1.answer')
    },
    {
      question: t('items.q2.question'),
      answer: t('items.q2.answer')
    },
    {
      question: t('items.q3.question'),
      answer: t('items.q3.answer')
    },
    {
      question: t('items.q4.question'),
      answer: t('items.q4.answer')
    }
  ];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h2 className="text-[#3A7068] text-3xl md:text-4xl font-bold mb-4">
            {t('title')}
          </h2>
          <p className="text-gray-500">
            {t('description')}
          </p>
        </div>
          
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-xl overflow-hidden bg-white hover:border-[#3A7068]/30 transition-colors duration-300">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-5 text-start bg-white"
              >
                <span className="font-semibold text-gray-800 text-lg pr-8">{faq.question}</span>
                <span className={`transform transition-transform duration-300 text-[#3A7068] shrink-0 ${openIndex === index ? 'rotate-180' : ''}`}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-5 pt-0 text-gray-600 leading-relaxed bg-white">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}