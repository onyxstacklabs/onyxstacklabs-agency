import React from 'react';

export default function Hero() {
  return (
    <header className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-24 text-center md:pt-40 md:pb-36 space-y-10">
      <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-[#06B6D4]/20 rounded-full text-[11px] font-mono tracking-wider uppercase text-[#06B6D4] bg-[#06B6D4]/5 backdrop-blur-sm mx-auto animate-fade-in">
        <span className="w-1.5 h-1.5 rounded-full bg-[#06B6D4] shadow-[0_0_8px_#06B6D4]"></span>
        Building Smarter Software for Global Businesses
      </div>
      
      <div className="space-y-6 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white uppercase leading-[1.05]">
          Enterprise Software.<br />
          AI Automation.<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-100 via-neutral-400 to-[#06B6D4]">
            Scalable Digital Products.
          </span>
        </h1>
        <p className="text-sm sm:text-base text-neutral-400 max-w-2xl mx-auto leading-relaxed font-normal tracking-wide">
          OnyxStack Labs designs premium web platforms, AI-powered automation and custom business software engineered for performance, security and long-term scalability.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
        <a 
          href="#contact" 
          className="w-full sm:w-auto bg-[#06B6D4] hover:bg-cyan-400 text-black px-8 py-3.5 rounded-xl font-bold text-xs uppercase tracking-widest shadow-[0_0_20px_rgba(6,182,212,0.2)] transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-[#06B6D4] text-center"
        >
          Start Your Project
        </a>
        <a 
          href="#portfolio" 
          className="w-full sm:w-auto bg-neutral-900/50 hover:bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white px-8 py-3.5 rounded-xl font-bold text-xs uppercase tracking-widest transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-neutral-700 text-center"
        >
          View Portfolio
        </a>
      </div>

      {/* Floating Scroll Indicator */}
      <div className="pt-10 animate-bounce hidden md:block">
        <a href="#services" aria-label="Scroll Down" className="text-neutral-600 hover:text-[#06B6D4] transition-colors">
          <svg className="w-5 h-5 mx-auto" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg>
        </a>
      </div>

      <div className="flex pt-20 md:pt-28 border-t border-neutral-900/60 max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6">
        {[
          { metric: "Verified", label: "Production Deployments" },
          { metric: "100%", label: "Custom Product Engineering" },
          { metric: "AI-Powered", label: "Workflow Automation Models" },
          { metric: "Premium", label: "UI/UX Aesthetic Standard" }
        ].map((stat, idx) => (
          <div key={idx} className="space-y-1 group border-r border-neutral-900 last:border-none last:pr-0">
            <div className="text-xl md:text-2xl font-black text-white group-hover:text-[#06B6D4] transition-colors duration-300 font-mono">{stat.metric}</div>
            <div className="text-[10px] text-neutral-500 uppercase tracking-widest font-mono font-medium max-w-[140px] mx-auto">{stat.label}</div>
          </div>
        ))}
      </div>
    </header>
  );
}
