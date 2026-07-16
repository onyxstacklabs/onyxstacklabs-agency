import React, { useEffect, useRef, useState } from 'react';

/**
 * Clients Component
 * Enterprise trust section for OnyxStack Labs — completely refactored to align with
 * the modern high-performance cyan/blue dark mode design language.
 * Icons are optimized inline SVGs — zero external dependency overhead.
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

// Lightweight inline SVG icon set (highly optimized and modernized)
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

const IconSmartphone = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="6" y="2" width="12" height="20" rx="2" />
    <line x1="11" y1="18" x2="13" y2="18" />
  </svg>
);

const IconGlobe = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const IconArrowUpRight = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);

// Minimalist inline SVG Icons for Stats Cards
const IconTrendUp = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
    <polyline points="17 6 23 6 23 12" />
  </svg>
);

const IconHeart = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

const IconClock = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const IconActivity = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
  </svg>
);

// Tech Stack Minimal SVGs mapping
const techStackDetails = [
  {
    name: 'React',
    icon: (props) => (
      <svg viewBox="-11.5 -10.23174 23 20.46348" fill="none" stroke="currentColor" strokeWidth="1" {...props}>
        <circle cx="0" cy="0" r="2.05" fill="currentColor"/>
        <g stroke="currentColor">
          <ellipse rx="11" ry="4.2"/>
          <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
          <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
        </g>
      </svg>
    )
  },
  {
    name: 'Firebase',
    icon: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M5 3.5L19 7l-2 13.5L12 22l-5-1.5L5 3.5z" />
        <path d="M12 10l-4 4.5h8L12 10z" />
      </svg>
    )
  },
  {
    name: 'Node.js',
    icon: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M12 2L3.5 7v10L12 22l8.5-5V7L12 2z" />
        <path d="M12 22V12" />
        <path d="M3.5 7L12 12" />
        <path d="M20.5 7L12 12" />
      </svg>
    )
  },
  {
    name: 'MongoDB',
    icon: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M12 2c0 0-4 4.5-4 9.5C8 16 10 18 12 22c2-4 4-6 4-10.5C16 6.5 12 2 12 2z" />
        <path d="M12 2v20" />
      </svg>
    )
  },
  {
    name: 'Gemini AI',
    icon: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M12 2v20M2 12h20M5.6 5.6l12.8 12.8M18.4 5.6L5.6 18.4" />
      </svg>
    )
  },
  {
    name: 'Vercel',
    icon: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <polygon points="12 2 22 20 2 20" />
      </svg>
    )
  },
  {
    name: 'Tailwind CSS',
    icon: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M12 16c-3 0-5.5-1.5-7-4 1.5-2.5 4-4 7-4s5.5 1.5 7 4c-1.5 2.5-4 4-7 4z" />
        <circle cx="12" cy="12" r="2.5" />
      </svg>
    )
  },
  {
    name: 'Git',
    icon: (props) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <circle cx="12" cy="12" r="3" />
        <circle cx="18" cy="18" r="3" />
        <circle cx="6" cy="6" r="3" />
        <line x1="6" y1="9" x2="6" y2="18" />
        <line x1="9" y1="12" x2="15" y2="18" />
      </svg>
    )
  }
];

export default function Clients() {
  const trustCards = [
    {
      icon: IconCode,
      title: 'Custom Software',
      desc: 'Bespoke applications built around how your team actually works, not a generic template.'
    },
    {
      icon: IconLayers,
      title: 'ERP Systems',
      desc: 'Unified systems that connect operations, inventory, and finance into one reliable source of truth.'
    },
    {
      icon: IconSparkles,
      title: 'AI Automation',
      desc: 'Practical AI woven into existing workflows to cut manual work, not bolted on for the sake of it.'
    },
    {
      icon: IconCloud,
      title: 'Cloud Solutions',
      desc: 'Infrastructure that scales with demand and stays stable under real production traffic.'
    },
    {
      icon: IconSmartphone,
      title: 'Mobile Apps',
      desc: 'Native-feeling iOS and Android experiences backed by a single, well-structured codebase.'
    },
    {
      icon: IconGlobe,
      title: 'Enterprise Websites',
      desc: 'Fast, accessible, conversion-ready websites built to represent large organizations well.'
    }
  ];

  const [projectsRef, projectsValue] = useCountUp(120);
  const [satisfactionRef, satisfactionValue] = useCountUp(98);
  const [responseRef, responseValue] = useCountUp(12);

  const stats = [
    { 
      ref: projectsRef, 
      value: `${projectsValue}+`, 
      label: 'DELIVERED PROJECTS', 
      desc: 'Production-ready solutions deployed globally.', 
      icon: IconTrendUp 
    },
    { 
      ref: satisfactionRef, 
      value: `${satisfactionValue}%`, 
      label: 'CLIENT SATISFACTION', 
      desc: 'Long-term corporate enterprise partnerships.', 
      icon: IconHeart 
    },
    { 
      ref: responseRef, 
      value: `<${responseValue}h`, 
      label: 'RESPONSE LATENCY', 
      desc: 'SLA-driven technical support responsiveness.', 
      icon: IconClock 
    },
    { 
      ref: null, 
      value: '24/7', 
      label: 'ONGOING SUPPORT', 
      desc: 'Continuous infrastructure and code monitoring.', 
      icon: IconActivity 
    }
  ];

  return (
    <section
      className="relative w-full py-24 lg:py-36 bg-[#050505] overflow-hidden"
      aria-labelledby="clients-heading"
    >
      {/* Premium Ambient Background Glows */}
      <div
        className="absolute top-1/4 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[#06B6D4]/[0.03] blur-[150px] rounded-full pointer-events-none select-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-[#2563EB]/[0.03] blur-[170px] rounded-full pointer-events-none select-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* SECTION HEADER */}
        <div className="flex flex-col items-center text-center space-y-6 mb-20 max-w-3xl mx-auto">
          {/* Premium Glass Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-[11px] font-semibold uppercase tracking-[0.2em] text-[#06B6D4] backdrop-blur-md shadow-[0_0_20px_rgba(6,182,212,0.05)] hover:border-[#06B6D4]/30 hover:shadow-[0_0_25px_rgba(6,182,212,0.15)] transition-all duration-300">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#06B6D4] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#06B6D4]"></span>
            </span>
            Trusted By Growing Teams
          </div>

          <h2
            id="clients-heading"
            className="font-sans text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-white"
          >
            Trusted by Businesses{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#06B6D4] via-[#3B82F6] to-[#2563EB]">
              Building for the Future
            </span>
          </h2>

          <p className="text-base sm:text-lg text-neutral-400 leading-relaxed max-w-2xl font-light">
            OnyxStack Labs designs and ships scalable software, custom automation, and resilient cloud
            infrastructure for startups, established SMEs, and enterprise teams alike.
          </p>
        </div>

        {/* TRUST CARDS GRID */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full mb-24"
          role="list"
          aria-label="Services OnyxStack Labs delivers"
        >
          {trustCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div
                key={index}
                role="listitem"
                tabIndex={0}
                className="group relative flex flex-col p-8 rounded-2xl bg-[#090909] border border-white/[0.08] transition-all duration-300 ease-out outline-none hover:-translate-y-1.5 hover:border-[#06B6D4]/35 hover:shadow-[0_12px_40px_-12px_rgba(6,182,212,0.12)] focus-visible:ring-2 focus-visible:ring-[#06B6D4] focus-visible:border-[#06B6D4]/50 motion-reduce:hover:translate-y-0"
              >
                {/* Micro Top Accent Bar */}
                <div
                  className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-transparent to-transparent group-hover:via-[#06B6D4]/50 transition-all duration-500"
                  aria-hidden="true"
                />

                {/* Cyber Glow Accent */}
                <div
                  className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_30%_20%,rgba(6,182,212,0.03),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  aria-hidden="true"
                />

                <div className="relative z-10 flex flex-col h-full">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/[0.03] border border-white/[0.08] text-[#06B6D4] mb-6 transition-all duration-300 group-hover:bg-[#06B6D4]/10 group-hover:border-[#06B6D4]/20 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.2)]">
                    <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />
                  </div>

                  <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-1.5">
                    {card.title}
                    <IconArrowUpRight
                      className="w-4 h-4 text-neutral-500 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                      aria-hidden="true"
                    />
                  </h3>
                  <p className="text-sm text-neutral-400 leading-relaxed font-light">{card.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* STATISTICS ROW REDESIGNED AS PREMIUM INDEPENDENT ENTERPRISE CARDS */}
        <div
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 w-full mb-24"
          role="group"
          aria-label="OnyxStack Labs performance statistics"
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div 
                key={index} 
                ref={stat.ref} 
                className="group relative flex flex-col justify-between p-6 rounded-2xl bg-[#090909] border border-white/[0.06] transition-all duration-500 ease-out hover:-translate-y-1.5 hover:border-[#06B6D4]/35 hover:shadow-[0_12px_40px_-12px_rgba(6,182,212,0.12)]"
              >
                {/* Subtle Inner Gradient Finish */}
                <div 
                  className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/[0.01] to-transparent pointer-events-none" 
                  aria-hidden="true" 
                />
                
                {/* Dynamic Cyber Glow Spotlight */}
                <div 
                  className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_30%_20%,rgba(6,182,212,0.02),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" 
                  aria-hidden="true" 
                />

                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-500 transition-colors duration-300 group-hover:text-[#06B6D4]">
                      {stat.label}
                    </span>
                    <div className="text-neutral-500 transition-all duration-300 group-hover:text-[#06B6D4] group-hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.5)]">
                      <IconComponent className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />
                    </div>
                  </div>

                  <div className="mt-2">
                    <span className="font-sans text-3xl sm:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-300 tabular-nums tracking-tight">
                      {stat.value}
                    </span>
                    <p className="mt-2 text-xs text-neutral-500 leading-relaxed font-light group-hover:text-neutral-400 transition-colors duration-300">
                      {stat.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* TECH STACK STRIP REDESIGNED AS ENTERPRISE BADGES */}
        <div className="flex flex-col items-center gap-6">
          <span className="text-[11px] uppercase tracking-[0.25em] text-neutral-500 font-bold">
            Built With Tools We Trust
          </span>
          <div
            className="flex flex-wrap items-center justify-center gap-3.5 max-w-4xl"
            role="list"
            aria-label="Technologies used by OnyxStack Labs"
          >
            {techStackDetails.map((tech, index) => {
              const TechIcon = tech.icon;
              return (
                <div
                  key={index}
                  role="listitem"
                  tabIndex={0}
                  className="group inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full text-xs font-semibold text-neutral-400 bg-[#090909] border border-white/[0.06] backdrop-blur-md transition-all duration-300 outline-none hover:text-white hover:border-[#06B6D4]/35 hover:scale-[1.04] hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] focus-visible:ring-2 focus-visible:ring-[#06B6D4] cursor-default"
                >
                  <TechIcon className="w-4 h-4 text-neutral-500 transition-colors duration-300 group-hover:text-[#06B6D4] group-hover:drop-shadow-[0_0_5px_rgba(6,182,212,0.5)]" />
                  <span className="tracking-wide">{tech.name}</span>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
