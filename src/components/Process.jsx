// Process.jsx
import React from 'react';

export default function Process({ deliveryProcess }) {
  // Enhanced enterprise copy mapped seamlessly onto the standard 7-step engineering loop
  const refinedSteps = [
    {
      step: "01",
      label: "Discovery & Consultation",
      desc: "We align closely with your core business goals, auditing operational friction points, user requirements, and technical constraints to establish a precise project scope."
    },
    {
      step: "02",
      label: "Strategy & Planning",
      desc: "Our architects map out your database schema, system integration touchpoints, optimal tech stack selection, and milestone delivery roadmaps for custom software development."
    },
    {
      step: "03",
      label: "UI/UX Architecture & Design",
      desc: "We engineer highly intuitive visual flows and high-fidelity mockups, prioritizing layout responsiveness, spatial hierarchy, and fluid user experiences before raw production begins."
    },
    {
      step: "04",
      label: "Agile Software Development",
      desc: "Using clean, modular code structures across full-stack environments like modern React development, we build secure, maintainable, and highly optimized enterprise software."
    },
    {
      step: "05",
      label: "Rigorous QA & Optimization",
      desc: "Our verification lifecycle includes comprehensive functional testing, multi-device cross-browser rendering checks, API data load benchmarks, and final performance tuning."
    },
    {
      step: "06",
      label: "Secure Cloud Deployment",
      desc: "We orchestrate seamless cloud deployment loops onto high-availability serverless pipelines, incorporating continuous monitoring layers and absolute environment stability."
    },
    {
      step: "07",
      label: "Continuous Engineering Support",
      desc: "Post-launch, our team manages real-time telemetry monitoring, scheduled security patches, data layout optimizations, and ongoing feature enhancements as your operations scale."
    }
  ];

  return (
    <section id="process" className="relative z-10 border-t border-neutral-900/80 py-28 px-6 max-w-7xl mx-auto space-y-24 overflow-hidden" aria-labelledby="process-title">

      {/* Ambient background glow, consistent with Portfolio/About */}
      <div className="absolute top-0 right-0 w-[600px] h-[500px] bg-[#06B6D4]/[0.03] blur-[180px] rounded-full pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#2563EB]/[0.03] blur-[160px] rounded-full pointer-events-none" aria-hidden="true" />

      {/* SECTION HEADER ARCHITECTURE */}
      <div className="relative text-center space-y-4 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#06B6D4]/10 border border-[#06B6D4]/20 text-[#06B6D4] text-[10px] font-mono uppercase tracking-widest">
          Engineering Methodology
        </div>
        <h2 id="process-title" className="text-3xl md:text-4xl font-bold tracking-tight text-white font-sans">
          Our Proven <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#06B6D4] to-blue-500">Software Development Process</span>
        </h2>
        <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-sans">
          From structural blueprinting to production scaling, we combine modern software solutions with meticulous execution metrics to ensure your custom enterprise software ships reliably and scales indefinitely.
        </p>
      </div>

      {/* TIMELINE PIPELINE COMPONENT */}
      <div className="relative max-w-4xl mx-auto before:absolute before:inset-0 before:left-4 md:before:left-1/2 before:w-[1px] before:bg-gradient-to-b before:from-transparent before:via-[#06B6D4]/25 before:to-transparent before:pointer-events-none">
        {refinedSteps.map((proc, idx) => (
          <div key={idx} className={`relative flex flex-col md:flex-row items-start mb-12 last:mb-0 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>

            {/* CHRONOLOGICAL NODE DOT */}
            <div className="group absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-neutral-950 border border-neutral-800 flex items-center justify-center z-10 shadow-[0_0_15px_rgba(0,0,0,0.9)] transition-all duration-300 hover:border-[#06B6D4]/60 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)]">
              <span className="text-[10px] font-mono text-[#06B6D4] font-semibold tracking-tighter transition-colors duration-300">
                {proc.step}
              </span>
            </div>

            {/* CONTENT MODULE FRAME — fixed: was a broken string literal, now a real template literal so the alternating alignment actually applies */}
            <div className={`w-full md:w-1/2 pl-14 md:pl-0 ${idx % 2 === 0 ? 'md:pr-14 text-left md:text-right' : 'md:pl-14 text-left'}`}>
              <div className="relative bg-gradient-to-b from-neutral-950/70 to-neutral-950/40 backdrop-blur-md border border-neutral-900 p-6 rounded-2xl transition-all duration-300 ease-out hover:border-[#06B6D4]/30 hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(0,0,0,0.6),0_0_25px_rgba(6,182,212,0.08)] group w-full overflow-hidden">

                {/* VISUAL INDICATOR ACCENT */}
                <div className={`absolute top-0 w-12 h-[1px] bg-gradient-to-r from-[#06B6D4]/50 to-transparent transition-all duration-300 group-hover:w-20 ${idx % 2 === 0 ? 'right-6' : 'left-6'}`} />

                {/* Soft glow wash on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-cyan-500/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <h3 className="relative text-sm font-bold text-white mb-2 font-mono uppercase tracking-wider block transition-colors duration-300 group-hover:text-cyan-300">
                  {proc.label}
                </h3>

                <p className="relative text-xs sm:text-sm text-neutral-400 leading-relaxed font-normal font-sans">
                  {proc.desc}
                </p>

              </div>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}
