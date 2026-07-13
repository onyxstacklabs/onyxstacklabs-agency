import React, { useEffect, useState } from 'react';

// LIVE DATA CORE IMPORTS
import { siteConfig } from '../config/siteConfig';

// MODULAR DETACHED COMPONENT ARCHITECTURE LAYER
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Pricing({ currentPath, navigateToNode }) {
  const [activeFaq, setActiveFaq] = useState(null);

  // Synchronize scroll on initial mount phase
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleFaq = (idx) => {
    setActiveFaq(activeFaq === idx ? null : idx);
  };

  // Section 2 Data: Strategic Engagement Framework Tiers
  const pricingTiers = [
    {
      name: "MVP Starter",
      tagline: "Accelerated Proof-of-Concept Models",
      investment: "Custom Scoping Baseline",
      desc: "Engineered specifically for startups and emerging ventures needing to establish early product validation with high structural performance parameters.",
      features: [
        "Dedicated UI/UX Design Prototypes",
        "Fully Interactive Component Architecture",
        "Serverless Microservice Node Provisioning",
        "Comprehensive Automated Unit Testing",
        "Full Git Codebase Ownership Handover"
      ],
      cta: "Initiate Validation Scopes",
      popular: false,
      accent: "from-cyan-500/10 to-blue-500/5 border-neutral-900"
    },
    {
      name: "Core Business",
      tagline: "Optimized Custom Platform Solutions",
      investment: "Tailored Growth Scopes",
      desc: "Designed for expanding organizations looking to completely decommission costly off-the-shelf software bottlenecks for bespoke cloud ecosystems.",
      features: [
        "Advanced Multi-Tenant System Architecture",
        "Interactive Real-Time Telemetry Panels",
        "High-Concurrency Database Layer Setup",
        "Cognitive LLM/AI Processing Vectors",
        "30 Days of Dedicated Deployment Monitoring"
      ],
      cta: "Schedule Blueprint Sessions",
      popular: true,
      accent: "from-[#06B6D4]/20 via-[#06B6D4]/5 to-transparent border-[#06B6D4]/40 shadow-[0_0_30px_rgba(6,182,212,0.05)]"
    },
    {
      name: "Enterprise Architecture",
      tagline: "Mission-Critical Operational Core Systems",
      investment: "Bespoke Institutional Contracts",
      desc: "Constructed for high-density corporate environments requiring strict horizontal scaling parameters and multi-facility compliance structures.",
      features: [
        "Air-Gapped Private Cloud Infrastructures",
        "Multi-Tier Cryptographic Identity Filters",
        "Zero-Downtime Multi-Region Failovers",
        "Legacy Systems & API Bridge Mapping",
        "SLA-Backed Dedicated Support Matrices"
      ],
      cta: "Establish Engineering Channels",
      popular: false,
      accent: "from-purple-500/10 to-indigo-500/5 border-neutral-900"
    }
  ];

  // Section 3 Data: End-to-End Delivery Lifecycle Elements
  const baselineInclusions = [
    { phase: "Discovery", info: "We draft end-to-end data schema configurations and system-dependency graphs prior to initialization." },
    { phase: "UI/UX Design", info: "Producing scalable B2B mockups that follow a clean, accessible component pattern." },
    { phase: "Development", info: "Writing isolated React architectures optimized for rapid initial paint intervals." },
    { phase: "Rigorous Testing", info: "Exposing variables to strict automated integration tests and regression cycles." },
    { phase: "Edge Deployment", info: "Distributing application bundles globally onto robust serverless content delivery systems." },
    { phase: "Documentation", info: "Compiling exhaustive architectural runbooks for simple internal engineering transitions." },
    { phase: "Active Support", info: "Providing proactive ecosystem health verification monitoring past code deployment loops." }
  ];

  // Section 5 Data: Enterprise FAQ Catalog Matrix
  const faqCatalog = [
    {
      q: "Why does OnyxStack Labs operate on a custom scoping model instead of offering fixed-price flat packages?",
      a: "Bespoke corporate technology products carry unique architecture rules, database relationships, and security compliance matrices. Fixed flat rates incentivize structural shortcuts. Custom scoping ensures you pay strictly for the targeted computation frameworks and logic your operation requires, maximizing efficiency."
    },
    {
      q: "What variables directly influence the final project investment quotation?",
      a: "Primary variables include total data ingestion points, third-party legacy API dependency mapping, real-time sync frequencies (like WebSockets or AI streams), security tier specifications, and the scope of custom interactive dashboards required."
    },
    {
      q: "Do we retain absolute legal ownership of the code engineered by your team?",
      a: "Yes. Upon successful deployment contract execution, 100% of the repository intellectual property rights, compiled assets, and architectural layout models translate directly to your entity under secure ownership terms."
    },
    {
      q: "How does your system isolate internal data records from potential cyber vulnerabilities?",
      a: "We insulate applications using strict parameter sanitization wrappers, role-based JWT validation nodes, and isolated backend server partitions to enforce absolute containment zones against injection attacks."
    },
    {
      q: "Can OnyxStack Labs interface with or migrate records from outdated legacy software tools?",
      a: "Yes. Our senior react architects specialize in structuring resilient data bridges and parsing old document structures into modern databases without causing production workflow interruptions."
    },
    {
      q: "What specific Service Level Agreements (SLAs) are offered for enterprise systems?",
      a: "Our institutional contracts offer dedicated response matrices down to critical multi-hour windows, ensuring engineering eyes evaluate infrastructure metrics instantly during traffic shocks."
    },
    {
      q: "How long does a standard technical discovery phase take before code compilation begins?",
      a: "A typical discovery loop lasts 5 to 14 business days, focusing on building user flows, API maps, and solid database outlines before shipping items to production teams."
    },
    {
      q: "What models are used to integrate cognitive AI solutions into active business panels?",
      a: "We directly interface with Gemini AI nodes to trigger stateless, high-speed context analysis, automated document reading, and advanced text summarization tools embedded within your user dashboards."
    }
  ];

  const triggerConsultation = () => {
    navigateToNode('/');
    setTimeout(() => {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }, 150);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-neutral-100 font-sans antialiased selection:bg-[#06B6D4] selection:text-black relative overflow-hidden">
      
      {/* BRAND AMBIENT RADIAL GRAPHICS MASKS */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[750px] bg-[radial-gradient(ellipse_at_top,rgba(6,182,212,0.06),transparent_60%)] pointer-events-none z-0" />
      <div className="absolute top-[1200px] left-0 w-[450px] h-[450px] bg-[#06B6D4]/[0.015] blur-[160px] pointer-events-none" />
      <div className="absolute bottom-[400px] right-0 w-[500px] h-[500px] bg-blue-600/[0.01] blur-[200px] pointer-events-none" />

      {/* CORE NAVBAR ROUTER INTEGRATION */}
      <Navbar 
        currentPath={currentPath} 
        activeSection="" 
        navigateToNode={navigateToNode} 
        siteConfig={siteConfig} 
      />

      {/* STRATEGIC VIEW BODY CONTAINER FRAME */}
      <div className="relative z-10 execution-pricing-scope">
        
        {/* SECTION 1: HERO BRIEFING DISPLAY */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-16 sm:pt-40 sm:pb-20 text-center sm:text-left">
          <div className="max-w-4xl mx-auto sm:mx-0">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#06B6D4]/10 border border-[#06B6D4]/20 text-[#06B6D4] text-xs font-mono uppercase tracking-widest mb-6">
              Investment Blueprint Models
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
              Engineered Engineering Frameworks. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#06B6D4] via-cyan-300 to-blue-500">
                Transparent Scaled Value.
              </span>
            </h1>
            <p className="text-base sm:text-lg text-neutral-400 max-w-2xl leading-relaxed mb-8">
              Every system we author is built to map tightly to specific business architectures. We do not use cookie-cutter plans. Review our engagement frameworks below and request a customized quotation blueprint.
            </p>
            <div>
              <button
                onClick={triggerConsultation}
                className="bg-white hover:bg-[#06B6D4] text-black px-8 py-4 rounded-full text-xs font-bold font-mono uppercase tracking-widest transition-all duration-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)]"
              >
                Request Custom Scoping Quote
              </button>
            </div>
          </div>
        </section>

        {/* SECTION 2: THE ADAPTIVE PRICING PLANS COMPONENT MATRIX */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {pricingTiers.map((tier, tIdx) => (
              <div 
                key={tIdx} 
                className={`p-6 sm:p-8 rounded-2xl border bg-gradient-to-b from-neutral-950 to-neutral-950/40 flex flex-col justify-between relative transition-all duration-300 ${tier.accent}`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[#06B6D4] text-black text-[9px] font-mono font-bold uppercase tracking-widest shadow-md">
                    Recommended Alignment
                  </div>
                )}
                
                <div>
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-white font-sans">{tier.name}</h3>
                    <p className="text-[11px] font-mono text-neutral-500 uppercase tracking-wider mt-1">{tier.tagline}</p>
                  </div>

                  <div className="py-4 border-y border-neutral-900 mb-6">
                    <span className="text-xs font-mono text-[#06B6D4] uppercase tracking-widest block mb-1">Target Baseline</span>
                    <div className="text-xl sm:text-2xl font-bold text-white tracking-tight">{tier.investment}</div>
                  </div>

                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-sans mb-6">{tier.desc}</p>

                  <div className="space-y-3 mb-8">
                    <h4 className="text-[10px] font-mono uppercase tracking-widest text-neutral-500">// Scope Milestones Included:</h4>
                    {tier.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs text-neutral-300">
                        <span className="text-[#06B6D4] font-mono mt-0.5">▪</span>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={triggerConsultation}
                  className={`w-full text-center py-3.5 rounded-xl text-xs font-mono uppercase tracking-widest font-bold transition-all ${tier.popular ? 'bg-[#06B6D4] text-black hover:bg-cyan-400 shadow-[0_4px_12px_rgba(6,182,212,0.15)]' : 'bg-neutral-900 text-neutral-300 hover:bg-neutral-800'}`}
                >
                  {tier.cta}
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 3: WHAT'S INCLUDED AS BASELINE STANDARDS IN EVERY PROJECT */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-20 border-t border-neutral-900/60">
          <div className="max-w-3xl mb-12">
            <p className="text-xs font-mono uppercase tracking-widest text-[#06B6D4] mb-3">Immutable Standards</p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-sans">Our Production Protocol Suite</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {baselineInclusions.map((inc, iIdx) => (
              <div key={iIdx} className="p-5 rounded-xl border border-neutral-900 bg-neutral-950/20">
                <h3 className="text-sm font-bold text-white font-mono mb-2 flex items-center gap-2">
                  <span className="text-[#06B6D4]">0{iIdx + 1}.</span> {inc.phase}
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed font-sans">{inc.info}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 4: CUSTOM SOFTWARE VS OFF-THE-SHELF TEMPLATES VALUE ARGUMENT */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-20 border-t border-neutral-900/60">
          <div className="bg-neutral-950 rounded-2xl border border-neutral-900 p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5">
              <span className="text-xs font-mono text-[#06B6D4] uppercase tracking-widest block mb-2">// The Cost of Shortcuts</span>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-sans mb-4">Why Templates Bleed Capital</h3>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-sans">
                Subscription platforms and generic themes appear efficient initially, but introduce systemic technical debt, platform lock-in fees, and unoptimized paint intervals that damage customer retention workflows.
              </p>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-xl bg-[#050505] border border-neutral-900">
                <h4 className="text-xs font-mono uppercase tracking-widest text-red-400 mb-2">Rigid Outdated Themes</h4>
                <p className="text-xs text-neutral-500 leading-relaxed font-sans">Bloated dependencies slow layout engines down, capping rendering frames and hurting organic SEO discoverability.</p>
              </div>
              <div className="p-5 rounded-xl bg-cyan-950/10 border border-[#06B6D4]/10">
                <h4 className="text-xs font-mono uppercase tracking-widest text-[#06B6D4] mb-2">Bespoke Architectural Isolation</h4>
                <p className="text-xs text-neutral-400 leading-relaxed font-sans">Our React builds render view states instantly and adapt seamlessly as your enterprise operational scale expands.</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: COMPREHENSIVE FREQUENTLY ASKED QUESTIONS GRID */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-20 border-t border-neutral-900/60">
          <div className="max-w-3xl mb-12">
            <p className="text-xs font-mono uppercase tracking-widest text-[#06B6D4] mb-3">Inbound Reference Guide</p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-sans">Frequently Answered Queries</h2>
          </div>
          <div className="space-y-4 max-w-4xl">
            {faqCatalog.map((faq, idx) => (
              <div 
                key={idx} 
                className="rounded-xl border border-neutral-900 bg-neutral-950/40 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 font-sans text-sm sm:text-base font-bold text-neutral-200 hover:text-white transition-colors focus:outline-none"
                >
                  <span>{faq.q}</span>
                  <span className="text-[#06B6D4] font-mono text-xl transform transition-transform duration-200">
                    {activeFaq === idx ? '−' : '+'}
                  </span>
                </button>
                {activeFaq === idx && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-neutral-400 leading-relaxed font-sans border-t border-neutral-900/40 mt-1">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 6: ELEVATED CLOSING CALL TO ACTION CORE PANEL */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 sm:py-24 border-t border-neutral-900/60">
          <div className="p-8 sm:p-14 rounded-3xl border border-neutral-900 bg-gradient-to-r from-neutral-950 via-neutral-950 to-neutral-900/30 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#06B6D4]/[0.02] blur-[120px] pointer-events-none rounded-full" />
            
            <div className="max-w-2xl relative z-10">
              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white mb-3">
                Let's Outline Your System Requirements
              </h2>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-sans">
                Skip the estimations. Connect directly with our lead solution engineers to map out concrete feature goals, data models, and accurate deployment timelines.
              </p>
            </div>

            <div className="relative z-10 flex-shrink-0">
              <button
                onClick={triggerConsultation}
                className="bg-neutral-100 hover:bg-[#06B6D4] text-black px-8 py-4 rounded-full text-xs font-bold font-mono uppercase tracking-widest transition-all duration-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] whitespace-nowrap"
              >
                Establish Pipeline Connection
              </button>
            </div>
          </div>
        </section>

      </div>

      {/* CORE GLOBAL FOOTER ACCESS COUPLING */}
      <Footer siteConfig={siteConfig} />

    </div>
  );
}
