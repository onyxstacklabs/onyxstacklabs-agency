import React, { useEffect, useRef, useState } from 'react';

/**
 * Stats Component
 * Premium enterprise analytics and statistics section for OnyxStack Labs.
 * Refactored to align perfectly with the high-end, dark-mode cyan and blue
 * design system established in Hero and Clients components.
 * Fully responsive, accessible, with count-up animations and interactive hover effects.
 */

// Count-up hook: animates a numeric value from 0 to `end` once the element
// scrolls into view. Falls back to the static end value if IntersectionObserver
// isn't available, and respects reduced-motion by skipping straight to `end`.
function useCountUp(end, { duration = 1600, decimals = 0 } = {}) {
  const ref = useRef(null);
  const [value, setValue] = useState(0);
  const hasRun = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      setValue(end);
      return undefined;
    }

    if (typeof IntersectionObserver === 'undefined') {
      setValue(end);
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasRun.current) {
            hasRun.current = true;
            const start = performance.now();
            const step = (timestamp) => {
              const elapsed = timestamp - start;
              const progress = Math.min(elapsed / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              setValue(end * eased);
              if (progress < 1) {
                requestAnimationFrame(step);
              } else {
                setValue(end);
              }
            };
            requestAnimationFrame(step);
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [end, duration]);

  const display = decimals > 0 ? value.toFixed(decimals) : Math.round(value).toString();
  return [ref, display];
}

// Highly polished, modern inline SVG icon set
const IconBriefcase = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="7" width="20" height="14" rx="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>
);

const IconStar = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const IconCode = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

const IconHeadset = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
    <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
  </svg>
);

const IconClock = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16.5 14.5" />
  </svg>
);

const IconGlobe = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

export default function Stats() {
  const [projectsRef, projectsValue] = useCountUp(120);
  const [satisfactionRef, satisfactionValue] = useCountUp(98);
  const [techRef, techValue] = useCountUp(15);
  const [responseRef, responseValue] = useCountUp(12);
  const [countriesRef, countriesValue] = useCountUp(18);

  const analyticsMatrix = [
    {
      icon: IconBriefcase,
      value: `${projectsValue}+`,
      ref: projectsRef,
      label: 'Projects Delivered',
      desc: 'Enterprise-grade builds shipped and running in production.'
    },
    {
      icon: IconStar,
      value: `${satisfactionValue}%`,
      ref: satisfactionRef,
      label: 'Client Satisfaction',
      desc: 'Measured across post-launch and long-term engagements.'
    },
    {
      icon: IconCode,
      value: `${techValue}+`,
      ref: techRef,
      label: 'Technologies Used',
      desc: 'A modern, well-maintained stack chosen per project need.'
    },
    {
      icon: IconHeadset,
      value: '24/7',
      ref: null,
      label: 'Support Availability',
      desc: 'Global coverage so critical issues never wait on a time zone.'
    },
    {
      icon: IconClock,
      value: `<${responseValue}h`,
      ref: responseRef,
      label: 'Avg. Response Time',
      desc: 'From first message to a substantive reply from an engineer.'
    },
    {
      icon: IconGlobe,
      value: `${countriesValue}+`,
      ref: countriesRef,
      label: 'Countries Served',
      desc: 'Clients spanning startups, SMEs, and global enterprises.'
    }
  ];

  return (
    <section
      className="relative w-full py-28 lg:py-40 bg-[#050505] overflow-hidden"
      aria-labelledby="stats-heading"
    >
      {/* Subtle background tech grid layout */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" 
        aria-hidden="true" 
      />

      {/* Layered high-fidelity enterprise glow rings */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#06B6D4]/[0.03] blur-[140px] rounded-full pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 right-10 w-[500px] h-[500px] bg-[#2563EB]/[0.02] blur-[160px] rounded-full pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* SECTION HEADER */}
        <div className="flex flex-col items-center text-center space-y-6 mb-24 max-w-3xl mx-auto">
          {/* Live Metric Badge with dynamic pulses */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-[11px] font-semibold uppercase tracking-[0.2em] text-[#06B6D4] backdrop-blur-md shadow-[0_0_20px_rgba(6,182,212,0.05)] hover:border-[#06B6D4]/30 hover:shadow-[0_0_25px_rgba(6,182,212,0.15)] transition-all duration-300">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#06B6D4] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#06B6D4]"></span>
            </span>
            Our Impact
          </div>

          <h2
            id="stats-heading"
            className="font-sans text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-white"
          >
            Driving Measurable{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#06B6D4] via-[#3B82F6] to-[#2563EB]">
              Results
            </span>
          </h2>

          <p className="text-base sm:text-lg text-neutral-400 leading-relaxed max-w-2xl font-light">
            OnyxStack Labs focuses on performance, reliability, and software that scales — every
            number below reflects work our clients depend on in production.
          </p>
        </div>

        {/* METRICS GRID */}
        <div
          className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 w-full"
          role="region"
          aria-label="OnyxStack Labs performance statistics"
        >
          {analyticsMatrix.map((metric, idx) => {
            const Icon = metric.icon;
            return (
              <div
                key={idx}
                ref={metric.ref}
                tabIndex={0}
                className="group relative flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-[#090909] border border-white/[0.08] transition-all duration-500 ease-out outline-none hover:-translate-y-2 hover:border-[#06B6D4]/35 hover:shadow-[0_20px_50px_-15px_rgba(6,182,212,0.1)] focus-visible:ring-2 focus-visible:ring-[#06B6D4] focus-visible:border-[#06B6D4]/50 motion-reduce:hover:translate-y-0 will-change-transform"
              >
                {/* Micro Top Accent Gradient Bar */}
                <div
                  className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-transparent to-transparent group-hover:via-[#06B6D4]/50 transition-all duration-500"
                  aria-hidden="true"
                />

                {/* Premium Radial Glow */}
                <div
                  className="absolute inset-0 rounded-2xl bg-[radial-gradient(350px_circle_at_top_left,rgba(6,182,212,0.03),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  aria-hidden="true"
                />

                <div className="relative z-10">
                  {/* Icon Container */}
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/[0.03] border border-white/[0.08] text-[#06B6D4] mb-6 transition-all duration-500 group-hover:bg-[#06B6D4]/10 group-hover:border-[#06B6D4]/20 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.25)]">
                    <Icon className="w-5 h-5 transition-transform duration-500 group-hover:scale-110" aria-hidden="true" />
                  </div>

                  {/* Stat Value with elegant font rendering */}
                  <div className="font-sans text-4xl sm:text-5xl font-bold tracking-tight text-white tabular-nums group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-[#06B6D4] transition-all duration-500">
                    {metric.value}
                  </div>

                  {/* Label */}
                  <h3 className="mt-4 text-base font-semibold text-neutral-200 tracking-tight transition-colors duration-300 group-hover:text-white">
                    {metric.label}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 text-sm text-neutral-400 leading-relaxed font-light transition-colors duration-300 group-hover:text-neutral-300">
                    {metric.desc}
                  </p>
                </div>

                {/* Live Metric Footer Divider */}
                <div className="relative z-10 mt-8 pt-5 border-t border-white/[0.06] flex items-center justify-between transition-colors duration-500 group-hover:border-white/[0.12]">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500 transition-colors duration-300 group-hover:text-neutral-400">
                    Live Metric
                  </span>
                  <div className="relative flex items-center justify-center w-2 h-2">
                    <span
                      className="absolute w-1.5 h-1.5 rounded-full bg-[#111827] group-hover:bg-[#06B6D4] transition-all duration-500"
                      aria-hidden="true"
                    />
                    <span
                      className="absolute w-3.5 h-3.5 rounded-full bg-[#06B6D4]/0 group-hover:bg-[#06B6D4]/15 group-hover:animate-ping transition-all duration-500"
                      aria-hidden="true"
                    />
                  </div>
                </div>

                {/* GPU accelerated outer stroke glow */}
                <div
                  className="absolute -inset-px rounded-2xl border border-transparent group-hover:border-[#06B6D4]/15 transition-colors duration-500 pointer-events-none -z-10"
                  aria-hidden="true"
                />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
