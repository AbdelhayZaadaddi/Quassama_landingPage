'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

const CheckIcon = () => (
  <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
  </svg>
);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' as const },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' as const },
  },
};

const FEATURE_KEYS = ['f1', 'f2', 'f3', 'f4', 'f5'] as const;

const plans = [
  { key: 'free',     highlighted: false, recommended: false, hasTrial: false },
  { key: 'personal', highlighted: true,  recommended: false, hasTrial: true  },
  { key: 'family',   highlighted: false, recommended: true,  hasTrial: false },
] as const;

export default function Pricing() {
  const t = useTranslations('pricing');

  return (
    <section id="pricing" className="bg-gray-50 py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={containerVariants}
        >
          <motion.h2
            className="text-[#3A7068] text-3xl md:text-5xl font-bold mb-4"
            variants={titleVariants}
          >
            {t('title')}
          </motion.h2>
          <motion.p
            className="text-gray-600 text-lg max-w-2xl mx-auto"
            variants={titleVariants}
          >
            {t('description')}
          </motion.p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={containerVariants}
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.key}
              className={`relative flex flex-col rounded-2xl overflow-hidden transition-shadow duration-300 ${
                plan.highlighted
                  ? 'shadow-2xl ring-2 ring-[#2A524D]'
                  : plan.recommended
                  ? 'shadow-md ring-2 ring-[#3A7068]'
                  : 'shadow-md'
              }`}
              variants={cardVariants}
              whileHover={{ y: -6 }}
            >
              {/* Trial ribbon (Personal only) */}
              {plan.hasTrial && (
                <div className="bg-[#F3E5AB] text-[#2A524D] text-sm font-semibold text-center py-2.5 px-4 tracking-wide">
                  ✨ {t(`plans.${plan.key}.trial`)}
                </div>
              )}

              {/* Card body */}
              <div
                className={`flex flex-col flex-1 p-7 md:p-8 ${
                  plan.highlighted
                    ? 'bg-[#2A524D] text-white'
                    : 'bg-white text-gray-900'
                }`}
              >
                {/* Badge */}
                {(plan.highlighted || plan.recommended) && (
                  <div className="mb-5">
                    <span
                      className={`inline-block text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full ${
                        plan.highlighted
                          ? 'bg-[#F3E5AB] text-[#2A524D]'
                          : 'bg-[#3A7068] text-white'
                      }`}
                    >
                      {t(`plans.${plan.key}.badge`)}
                    </span>
                  </div>
                )}

                {/* Plan name */}
                <h3
                  className={`text-xl font-bold mb-2 ${
                    plan.highlighted ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  {t(`plans.${plan.key}.name`)}
                </h3>

                {/* Price */}
                <div className="flex items-baseline gap-1 mb-1">
                  <span
                    className={`text-4xl font-extrabold ${
                      plan.highlighted ? 'text-white' : 'text-[#2A524D]'
                    }`}
                  >
                    {t(`plans.${plan.key}.price`)}
                  </span>
                  <span
                    className={`text-sm font-medium ${
                      plan.highlighted ? 'text-gray-300' : 'text-gray-500'
                    }`}
                  >
                    {t(`plans.${plan.key}.period`)}
                  </span>
                </div>

                {/* Tagline (Free only) */}
                <p
                  className={`text-sm mb-6 ${
                    plan.highlighted ? 'text-gray-300' : 'text-gray-500'
                  }`}
                >
                  {plan.key === 'free' ? t('plans.free.tagline') : ' '}
                </p>

                {/* Divider */}
                <div
                  className={`border-t mb-6 ${
                    plan.highlighted ? 'border-white/20' : 'border-gray-100'
                  }`}
                />

                {/* Features */}
                <ul className="flex flex-col gap-3 flex-1 mb-8">
                  {FEATURE_KEYS.map((fk) => (
                    <li key={fk} className="flex items-start gap-3">
                      <span
                        className={
                          plan.highlighted ? 'text-[#F3E5AB] mt-0.5' : 'text-[#3A7068] mt-0.5'
                        }
                      >
                        <CheckIcon />
                      </span>
                      <span
                        className={`text-sm leading-snug ${
                          plan.highlighted ? 'text-gray-100' : 'text-gray-600'
                        }`}
                      >
                        {t(`plans.${plan.key}.features.${fk}`)}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA button */}
                <button
                  className={`w-full py-3.5 px-6 rounded-xl font-semibold text-sm transition-all duration-200 cursor-pointer active:scale-95 ${
                    plan.highlighted
                      ? 'bg-[#F3E5AB] text-[#2A524D] hover:bg-amber-200'
                      : plan.recommended
                      ? 'bg-[#3A7068] text-white hover:bg-[#2A524D]'
                      : 'bg-[#3A7068]/10 text-[#3A7068] hover:bg-[#3A7068]/20'
                  }`}
                >
                  {t(`plans.${plan.key}.cta`)}
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
