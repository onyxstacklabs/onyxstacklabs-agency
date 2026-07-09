import React from "react";
import heroDashboard from "../assets/hero-dashboard.svg";

export default function Hero() {
  return (
    <header className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-24 text-center md:pt-40 md:pb-36 space-y-10">

      <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-[#06B6D4]/20 rounded-full text-[11px] font-mono tracking-wider uppercase text-[#06B6D4] bg-[#06B6D4]/5 backdrop-blur-sm mx-auto">
        <span className="w-1.5 h-1.5 rounded-full bg-[#06B6D4] shadow-[0_0_8px_#06B6D4]"></span>
        Building Smarter Software for Global Businesses
      </div>

      <div className="space-y-6 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white uppercase leading-[1.05]">
          Enterprise Software.
          <br />
          AI Automation.
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-100 via-neutral-400 to-[#06B6D4]">
            Scalable Digital Products.
          </span>
        </h1>

        <p className="text-sm sm:text-base text-neutral-400 max-w-2xl mx-auto leading-relaxed font-normal tracking-wide">
          OnyxStack Labs designs premium web platforms, AI-powered automation
          and custom business software engineered for performance, security and
          long-term scalability.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
        <a
          href="#contact"
          className="w-full sm:w-auto bg-[#06B6D4] hover:bg-cyan-400 text-black px-8 py-3.5 rounded-xl font-bold text-xs uppercase tracking-widest shadow-[0_0_20px_rgba(6,182,212,0.2)] transition-all duration-300 hover:-translate-y-0.5"
        >
          Start Your Project
        </a>

        <a
          href="#portfolio"
          className="w-full sm:w-auto bg-neutral-900/50 hover:bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white px-8 py-3.5 rounded-xl font-bold text-xs uppercase tracking-widest transition-all duration-300 hover:-translate-y-0.5"
        >
          View Portfolio
        </a>
      </div>

      {/* Dashboard Preview */}
      <div className="max-w-5xl mx-auto pt-12">
        <img
          src={heroDashboard}
          alt="OnyxStack Dashboard"
          className="w-full rounded-2xl border border-cyan-500/10 shadow-[0_0_80px_rgba(6,182,212,0.20)]"
        />
      </div>

      {/* Scroll Indicator */}
      <div className="pt-6 animate-bounce hidden md:block">
        <a
          href="#services"
          aria-label="Scroll Down"
          className="text-neutral-600 hover:text-[#06B6D4] transition-colors"
        >
          <svg
            className="w-5 h-5 mx-auto"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </a>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 border-t border-neutral-900/60 max-w-5xl mx-auto">
        {[
          { metric: "Verified", label: "Production Deployments" },
          { metric: "100%", label: "Custom Product Engineering" },
          { metric: "AI", label: "Automation Systems" },
          { metric: "Premium", label: "UI/UX Experience" },
        ].map((stat, idx) => (
          <div key={idx} className="space-y-2">
            <div className="text-2xl font-black text-white">
              {stat.metric}
            </div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-neutral-500">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

    </header>
  );
}
