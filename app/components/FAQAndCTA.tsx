'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: "Is Quassama free to use?",
    answer: "Yes! The core features, including expense tracking, receipt scanning, and basic voice logging, are completely free. We offer a 'Pro' subscription for power users who want unlimited entries, cloud sync, and advanced export features."
  },
  {
    question: "How accurate is the Voice Detection & Receipt Scanning?",
    answer: "Our voice AI is trained specifically for Moroccan dialects (Darija), French, and English. Our receipt scanner intelligently parses amounts, dates, and text from images instantly, making manual entry a thing of the past."
  },
  {
    question: "Is my financial data safe?",
    answer: "Absolutely. We use bank-level encryption for all data. Your expenses are private to you (and the specific friends you choose to share them with). We never sell your data."
  },
  {
    question: "Can I use it offline?",
    answer: "Yes, you can track expenses offline. The app will automatically sync your data to the cloud the next time you connect to the internet."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h2 className="text-[#3A7068] text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500">
            Everything you need to know about Quassama.
          </p>
        </div>
          
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-xl overflow-hidden bg-white hover:border-[#3A7068]/30 transition-colors duration-300">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-5 text-left bg-white"
              >
                <span className="font-semibold text-gray-800 text-lg pr-8">{faq.question}</span>
                <span className={`transform transition-transform duration-300 text-[#3A7068] flex-shrink-0 ${openIndex === index ? 'rotate-180' : ''}`}>
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