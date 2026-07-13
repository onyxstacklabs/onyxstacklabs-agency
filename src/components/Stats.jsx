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
      className="relative w-full py-20 lg:py-28 bg-[#0A0E17] overflow-hidden"
      aria-labelledby="stats-heading"
    >
      {/* Ambient background glow, consistent with the rest of the site */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-[#C6A15B]/[0.05] to-[#6E8BB0]/[0.05] blur-[140px] rounded-full pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* SECTION HEADER */}
        <div className="flex flex-col items-center text-center space-y-5 mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#11151F] border border-[#1E2430] text-[11px] font-semibold uppercase tracking-[0.2em] text-[#C6A15B]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C6A15B]" aria-hidden="true" />
            Our Impact
          </div>

          <h2
            id="stats-heading"
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.1] text-white"
          >
            Driving Measurable{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#C6A15B] via-[#D9C08B] to-[#6E8BB0]">
              Results
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#9BA1AF] leading-relaxed">
            OnyxStack Labs focuses on performance, reliability, and software that scales — every
            number below reflects work our clients depend on in production.
          </p>
        </div>

        {/* METRICS GRID */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full"
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
                className="group relative flex flex-col justify-between p-7 sm:p-8 rounded-2xl bg-[#11151F]/60 border border-[#1E2430] transition-all duration-300 ease-out outline-none hover:-translate-y-1.5 hover:border-[#C6A15B]/40 focus-visible:ring-2 focus-visible:ring-[#C6A15B] focus-visible:border-[#C6A15B]/50 motion-reduce:hover:translate-y-0"
              >
                {/* Internal accent glow */}
                <div
                  className="absolute inset-0 rounded-2xl bg-[radial-gradient(ellipse_at_top_left,rgba(198,161,91,0.05),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  aria-hidden="true"
                />

                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-[#C6A15B]/10 border border-[#C6A15B]/20 text-[#C6A15B] mb-5 transition-transform duration-300 group-hover:scale-110">
                    <Icon className="w-4.5 h-4.5" aria-hidden="true" />
                  </div>

                  <div className="font-serif text-4xl sm:text-5xl font-semibold tracking-tight text-white tabular-nums group-hover:text-[#C6A15B] transition-colors duration-300">
                    {metric.value}
                  </div>

                  <div className="mt-2 text-base font-semibold text-[#D8D4C9] tracking-tight">
                    {metric.label}
                  </div>

                  <p className="mt-1.5 text-sm text-[#9BA1AF] leading-relaxed">
                    {metric.desc}
                  </p>
                </div>

                {/* Bottom divider accent */}
                <div className="relative z-10 mt-6 pt-4 border-t border-[#1E2430] flex items-center justify-between">
                  <span className="text-[11px] uppercase tracking-wider text-[#6F7688]">
                    Live Metric
                  </span>
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-[#3A4152] group-hover:bg-[#C6A15B] group-hover:shadow-[0_0_8px_rgba(198,161,91,0.6)] transition-all duration-300"
                    aria-hidden="true"
                  />
                </div>

                {/* Outer gradient border glow on hover */}
                <div
                  className="absolute -inset-px rounded-2xl bg-gradient-to-b from-[#C6A15B]/15 via-transparent to-[#6E8BB0]/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none blur-sm -z-10"
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
