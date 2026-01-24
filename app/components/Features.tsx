import React from 'react';

const features = [
  {
    icon: (
      <svg className="w-8 h-8 md:w-10 md:h-10 text-[#3A7068]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "Group Expense Management",
    description: "Add expenses using your voice. Quassama captures amounts and details instantly without manual typing.",
    highlight: false
  },
  {
    icon: (
      <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
      </svg>
    ),
    title: "Smart Expense Detection",
    description: "Add expenses using your voice. Quassama captures amounts and details instantly without manual typing.",
    highlight: true
  },
  {
    icon: (
      <svg className="w-8 h-8 md:w-10 md:h-10 text-[#3A7068]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
    title: "Smart \nExpense Organization",
    description: "Expenses are automatically organized and prepared for review, keeping everything clear and structured.",
    highlight: false
  },
  {
    icon: (
      <svg className="w-8 h-8 md:w-10 md:h-10 text-[#3A7068]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
    title: "Monthly Budget Control",
    description: "Set a monthly budget and track your spending to stay in control and avoid overspending.",
    highlight: false
  }
];

export default function Features() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-[#3A7068] text-3xl md:text-5xl font-bold mb-12 text-center md:text-left">
          Features Design for Simplicity
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`rounded-2xl p-6 md:p-8 flex flex-col h-full transition-shadow duration-300 hover:shadow-xl border border-gray-100 ${
                feature.highlight 
                  ? "bg-[#457B74] text-white shadow-lg" 
                  : "bg-white text-gray-900 border-gray-200"
              }`}
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
