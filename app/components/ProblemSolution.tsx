import React from 'react';

export default function ProblemSolution() {
  return (
    <section className="bg-white py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Container for the composition */}
        <div className="relative flex flex-col items-center justify-center min-h-[500px] md:min-h-[700px]">

          {/* Central Image Placeholder */}
          {/* Using a aspect ratio that mimics a landscape phone + some padding */}
          <div className="relative w-full max-w-5xl aspect-[16/9] md:aspect-[21/9] flex items-center justify-center my-8 md:my-0">
             <div className="w-full h-full bg-gray-50 rounded-[3rem] border-4 border-dashed border-gray-200 flex flex-col items-center justify-center text-gray-400 p-8 shadow-inner">
                <svg className="w-20 h-20 mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="font-semibold text-lg">Landscape Phone Image</p>
                <p className="text-sm">Place your image here (approx 1200x600px)</p>
             </div>
          </div>

          {/* Top Left Card */}
          <div className="bg-white p-6 md:p-10 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] max-w-xl w-full md:absolute md:top-0 md:left-0 lg:left-4 z-20 border border-gray-100">
             <h3 className="text-[#3A7068] text-2xl md:text-3xl font-bold mb-4">
                Group Expenses Are Always Messy
             </h3>
             <p className="text-gray-600 text-lg leading-relaxed">
                Managing shared expenses often leads to confusion, forgotten payments,
                and unfair splits. Quassama removes friction by organizing every expense
                clearly and transparently.
             </p>
          </div>

          {/* Bottom Right Card */}
          <div className="bg-white p-6 md:p-10 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] max-w-xl w-full md:absolute md:bottom-0 md:right-0 lg:right-4 z-20 border border-gray-100 mt-6 md:mt-0">
             <h3 className="text-[#3A7068] text-2xl md:text-3xl font-bold mb-4">
                One App. Total Clarity.
             </h3>
             <p className="text-gray-600 text-lg leading-relaxed">
                Quassama centralizes all group expenses, automatically calculates balances,
                and shows who owes what in real time — so everyone stays on the same
                page.
             </p>
          </div>

        </div>
      </div>
    </section>
  );
}
