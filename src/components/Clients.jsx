
import React from 'react';

/**
 * Clients Component
 * An enterprise-grade "Trusted By" social proof section designed with premium glassmorphism,
 * dynamic grid structures, micro-interactions, and full semantic accessibility.
 */
export default function Clients() {
  // 100% compliant, non-copyrighted mock enterprise technology entities
  const clientLogos = [
    { name: 'NovaTech', segment: 'AI & Automation' },
    { name: 'FutureSoft', segment: 'Enterprise Cloud' },
    { name: 'PixelForge', segment: 'Digital Architecture' },
    { name: 'CloudWorks', segment: 'SaaS Infrastructure' },
    { name: 'NextCore', segment: 'Distributed Systems' },
    { name: 'PrimeStack', segment: 'FinTech Platforms' },
  ];

  return (
    <section 
      className="relative w-full py-20 lg:py-28 bg-[#000000] overflow-hidden select-none"
      aria-labelledby="clients-heading"
    >
      {/* Ambient Light Injectors (Premium Vector Mesh Layer) */}
      <div 
        className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#00f2fe]/5 blur-[120px] rounded-full pointer-events-none mix-blend-screen" 
        aria-hidden="true" 
      />
      <div 
        className="absolute top-1/3 right-1/4 -translate-y-1/2 w-80 h-80 bg-[#4facfe]/5 blur-[100px] rounded-full pointer-events-none mix-blend-screen" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center space-y-4 mb-16 max-w-3xl mx-auto">
          
          {/* Accent Badge Anchor */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900/80 border border-neutral-800/60 text-xs font-semibold tracking-wider text-[#00f2fe] uppercase backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00f2fe] animate-pulse" aria-hidden="true" />
            Trusted By Global Teams
          </div>

          {/* Heading Node */}
          <h2 
            id="clients-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-white"
          >
            Helping Businesses Build Modern{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00f2fe] via-[#4facfe] to-indigo-400">
              Digital Products
            </span>
          </h2>

          {/* Context Explainer */}
          <p className="text-base sm:text-lg text-neutral-400 font-light leading-relaxed">
            OnyxStack Labs engineers scalable, high-performance software frameworks, custom automations, 
            and resilient data infrastructure nodes for fast-growing startups, strategic SMEs, and global market enterprises.
          </p>
        </div>

        {/* High-Fidelity Interactive Grid Frame */}
        <div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 w-full"
          role="group"
          aria-label="Partner enterprise logos"
        >
          {clientLogos.map((client, index) => (
            <div
              key={index}
              tabIndex={0}
              className="group relative flex flex-col items-center justify-center p-6 rounded-xl bg-neutral-900/30 border border-neutral-800/40 backdrop-blur-sm transition-all duration-300 ease-out outline-none hover:-translate-y-1.5 hover:bg-neutral-900/60 hover:border-neutral-700/60 focus:ring-2 focus:ring-[#00f2fe]/50 focus:border-[#00f2fe] cursor-pointer"
              aria-label={`Partner company: ${client.name}, specializing in ${client.segment}`}
            >
              {/* Subtle Internal Radial Glow Overlay */}
              <div 
                className="absolute inset-0 rounded-xl bg-[radial-gradient(circle_at_center,rgba(0,242,254,0.02)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" 
                aria-hidden="true" 
              />

              {/* Company Textual Visual Mark */}
              <span className="text-xl font-bold tracking-tight text-neutral-400 group-hover:text-white transition-colors duration-300">
                {client.name}
              </span>

              {/* Secondary Infrastructure Label Node */}
              <span className="mt-1 text-[10px] font-medium tracking-wide text-neutral-600 group-hover:text-[#00f2fe]/80 uppercase transition-colors duration-300">
                {client.segment}
              </span>

              {/* Edge Gradient Ambient Glow Accent */}
              <div 
                className="absolute -inset-[1px] rounded-xl bg-gradient-to-r from-[#00f2fe]/20 to-[#4facfe]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none blur-sm z-[-1]" 
                aria-hidden="true" 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
