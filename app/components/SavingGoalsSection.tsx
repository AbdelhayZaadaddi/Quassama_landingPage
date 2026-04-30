"use client";

import React from "react";
import { motion } from "framer-motion";

const highlights = [
  {
    icon: (
      <svg
        className="w-6 h-6 text-[#3A7068]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
    title: "Set a Target & Timeline",
    description:
      "Define how much you want to save and in how many days. Quassama builds your daily saving plan automatically.",
  },
  {
    icon: (
      <svg
        className="w-6 h-6 text-[#3A7068]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: "Daily Smart Reminders",
    description:
      "Get a personalized daily saving target so you never fall behind your goal — small steps, big results.",
  },
  {
    icon: (
      <svg
        className="w-6 h-6 text-[#3A7068]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
        />
      </svg>
    ),
    title: "Track Multiple Goals",
    description:
      "Run several saving challenges at once — for a trip, a gadget, or an emergency fund — all in one place.",
  },
];

export default function SavingGoalsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" as const },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -50, scale: 0.95 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.9, ease: "easeOut" as const },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };

  return (
    <section className="bg-[#f8faf9] py-20 overflow-hidden relative">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#3A7068]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#3A7068]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {/* Left: App Screenshot */}
          <motion.div
            variants={cardVariants}
            className="grid grid-cols-1 justify-center items-center h-full px-3"
          >
            <div className="relative max-w-3xl">
              {/* Glow effect behind the visual */}
              <div className="absolute inset-0 bg-[#3A7068]/10 rounded-2xl blur-2xl scale-95 translate-y-4" />

              {/* Main mockup card */}
              <div className="relative rounded-4xl border border-[#d9e7e4] bg-white p-4 shadow-sm">
                <div className="rounded-2xl bg-[#2f6f68] p-4 text-white">
                  <p className="text-sm font-medium text-white/80">
                    Saving Goals
                  </p>
                  <p className="mt-1 text-3xl font-bold leading-none">
                    2,632 DH
                  </p>
                  <p className="mt-1 text-xs text-white/75">Total Savings</p>
                </div>

                <div className="mt-4 space-y-3">
                  <div className="rounded-xl border border-gray-200 bg-[#fcfdfd] p-3">
                    <div className="mb-2 flex items-center justify-between">
                      <p className="font-semibold text-gray-900">1,000 dh</p>
                      <span className="rounded-full bg-[#e8f1f0] px-2 py-0.5 text-xs font-semibold text-[#3A7068]">
                        Completed
                      </span>
                    </div>
                    <div className="h-2 rounded-full bg-gray-200">
                      <div className="h-2 w-full rounded-full bg-[#3A7068]" />
                    </div>
                  </div>

                  <div className="rounded-xl border border-gray-200 bg-[#fcfdfd] p-3">
                    <div className="mb-2 flex items-center justify-between">
                      <p className="font-semibold text-gray-900">500 dh</p>
                      <span className="rounded-full bg-[#e8f1f0] px-2 py-0.5 text-xs font-semibold text-[#3A7068]">
                        Active
                      </span>
                    </div>
                    <div className="h-2 rounded-full bg-gray-200">
                      <div className="h-2 w-[6%] rounded-full bg-[#3A7068]" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badge: Total Saved */}
              <motion.div
                className="absolute -right-4 top-12 bg-white rounded-2xl shadow-sm px-4 py-3 border border-gray-100"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <p className="text-xs text-gray-500 font-medium">Total Saved</p>
                <p className="text-xl font-bold text-[#3A7068]">2,632 DH</p>
              </motion.div>

              {/* Floating badge: Goal Completed */}
              <motion.div
                className="absolute -left-4 bottom-20 bg-[#3A7068] rounded-2xl shadow-sm px-4 py-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <div className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <p className="text-white text-sm font-semibold">
                    Goal Completed!
                  </p>
                </div>
                <p className="text-white/70 text-xs mt-0.5">
                  1,000 DH in 30 days
                </p>
              </motion.div>
            </div>

            {/* Progress bar illustration */}
            <div className="mt-10 bg-white rounded-2xl p-5 border border-gray-100 shadow-sm max-w-3xl">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-semibold text-gray-700">
                  30 Days Challenge
                </span>
                <span className="text-sm font-bold text-[#3A7068]">
                  100% Saved
                </span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden">
                <motion.div
                  className="h-3 bg-[#3A7068] rounded-full"
                  initial={{ width: "0%" }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
                />
              </div>
              <div className="flex items-center justify-between mt-2">
                <span className="text-xs text-gray-400">1,000 / 1,000 DH</span>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#3A7068] bg-[#e8f1f0] px-2 py-0.5 rounded-full">
                  <svg
                    className="w-3 h-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Completed
                </span>
              </div>
            </div>
          </motion.div>
          

          {/* Right: Text Content */}
          <motion.div variants={textVariants} className="flex flex-col">

            {/* Heading */}
            <h2 className="text-[#3A7068] text-3xl md:text-5xl font-bold mb-4 leading-tight">
              Turn Your Dreams <br />
              <span className="text-gray-900">Into Daily Actions.</span>
            </h2>

            {/* Subtext */}
            <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-10">
              Saving money has never felt this structured. Set a target, choose
              your timeline, and Quassama breaks it down into achievable daily
              goals — so you stay on track without the stress.
            </p>

            {/* Highlight items */}
            <motion.div
              className="flex flex-col gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {highlights.map((item, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="flex items-start gap-4"
                >
                  <div className="shrink-0 w-12 h-12 bg-[#e8f1f0] rounded-xl flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg mb-1">
                      {item.title}
                    </h4>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
