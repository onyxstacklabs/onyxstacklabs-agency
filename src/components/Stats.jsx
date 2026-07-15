import React, { useEffect, useRef, useState } from 'react';

/**
 * Stats Component
 * Premium enterprise statistics section for OnyxStack Labs — built to match
 * the ink / brass / slate-blue design system used across the rest of the site.
 * Icons are inline SVGs — no external icon package required.
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

// Lightweight inline SVG icon set (no external dependency)
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
      className="relative w-full py-24 lg:py-32 bg-[#05070B] overflow-hidden"
      aria-labelledby="stats-heading"
    >
      {/* High-fidelity layered ambient background glows */}
      <div
        className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-[#C6A15B]/[0.06] to-transparent blur-[120px] rounded-full pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#4B627E]/[0.07] to-transparent blur-[140px] rounded-full pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* SECTION HEADER */}
        <div className="flex flex-col items-center text-center space-y-6 mb-20 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#0D111A]/80 border border-[#1E2533] text-[10px] font-bold uppercase tracking-[0.25em] text-[#C6A15B] shadow-inner shadow-black/40 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C6A15B] animate-pulse" aria-hidden="true" />
            Our Impact
          </div>

          <h2
            id="stats-heading"
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.15] text-white"
          >
            Driving Measurable{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#C6A15B] via-[#E2C792] to-[#8FAACF]">
              Results
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#949FAF] leading-relaxed max-w-2xl">
            OnyxStack Labs focuses on performance, reliability, and software that scales — every
            number below reflects work our clients depend on in production.
          </p>
        </div>

        {/* METRICS GRID */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 w-full"
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
                className="group relative flex flex-col justify-between p-8 rounded-2xl bg-gradient-to-b from-[#0D111A]/90 to-[#090C12]/95 border border-[#1A202C] shadow-2xl shadow-black/80 transition-all duration-500 ease-out outline-none hover:-translate-y-2 hover:border-[#C6A15B]/30 hover:shadow-[0_20px_50px_rgba(5,7,11,0.9)] focus-visible:ring-2 focus-visible:ring-[#C6A15B]/50 focus-visible:border-[#C6A15B]/50 motion-reduce:hover:translate-y-0 will-change-transform"
              >
                {/* Premium Inner Glow Mask */}
                <div
                  className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/[0.015] to-transparent pointer-events-none"
                  aria-hidden="true"
                />

                {/* Internal accent hover glow */}
                <div
                  className="absolute inset-0 rounded-2xl bg-[radial-gradient(800px_circle_at_var(--mouse-x,0px)_var(--mouse-y,0px),rgba(198,161,91,0.04),transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: 'radial-gradient(circle at top left, rgba(198, 161, 91, 0.05) 0%, transparent 60%)'
                  }}
                  aria-hidden="true"
                />

                <div className="relative z-10">
                  {/* Icon Container with sophisticated gradient ring */}
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[#121824] to-[#0A0D14] border border-[#242C3C] text-[#C6A15B] mb-6 transition-all duration-500 group-hover:scale-105 group-hover:border-[#C6A15B]/40 group-hover:text-[#E2C792] group-hover:shadow-[0_0_15px_rgba(198,161,91,0.15)]">
                    <Icon className="w-5 h-5 transition-transform duration-500 group-hover:rotate-[3deg]" aria-hidden="true" />
                  </div>

                  {/* Stat Value */}
                  <div className="font-serif text-4xl sm:text-5xl font-medium tracking-tight text-white tabular-nums group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-[#D9C08B] transition-all duration-500">
                    {metric.value}
                  </div>

                  {/* Label */}
                  <div className="mt-3.5 text-base font-semibold text-[#E5E1D8] tracking-tight transition-colors duration-300 group-hover:text-white">
                    {metric.label}
                  </div>

                  {/* Description */}
                  <p className="mt-2 text-sm text-[#8A93A6] leading-relaxed font-normal transition-colors duration-300 group-hover:text-[#A1AAC0]">
                    {metric.desc}
                  </p>
                </div>

                {/* Premium Border-Bottom Accent & Footer Card Divider */}
                <div className="relative z-10 mt-8 pt-5 border-t border-[#181E2B] flex items-center justify-between transition-colors duration-500 group-hover:border-[#222B3D]">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#5F6779] transition-colors duration-300 group-hover:text-[#8894AD]">
                    Live Metric
                  </span>
                  <div className="relative flex items-center justify-center w-2 h-2">
                    <span
                      className="absolute w-1.5 h-1.5 rounded-full bg-[#2A3142] group-hover:bg-[#C6A15B] transition-all duration-500"
                      aria-hidden="true"
                    />
                    <span
                      className="absolute w-3.5 h-3.5 rounded-full bg-[#C6A15B]/0 group-hover:bg-[#C6A15B]/10 group-hover:animate-ping transition-all duration-500"
                      aria-hidden="true"
                    />
                  </div>
                </div>

                {/* Edge Glow Overlay */}
                <div
                  className="absolute -inset-px rounded-2xl border border-transparent group-hover:border-[#C6A15B]/20 transition-colors duration-500 pointer-events-none -z-10"
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
