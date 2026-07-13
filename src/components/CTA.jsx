
import React from 'react';
import { Link } from 'react-router-dom';

/**
 * CTA Component
 * High-conversion enterprise call-to-action block.
 * Features ambient glow optics, glassmorphism surface, and dual-track conversion routing.
 */
export default function CTA() {
  return (
    <section 
      className="relative w-full py-24 lg:py-32 bg-[#000000] overflow-hidden select-none"
      aria-labelledby="cta-heading"
    >
      {/* Dynamic Ambient Background Glow Matrix */}
      <div 
        className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-[#00f2fe]/10 via-[#4facfe]/5 to-transparent blur-[150px] rounded-full pointer-events-none mix-blend-screen" 
        aria-hidden="true" 
      />
      
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="relative p-1 rounded-3xl bg-gradient-to-b from-neutral-800 to-neutral-900 border border-neutral-800 shadow-2xl">
          <div className="absolute inset-0 bg-[#000000] rounded-[22px]" />
          
          <div className="relative flex flex-col items-center text-center py-16 px-6 sm:px-12">
            
            {/* Section Indicator Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full bg-neutral-900/80 border border-neutral-700/50 text-[10px] font-bold tracking-widest text-[#00f2fe] uppercase backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00f2fe] animate-pulse" aria-hidden="true" />
              Let's Build Together
            </div>

            {/* Headline Anchor */}
            <h2 
              id="cta-heading"
              className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-6"
            >
              Ready to Transform Your{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00f2fe] to-[#4facfe]">
                Business?
              </span>
            </h2>

            {/* Enterprise Value Proposition */}
            <p className="max-w-2xl text-base sm:text-lg text-neutral-400 font-light leading-relaxed mb-12">
              OnyxStack Labs partners with visionary startups, agile SMEs, and established enterprises to engineer 
              scalable software architectures, advanced AI automation frameworks, high-performance web platforms, 
              and robust mobile applications.
            </p>

            {/* Dual Conversion Routing Paths */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
              <Link
                to="/contact"
                className="w-full sm:w-auto px-10 py-4 bg-gradient-to-r from-[#00f2fe] to-[#4facfe] text-black font-bold text-sm rounded-lg shadow-[0_4px_25px_rgba(0,242,254,0.2)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#00f2fe] focus:ring-offset-2 focus:ring-offset-black"
                aria-label="Start your digital transformation project"
              >
                Start Your Project
              </Link>

              <Link
                to="/portfolio"
                className="w-full sm:w-auto px-10 py-4 bg-neutral-900 border border-neutral-800 hover:border-neutral-700 hover:bg-neutral-800 text-white font-semibold text-sm rounded-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-neutral-700 focus:ring-offset-2 focus:ring-offset-black"
                aria-label="View our enterprise software portfolio"
              >
                View Portfolio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
