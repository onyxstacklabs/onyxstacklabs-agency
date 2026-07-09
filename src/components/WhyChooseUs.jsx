import React from 'react';

export default function WhyChooseUs({ valueProps }) {
  return (
    <section id="why-choose-us" className="relative z-10 border-t border-neutral-900 bg-[#050505]/20 py-28 px-6" aria-labelledby="why-us-title">
      <div className="max-w-7xl mx-auto space-y-20">
        <div className="text-center space-y-3">
          <h2 id="why-us-title" className="text-xs font-mono font-bold uppercase tracking-widest text-[#06B6D4]">Our Strategic Advantage</h2>
          <p className="text-2xl md:text-3xl font-black tracking-tight uppercase text-white">Built For Real Commercial Impact</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {valueProps.map((prop, idx) => (
            <div key={idx} className="bg-[#090909]/60 backdrop-blur-sm border border-neutral-900 p-6 rounded-2xl flex gap-4 items-start hover:border-neutral-800 transition-all duration-300 group">
              <div className="mt-0.5 w-5 h-5 rounded-full bg-cyan-950/40 border border-cyan-400/20 flex items-center justify-center shrink-0 group-hover:border-[#06B6D4]/50 transition-colors duration-300">
                <svg className="w-2.5 h-2.5 text-[#06B6D4]" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-bold text-neutral-100 font-mono uppercase tracking-wider">{prop.title}</h3>
                <p className="text-xs text-neutral-400 leading-relaxed font-normal">{prop.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
