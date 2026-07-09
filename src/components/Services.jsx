import React from 'react';

export default function Services({ coreServices }) {
  return (
    <section id="services" className="relative z-10 border-t border-neutral-900 bg-[#050505]/20 py-28 px-6" aria-labelledby="services-title">
      <div className="max-w-7xl mx-auto space-y-20">
        <div className="text-center space-y-3">
          <h2 id="services-title" className="text-xs font-mono font-bold uppercase tracking-widest text-[#06B6D4]">Capabilities Matrix</h2>
          <p className="text-2xl md:text-3xl font-black tracking-tight uppercase text-white">Engineered Solutions for Complex Problems</p>
          <p className="text-xs sm:text-sm text-neutral-400 max-w-xl mx-auto leading-relaxed font-normal">High-performance production apps built cleanly with zero bloatware runtime execution templates.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreServices.map((service, idx) => (
            <div 
              key={idx} 
              className="bg-[#090909]/60 backdrop-blur-sm border border-neutral-900 rounded-2xl p-6 space-y-4 hover:border-[#06B6D4]/30 transition-all duration-300 group hover:shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
            >
              <div className="w-10 h-10 rounded-xl bg-neutral-900 flex items-center justify-center border border-neutral-800 group-hover:bg-cyan-950/20 group-hover:border-[#06B6D4]/20 transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="text-base font-bold text-neutral-100 group-hover:text-[#06B6D4] transition-colors duration-300">{service.title}</h3>
              <p className="text-xs text-neutral-400 leading-relaxed font-normal">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
