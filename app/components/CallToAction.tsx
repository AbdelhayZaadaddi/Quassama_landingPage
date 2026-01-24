import React from 'react';
import Image from 'next/image';
import SmilingImage from '../../assets/smiling.png';

export default function CallToAction() {
  return (
    <section className="bg-[#1A1A1A] text-white pt-20 pb-0 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          
          {/* Left Content */}
          <div className="w-full md:w-1/2 mb-12 md:mb-20 z-10">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Ready to Simplify Group Expenses?
            </h2>
            <p className="text-gray-300 text-lg mb-10 max-w-lg">
              Join the future of stress-free expense management with Quassama.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Google Play Button */}
              <a 
                href="https://play.google.com/store/apps/details?id=com.quassama.app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors border border-gray-300 w-48 justify-center sm:justify-start"
              >
               <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current text-black" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
               </svg>
               <div className="text-left">
                  <div className="text-[10px] font-medium uppercase">Get it on</div>
                  <div className="text-md font-bold leading-none">Google Play</div>
               </div>
              </a>

              {/* App Store Button */}
              <a 
                href="https://apps.apple.com/us/app/quassama/id6752957774"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors border border-gray-300 w-48 justify-center sm:justify-start"
              >
               <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current text-black" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.37 12.36,4.26 13,3.5Z" />
               </svg>
               <div className="text-left">
                  <div className="text-[10px] font-medium uppercase">Download on the</div>
                  <div className="text-md font-bold leading-none">App Store</div>
               </div>
              </a>
            </div>
          </div>

          {/* Right Content: Image */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end relative translate-y-2">
             <div className="relative w-full max-w-sm md:max-w-md flex items-end justify-center">
                 <Image
                    src={SmilingImage}
                    alt="Happy user"
                    className="w-full h-auto object-contain"
                 />
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
