import React from 'react';

/**
 * CTA Component
 * Premium enterprise conversion section for OnyxStack Labs — now aligned to
 * the single cyan/blue design system used across About and Portfolio.
 * Icons are inline SVGs — no external icon package required.
 */

const IconArrowUpRight = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);

const IconShieldCheck = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 2l8 3v6c0 5-3.4 8.7-8 11-4.6-2.3-8-6-8-11V5l8-3z" />
    <polyline points="9 12 11 14 15 10" />
  </svg>
);

const IconLock = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="4" y="10" width="16" height="10" rx="2" />
    <path d="M8 10V7a4 4 0 0 1 8 0v3" />
  </svg>
);

const IconSparkles = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8" />
  </svg>
);

const IconHandshake = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M8 12l3 3 5-5" />
    <path d="M2 12l5-5 4 2 3-2 5 5-3 3-2-1-4 4-5-5z" />
  </svg>
);

export default function CTA({ navigateToNode }) {
  const trustBadges = [
    { icon: IconShieldCheck, label: 'Enterprise Ready' },
    { icon: IconLock, label: 'Secure Development' },
    { icon: IconSparkles, label: 'AI Powered' },
    { icon: IconHandshake, label: 'Long-Term Support' }
  ];

  // Handler for custom navigation properties used across the project's state-driven routing
  const handleNavigation = (e, path, sectionId) => {
    e.preventDefault();
    if (navigateToNode) {
      navigateToNode(path);
      if (sectionId) {
        setTimeout(() => {
          document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      }
    } else {
      window.location.href = path;
    }
  };

  return (
    <section
      className="relative w-full py-24 lg:py-32 bg-[#05070B] overflow-hidden"
      aria-labelledby="cta-heading"
    >
      {/* Ambient background glow — cyan/blue enterprise system */}
      <div
        className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-[#06B6D4]/[0.10] via-[#2563EB]/[0.05] to-transparent blur-[150px] rounded-full pointer-events-none motion-safe:animate-[pulse_8s_ease-in-out_infinite]"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#2563EB]/[0.06] blur-[140px] rounded-full pointer-events-none motion-safe:animate-[pulse_10s_ease-in-out_infinite]"
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="group relative p-px rounded-3xl bg-gradient-to-b from-[#1E293B] to-[#0F172A] shadow-2xl shadow-black/40 transition-all duration-500 hover:shadow-[0_0_60px_rgba(6,182,212,0.08)]">
          <div className="absolute inset-0 bg-[#05070B] rounded-[calc(1.5rem-1px)]" aria-hidden="true" />

          {/* Animated border glow ring */}
          <div
            className="absolute -inset-px rounded-3xl bg-gradient-to-r from-[#06B6D4]/0 via-[#06B6D4]/30 to-[#2563EB]/0 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-700 pointer-events-none"
            aria-hidden="true"
          />

          {/* Inner accent glow */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-64 bg-[radial-gradient(ellipse_at_top,rgba(6,182,212,0.10),transparent_70%)] pointer-events-none rounded-[calc(1.5rem-1px)]"
            aria-hidden="true"
          />

          <div className="relative flex flex-col items-center text-center py-16 sm:py-20 px-6 sm:px-14">

            {/* Section Indicator Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full bg-[#0F172A] border border-[#1E293B] text-[11px] font-semibold uppercase tracking-[0.2em] text-[#06B6D4]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#06B6D4] motion-safe:animate-pulse" aria-hidden="true" />
              Let's Build Together
            </div>

            {/* Headline */}
            <h2
              id="cta-heading"
              className="font-sans text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]"
            >
              Ready to build your{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#06B6D4] via-cyan-300 to-[#2563EB]">
                next software product?
              </span>
            </h2>

            {/* Value Proposition */}
            <p className="max-w-2xl text-base sm:text-lg text-neutral-400 leading-relaxed mb-11">
              Let's turn your idea into a scalable digital solution. You'll work directly with the
              engineers building it — fast communication, secure development practices, and a
              partnership that continues well past launch.
            </p>

            {/* Dual Conversion Routing Paths */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center mb-12">
              <a
                href="#contact"
                onClick={(e) => handleNavigation(e, '/', 'contact')}
                className="group/btn w-full sm:w-auto inline-flex items-center justify-center gap-2 px-9 py-4 bg-white text-black font-semibold text-sm rounded-xl shadow-[0_4px_25px_rgba(6,182,212,0.15)] hover:bg-[#06B6D4] hover:text-black hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#06B6D4] focus-visible:ring-offset-2 focus-visible:ring-offset-[#05070B]"
                aria-label="Start your software project with OnyxStack Labs"
              >
                Start Your Project
                <IconArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" aria-hidden="true" />
              </a>

              <a
                href="#portfolio"
                onClick={(e) => handleNavigation(e, '/portfolio')}
                className="w-full sm:w-auto inline-flex items-center justify-center px-9 py-4 bg-[#0F172A] border border-[#1E293B] hover:border-[#06B6D4]/40 hover:bg-[#111A2E] text-white font-semibold text-sm rounded-xl hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(6,182,212,0.12)] active:translate-y-0 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#06B6D4] focus-visible:ring-offset-2 focus-visible:ring-offset-[#05070B]"
                aria-label="View OnyxStack Labs' enterprise software portfolio"
              >
                View Portfolio
              </a>
            </div>

            {/* Trust Badges */}
            <div
              className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-8 border-t border-[#1E293B] w-full"
              role="list"
              aria-label="Why businesses trust OnyxStack Labs"
            >
              {trustBadges.map((badge, idx) => {
                const Icon = badge.icon;
                return (
                  <span
                    key={idx}
                    role="listitem"
                    tabIndex={0}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-medium text-neutral-400 bg-[#0F172A] border border-[#1E293B] transition-all duration-300 outline-none hover:text-white hover:border-[#06B6D4]/40 hover:-translate-y-0.5 hover:shadow-[0_0_16px_rgba(6,182,212,0.18)] focus-visible:ring-2 focus-visible:ring-[#06B6D4] cursor-default motion-reduce:hover:translate-y-0"
                  >
                    <Icon className="w-3.5 h-3.5 text-[#06B6D4]" aria-hidden="true" />
                    {badge.label}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
