// WhyChooseUs.jsx
import React from 'react';

export default function WhyChooseUs({ valueProps }) {
  return (
    <section id="why-choose-us" className="relative z-10 border-t border-neutral-900 bg-[#050505]/20 py-28 px-6 overflow-hidden" aria-labelledby="why-us-title">
      {/* Ambient background glow, consistent with Portfolio/About */}
      <div className="absolute top-0 left-1/4 -translate-x-1/2 w-[600px] h-[400px] bg-[#06B6D4]/[0.04] blur-[160px] rounded-full pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#2563EB]/[0.04] blur-[180px] rounded-full pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto space-y-20 relative z-10">
        <div className="text-center space-y-3">
          <h2 id="why-us-title" className="text-xs font-mono font-bold uppercase tracking-widest text-[#06B6D4]">Our Strategic Advantage</h2>
          <p className="text-2xl md:text-3xl font-black tracking-tight uppercase text-white">Built For Real Commercial Impact</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {valueProps.map((prop, idx) => (
            <div
              key={idx}
              className="group relative bg-[#090909]/60 backdrop-blur-md border border-neutral-900 p-6 rounded-2xl flex gap-4 items-start transition-all duration-300 ease-out hover:border-[#06B6D4]/30 hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(0,0,0,0.6),0_0_25px_rgba(6,182,212,0.08)]"
            >
              {/* Soft glow wash on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-cyan-500/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <div className="relative mt-0.5 w-5 h-5 rounded-full bg-cyan-950/40 border border-cyan-400/20 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:border-[#06B6D4]/60 group-hover:bg-cyan-950/60 group-hover:shadow-[0_0_12px_rgba(6,182,212,0.3)]">
                <svg className="w-2.5 h-2.5 text-[#06B6D4]" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="relative space-y-1">
                <h3 className="text-sm font-bold text-neutral-100 font-mono uppercase tracking-wider transition-colors duration-300 group-hover:text-cyan-300">{prop.title}</h3>
                <p className="text-xs text-neutral-400 leading-relaxed font-normal">{prop.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
