import React from "react";
import heroBanner from "../assets/images/hero-banner.webp";

export default function Hero() {
  const featurePills = [
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

  const valueStats = [
    { value: "100%", label: "Custom Development" },
    { value: "AI READY", label: "Automation Sync" },
    { value: "24/7", label: "Dedicated Support" },
    { value: "PREMIUM", label: "Enterprise Quality" }
  ];

  const particles = [
    { top: "12%", left: "8%", size: "3px", delay: "0s", duration: "9s" },
    { top: "22%", left: "88%", size: "2px", delay: "1.2s", duration: "11s" },
    { top: "35%", left: "18%", size: "4px", delay: "2.4s", duration: "8s" },
    { top: "48%", left: "72%", size: "2px", delay: "0.6s", duration: "10s" },
    { top: "58%", left: "42%", size: "3px", delay: "3.1s", duration: "12s" },
    { top: "68%", left: "12%", size: "2px", delay: "1.8s", duration: "9.5s" },
    { top: "15%", left: "55%", size: "2px", delay: "2.9s", duration: "10.5s" },
    { top: "78%", left: "82%", size: "3px", delay: "0.3s", duration: "11.5s" },
    { top: "30%", left: "32%", size: "2px", delay: "4s", duration: "9s" },
    { top: "85%", left: "50%", size: "3px", delay: "1.5s", duration: "10s" }
  ];

  return (
    <section 
      className="relative min-h-screen bg-[#050505] overflow-hidden flex flex-col justify-center items-center z-10 pt-32 pb-20 sm:pt-40 sm:pb-28 lg:pt-48 lg:pb-36 px-4 sm:px-6 lg:px-8"
      aria-label="OnyxStack Labs Showcase introduction"
    >
      {/* PERFORMANCE FIX: Native React Head Injection for Browser Preloading */}
      <React.Fragment>
        <link rel="preload" fetchpriority="high" as="image" href={heroBanner} type="image/webp" />
      </React.Fragment>

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
        {/* Directional lighting: blue from right, cyan from below, white highlight above */}
        <div
          className="absolute top-0 right-0 w-[500px] h-[700px] opacity-30 blur-[130px]"
          style={{ background: "radial-gradient(circle at 100% 0%, rgba(37,99,213,0.14) 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] opacity-25 blur-[120px]"
          style={{ background: "radial-gradient(ellipse, rgba(6,182,212,0.14) 0%, transparent 75%)" }}
        />
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] opacity-[0.05] blur-[100px]"
          style={{ background: "radial-gradient(ellipse, rgba(255,255,255,0.5) 0%, transparent 75%)" }}
        />
        {/* Vignette */}
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse 80% 70% at 50% 40%, transparent 55%, rgba(0,0,0,0.55) 100%)" }}
        />
        {/* Ambient particles */}
        {particles.map((p, idx) => (
          <span
            key={idx}
            className="absolute rounded-full bg-cyan-200 motion-safe:animate-[pulse_ease-in-out_infinite]"
            style={{
              top: p.top,
              left: p.left,
              width: p.size,
              height: p.size,
              opacity: 0.18,
              animationDelay: p.delay,
              animationDuration: p.duration
            }}
          />
        ))}
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
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[11px] sm:text-xs font-medium text-neutral-300 border border-white/[0.07] bg-white/[0.015] backdrop-blur-sm transition-all duration-300 hover:border-cyan-500/25 hover:text-white hover:bg-white/[0.03] hover:shadow-[0_0_16px_rgba(6,182,212,0.15)]"
            >
              <span className="text-cyan-400/80">{pill.icon}</span>
              {pill.label}
            </span>
          ))}
        </div>

        {/* PREMIUM KEYBOARD ACCESSIBLE ACTION BUTTON INTERFACES */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 sm:mt-10 w-full sm:w-auto px-4 sm:px-0">
          <a
            href="#contact"
            aria-label="Initialize a business discussion project with OnyxStack Labs"
            className="group relative w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-xl bg-white text-black font-semibold text-sm tracking-wide uppercase transition-all duration-300 hover:bg-neutral-100 hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505] shadow-[0_4px_20px_rgba(255,255,255,0.15)] hover:shadow-[0_4px_30px_rgba(6,182,212,0.4)] overflow-hidden"
          >
            <span
              aria-hidden="true"
              className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-[1100ms] ease-out motion-reduce:hidden"
              style={{
                background: "linear-gradient(115deg, transparent 20%, rgba(6,182,212,0.35) 45%, rgba(255,255,255,0.55) 50%, rgba(6,182,212,0.35) 55%, transparent 80%)"
              }}
            />
            <span className="relative">Start Your Project</span>
          </a>

          <a
            href="#portfolio"
            aria-label="Browse the engineering portfolio and software case studies"
            className="group w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-xl border border-white/[0.08] bg-white/[0.01] text-white font-medium text-sm tracking-wide uppercase backdrop-blur-sm transition-all duration-300 hover:bg-white/[0.05] hover:border-cyan-400/30 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(6,182,212,0.12)] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505]"
          >
            View Portfolio
          </a>
        </div>

        {/* PREMIUM TRUST INDICATOR */}
        <div className="flex items-center gap-3 mt-8 sm:mt-9 text-[11px] sm:text-xs text-neutral-500 tracking-wide">
          <div className="flex items-center -space-x-2" aria-hidden="true">
            <span className="w-6 h-6 rounded-full border border-[#050505] bg-gradient-to-br from-cyan-400 to-blue-600 shadow-[0_0_0_1px_rgba(255,255,255,0.06)]" />
            <span className="w-6 h-6 rounded-full border border-[#050505] bg-gradient-to-br from-blue-500 to-indigo-600 shadow-[0_0_0_1px_rgba(255,255,255,0.06)]" />
            <span className="w-6 h-6 rounded-full border border-[#050505] bg-gradient-to-br from-neutral-300 to-neutral-500 shadow-[0_0_0_1px_rgba(255,255,255,0.06)]" />
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

      {/* BANNER VISUAL CENTERPIECE CONTAINER */}
      <div className="relative mt-20 sm:mt-24 lg:mt-28 w-full max-w-6xl mx-auto z-10 px-2 sm:px-4 lg:px-0">
        {/* CONNECTION LINES: BADGE / CONTENT -> BANNER */}
        <svg
          className="absolute -top-16 sm:-top-20 left-1/2 -translate-x-1/2 w-[2px] h-16 sm:h-20 pointer-events-none hidden sm:block motion-reduce:hidden"
          aria-hidden="true"
        >
          <line
            x1="1" y1="0" x2="1" y2="100%"
            stroke="url(#heroLineGradient)"
            strokeWidth="1"
            className="motion-safe:animate-[pulse_9s_ease-in-out_infinite]"
          />
          <defs>
            <linearGradient id="heroLineGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgba(6,182,212,0)" />
              <stop offset="50%" stopColor="rgba(6,182,212,0.5)" />
              <stop offset="100%" stopColor="rgba(6,182,212,0)" />
            </linearGradient>
          </defs>
        </svg>

        {/* LAYER 1: OUTER AMBIENT GLOW */}
        <div 
          className="absolute -inset-4 sm:-inset-12 rounded-3xl opacity-50 blur-[90px] pointer-events-none z-0 motion-safe:animate-[pulse_11s_ease-in-out_infinite]"
          style={{
            background: "radial-gradient(circle, rgba(37,99,213,0.25) 0%, rgba(6,182,212,0.12) 45%, transparent 75%)"
          }}
        />

        {/* LAYER 2: GLASS BORDER / LAYER 3: DARK FRAME */}
        <div className="relative z-10 rounded-2xl sm:rounded-3xl border border-white/[0.08] bg-[#090909]/60 backdrop-blur-sm p-1.5 sm:p-2.5 shadow-[0_30px_80px_rgba(0,0,0,0.8)] transition-all duration-700 hover:border-white/[0.16] hover:shadow-[0_40px_110px_rgba(37,99,213,0.2)] hover:-translate-y-1 motion-reduce:hover:translate-y-0 group overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.015] via-transparent to-white/[0.04] pointer-events-none" />

          {/* LAYER 4: INNER BEVEL */}
          <div className="relative rounded-[10px] sm:rounded-[20px] overflow-hidden bg-[#050505] border border-white/[0.04] ring-1 ring-inset ring-white/[0.04]">
            <img
              src={heroBanner}
              alt="OnyxStack Labs enterprise software platform showing dashboard, automation, and infrastructure overview"
              loading="eager"
              decoding="async"
              fetchpriority="high"
              width="1920"
              height="1080"
              className="w-full h-auto object-cover opacity-95 transition-transform duration-700 group-hover:scale-[1.015] filter contrast-[1.02]"
            />

            {/* LAYER 5: TOP HIGHLIGHT REFLECTION */}
            <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-white/[0.06] to-transparent pointer-events-none" />

            {/* Side vignette for depth */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ boxShadow: "inset 0 0 90px 20px rgba(0,0,0,0.35)" }}
            />
          </div>
        </div>

        {/* LAYER 6: BOTTOM CYAN GROUND REFLECTION */}
        <div
          className="absolute left-1/2 -translate-x-1/2 -bottom-10 sm:-bottom-14 w-[85%] h-16 sm:h-20 rounded-full opacity-40 blur-[50px] pointer-events-none"
          style={{ background: "radial-gradient(ellipse, rgba(6,182,212,0.35) 0%, transparent 75%)" }}
        />
      </div>

      {/* CONTINUOUS NAVIGATION GATE ACTION NODE */}
      <div className="mt-20 sm:mt-24 lg:mt-28 z-10 flex justify-center">
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
