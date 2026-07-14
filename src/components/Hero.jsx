import React from "react";
import heroBanner from "../assets/images/hero-banner.webp";

export default function Hero() {
  const featurePills = ["Custom Software", "AI Automation", "Cloud Infrastructure", "Enterprise Security"];

  const valueStats = [
    { value: "100%", label: "Custom Development" },
    { value: "AI READY", label: "Automation Sync" },
    { value: "24/7", label: "Dedicated Support" },
    { value: "PREMIUM", label: "Enterprise Quality" }
  ];

  return (
    <section 
      className="relative min-h-screen bg-[#050505] overflow-hidden flex flex-col justify-center items-center z-10 pt-32 pb-20 sm:pt-40 sm:pb-28 lg:pt-48 lg:pb-36 px-4 sm:px-6 lg:px-8"
      aria-label="OnyxStack Labs Showcase introduction"
    >
      {/* ADVANCED OPTIMIZED HARDWARE-ACCELERATED BACKGROUND MESH */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0 will-change-transform transform-gpu">
        {/* Fine structural grid layer */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage: "radial-gradient(ellipse 70% 55% at 50% 30%, black 40%, transparent 90%)",
            WebkitMaskImage: "radial-gradient(ellipse 70% 55% at 50% 30%, black 40%, transparent 90%)"
          }}
        />
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1400px] h-[600px] sm:h-[800px] rounded-full mix-blend-screen opacity-70 blur-[130px] sm:blur-[160px] will-change-transform transform-gpu"
          style={{
            background: "radial-gradient(circle at 50% 0%, rgba(6,182,212,0.15) 0%, rgba(37,99,213,0.05) 50%, transparent 100%)"
          }}
        />
        <div 
          className="absolute -right-20 top-1/4 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] rounded-full mix-blend-screen opacity-40 blur-[120px] will-change-transform transform-gpu"
          style={{
            background: "radial-gradient(circle, rgba(37,99,213,0.08) 0%, transparent 70%)"
          }}
        />
        <div 
          className="absolute -left-20 bottom-1/4 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] rounded-full mix-blend-screen opacity-40 blur-[120px] will-change-transform transform-gpu"
          style={{
            background: "radial-gradient(circle, rgba(6,182,212,0.06) 0%, transparent 70%)"
          }}
        />
        {/* Secondary slow-drifting mesh accent for depth */}
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full mix-blend-screen opacity-30 blur-[140px] motion-safe:animate-[pulse_10s_ease-in-out_infinite]"
          style={{
            background: "radial-gradient(circle, rgba(147,197,253,0.06) 0%, transparent 70%)"
          }}
        />
        <div 
          className="absolute inset-0 opacity-[0.015] mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`
          }}
        />
      </div>

      {/* CORE BRANDING COMPOSITION HEADER */}
      <header className="relative w-full max-w-5xl mx-auto text-center z-10 flex flex-col items-center">
        {/* ULTRA-PREMIUM CONTEXT BADGE */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.02] backdrop-blur-md shadow-[0_1px_2px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.05)] text-[10px] sm:text-[11px] font-medium tracking-[0.2em] text-neutral-300 uppercase transition-all duration-300 hover:border-cyan-500/30 hover:bg-white/[0.04]">
          <span className="relative flex h-2 w-2">
            <span className="motion-safe:animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          Next-Gen Engineering Frameworks
        </div>

        {/* HIGH-HIERARCHY HERO HEADLINE - NOW STRUCTURALLY MAPS AS VALID VISIBLE H1 */}
        <h1 className="mt-6 sm:mt-8 text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] sm:leading-[1.08]">
          Enterprise Software.
          <br className="hidden sm:inline" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-cyan-200 to-blue-500 select-none will-change-auto">
            AI Automation.
          </span>
          <br />
          Scalable Digital Products.
        </h1>

        {/* HIGH-READABILITY INTRODUCTORY PARAGRAPH */}
        <p className="mt-6 sm:mt-8 max-w-3xl mx-auto text-neutral-400 text-base sm:text-lg lg:text-xl leading-relaxed sm:leading-8 font-light tracking-wide px-2 sm:px-0">
          OnyxStack Labs engineers elite web architectures, cloud-native infrastructure platforms, and context-aware artificial intelligence automation pipelines crafted to scale multi-million dollar business ecosystems.
        </p>

        {/* FEATURE PILL ROW */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-6 sm:mt-7 px-4 sm:px-0" role="list" aria-label="Core service areas">
          {featurePills.map((pill, idx) => (
            <span
              key={idx}
              role="listitem"
              className="px-3.5 py-1.5 rounded-full text-[11px] sm:text-xs font-medium text-neutral-300 border border-white/[0.07] bg-white/[0.015] backdrop-blur-sm transition-colors duration-300 hover:border-cyan-500/25 hover:text-white"
            >
              {pill}
            </span>
          ))}
        </div>

        {/* PREMIUM KEYBOARD ACCESSIBLE ACTION BUTTON INTERFACES */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 sm:mt-10 w-full sm:w-auto px-4 sm:px-0">
          <a
            href="#contact"
            aria-label="Initialize a business discussion project with OnyxStack Labs"
            className="group relative w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-xl bg-white text-black font-semibold text-sm tracking-wide uppercase transition-all duration-300 hover:bg-neutral-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505] shadow-[0_4px_20px_rgba(255,255,255,0.15)] hover:shadow-[0_4px_30px_rgba(6,182,212,0.4)]"
          >
            Start Your Project
          </a>

          <a
            href="#portfolio"
            aria-label="Browse the engineering portfolio and software case studies"
            className="group w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-xl border border-white/[0.08] bg-white/[0.01] text-white font-medium text-sm tracking-wide uppercase backdrop-blur-sm transition-all duration-300 hover:bg-white/[0.04] hover:border-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505]"
          >
            View Portfolio
          </a>
        </div>

        {/* TRUSTED INDICATOR */}
        <div className="flex items-center gap-2 mt-7 sm:mt-8 text-[11px] sm:text-xs text-neutral-500 tracking-wide">
          <span className="relative flex h-1.5 w-1.5">
            <span className="motion-safe:animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
          </span>
          Trusted by growing teams across 18+ countries
        </div>
      </header>

      {/* BANNER VISUAL CENTERPIECE CONTAINER */}
      <div className="relative mt-20 sm:mt-24 lg:mt-28 w-full max-w-6xl mx-auto z-10 px-2 sm:px-4 lg:px-0">
        {/* PREMIUM BLUE AMBIENT ACCENT GLOW BEHIND BANNER */}
        <div 
          className="absolute -inset-4 sm:-inset-12 rounded-3xl opacity-50 blur-[90px] pointer-events-none z-0"
          style={{
            background: "radial-gradient(circle, rgba(37,99,213,0.25) 0%, rgba(6,182,212,0.12) 45%, transparent 75%)"
          }}
        />

        {/* FLOATING GLASS FRAME WRAPPER FOR HERO BANNER */}
        <div className="relative z-10 rounded-2xl sm:rounded-3xl border border-white/[0.08] bg-[#090909]/60 backdrop-blur-sm p-1.5 sm:p-2.5 shadow-[0_30px_80px_rgba(0,0,0,0.8)] transition-all duration-700 hover:border-white/[0.15] hover:shadow-[0_40px_110px_rgba(37,99,213,0.18)] hover:-translate-y-1 motion-reduce:hover:translate-y-0 group overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.01] via-transparent to-white/[0.03] pointer-events-none" />
          {/* Inner bevel ring for added depth */}
          <div className="relative rounded-[10px] sm:rounded-[20px] overflow-hidden bg-[#050505] border border-white/[0.04] ring-1 ring-inset ring-white/[0.03]">
            <img
              src={heroBanner}
              alt="OnyxStack Labs enterprise software platform showing dashboard, automation, and infrastructure overview"
              loading="eager"
              decoding="async"
              fetchpriority="high"
              width="1920"
              height="1080"
              className="w-full h-auto object-cover opacity-95 transition-all duration-700 scale-100 filter contrast-[1.02]"
            />
            {/* Subtle top sheen for glass realism */}
            <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-white/[0.05] to-transparent pointer-events-none" />
          </div>
        </div>
      </div>

      {/* CONTINUOUS NAVIGATION GATE ACTION NODE */}
      <div className="mt-16 sm:mt-20 lg:mt-24 z-10 flex justify-center">
        <a
          href="#services"
          aria-label="Scroll smoothly into OnyxStack Core Technology Stack Modules"
          className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/[0.06] bg-white/[0.02] text-neutral-400 transition-all duration-300 hover:text-cyan-400 hover:border-cyan-500/30 hover:bg-cyan-500/[0.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
        >
          <svg
            className="w-4 h-4 motion-safe:animate-[bounce_3s_infinite]"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25L12 15.75 4.5 8.25"
            />
          </svg>
        </a>
      </div>

      {/* ENTERPRISE HARDMETRIC STACK SUMMARY MODULE */}
      <div className="w-full max-w-5xl mx-auto mt-16 sm:mt-20 lg:mt-24 border-t border-white/[0.06] pt-12 z-10">
        <dl className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 sm:gap-y-12 text-center lg:text-left">
          {valueStats.map((stat, idx) => (
            <div 
              key={idx} 
              className="flex flex-col items-center lg:items-start group transition-all duration-300"
            >
              <dd className="text-2xl sm:text-3xl font-bold text-white tracking-tight bg-clip-text transition-all duration-300 group-hover:text-cyan-400">
                {stat.value}
              </dd>
              <dt className="mt-2 text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-500 transition-colors duration-300 group-hover:text-neutral-450">
                {stat.label}
              </dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
