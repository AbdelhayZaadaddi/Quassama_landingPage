'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { useTranslations } from 'next-intl';

// Helper to render stars
const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <svg 
          key={i}
          className={`w-5 h-5 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      ))}
    </div>
  );
};

export default function Reviews() {
  const t = useTranslations();
  // 💡 TIP: Ask 3 friends to try the app and give you a one-sentence quote.
  // Use their real names/photos to make it authentic.
  const reviews = [
    {
      id: 1,
      name: "Omar B.",
      role: t('reviews.items.review1.role'),
      image: "/avatars/avatar1.png", // specific path or use a placeholder
      content: t('reviews.items.review1.content'),
      stars: 5,
    },
    {
      id: 2,
      name: "Sarah K.",
      role: t('reviews.items.review2.role'),
      image: "/avatars/avatar2.png", 
      content: t('reviews.items.review2.content'),
      stars: 5,
    },
    {
      id: 3,
      name: "Youssef A.",
      role: t('reviews.items.review3.role'),
      image: "/avatars/avatar3.png", 
      content: t('reviews.items.review3.content'),
      stars: 5,
    }
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section id="reviews" className="bg-gray-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 
            className="text-[#3A7068] text-3xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {t('reviews.title')}
          </motion.h2>
          <motion.p 
            className="text-gray-600 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {t('reviews.description')}
          </motion.p>
        </div>

        {/* Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {reviews.map((review) => (
            <motion.div 
              key={review.id} 
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full"
              variants={cardVariants}
              whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(0, 0, 0, 0.1)" }}
            >
              <StarRating rating={review.stars} />
              
              <p className="text-gray-700 text-lg leading-relaxed mb-8 grow">
                {review.content}
              </p>

              <div className="flex items-center gap-4 mt-auto">
                {/* Fallback avatar circle if no image exists */}
                <div className="w-12 h-12 rounded-full bg-[#E8F1F0] flex items-center justify-center text-[#3A7068] font-bold text-xl">
                  {review.name.charAt(0)}
                </div>
                
                <div>
                  <h4 className="font-bold text-gray-900">{review.name}</h4>
                  <p className="text-sm text-gray-500">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}