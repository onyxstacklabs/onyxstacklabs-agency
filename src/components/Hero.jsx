import React from "react";
import heroBanner from "../assets/images/hero-banner.webp";

// STATIC DATASETS MOVED TO MODULE SCOPE TO PREVENT REACT RE-ALLOCATION ON RERENDER
const FEATURE_PILLS = [
  {
    label: "Custom Software",
    icon: (
      <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    )
  },
  {
    label: "AI Automation",
    icon: (
      <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8" />
      </svg>
    )
  },
  {
    label: "Cloud Infrastructure",
    icon: (
      <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M17.5 19a4.5 4.5 0 0 0 0-9h-1.26A8 8 0 1 0 4 15.25" />
        <path d="M8 19h9.5" />
      </svg>
    )
  },
  {
    label: "Enterprise Security",
    icon: (
      <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2l8 3v6c0 5-3.4 8.7-8 11-4.6-2.3-8-6-8-11V5l8-3z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    )
  }
];

const VALUE_STATS = [
  { value: "100%", label: "Custom Architecture" },
  { value: "AI READY", label: "Automation Sync" },
  { value: "24/7", label: "Dedicated Support" },
  { value: "PREMIUM", label: "Enterprise Quality" }
];

const JSON_LD_DATA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "OnyxStack Labs",
  "url": "https://onyxstacklabs.com",
  "logo": "https://onyxstacklabs.com/favicon.png",
  "description": "OnyxStack Labs engineers elite web architectures, cloud-native infrastructure platforms, and context-aware artificial intelligence automation pipelines.",
  "sameAs": [
    "https://github.com/onyxstacklabs"
  ],
  "offers": {
    "@type": "Offer",
    "category": "Enterprise Software & AI Automation Development"
  }
};

export default function Hero() {
  return (
    <section 
      className="relative min-h-screen bg-[#050505] overflow-hidden flex flex-col justify-center items-center z-10 pt-32 pb-20 sm:pt-40 sm:pb-28 lg:pt-48 lg:pb-36 px-4 sm:px-6 lg:px-8"
      aria-label="OnyxStack Labs Showcase introduction"
    >
      {/* INJECT GEO & LLM SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD_DATA) }}
      />

      {/* LIGHTWEIGHT OPTIMIZED BACKGROUND MESH */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage: "radial-gradient(ellipse 70% 55% at 50% 30%, black 40%, transparent 90%)",
            WebkitMaskImage: "radial-gradient(ellipse 70% 55% at 50% 30%, black 40%, transparent 90%)"
          }}
        />
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1400px] h-[500px] rounded-full opacity-50 blur-[100px]"
          style={{
            background: "radial-gradient(circle at 50% 0%, rgba(6,182,212,0.12) 0%, rgba(37,99,213,0.04) 50%, transparent 100%)"
          }}
        />
      </div>

      {/* CORE BRANDING HEADER */}
      <header className="relative w-full max-w-5xl mx-auto text-center z-10 flex flex-col items-center">
        {/* CONTEXT BADGE */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.02] backdrop-blur-md text-[10px] sm:text-[11px] font-medium tracking-[0.2em] text-neutral-300 uppercase transition-all duration-300 hover:border-cyan-500/30">
          <span className="relative flex h-2 w-2">
            <span className="motion-safe:animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          Next-Gen Engineering Frameworks
        </div>

        {/* HERO HEADLINE */}
        <h1 className="mt-6 sm:mt-8 text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] sm:leading-[1.08]">
          Enterprise Software.
          <br className="hidden sm:inline" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-cyan-200 to-blue-500 select-none">
            AI Automation.
          </span>
          <br />
          Scalable Digital Products.
        </h1>

        {/* PARAGRAPH */}
        <p className="mt-6 sm:mt-8 max-w-3xl mx-auto text-neutral-400 text-base sm:text-lg lg:text-xl leading-relaxed sm:leading-8 font-light tracking-wide px-2 sm:px-0">
          OnyxStack Labs engineers elite web architectures, cloud-native infrastructure platforms, and context-aware artificial intelligence automation pipelines crafted to scale multi-million dollar business ecosystems.
        </p>

        {/* FEATURE PILLS */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-6 sm:mt-7 px-4 sm:px-0" role="list" aria-label="Core service areas">
          {FEATURE_PILLS.map((pill, idx) => (
            <span
              key={idx}
              role="listitem"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[11px] sm:text-xs font-medium text-neutral-300 border border-white/[0.07] bg-white/[0.015] backdrop-blur-sm transition-all duration-300 hover:border-cyan-500/25 hover:text-white hover:bg-white/[0.03]"
            >
              <span className="text-cyan-400/80">{pill.icon}</span>
              {pill.label}
            </span>
          ))}
        </div>

        {/* ACTION BUTTONS */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 sm:mt-10 w-full sm:w-auto px-4 sm:px-0">
          <a
            href="#contact"
            aria-label="Initialize a business discussion project with OnyxStack Labs"
            className="group relative w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-xl bg-white text-black font-semibold text-sm tracking-wide uppercase transition-all duration-300 hover:bg-neutral-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 overflow-hidden"
          >
            <span>Start Your Project</span>
          </a>

          <a
            href="#portfolio"
            aria-label="Browse the engineering portfolio and software case studies"
            className="group w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-xl border border-white/[0.08] bg-white/[0.01] text-white font-medium text-sm tracking-wide uppercase backdrop-blur-sm transition-all duration-300 hover:bg-white/[0.05] hover:border-cyan-400/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            View Portfolio
          </a>
        </div>

        {/* TRUST INDICATOR */}
        <div className="flex items-center gap-3 mt-8 sm:mt-9 text-[11px] sm:text-xs text-neutral-500 tracking-wide">
          <div className="flex items-center -space-x-2" aria-hidden="true">
            <span className="w-6 h-6 rounded-full border border-[#050505] bg-gradient-to-br from-cyan-400 to-blue-600" />
            <span className="w-6 h-6 rounded-full border border-[#050505] bg-gradient-to-br from-blue-500 to-indigo-600" />
            <span className="w-6 h-6 rounded-full border border-[#050505] bg-gradient-to-br from-neutral-300 to-neutral-500" />
          </div>
          <span className="flex items-center gap-2">
            <span className="text-cyan-300 tracking-tight" aria-hidden="true">★★★★★</span>
            <span className="relative flex h-1.5 w-1.5">
              <span className="motion-safe:animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
            </span>
            Trusted by growing teams across 18+ countries
          </span>
        </div>
      </header>

      {/* BANNER VISUAL CONTAINER */}
      <div className="relative mt-20 sm:mt-24 lg:mt-28 w-full max-w-6xl mx-auto z-10 px-2 sm:px-4 lg:px-0">
        <div className="relative z-10 rounded-2xl sm:rounded-3xl border border-white/[0.08] bg-[#090909]/60 backdrop-blur-sm p-1.5 sm:p-2.5 shadow-[0_30px_80px_rgba(0,0,0,0.8)] transition-all duration-500 overflow-hidden">
          
          {/* HIGH-PRIORITY ABOVE-THE-FOLD HERO IMAGE */}
          <div className="relative rounded-[10px] sm:rounded-[20px] overflow-hidden bg-[#050505] border border-white/[0.04]">
            <img
              src={heroBanner}
              alt="OnyxStack Labs enterprise software platform"
              fetchPriority="high"
              decoding="async"
              width="1280"
              height="720"
              className="w-full h-auto object-cover opacity-95 filter contrast-[1.02]"
            />
          </div>
        </div>
      </div>

      {/* STATS MODULE */}
      <div className="w-full max-w-5xl mx-auto mt-16 sm:mt-20 lg:mt-24 border-t border-white/[0.06] pt-12 z-10">
        <dl className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 sm:gap-y-12 text-center lg:text-left">
          {VALUE_STATS.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center lg:items-start">
              <dd className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {stat.value}
              </dd>
              <dt className="mt-2 text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-500">
                {stat.label}
              </dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
