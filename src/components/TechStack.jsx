import React from 'react';

export default function TechStack({ techStackBadges }) {
  return (
    <section className="relative z-10 border-t border-neutral-900 bg-[#090909]/20 py-20 px-6" aria-labelledby="tech-title">
      <div className="max-w-5xl mx-auto space-y-10">
        <div className="text-center space-y-2">
          <h2 id="tech-title" className="text-xs font-mono font-bold uppercase tracking-widest text-[#06B6D4]">The Technology Architecture Blueprint</h2>
          <p className="text-xs text-neutral-500 font-mono uppercase tracking-widest">High-performance tech stacks configured for microsecond hot reload optimization.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-2.5 max-w-3xl mx-auto">
          {techStackBadges.map((tech, idx) => (
            <span 
              key={idx} 
              className="bg-neutral-950 border border-neutral-900/80 text-neutral-400 font-mono text-[11px] px-3.5 py-1.5 rounded-xl hover:border-[#06B6D4]/30 hover:text-white transition-all duration-200 cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
