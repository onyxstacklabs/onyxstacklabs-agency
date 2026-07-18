import React, { useEffect, useState } from 'react';

// LIVE DATA CORE IMPORTS
import { siteConfig } from '../config/siteConfig';

// MODULAR DETACHED COMPONENT ARCHITECTURE LAYER
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Industries({ currentPath, navigateToNode }) {
  const [selectedIndustry, setSelectedIndustry] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Reset scroll position on mounting phase
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleIndustryChange = (index) => {
    if (index === selectedIndustry) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setSelectedIndustry(index);
      setIsTransitioning(false);
    }, 180);
  };

  // Section 2 Data: Deep Sector Integration Matrix
  const industryCatalog = [
    {
      title: "Education",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        </svg>
      ),
      overview: "Scalable digital ecosystems engineered to support multi-campus orchestration, remote synchronous learning arrays, and highly protected institutional records management.",
      solutions: ["Institutional ERP Systems", "LMS Environments", "Automated Assessment Engines"],
      benefits: "Enhanced student data isolation, minimized administrative latency by 45%, and optimized faculty asset allocation loops."
    },
    {
      title: "Healthcare",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
      overview: "Interoperable, mission-critical environments prioritizing absolute database protection, secure telemetry ingestion, and sub-second multi-facility scheduling loops.",
      solutions: ["Secure EHR Interfaces", "Telehealth Streaming Modules", "Clinical Resource Schedulers"],
      benefits: "Guaranteed structural compliance with medical record privacy patterns, minimized triage processing times, and robust auditing logs."
    },
    {
      title: "Retail & E-commerce",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      ),
      overview: "High-throughput commerce gateways built to handle intensive seasonal load spikes, distributed product graphs, and personalized checkout experiences.",
      solutions: ["Omnichannel Commerce Engines", "Live Inventory Sync Mesh", "Predictive Demand Calculators"],
      benefits: "Sub-second product catalog search speeds, minimized cart drop rates, and real-time localized distribution tracking."
    },
    {
      title: "Manufacturing",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      overview: "Industrial-grade hardware monitoring software and resource management tooling providing complete structural transparency into production lines and raw material supply links.",
      solutions: ["Predictive Maintenance Consoles", "Shop-Floor Asset Monitors", "Quality Assurance Analytics Tools"],
      benefits: "Mitigated unexpected manufacturing line downtime, automated resource alerts, and lowered physical component rejection rates."
    },
    {
      title: "Logistics & Transportation",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
        </svg>
      ),
      overview: "Real-time fleet coordinates routing, high-concurrency storage node processing, and supply network mapping tailored for modern delivery setups.",
      solutions: ["Multi-Modal Route Optimization Platforms", "Warehouse Topology Planners", "Last-Mile Delivery Interfaces"],
      benefits: "Minimized fuel and route overhead by up to 22%, unified tracking layers, and automated verification handoffs."
    },
    {
      title: "Finance & Banking",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      overview: "Stateless, zero-fault accounting fabrics built with strict database locking controls, thorough encryption matrices, and instantaneous ledger calculations.",
      solutions: ["Corporate Ledger Engines", "Algorithmic Risk Management Dashboards", "RegTech Compliance Checkpoints"],
      benefits: "Guaranteed transactional integrity, immediate cross-node settlement tracking, and impenetrable data audit logs."
    },
    {
      title: "Real Estate",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      overview: "Dynamic asset evaluation pipelines, digital tenant portal systems, and unified investment property portfolios designed for commercial property groups.",
      solutions: ["Commercial Portfolio Visualizers", "Smart Lease Lifecycle Evaluators", "Asset Yield Modelling Engines"],
      benefits: "Accelerated property onboarding flows, transparent tenant lease logs, and clear visual projections for asset yields."
    },
    {
      title: "Hospitality",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      overview: "High-volume structural reservation networks designed to seamlessly balance occupancy adjustments, staff shift logs, and real-time vendor updates.",
      solutions: ["Central Reservation Systems (CRS)", "Dynamic Pricing Modulators", "Guest Engagement Applications"],
      benefits: "Eliminated overlapping booking anomalies entirely, heightened non-peak yield margins, and unified service profiles."
    },
    {
      title: "Startups",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      overview: "Highly malleable component ecosystems engineered for rapid feature expansion, iterative testing loops, and instantaneous cloud platform scaling.",
      solutions: ["MVP Architecture Engineering", "Serverless API Blueprints", "Event-Driven Customer Analytics Tracking"],
      benefits: "Drastically lowered engineering time-to-market metrics, minimal hosting overhead, and modular code ready for upcoming funding rounds."
    },
    {
      title: "Government & Public Sector",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      overview: "Highly reliable, multi-tenant digital utilities designed for maximal browser compatibility, screen-reader accessibility requirements, and high-security air-gapped deployments.",
      solutions: ["Citizen Portal Utilities", "Protected Public Document Registries", "Inter-Department Data Hubs"],
      benefits: "Strict alignment with public sector availability baselines, absolute security fencing, and cross-browser accessibility compliance."
    }
  ];

  // Section 3 Data: The Core Value Array
  const premiumValuePillars = [
    { title: "Defensive Security", desc: "We implement strict parameter boundaries, sanitization pipelines, and fine-grained authentication patterns to insulate operational records from threat actors." },
    { title: "Elastic Scalability", desc: "Building exclusively with stateless micro-architectures enables applications to spin up instances dynamically in response to severe traffic load spikes." },
    { title: "High-Velocity Performance", desc: "By using lean initial code compilation bundles, tree-shaking dead elements, and using client-side memory caching, layouts achieve perfect performance scores." },
    { title: "Cognitive AI Automation", desc: "Integrating Gemini cognitive services lets you offload intense text summarization, data extraction, and routing patterns into automatic loops." },
    { title: "Systemized UI/UX Design", desc: "We deploy standardized Figma-to-code design systems, ensuring pixel-perfect interface uniformity, scannable hierarchies, and clean user flows." },
    { title: "Long-Term Engineering Support", desc: "Our teams ship projects with clean automated testing routines and full technical documentation for straightforward internal transitions." }
  ];

  // Section 5 Data: Project Delivery Milestones
  const deliveryWorkflowPhases = [
    { id: "01", phaseName: "Discovery & System Mapping", summary: "We isolate existing software infrastructure blockages, map target transaction volumes, and compile strict schema parameters before designing wireframes." },
    { id: "02", phaseName: "Atomic Component Engineering", desc: "Interfaces are broken down into self-contained, isolated React components styled with utility frameworks to guarantee rapid visual consistency." },
    { id: "03", phaseName: "Cognitive & Data Orchestration", desc: "Connecting backend state machines, structuring indexing mechanisms across secure data clusters, and injecting machine learning models." },
    { id: "04", phaseName: "Continuous Edge Deployment", desc: "Passing systems through automated testing runners before distributing compiled modules to secure serverless edge configurations." }
  ];

  return (
    <div className="min-h-screen bg-[#030303] text-neutral-200 font-sans antialiased selection:bg-cyan-500 selection:text-black relative overflow-hidden">
      
      {/* BRAND AMBIENT RADIAL LIGHTING MASKS */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-[radial-gradient(ellipse_at_top,rgba(6,182,212,0.08),transparent_50%)] pointer-events-none z-0" />
      <div className="absolute top-[1200px] right-0 w-[500px] h-[500px] bg-cyan-500/[0.02] blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[600px] left-0 w-[600px] h-[600px] bg-blue-600/[0.02] blur-[160px] pointer-events-none" />

      {/* FIXED NAVIGATION FRAME INTEGRATION */}
      <Navbar 
        currentPath={currentPath} 
        activeSection="" 
        navigateToNode={navigateToNode} 
        siteConfig={siteConfig} 
      />

      {/* BODY CONTENT WRAPPER */}
      <main className="relative z-10 orchestration-industries-scope" id="main-content">
        
        {/* SECTION 1: HERO CONTAINER PANEL */}
        <header className="max-w-7xl mx-auto px-6 md:px-12 pt-36 pb-20 sm:pt-44 sm:pb-28">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-6">
              Enterprise Domain Expertise
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.1] font-sans">
              Custom Digital Infrastructures Built for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-cyan-100 to-blue-400">
                Complex Industry Verticals
              </span>
            </h1>
            <p className="text-base sm:text-lg text-neutral-400 max-w-2xl leading-relaxed mb-8">
              We translate specific operational constraints into high-performance software systems. Discover our tailored solutions engineered across key global market sectors.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => { navigateToNode('/'); setTimeout(() => { document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }, 150); }}
                className="bg-white hover:bg-cyan-400 text-black px-6 py-3.5 rounded-full text-xs font-bold font-mono uppercase tracking-widest transition-all duration-300 hover:shadow-[0_0_25px_rgba(6,182,212,0.25)]"
              >
                Initiate Architecture Audit
              </button>
              <button
                onClick={() => {
                  document.getElementById('verticals-grid')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="border border-neutral-800 hover:border-neutral-700 bg-neutral-950/60 text-neutral-300 px-6 py-3.5 rounded-full text-xs font-bold font-mono uppercase tracking-widest transition-colors duration-200"
              >
                Browse Sector Solutions
              </button>
            </div>
          </div>
        </header>

        {/* SECTION 2: INDUSTRIES WE SERVE INTERACTIVE PRESENTATION GRID */}
        <section id="verticals-grid" className="max-w-7xl mx-auto px-6 md:px-12 py-12 scroll-mt-28">
          <div className="border-b border-neutral-900 pb-4 mb-12">
            <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400">// Sector Matrix Selectors</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* LEFT ROW: TRIGGER COLUMN */}
            <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5" role="tablist" aria-label="Industry Sectors">
              {industryCatalog.map((ind, iIdx) => (
                <button
                  key={iIdx}
                  role="tab"
                  id={`tab-${iIdx}`}
                  aria-selected={selectedIndustry === iIdx}
                  aria-controls={`panel-${iIdx}`}
                  onClick={() => handleIndustryChange(iIdx)}
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-200 flex items-center gap-4 group ${selectedIndustry === iIdx ? 'bg-neutral-950 border-cyan-500/30 text-cyan-400 shadow-[inset_0_0_12px_rgba(6,182,212,0.04)] shadow-cyan-950/20' : 'bg-transparent border-neutral-900/60 text-neutral-400 hover:text-neutral-200 hover:border-neutral-800'}`}
                >
                  <div className={`p-2 rounded-md transition-colors ${selectedIndustry === iIdx ? 'bg-cyan-500/10 text-cyan-400' : 'bg-neutral-900/50 text-neutral-500 group-hover:text-neutral-300'}`}>
                    {ind.icon}
                  </div>
                  <span className="text-xs sm:text-sm font-bold tracking-wide font-sans">{ind.title}</span>
                </button>
              ))}
            </div>

            {/* RIGHT ROW: SELECTED DISPLAY CORE PANEL */}
            <div 
              id={`panel-${selectedIndustry}`}
              role="tabpanel"
              aria-labelledby={`tab-${selectedIndustry}`}
              className={`lg:col-span-8 p-6 sm:p-10 rounded-2xl border border-neutral-900 bg-gradient-to-br from-neutral-950 to-neutral-900/20 min-h-[460px] flex flex-col justify-between relative transition-all duration-200 ${isTransitioning ? 'opacity-40 scale-[0.995] blur-[1px]' : 'opacity-100 scale-100 blur-0'}`}
            >
              <div className="absolute top-0 right-0 w-72 h-72 bg-cyan-500/[0.02] blur-[80px] pointer-events-none rounded-full" />
              
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400">
                    {industryCatalog[selectedIndustry].icon}
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight text-white font-sans">{industryCatalog[selectedIndustry].title}</h3>
                </div>

                <div className="space-y-6 text-sm sm:text-base text-neutral-400 leading-relaxed font-sans">
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-2">Operational Scope Overview</h4>
                    <p className="text-neutral-300 text-sm sm:text-base">{industryCatalog[selectedIndustry].overview}</p>
                  </div>

                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-3">Custom Architecture Implementations</h4>
                    <div className="flex flex-wrap gap-2">
                      {industryCatalog[selectedIndustry].solutions.map((sol, sIdx) => (
                        <span key={sIdx} className="px-3 py-1.5 rounded-md bg-neutral-900 border border-neutral-800 text-xs font-mono text-neutral-200 hover:border-neutral-700 transition-colors">
                          {sol}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-neutral-900">
                <h4 className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-2">Target Corporate Outcomes</h4>
                <p className="text-neutral-400 italic text-xs sm:text-sm font-sans bg-neutral-900/30 p-4 rounded-xl border border-neutral-900">
                  {industryCatalog[selectedIndustry].benefits}
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* SECTION 3: WHY BUSINESSES CHOOSE ONYXSTACK LABS */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-20 border-t border-neutral-900/60">
          <div className="max-w-3xl mb-16">
            <p className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-3">Operational Guarantees</p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-sans">Engineered for Architectural Stability</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {premiumValuePillars.map((pillar, pIdx) => (
              <div key={pIdx} className="p-6 rounded-xl border border-neutral-900 bg-neutral-950/40 hover:border-neutral-800/80 transition-all duration-300 hover:-translate-y-0.5 group">
                <div className="w-1.5 h-6 bg-cyan-500 mb-4 rounded-full group-hover:shadow-[0_0_12px_rgba(6,182,212,0.6)] transition-all" />
                <h3 className="text-base font-bold text-white mb-2 font-sans tracking-wide">{pillar.title}</h3>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-sans">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 4: TECHNOLOGIES ACROSS INDUSTRIES DATA MATRIX */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-20 border-t border-neutral-900/60">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <p className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-3">Consolidated Tech Ecosystem</p>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-4 font-sans">Adaptive Stacks for Multi-Tenant Environments</h2>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-sans">
                Instead of forcing rigid systems onto diverse business problems, our engineers configure specialized technological matrices that best balance computation speed with long-term security.
              </p>
            </div>
            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-4">
              {[
                { name: "React Frontend Core", role: "UI Interaction Optimization" },
                { name: "Node.js Platform", role: "High-Throughput IO Pipelines" },
                { name: "MongoDB Infrastructure", role: "Dynamic Object Schemas" },
                { name: "Firebase Cloud Fabrics", role: "Stateless Micro-Triggers" },
                { name: "Gemini AI Instances", role: "Cognitive Inference Chains" },
                { name: "Vite Compilation Tools", role: "Sub-Second Fast-Bundling" }
              ].map((techElement, teIdx) => (
                <div key={teIdx} className="p-4 rounded-xl border border-neutral-900 bg-neutral-950/60 hover:border-neutral-800/60 transition-colors">
                  <h4 className="text-xs font-bold text-white mb-1 font-mono">{techElement.name}</h4>
                  <p className="text-[10px] text-neutral-500 uppercase tracking-wider font-sans">{techElement.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5: ENTERPRISE DEVELOPMENT PROCESS FLOW */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-20 border-t border-neutral-900/60">
          <div className="max-w-3xl mb-16">
            <p className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-3">Delivery Engineering</p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-sans">A Scientific Approach to Software Lifecycle Delivery</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {deliveryWorkflowPhases.map((phase, phIdx) => (
              <div key={phIdx} className="p-6 rounded-xl border border-neutral-900 bg-gradient-to-b from-neutral-950 to-[#050505] relative group hover:border-neutral-800/80 transition-all duration-200">
                <div className="absolute top-4 right-4 text-xs font-mono font-bold text-neutral-800 group-hover:text-cyan-400/50 transition-colors">
                  #{phase.id}
                </div>
                <h3 className="text-sm font-bold text-white mb-3 font-sans tracking-wide mt-2">{phase.phaseName}</h3>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-sans">{phase.summary || phase.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 6: FIXED CLOSING CALL TO ACTION BLOCK */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 sm:py-24 border-t border-neutral-900/60">
          <div className="p-8 sm:p-14 rounded-3xl border border-neutral-900 bg-gradient-to-tr from-neutral-950 via-neutral-950 to-neutral-900/40 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-500/[0.02] blur-[100px] pointer-events-none rounded-full" />
            
            <div className="max-w-2xl">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-3 font-sans">
                Ready to Upgrade Your Domain Technology Framework?
              </h2>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-sans">
                Connect with our product consultants to lay out a detailed system diagram and structural transition timeline customized specifically for your business domain's demands.
              </p>
            </div>

            <div className="flex-shrink-0 z-10">
              <button
                onClick={() => { navigateToNode('/'); setTimeout(() => { document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }, 150); }}
                className="bg-neutral-100 hover:bg-cyan-400 text-black px-8 py-4 rounded-full text-xs font-bold font-mono uppercase tracking-widest transition-all duration-300 hover:shadow-[0_0_25px_rgba(6,182,212,0.25)] whitespace-nowrap"
              >
                Schedule Architecture Consultation
              </button>
            </div>
          </div>
        </section>

      </main>

      {/* CORE GLOBAL FOOTER INTEGRATION EXPOSURE */}
      <Footer siteConfig={siteConfig} />

    </div>
  );
}
