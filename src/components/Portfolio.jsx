import React from 'react';

// Premium Production Ecosystem Data Layer
const ECOSYSTEM_PROJECTS = [
  {
    id: 'tailors',
    name: 'OnyxStack Tailors',
    tagline: 'AI-Assisted Measurement Scanning',
    description: 'Advanced production-grade automation layer leveraging machine learning frameworks to extract handwritten dimensions and images into deterministic structured relational databases.',
    tech: ['React', 'Firebase', 'Gemini API', 'Tailwind'],
    liveUrl: 'https://onyxstack-tailors.vercel.app/'
  },
  {
    id: 'mudra',
    name: 'OnyxStack Mudra',
    tagline: 'Secure Transaction Portal Core',
    description: 'High-fidelity micro-services financial ledger system featuring cryptographic balance validation, real-time client transaction streaming, and integrated multi-tenant accounting telemetry.',
    tech: ['React', 'Firebase Store', 'Tailwind UI'],
    liveUrl: 'https://onyxstack-mudra.vercel.app/'
  },
  {
    id: 'school',
    name: 'OnyxStack School',
    tagline: 'Enterprise ERP Management Module',
    description: 'Comprehensive educational resource architecture governing complex asynchronous operations, live student tracking indices, and high-performance administrative state controls.',
    tech: ['React', 'Cloud Firestore', 'Vite Engine'],
    liveUrl: 'https://onyxstack-school.vercel.app/'
  },
  {
    id: 'gatepass',
    name: 'OnyxStack GatePass',
    tagline: 'QR Security Scanning Network',
    description: 'Low-latency dual-camera access control system processing rapid edge hardware validations, encrypted verification matrices, and continuous background security snapshots.',
    tech: ['React', 'Firebase Auth', 'Hardware API'],
    liveUrl: 'https://onyxstack-gatepass.vercel.app/'
  },
  {
    id: 'lottery',
    name: 'OnyxStack Lottery',
    tagline: 'Live Engagement Matrix',
    description: 'Ultra-performant, mathematically verified pseudo-random indexing core and data visualizer optimized for high-velocity real-time participant concurrency workloads.',
    tech: ['React', 'Tailwind CSS', 'Vite Engine'],
    liveUrl: 'https://onyxstack-lottery.vercel.app/'
  },
  {
    id: 'cricket',
    name: 'OnyxStack Cricket',
    tagline: 'Real-Time Scoring Infrastructure',
    description: 'Microsecond synchronized event broker system serving ball-by-ball performance pipelines, dynamic client viewport rendering, and multi-bracket analytics layouts.',
    tech: ['React', 'Tailwind UI', 'State Engine'],
    liveUrl: 'https://onyxstack-cricket.vercel.app/'
  }
];

export default function Portfolio() {
  return (
    <section 
      id="portfolio" 
      className="relative z-10 py-28 px-6 max-w-7xl mx-auto space-y-20" 
      aria-labelledby="portfolio-title"
    >
      {/* Header Matrix Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-neutral-900 pb-8">
        <div className="space-y-3">
          <h2 id="portfolio-title" className="text-xs font-mono font-bold uppercase tracking-widest text-[#06B6D4]">
            Selected Product Deployments
          </h2>
          <p className="text-2xl md:text-3xl font-black tracking-tight uppercase text-white">
            Live Production Ecosystem
          </p>
        </div>
        <div className="inline-block bg-neutral-900/30 backdrop-blur-sm border border-neutral-800 px-4 py-2 rounded-xl font-mono text-[11px] uppercase tracking-widest text-neutral-400">
          Active Verified Instances
        </div>
      </div>

      {/* Interactive Architecture Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {ECOSYSTEM_PROJECTS.map((project) => (
          <a
            key={project.id}
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View live interactive deployment instance demo for ${project.name}: ${project.tagline}`}
            className="group block bg-[#090909]/40 backdrop-blur-sm border border-neutral-900 rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden transition-all duration-300 outline-none hover:border-[#06B6D4]/30 hover:scale-[1.015] hover:shadow-[0_15px_35px_rgba(0,0,0,0.7),0_0_20px_rgba(6,182,212,0.05)] focus:ring-2 focus:ring-[#06B6D4] focus:border-[#06B6D4]/40"
          >
            {/* Live Operational Badge */}
            <span className="absolute top-4 right-4 bg-emerald-950/40 border border-emerald-500/20 text-[#00e676] text-[9px] font-mono font-bold px-2.5 py-0.5 rounded-full uppercase tracking-widest flex items-center gap-1.5 transition-colors duration-300 group-hover:border-emerald-500/40">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00e676] animate-pulse"></span> 
              LIVE
            </span>
            
            {/* Main Project Specification Block */}
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-bold text-white group-hover:text-[#06B6D4] transition-colors duration-300">
                  {project.name}
                </h3>
                <p className="text-[9px] font-mono font-bold text-[#06B6D4] tracking-widest uppercase mt-1">
                  {project.tagline}
                </p>
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed font-normal min-h-[64px]">
                {project.description}
              </p>
            </div>

            {/* Technical Stack & Action Vector Layer */}
            <div className="mt-6 space-y-4 pt-4 border-t border-neutral-900/60">
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((tag, idx) => (
                  <span 
                    key={idx} 
                    className="bg-neutral-900/60 text-neutral-400 border border-neutral-800/40 font-mono text-[9px] px-2 py-0.5 rounded transition-all duration-300 group-hover:border-neutral-700 group-hover:text-neutral-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              {/* Semantic CSS Button Component Mock */}
              <div 
                className="w-full bg-neutral-900/80 group-hover:bg-[#06B6D4] border border-neutral-800/80 group-hover:border-[#06B6D4] text-neutral-300 group-hover:text-black font-mono font-bold text-[11px] uppercase tracking-widest py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 text-center"
              >
                <span>View Live Demo</span>
                <svg 
                  className="w-3 h-3 transform transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor" 
                  strokeWidth="2.5"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
