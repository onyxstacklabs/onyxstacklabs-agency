import React from 'react';

export default function Process({ deliveryProcess }) {
  return (
    <section id="process" className="relative z-10 border-t border-neutral-900 py-28 px-6 max-w-7xl mx-auto space-y-20" aria-labelledby="process-title">
      <div className="text-center space-y-3">
        <h2 id="process-title" className="text-xs font-mono font-bold uppercase tracking-widest text-[#06B6D4]">Execution Timeline</h2>
        <p className="text-2xl md:text-3xl font-black tracking-tight uppercase text-white">From Blueprint to Deployment Loop</p>
      </div>

      <div className="relative max-w-4xl mx-auto before:absolute before:inset-0 before:left-4 md:before:left-1/2 before:w-[1px] before:bg-neutral-900 before:pointer-events-none">
        {deliveryProcess.map((proc, idx) => (
          <div key={idx} className={`relative flex flex-col md:flex-row items-start mb-10 last:mb-0 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
            <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-black border border-neutral-800 flex items-center justify-center z-10 shadow-[0_0_10px_rgba(0,0,0,0.9)]">
              <span className="text-[9px] font-mono text-[#06B6D4] font-bold">{proc.step}</span>
            </div>
            
            <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${idx % 2 === 0 ? 'md:pr-12 text-left md:text-right' : 'md:pl-12 text-left'}`}>
              <div className="bg-[#090909]/40 backdrop-blur-sm border border-neutral-900 p-5 rounded-2xl hover:border-neutral-800 transition-colors duration-300 inline-block w-full">
                <h3 className="text-sm font-bold text-white mb-1 font-mono uppercase tracking-wider">{proc.label}</h3>
                <p className="text-xs text-neutral-400 leading-relaxed font-normal">{proc.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
