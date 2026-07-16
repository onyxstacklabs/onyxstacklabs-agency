import React from 'react';

/**
 * BrandShowcase Component
 * Premium brand narrative section for OnyxStack Labs — communicates who we
 * are, the problems we solve, and why teams choose to partner with us long
 * term. Migrated fully to the NEW LOCKED Enterprise Design System featuring 
 * Deep Slate/Ink finishes, Cyan/Blue glow matrices, and modern typography.
 */

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
    <path d="M8 12l3 3 5-5" />
    <path d="M2 12l5-5 4 2 3-2 5 5-3 3-2-1-4 4-5-5z" />
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
      className="relative w-full py-24 lg:py-32 bg-[#05070B] overflow-hidden"
      aria-labelledby="showcase-heading"
    >
      {/* High-fidelity layered ambient background glows consistent with Enterprise Design System */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.06),transparent_70%)] pointer-events-none z-0"
        aria-hidden="true"
      />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#2563EB]/[0.05] blur-[130px] rounded-full pointer-events-none" aria-hidden="true" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-[#06B6D4]/[0.04] blur-[130px] rounded-full pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* HEADER: WHO WE ARE */}
        <div className="flex flex-col items-center text-center space-y-6 mb-20 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#0F172A]/80 border border-[#1E293B] text-[10px] font-bold uppercase tracking-[0.25em] text-[#06B6D4] shadow-inner shadow-black/40 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-[#06B6D4] animate-pulse" aria-hidden="true" />
            Who We Are
          </div>

          <h2
            id="showcase-heading"
            className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15] text-white"
          >
            Engineering Partners for{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#06B6D4] via-[#3B82F6] to-[#2563EB]">
              Ambitious Software
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl">
            OnyxStack Labs builds custom software, cloud infrastructure, and applied AI for teams
            outgrowing off-the-shelf tools. We solve the specific problem in front of you — brittle
            legacy systems, manual processes that don't scale, architecture that can't keep up —
            and stay involved long after launch.
          </p>
        </div>

        {/* HIGHLIGHT CARDS: WHAT WE DO */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full mb-20"
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
                className="group relative flex flex-col p-8 rounded-2xl bg-[#0F172A]/70 border border-[#1E293B] shadow-lg shadow-black/40 transition-all duration-500 ease-out outline-none hover:-translate-y-2 hover:border-[#06B6D4]/30 hover:shadow-[0_20px_50px_rgba(5,7,11,0.9)] focus-visible:ring-2 focus-visible:ring-[#06B6D4]/50 focus-visible:border-[#06B6D4]/50 motion-reduce:hover:translate-y-0"
              >
                {/* Premium Inner Glow Mask */}
                <div
                  className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/[0.015] to-transparent pointer-events-none"
                  aria-hidden="true"
                />

                {/* Soft ambient hover spotlight */}
                <div
                  className="absolute inset-0 rounded-2xl bg-[radial-gradient(ellipse_at_top_left,rgba(6,182,212,0.06),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  aria-hidden="true"
                />

                <div className="relative z-10 flex-1 flex flex-col">
                  {/* Upgrade Icon Container to Glass Glow */}
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[#121E36] to-[#0D1527] border border-[#1E293B] text-[#06B6D4] mb-6 transition-all duration-500 group-hover:scale-110 group-hover:border-[#06B6D4]/40 group-hover:text-[#22D3EE] group-hover:shadow-[0_0_15px_rgba(6,182,212,0.15)]">
                    <Icon className="w-5 h-5 transition-transform duration-500 group-hover:rotate-[3deg]" aria-hidden="true" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2.5 transition-colors duration-300 group-hover:text-[#22D3EE]">{item.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed font-normal transition-colors duration-300 group-hover:text-slate-300">{item.desc}</p>
                </div>

                {/* Micro outer border highlight on hover */}
                <div
                  className="absolute -inset-px rounded-2xl bg-gradient-to-br from-[#06B6D4]/20 via-transparent to-[#2563EB]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none blur-[2px] -z-10"
                  aria-hidden="true"
                />
              </div>
            );
          })}
        </div>

        {/* PHILOSOPHY / WHY BUSINESSES CHOOSE US */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 items-center">
          <div className="lg:col-span-5 space-y-4">
            <p className="text-[10px] uppercase tracking-[0.25em] text-[#06B6D4] font-extrabold">
              Why Teams Choose Us
            </p>
            <h3 className="font-sans text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-tight">
              Built for the long term, not the launch date.
            </h3>
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed font-normal">
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
                  className="group relative flex flex-col p-8 rounded-2xl border border-[#1E293B] bg-[#0F172A]/40 transition-all duration-300 hover:border-[#2563EB]/30 hover:-translate-y-1"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#2563EB]/10 border border-[#2563EB]/20 text-[#60A5FA] mb-6 transition-all duration-300 group-hover:scale-105 group-hover:border-[#2563EB]/40 group-hover:text-[#93C5FD]">
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <h4 className="text-base font-bold text-white mb-2.5">{item.title}</h4>
                  <p className="text-sm text-slate-400 leading-relaxed font-normal">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* CLOSING CTA: EXPLORE PORTFOLIO */}
        <div className="relative rounded-3xl border border-[#1E293B] bg-gradient-to-br from-[#0F172A]/90 via-[#0D1322]/95 to-[#090D16] p-8 sm:p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10 overflow-hidden shadow-2xl shadow-black/80">
          <div
            className="absolute top-0 right-0 w-96 h-96 bg-[radial-gradient(circle,rgba(6,182,212,0.06)_0%,transparent_70%)] pointer-events-none rounded-full"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-20 -left-20 w-80 h-80 bg-[radial-gradient(circle,rgba(37,99,235,0.04)_0%,transparent_70%)] pointer-events-none rounded-full"
            aria-hidden="true"
          />
          
          <div className="max-w-xl text-center md:text-left relative z-10 space-y-4">
            <h3 className="font-sans text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              See the work behind the claims.
            </h3>
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
              Explore recent builds across custom software, cloud infrastructure, and applied AI —
              real projects, real outcomes.
            </p>
          </div>
          
          <a
            href="#portfolio"
            className="relative z-10 inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#06B6D4] to-[#3B82F6] hover:from-[#22D3EE] hover:to-[#2563EB] text-white px-8 py-4 rounded-xl text-sm font-bold tracking-wide transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.35)] hover:-translate-y-0.5 whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[#06B6D4] focus-visible:ring-offset-2 focus-visible:ring-offset-[#05070B]"
          >
            Explore Our Portfolio
            <IconArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
          </a>
        </div>

      </div>
    </section>
  );
}
