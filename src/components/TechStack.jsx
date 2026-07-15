// TechStack.jsx
import React from 'react';

export default function TechStack({ techStackBadges }) {
  return (
    <section className="relative z-10 border-t border-neutral-900 bg-[#090909]/20 py-20 px-6 overflow-hidden" aria-labelledby="tech-title">
      {/* Ambient background glow, consistent with Portfolio/About */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[#06B6D4]/[0.04] blur-[150px] rounded-full pointer-events-none" aria-hidden="true" />

      <div className="max-w-5xl mx-auto space-y-10 relative z-10">
        <div className="text-center space-y-2">
          <h2 id="tech-title" className="text-xs font-mono font-bold uppercase tracking-widest text-[#06B6D4]">The Technology Architecture Blueprint</h2>
          <p className="text-xs text-neutral-500 font-mono uppercase tracking-widest">High-performance tech stacks configured for microsecond hot reload optimization.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-2.5 max-w-3xl mx-auto">
          {techStackBadges.map((tech, idx) => (
            <span
              key={idx}
              className="bg-neutral-950 border border-neutral-900/80 text-neutral-400 font-mono text-[11px] px-3.5 py-1.5 rounded-xl transition-all duration-300 ease-out cursor-default hover:border-[#06B6D4]/40 hover:text-white hover:-translate-y-0.5 hover:shadow-[0_0_16px_rgba(6,182,212,0.18)] hover:bg-neutral-900/60"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
