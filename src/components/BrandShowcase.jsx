import React from 'react';

/**
 * BrandShowcase Component
 * Premium brand narrative section for OnyxStack Labs — communicates who we
 * are, the problems we solve, and why teams choose to partner with us long
 * term. Built to match the ink / brass / slate-blue design system used across
 * the rest of the site. Icons are inline SVGs — no external icon package.
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
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
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
      className="relative w-full py-20 lg:py-28 bg-[#0A0E17] overflow-hidden"
      aria-labelledby="showcase-heading"
    >
      {/* Ambient background glow, consistent with the rest of the site */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(198,161,91,0.05),transparent_70%)] pointer-events-none z-0"
        aria-hidden="true"
      />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#6E8BB0]/[0.05] blur-[130px] rounded-full pointer-events-none" aria-hidden="true" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-[#C6A15B]/[0.04] blur-[130px] rounded-full pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* HEADER: WHO WE ARE */}
        <div className="flex flex-col items-center text-center space-y-5 mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#11151F] border border-[#1E2430] text-[11px] font-semibold uppercase tracking-[0.2em] text-[#C6A15B]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C6A15B]" aria-hidden="true" />
            Who We Are
          </div>

          <h2
            id="showcase-heading"
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.1] text-white"
          >
            Engineering Partners for{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#C6A15B] via-[#D9C08B] to-[#6E8BB0]">
              Ambitious Software
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#9BA1AF] leading-relaxed">
            OnyxStack Labs builds custom software, cloud infrastructure, and applied AI for teams
            outgrowing off-the-shelf tools. We solve the specific problem in front of you — brittle
            legacy systems, manual processes that don't scale, architecture that can't keep up —
            and stay involved long after launch.
          </p>
        </div>

        {/* HIGHLIGHT CARDS: WHAT WE DO */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-full mb-16"
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
                className="group relative flex flex-col p-6 rounded-2xl bg-[#11151F]/50 border border-[#1E2430] transition-all duration-300 ease-out outline-none hover:-translate-y-1.5 hover:border-[#C6A15B]/40 focus-visible:ring-2 focus-visible:ring-[#C6A15B] focus-visible:border-[#C6A15B]/50 motion-reduce:hover:translate-y-0"
              >
                {/* Soft glow on hover */}
                <div
                  className="absolute inset-0 rounded-2xl bg-[radial-gradient(ellipse_at_top_left,rgba(198,161,91,0.05),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  aria-hidden="true"
                />

                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-[#C6A15B]/10 border border-[#C6A15B]/20 text-[#C6A15B] mb-4 transition-transform duration-300 group-hover:scale-110">
                    <Icon className="w-4.5 h-4.5" aria-hidden="true" />
                  </div>
                  <h3 className="text-sm font-semibold text-white mb-1.5">{item.title}</h3>
                  <p className="text-xs text-[#9BA1AF] leading-relaxed">{item.desc}</p>
                </div>

                {/* Outer gradient border glow on hover */}
                <div
                  className="absolute -inset-px rounded-2xl bg-gradient-to-br from-[#C6A15B]/15 via-transparent to-[#6E8BB0]/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none blur-sm -z-10"
                  aria-hidden="true"
                />
              </div>
            );
          })}
        </div>

        {/* PHILOSOPHY / WHY BUSINESSES CHOOSE US */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-start">
          <div className="lg:col-span-5">
            <p className="text-[11px] uppercase tracking-[0.2em] text-[#6F7688] font-semibold mb-3">
              Why Teams Choose Us
            </p>
            <h3 className="font-serif text-2xl sm:text-3xl font-semibold tracking-tight text-white leading-tight">
              Built for the long term, not the launch date.
            </h3>
            <p className="text-sm text-[#9BA1AF] leading-relaxed mt-4">
              Software is a liability the day after it ships if no one stands behind it. We design
              for maintainability from the first architecture decision, and we're still around when
              you need to extend it a year later.
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {principles.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="flex flex-col p-6 rounded-2xl border border-[#1E2430] bg-[#11151F]/30"
                >
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-[#6E8BB0]/10 border border-[#6E8BB0]/20 text-[#8FA3C6] mb-4">
                    <Icon className="w-4.5 h-4.5" aria-hidden="true" />
                  </div>
                  <h4 className="text-sm font-semibold text-white mb-1.5">{item.title}</h4>
                  <p className="text-xs text-[#9BA1AF] leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* CLOSING CTA: EXPLORE PORTFOLIO */}
        <div className="relative rounded-3xl border border-[#1E2430] bg-gradient-to-br from-[#11151F] via-[#11151F] to-[#161B26] p-8 sm:p-12 flex flex-col sm:flex-row items-center justify-between gap-8 overflow-hidden">
          <div
            className="absolute top-0 right-0 w-80 h-80 bg-[#C6A15B]/[0.04] blur-[120px] pointer-events-none rounded-full"
            aria-hidden="true"
          />
          <div className="max-w-xl text-center sm:text-left relative z-10">
            <h3 className="font-serif text-2xl sm:text-3xl font-semibold tracking-tight text-white mb-3">
              See the work behind the claims.
            </h3>
            <p className="text-sm text-[#9BA1AF] leading-relaxed">
              Explore recent builds across custom software, cloud infrastructure, and applied AI —
              real projects, real outcomes.
            </p>
          </div>
          <a
            href="#portfolio"
            className="relative z-10 inline-flex items-center gap-2 bg-[#ECE8DE] hover:bg-[#C6A15B] text-[#0A0E17] px-8 py-4 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 hover:shadow-[0_0_24px_rgba(198,161,91,0.3)] whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A15B] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0E17]"
          >
            Explore Our Portfolio
            <IconArrowUpRight className="w-4 h-4" aria-hidden="true" />
          </a>
        </div>

      </div>
    </section>
  );
}
