import React, { useEffect } from 'react';

// LIVE DATA CORE IMPORTS
import { siteConfig } from '../config/siteConfig';

export default function ThankYou({ currentPath, navigateToNode }) {
  
  // Set explicit subview window focus on mounting phase and sync SEO headers
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Thank You | OnyxStack Labs";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Thank you for contacting OnyxStack Labs. Your inquiry has been received successfully. Our team will contact you shortly.");
    }
  }, []);

  // Section 2 Data: Next Steps Operational Map
  const nextSteps = [
    {
      title: "Review Your Inquiry",
      desc: "Our architectural engineering team screens your incoming data layout to assign the most relevant technical specialists to your project scope."
    },
    {
      title: "Initial Assessment",
      desc: "Expect a detailed response within 24–48 business hours containing preliminary observations regarding your application roadmap."
    },
    {
      title: "Project Discussion",
      desc: "We coordinate a high-fidelity sync session to deep-dive into your operational parameters, data infrastructure, and system constraints."
    },
    {
      title: "Solution & Proposal",
      desc: "Our team drafts a comprehensive technical proposal detailing the architecture, modular milestones, and complete pricing tiers."
    }
  ];

  // Section 3 Data: Enterprise Assurances Matrix
  const coreAssurances = [
    {
      title: "Secure Submission",
      desc: "Your data is encrypted end-to-end and stored within isolated compliance parameters, safeguarding your operational intellectual property."
    },
    {
      title: "Professional Support",
      desc: "Direct access to senior software architects and UI/UX engineering consultants instead of generic routing triage layers."
    },
    {
      title: "Fast Response",
      desc: "We respect your speed-to-market. Our operational deployment loops are optimized to begin active alignment within minimal lag windows."
    }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-neutral-100 font-sans antialiased selection:bg-[#06B6D4] selection:text-black scroll-smooth relative overflow-hidden">
      
      {/* VISUAL BACKGROUND AMBIENT INFRASTRUCTURE NODE */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[750px] bg-[radial-gradient(ellipse_at_top,rgba(6,182,212,0.07),transparent_60%)] pointer-events-none z-0" />
      <div className="absolute top-[1000px] right-0 w-[500px] h-[500px] bg-blue-600/[0.015] blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[200px] left-0 w-[550px] h-[550px] bg-[#06B6D4]/[0.01] blur-[180px] pointer-events-none" />

      {/* SYSTEM CONTROLLER LAYER */}
      <div className="relative z-10 dynamic-view-layer">
        
        {/* SECTION 1: HERO CONTAINER */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 pt-36 pb-16 sm:pt-44 sm:pb-20 text-center flex flex-col items-center">
          
          {/* PREMIUM SUCCESS TRANSMISSION ICON */}
          <div className="mb-8 relative group">
            <div className="absolute inset-0 rounded-full bg-[#06B6D4]/20 blur-md group-hover:blur-xl transition-all duration-500 scale-95" />
            <div className="w-16 h-16 rounded-full bg-gradient-to-b from-neutral-900 to-black border border-[#06B6D4]/40 flex items-center justify-center relative z-10 text-[#06B6D4]">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
          </div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#06B6D4]/10 border border-[#06B6D4]/20 text-[#06B6D4] text-[10px] font-mono uppercase tracking-widest mb-4">
              Transmission Log // Received Successfully
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white mb-6 font-sans">
              Thank You!
            </h1>
            <p className="text-base sm:text-lg text-neutral-400 leading-relaxed max-w-2xl mx-auto font-sans">
              We appreciate your interest in OnyxStack Labs. Our technical architecture team will review your project configuration profiles and contact you to schedule a primary discovery loop.
            </p>
          </div>

          {/* ACTION NAVIGATION CONTROLS */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
            <button 
              onClick={() => navigateToNode('/')}
              className="bg-neutral-100 hover:bg-[#06B6D4] text-black px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.35)] font-mono"
            >
              Return Home
            </button>
            <button 
              onClick={() => navigateToNode('/services')}
              className="border border-neutral-800 hover:border-neutral-700 bg-neutral-950/60 text-neutral-300 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 font-mono"
            >
              Explore Services
            </button>
            <button 
              onClick={() => navigateToNode('/portfolio')}
              className="border border-neutral-800 hover:border-neutral-700 bg-neutral-950/60 text-neutral-300 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 font-mono"
            >
              View Portfolio
            </button>
          </div>
        </section>

        {/* SECTION 2: WHAT HAPPENS NEXT */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 border-t border-neutral-900/60">
          <div className="max-w-3xl mb-12">
            <p className="text-xs font-mono uppercase tracking-widest text-[#06B6D4] mb-3">// Operational Lifecycle</p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">The Alignment Procedure</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {nextSteps.map((step, idx) => (
              <div key={idx} className="p-6 rounded-2xl border border-neutral-900 bg-neutral-950/40 relative flex flex-col justify-between">
                <div>
                  <div className="text-xs font-mono text-[#06B6D4] mb-4 flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#06B6D4]" />
                    Phase 0{idx + 1}
                  </div>
                  <h3 className="text-sm font-bold text-white mb-2 font-sans tracking-wide">{step.title}</h3>
                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-sans">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 3: WHY CHOOSE ONYXSTACK LABS */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 border-t border-neutral-900/60">
          <div className="max-w-3xl mb-12">
            <p className="text-xs font-mono uppercase tracking-widest text-[#06B6D4] mb-3">// System Anchors</p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">Enterprise Standards Guaranteed</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {coreAssurances.map((item, idx) => (
              <div key={idx} className="p-6 rounded-xl border border-neutral-900/30 bg-gradient-to-b from-neutral-950 to-[#050505] relative">
                <div className="absolute top-0 left-6 w-12 h-[1px] bg-gradient-to-r from-[#06B6D4] to-transparent" />
                <h3 className="text-sm font-mono uppercase tracking-wider text-white mb-3 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#06B6D4]" />
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-sans">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 4: NEED IMMEDIATE ASSISTANCE */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 sm:py-20 border-t border-neutral-900/60">
          <div className="p-8 sm:p-12 rounded-3xl border border-neutral-900 bg-gradient-to-br from-neutral-950 via-neutral-950 to-neutral-900/20 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/[0.015] blur-[100px] pointer-events-none rounded-full" />
            
            <div className="max-w-xl">
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-2 font-sans">
                Require Immediate Architectural Scaling?
              </h2>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-sans">
                If your project is experiencing an active bottleneck or demands expedited development resources, connect directly with our operational hub via email.
              </p>
            </div>

            <div className="flex-shrink-0 flex flex-col items-center sm:items-end gap-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500">Direct Infrastructure Link</span>
              <a 
                href="mailto:onyxstacklabs@gmail.com" 
                className="text-sm sm:text-base font-mono text-[#06B6D4] bg-neutral-900/80 border border-neutral-800 rounded-xl px-4 py-2.5 hover:border-[#06B6D4]/40 transition-colors duration-200"
              >
                onyxstacklabs@gmail.com
              </a>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
