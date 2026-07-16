import React from 'react';

/**
 * BrandShowcase Component
 * Premium brand narrative centerpiece for OnyxStack Labs.
 * Fully aligned with the modern dark mode cyan/blue design system.
 * Minimalist grid overlays, noise textures, and optimized hardware-accelerated micro-interactions.
 */

// Elegant inline SVG icon components
const IconCode = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

const IconLayers = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <polygon points="12 2 2 7 12 12 22 7 12 2" />
    <polyline points="2 17 12 22 22 17" />
    <polyline points="2 12 12 17 22 12" />
  </svg>
);

const IconSparkles = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8" />
  </svg>
);

const IconCloud = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M17.5 19a4.5 4.5 0 0 0 0-9h-1.26A8 8 0 1 0 4 15.25" />
    <path d="M8 19h9.5" />
  </svg>
);

const IconArrowUpRight = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);

const IconTarget = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="5" />
    <circle cx="12" cy="12" r="1" fill="currentColor" />
  </svg>
);

const IconHandshake = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

export default function BrandShowcase() {
  const highlights = [
    {
      icon: IconCode,
      title: 'Custom Software',
      desc: 'Applications engineered around your actual workflows and data, not retrofitted from a generic template.'
    },
    {
      icon: IconLayers,
      title: 'Enterprise Architecture',
      desc: 'Systems designed to stay coherent as your team, traffic, and feature set grow well beyond launch.'
    },
    {
      icon: IconSparkles,
      title: 'AI Solutions',
      desc: 'AI features integrated where they solve a real problem — embedded in your product, not sold as a demo.'
    },
    {
      icon: IconCloud,
      title: 'Cloud Infrastructure',
      desc: 'Resilient, observable infrastructure that holds up under real production load, not just a staging test.'
    }
  ];

  const principles = [
    {
      icon: IconTarget,
      title: 'Precision Over Volume',
      desc: 'We take on a limited number of engagements at a time so every one gets senior attention from start to finish.'
    },
    {
      icon: IconHandshake,
      title: 'Partnership, Not Handover',
      desc: 'We stay accountable after launch — architecture reviews, support, and roadmap input as your product evolves.'
    }
  ];

  return (
    <section
      className="relative w-full py-28 lg:py-40 bg-[#050505] overflow-hidden"
      aria-labelledby="showcase-heading"
    >
      {/* Background Grid Overlay */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] pointer-events-none opacity-80" 
        aria-hidden="true" 
      />

      {/* Layered High-Fidelity Ambient Blue/Cyan Glow Matrix */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.04),transparent_70%)] pointer-events-none z-0"
        aria-hidden="true"
      />
      <div 
        className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-[#2563EB]/[0.02] blur-[140px] rounded-full pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute top-10 right-10 w-[500px] h-[500px] bg-[#06B6D4]/[0.03] blur-[130px] rounded-full pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* SECTION HEADER */}
        <div className="flex flex-col items-center text-center space-y-6 mb-24 max-w-3xl mx-auto">
          {/* Glass-Pill Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-[11px] font-semibold uppercase tracking-[0.2em] text-[#06B6D4] backdrop-blur-md shadow-[0_0_20px_rgba(6,182,212,0.05)] hover:border-[#06B6D4]/30 hover:shadow-[0_0_25px_rgba(6,182,212,0.15)] transition-all duration-300">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#06B6D4] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#06B6D4]"></span>
            </span>
            Who We Are
          </div>

          <h2
            id="showcase-heading"
            className="font-sans text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-white"
          >
            Engineering Partners for{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#06B6D4] via-[#3B82F6] to-[#2563EB]">
              Ambitious Software
            </span>
          </h2>

          <p className="text-base sm:text-lg text-neutral-400 leading-relaxed max-w-2xl font-light">
            OnyxStack Labs builds custom software, cloud infrastructure, and applied AI for teams
            outgrowing off-the-shelf tools. We solve the specific problem in front of you — brittle
            legacy systems, manual processes that don't scale, architecture that can't keep up —
            and stay involved long after launch.
          </p>
        </div>

        {/* FEATURE CARDS */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full mb-32"
          role="list"
          aria-label="Core services OnyxStack Labs delivers"
        >
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                role="listitem"
                tabIndex={0}
                className="group relative flex flex-col p-8 rounded-2xl bg-[#090909] border border-white/[0.08] transition-all duration-500 ease-out outline-none hover:-translate-y-2 hover:border-[#06B6D4]/35 hover:shadow-[0_20px_50px_-15px_rgba(6,182,212,0.1)] focus-visible:ring-2 focus-visible:ring-[#06B6D4] focus-visible:border-[#06B6D4]/50 motion-reduce:hover:translate-y-0"
              >
                {/* Micro Top Accent Gradient Bar */}
                <div
                  className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-transparent to-transparent group-hover:via-[#06B6D4]/50 transition-all duration-500"
                  aria-hidden="true"
                />

                {/* Cyber Spot Glow */}
                <div
                  className="absolute inset-0 rounded-2xl bg-[radial-gradient(350px_circle_at_top_left,rgba(6,182,212,0.03),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  aria-hidden="true"
                />

                <div className="relative z-10 flex-1 flex flex-col">
                  {/* Premium Icon Ring */}
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/[0.03] border border-white/[0.08] text-[#06B6D4] mb-6 transition-all duration-500 group-hover:bg-[#06B6D4]/10 group-hover:border-[#06B6D4]/20 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.25)]">
                    <Icon className="w-5 h-5 transition-transform duration-500 group-hover:scale-110" aria-hidden="true" />
                  </div>
                  <h3 className="text-base font-semibold text-white mb-2.5 transition-colors duration-300 group-hover:text-[#06B6D4]">
                    {item.title}
                  </h3>
                  <p className="text-sm text-neutral-400 leading-relaxed font-light transition-colors duration-300 group-hover:text-neutral-300">
                    {item.desc}
                  </p>
                </div>

                {/* GPU accelerated outer stroke glow ring */}
                <div
                  className="absolute -inset-px rounded-2xl border border-transparent group-hover:border-[#06B6D4]/15 transition-colors duration-500 pointer-events-none -z-10"
                  aria-hidden="true"
                />
              </div>
            );
          })}
        </div>

        {/* WHY TEAMS CHOOSE US */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-32 items-center">
          <div className="lg:col-span-5 space-y-5">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#06B6D4] font-bold">
              Why Teams Choose Us
            </span>
            <h3 className="font-sans text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
              Built for the long term, not the launch date.
            </h3>
            <p className="text-base text-neutral-400 leading-relaxed font-light">
              Software is a liability the day after it ships if no one stands behind it. We design
              for maintainability from the first architecture decision, and we're still around when
              you need to extend it a year later.
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {principles.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="group relative flex flex-col p-8 rounded-2xl border border-white/[0.08] bg-[#090909] transition-all duration-300 hover:border-[#2563EB]/30 hover:-translate-y-1 hover:shadow-[0_12px_30px_-10px_rgba(37,99,235,0.08)]"
                >
                  {/* Cyber Glow Spot */}
                  <div
                    className="absolute inset-0 rounded-2xl bg-[radial-gradient(350px_circle_at_top_left,rgba(37,99,235,0.02),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    aria-hidden="true"
                  />

                  <div className="relative z-10">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/[0.03] border border-white/[0.08] text-[#2563EB] mb-6 transition-all duration-300 group-hover:bg-[#2563EB]/10 group-hover:border-[#2563EB]/20">
                      <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />
                    </div>
                    <h4 className="text-base font-semibold text-white mb-2.5 transition-colors duration-300 group-hover:text-[#3B82F6]">
                      {item.title}
                    </h4>
                    <p className="text-sm text-neutral-400 leading-relaxed font-light">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* BOTTOM ENTERPRISE CTA */}
        <div className="relative rounded-3xl border border-white/[0.08] bg-[#090909] p-8 sm:p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10 overflow-hidden shadow-2xl">
          {/* Subtle Dynamic Ambient Lighting */}
          <div
            className="absolute top-0 right-0 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(6,182,212,0.05)_0%,transparent_70%)] pointer-events-none rounded-full"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(37,99,235,0.03)_0%,transparent_70%)] pointer-events-none rounded-full"
            aria-hidden="true"
          />
          
          <div className="max-w-xl text-center md:text-left relative z-10 space-y-4">
            <h3 className="font-sans text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
              See the work behind the claims.
            </h3>
            <p className="text-base text-neutral-400 leading-relaxed font-light">
              Explore recent builds across custom software, cloud infrastructure, and applied AI —
              real projects, real outcomes.
            </p>
          </div>
          
          <div className="relative z-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a
              href="#portfolio"
              className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-semibold tracking-wide text-white bg-gradient-to-r from-[#06B6D4] to-[#2563EB] transition-all duration-300 hover:opacity-95 hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#06B6D4] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505] active:translate-y-0"
            >
              Explore Our Portfolio
              <IconArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
