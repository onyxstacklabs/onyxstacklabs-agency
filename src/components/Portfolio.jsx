import React from 'react';

export default function Portfolio({ projects }) {
  return (
    <section id="portfolio" className="relative z-10 py-28 px-6 max-w-7xl mx-auto space-y-20" aria-labelledby="portfolio-title">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-neutral-900 pb-8">
        <div className="space-y-3">
          <h2 id="portfolio-title" className="text-xs font-mono font-bold uppercase tracking-widest text-[#06B6D4]">Selected Product Deployments</h2>
          <p className="text-2xl md:text-3xl font-black tracking-tight uppercase text-white">Live Production Ecosystem</p>
        </div>
        <div className="inline-block bg-neutral-900/30 backdrop-blur-sm border border-neutral-800 px-4 py-2 rounded-xl font-mono text-[11px] uppercase tracking-widest text-neutral-400">
          Active Verified Instances
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <article 
            key={project.id} 
            className="bg-[#090909]/40 backdrop-blur-sm border border-neutral-900 rounded-2xl p-6 flex flex-col justify-between hover:border-[#06B6D4]/20 transition-all duration-300 relative overflow-hidden group hover:shadow-[0_10px_30px_rgba(0,0,0,0.6)]"
          >
            {project.liveUrl !== "#" && (
              <span className="absolute top-4 right-4 bg-emerald-950/40 border border-emerald-500/20 text-[#00e676] text-[9px] font-mono font-bold px-2.5 py-0.5 rounded-full uppercase tracking-widest flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-[#00e676] animate-pulse"></span> Live Setup
              </span>
            )}
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-bold text-white group-hover:text-[#06B6D4] transition-colors duration-300">{project.name}</h3>
                <p className="text-[9px] font-mono font-bold text-[#06B6D4] tracking-widest uppercase mt-1">{project.tagline}</p>
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed font-normal min-h-[64px]">{project.description}</p>
            </div>

            <div className="mt-6 space-y-4 pt-4 border-t border-neutral-900/60">
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((tag, idx) => (
                  <span key={idx} className="bg-neutral-900/60 text-neutral-400 border border-neutral-800/40 font-mono text-[9px] px-2 py-0.5 rounded">
                    {tag}
                  </span>
                ))}
              </div>
              
              <a 
                href={project.liveUrl}
                target={project.liveUrl !== "#" ? "_blank" : "_self"}
                rel="noopener noreferrer"
                className="w-full bg-neutral-900/80 hover:bg-[#06B6D4] border border-neutral-800/80 text-neutral-300 hover:text-black font-bold text-[11px] uppercase tracking-widest py-3 px-4 rounded-xl flex items-center justify-center gap-2 group/btn transition-all duration-300 text-center focus:outline-none focus:ring-2 focus:ring-[#06B6D4]"
                aria-label={`Launch deployment instance demo for ${project.name}`}
              >
                Launch Client Instance <span className="group-hover/btn:translate-x-0.5 transition-transform duration-300">→</span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
