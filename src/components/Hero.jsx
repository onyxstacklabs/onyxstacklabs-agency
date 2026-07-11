import React from "react";
import heroDashboard from "../assets/hero-dashboard.svg";

export default function Hero() {
  const floatingCards = [
    { label: "AI AUTOMATION", value: "ONLINE 24/7", alignment: "lg:-left-12 lg:top-16" },
    { label: "CLOUD READY", value: "ENTERPRISE GRADE", alignment: "lg:-right-12 lg:top-32" },
    { label: "INFRASTRUCTURE", value: "SECURE NODE", alignment: "lg:-left-8 lg:bottom-24" },
    { label: "DEPLOYMENTS", value: "FAST DELIVERY", alignment: "lg:-right-8 lg:bottom-16" }
  ];

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
        <div 
          className="absolute inset-0 opacity-[0.015] mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`
          }}
        />
      </div>

      {/* CORE BRANDING COMPOSITION HEADER */}
      <header className="relative w-full max-w-5xl mx-auto text-center z-10 flex flex-col items-center">
        {/* SEMANTIC CRITICAL H1 PRIMARY IDENTIFIER FOR SEO RECOVERY */}
        <h1 className="sr-only">OnyxStack Labs - Premium Software Engineering & AI Automation Studio</h1>

        {/* ULTRA-PREMIUM CONTEXT BADGE */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.02] backdrop-blur-md shadow-[0_1px_2px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.05)] text-[10px] sm:text-[11px] font-medium tracking-[0.2em] text-neutral-300 uppercase transition-all duration-300 hover:border-cyan-500/30 hover:bg-white/[0.04]">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          Next-Gen Engineering Frameworks
        </div>

        {/* HIGH-HIERARCHY HERO HEADLINE DISPLAY ELEMENT */}
        <p className="mt-6 sm:mt-8 text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] sm:leading-[1.08]">
          Enterprise Software.
          <br className="hidden sm:inline" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-cyan-200 to-blue-500 select-none will-change-auto">
            AI Automation.
          </span>
          <br />
          Scalable Digital Products.
        </p>

        {/* HIGH-READABILITY INTRODUCTORY PARAGRAPH */}
        <p className="mt-6 sm:mt-8 max-w-3xl mx-auto text-neutral-400 text-base sm:text-lg lg:text-xl leading-relaxed sm:leading-8 font-light tracking-wide px-2 sm:px-0">
          OnyxStack Labs engineers elite web architectures, cloud-native infrastructure platforms, and context-aware artificial intelligence automation pipelines crafted to scale multi-million dollar business ecosystems.
        </p>

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
      </header>

      {/* DASHBOARD SYSTEM INTERFACE CONTAINER */}
      <div className="relative mt-20 sm:mt-24 lg:mt-28 w-full max-w-5xl mx-auto z-10 px-2 sm:px-4 lg:px-0">
        {/* COMPREHENSIVE CONTROL AMBIENT ACCENT GLOW */}
        <div 
          className="absolute -inset-4 sm:-inset-10 rounded-3xl opacity-40 blur-[80px] pointer-events-none z-0"
          style={{
            background: "radial-gradient(circle, rgba(6,182,212,0.2) 0%, rgba(37,99,213,0.05) 70%, transparent 100%)"
          }}
        />

        {/* VISIONOS FLOATING UI CONTROL NODES MATRIX */}
        {floatingCards.map((card, idx) => (
          <div
            key={idx}
            className={`hidden lg:flex absolute ${card.alignment} z-30 flex-col min-w-[170px] px-4.5 py-3.5 rounded-xl bg-[#090d16]/60 border border-white/[0.06] backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.05)] transition-all duration-500 hover:scale-105 hover:border-cyan-500/30 group pointer-events-auto`}
          >
            <span className="text-[9px] font-bold text-neutral-400 tracking-[0.2em] uppercase transition-colors duration-300 group-hover:text-cyan-400">
              {card.label}
            </span>
            <span className="text-sm font-bold text-white mt-1.5 tracking-wide">
              {card.value}
            </span>
          </div>
        ))}

        {/* MASTER BRACKET PERSPECTIVE WRAPPER FRAMING HERO DASHBOARD */}
        <div className="relative z-10 rounded-2xl sm:rounded-3xl border border-white/[0.08] bg-[#090909]/60 backdrop-blur-sm p-1.5 sm:p-2.5 shadow-[0_30px_80px_rgba(0,0,0,0.8)] transition-all duration-700 hover:border-white/[0.15] hover:shadow-[0_40px_100px_rgba(6,182,212,0.1)] group overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.01] via-transparent to-white/[0.03] pointer-events-none" />
          <div className="relative rounded-[10px] sm:rounded-[20px] overflow-hidden bg-[#050505] border border-white/[0.04]">
            <img
              src={heroDashboard}
              alt="OnyxStack Enterprise Aggregation System Dashboard Interface"
              loading="eager"
              decoding="async"
              fetchpriority="high"
              width="1024"
              height="576"
              className="w-full h-auto object-cover opacity-90 transition-all duration-700 scale-100 filter contrast-[1.02]"
            />
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
            className="w-4 h-4 animate-[bounce_3s_infinite]"
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
