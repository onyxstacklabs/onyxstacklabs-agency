import React, { useEffect, useState } from 'react';

// LIVE DATA CORE IMPORTS
import { siteConfig } from '../config/siteConfig';

// MODULAR DETACHED COMPONENT ARCHITECTURE LAYER
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Projects({ currentPath, navigateToNode }) {
  const [activeCase, setActiveCase] = useState(0);

  // Synchronize layout scroll threshold on initialization phase
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Section 2 Data: Comprehensive Corporate Case Studies Catalog Matrix
  const caseStudies = [
    {
      name: "OnyxStack School",
      type: "EdTech & Institutional ERP Architecture",
      status: "Live Production Deployment",
      overview: "An enterprise-grade cloud environment designed to consolidate multi-campus operations, secure highly vulnerable student databases, and manage automated grading metrics.",
      problem: "The institution relied on legacy, disconnected software systems that suffered from frequent database synchronization failures, slow manual report building, and serious security risks regarding student data privacy.",
      solution: "We deployed a decoupled React application backed by a distributed database cluster. This architecture isolated administrative workflows from public portals and added end-to-end encryption to sensitive student records.",
      features: [
        "Automated multi-campus operational metrics dashboard",
        "Role-based secure access tokens for staff and students",
        "Sub-second ledger synchronization loops for student data"
      ],
      stack: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
      benefits: "Reduced administrative operational processing latency by 64% and completely eliminated localized database downtime records across all target campus networks.",
      accent: "from-cyan-500/20 to-blue-600/5"
    },
    {
      name: "OnyxStack Tailors",
      type: "B2B Supply Chain & Custom Commerce Core",
      status: "Live Production Deployment",
      overview: "A specialized inventory mapping and ordering application built to handle complex custom sizing calculations, materials availability tracking, and automated logistical alerts.",
      problem: "Manual transcription errors in custom fit measurements led to a 14% material waste rate, compounded by poor visibility into textile supplier timelines.",
      solution: "We built an interactive, single-page ordering system that validates spatial measurement data directly in the browser before routing supply line triggers straight to manufacturing centers.",
      features: [
        "Interactive multidimensional sizing input engine",
        "Live component inventory monitoring and low-stock triggers",
        "Automated fulfillment scheduling engine with client alert updates"
      ],
      stack: ["React", "Firebase", "Express.js", "Vite"],
      benefits: "Lowered production material waste margins below 2% within ninety days and cut fulfillment turnaround cycles by an average of four business days.",
      accent: "from-purple-500/20 to-indigo-600/5"
    },
    {
      name: "OnyxStack GatePass",
      type: "High-Security Identity Verification Network",
      status: "Live Production Deployment",
      overview: "A localized verification system designed to manage facility foot traffic through real-time cryptographic tokens, biometric system calls, and automated alert logs.",
      problem: "Legacy identity tracking relied on easily duplicated badge structures, creating severe security audit gaps in restricted infrastructure zones.",
      solution: "We engineered a low-latency web architecture running on isolated edge environments, utilizing signed time-based tokens and secure database logging to handle identity validation.",
      features: [
        "Time-locked dynamic cryptographic credential checks",
        "Hardware-interfaced biometric checkpoint ingestion hooks",
        "Real-time access pattern auditing and automated anomaly logs"
      ],
      stack: ["React", "Node.js", "MongoDB", "Git"],
      benefits: "Achieved immediate identity verification response times (~180ms) and established perfect compliance tracking for enterprise data center security audits.",
      accent: "from-emerald-500/20 to-teal-600/5"
    },
    {
      name: "OnyxStack Lottery",
      type: "Verifiable Randomization & Reward Tracking Ledger",
      status: "Active System Optimization Phase",
      overview: "A highly resilient reward distribution environment leveraging advanced mathematical algorithms to guarantee non-bias event outcomes and safe balance ledger updates.",
      problem: "Existing random drawing frameworks lacked visible transparency, resulting in growing user skepticism regarding system fairness and audit compliance.",
      solution: "We integrated public, cryptographically verifiable random number generation processes with a high-throughput transaction ledger built on stateless cloud microservices.",
      features: [
        "Publicly auditable cryptographic event sequencing blocks",
        "Safe financial ledger architecture with zero concurrent write conflicts",
        "High-density concurrent participant sorting pipelines"
      ],
      stack: ["React", "Firebase", "Vercel", "Tailwind CSS"],
      benefits: "Restored user platform retention metrics by providing fully transparent drawing data, while lowering database processing costs during peak traffic waves.",
      accent: "from-amber-500/20 to-orange-600/5"
    },
    {
      name: "OnyxStack Cricket",
      type: "Real-Time Telemetry Analytics Console",
      status: "Live Production Deployment",
      overview: "A high-performance sports tracking interface processing sub-second game metrics, machine learning match projections, and high-volume fan interactions concurrently.",
      problem: "Existing data providers experienced up to 5-second delays when pushing live event metrics, causing massive lag drops for active mobile web views.",
      solution: "We set up an optimized WebSocket telemetry server layered with a React virtualized list framework to render millions of data packets without slowing down UI thread performance.",
      features: [
        "Sub-second data payload distribution layer via open WebSockets",
        "Predictive outcome modeling components fueled by Gemini AI instances",
        "High-performance dashboard rendering capable of 60 FPS updates"
      ],
      stack: ["React", "Gemini AI", "Node.js", "Vite"],
      benefits: "Increased fan platform interaction averages by 140% due to instantaneous updates, providing zero lag during high-concurrency match events.",
      accent: "from-rose-500/20 to-red-600/5"
    }
  ];

  // Section 3 Data: Methodology Phases
  const methodologies = [
    { step: "Phase 01", title: "Technical Architecture Discovery", desc: "We audit underlying legacy databases, map internal API dependencies, and establish concrete performance benchmarks before writing a single line of code." },
    { step: "Phase 02", title: "Isolated Component Prototyping", desc: "Constructing atomic UI components within sandboxed testing setups ensures high code reuse, predictable state behavior, and reliable responsiveness." },
    { step: "Phase 03", title: "Deterministic Security Auditing", desc: "Running data inputs through thorough validation filters, setting up strict cross-origin access tokens, and verifying cloud security boundaries." },
    { step: "Phase 04", title: "Automated Edge Orchestration", desc: "Deploying code through continuous delivery systems onto distributed serverless edge nodes to keep global content delivery times as low as possible." }
  ];

  // Section 4 Data: Key Operational Results
  const globalImpactMetrics = [
    { value: "4.8x", label: "Average Infrastructure Velocity Increase" },
    { value: "Zero", label: "Critical Cross-Site Scripting Injection Exploits Recorded" },
    { value: "32%", label: "Average Monthly Cloud Operations Capital Saved" },
    { value: "100%", label: "Complete Codebase Ownership Handover Execution" }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-neutral-100 font-sans antialiased selection:bg-[#06B6D4] selection:text-black scroll-smooth relative overflow-hidden">
      
      {/* BRAND AMBIENT DIGITAL GRAPHICS MATRICES */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[800px] bg-[radial-gradient(ellipse_at_top,rgba(6,182,212,0.06),transparent_65%)] pointer-events-none z-0" />
      <div className="absolute top-[1800px] left-0 w-[500px] h-[500px] bg-[#2563EB]/[0.015] blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[600px] right-0 w-[600px] h-[600px] bg-[#06B6D4]/[0.02] blur-[220px] pointer-events-none" />

      {/* CORE NAVBAR ROUTER INTEGRATION INJECTION */}
      <Navbar 
        currentPath={currentPath} 
        activeSection="" 
        navigateToNode={navigateToNode} 
        siteConfig={siteConfig} 
      />

      {/* COMPONENT BODY LAYER FRAME */}
      <div className="relative z-10 distribution-case-studies-scope">
        
        {/* SECTION 1: HERO DISPLAY CONTAINER */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-16 sm:pt-40 sm:pb-24">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#06B6D4]/10 border border-[#06B6D4]/20 text-[#06B6D4] text-xs font-mono uppercase tracking-widest mb-6">
              Engineering Analytics Logs
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
              Enterprise Software Case Studies: <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#06B6D4] via-cyan-300 to-blue-500">
                Proven Technical Performance
              </span>
            </h1>
            <p className="text-base sm:text-lg text-neutral-400 max-w-2xl leading-relaxed font-sans">
              Review detailed technical breakdowns of our production systems, architectural methodologies, and specific operational solutions engineered for scaling institutions.
            </p>
          </div>
        </section>

        {/* SECTION 2: EXTENSIVE CORPORATE CASE STUDIES CAPABILITIES CONTAINER */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-12">
          
          {/* TAB ARCHITECTURE ELEMENT TRIGGER LIST */}
          <div className="flex flex-wrap items-center gap-2 border-b border-neutral-900 pb-4 mb-12">
            {caseStudies.map((cs, idx) => (
              <button
                key={idx}
                onClick={() => setActiveCase(idx)}
                className={`px-5 py-2.5 rounded-lg text-xs font-mono uppercase tracking-widest transition-all duration-200 focus:outline-none ${activeCase === idx ? 'bg-[#06B6D4]/10 border border-[#06B6D4]/30 text-[#06B6D4] font-bold' : 'border border-transparent text-neutral-500 hover:text-neutral-300'}`}
              >
                {cs.name}
              </button>
            ))}
          </div>

          {/* ACTIVE CONTENT SHEET LAYER */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* CORE TECHNICAL SPEC CARD CARD */}
            <div className="lg:col-span-8 p-8 rounded-2xl border border-neutral-900 bg-gradient-to-br from-neutral-950 via-neutral-950 to-neutral-900/20 relative">
              <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl ${caseStudies[activeCase].accent} blur-[80px] pointer-events-none rounded-full`} />
              
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-neutral-900 pb-6 mb-6 relative z-10">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500">{caseStudies[activeCase].type}</span>
                  <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mt-1">{caseStudies[activeCase].name}</h2>
                </div>
                <div className="px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-800/30 text-[10px] font-mono uppercase tracking-widest text-[#06B6D4]">
                  {caseStudies[activeCase].status}
                </div>
              </div>

              <div className="space-y-6 relative z-10 text-sm sm:text-base leading-relaxed text-neutral-400 font-sans">
                <div>
                  <h3 className="text-xs font-mono uppercase tracking-widest text-white mb-2">// Project Overview</h3>
                  <p>{caseStudies[activeCase].overview}</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                  <div className="p-5 rounded-xl bg-neutral-900/30 border border-neutral-900">
                    <h4 className="text-xs font-mono uppercase tracking-widest text-red-400 mb-2">Identified Operational Bottleneck</h4>
                    <p className="text-xs sm:text-sm">{caseStudies[activeCase].problem}</p>
                  </div>
                  <div className="p-5 rounded-xl bg-cyan-950/10 border border-[#06B6D4]/10">
                    <h4 className="text-xs font-mono uppercase tracking-widest text-[#06B6D4] mb-2">Engineered System Solution</h4>
                    <p className="text-xs sm:text-sm">{caseStudies[activeCase].solution}</p>
                  </div>
                </div>

                <div className="pt-2">
                  <h3 className="text-xs font-mono uppercase tracking-widest text-white mb-3">// Key Technical Features Built</h3>
                  <ul className="space-y-2">
                    {caseStudies[activeCase].features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                        <span className="text-[#06B6D4] font-mono mt-0.5">✓</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-neutral-900/60">
                  <h3 className="text-xs font-mono uppercase tracking-widest text-white mb-2">// Business Capital & Operational Outcomes</h3>
                  <p className="text-neutral-200 bg-neutral-900/40 p-4 rounded-xl border border-neutral-900 text-xs sm:text-sm font-sans italic">
                    "{caseStudies[activeCase].benefits}"
                  </p>
                </div>
              </div>
            </div>

            {/* SIDE PANEL META METRICS METADATA LAYER */}
            <div className="lg:col-span-4 space-y-6">
              
              {/* STACK LIST CONTAINER */}
              <div className="p-6 rounded-xl border border-neutral-900 bg-neutral-950/60">
                <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-4">Allocated Stack Matrix</h3>
                <div className="flex flex-wrap gap-2">
                  {caseStudies[activeCase].stack.map((tech, tIdx) => (
                    <span key={tIdx} className="px-3 py-1.5 rounded-md bg-neutral-900 border border-neutral-800 text-xs font-mono text-white">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* ACTION CALL MODULE */}
              <div className="p-6 rounded-xl border border-neutral-900 bg-neutral-950/20 space-y-4">
                <h4 className="text-xs font-mono uppercase tracking-widest text-neutral-500">Live Sandbox Protocol</h4>
                <p className="text-xs text-neutral-400 leading-relaxed font-sans">
                  Inspect the front-facing layout interface models and verified sandboxed API response streams for this deployment node.
                </p>
                <button
                  onClick={() => alert(`Launching public deployment sandbox frame for ${caseStudies[activeCase].name}...`)}
                  className="w-full text-center py-3 rounded-lg bg-neutral-900 hover:bg-[#06B6D4] text-neutral-300 hover:text-black text-xs font-mono uppercase tracking-widest font-bold transition-all duration-300 focus:outline-none"
                >
                  Launch Sandbox View
                </button>
              </div>

            </div>

          </div>
        </section>

        {/* SECTION 3: SYSTEM DESIGN DEVELOPMENT METHODOLOGY PROTOCOLS */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-20 border-t border-neutral-900/60">
          <div className="max-w-3xl mb-16">
            <p className="text-xs font-mono uppercase tracking-widest text-[#06B6D4] mb-3">Workflow Execution</p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-sans">Our Technical Project Implementation Pipeline</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {methodologies.map((meth, mIdx) => (
              <div key={mIdx} className="p-6 rounded-xl border border-neutral-900 bg-gradient-to-b from-neutral-950 to-[#050505] relative">
                <span className="text-[10px] font-mono text-neutral-600 uppercase tracking-widest block mb-4">{meth.step}</span>
                <h3 className="text-base font-bold text-white mb-2 font-sans tracking-wide">{meth.title}</h3>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-sans">{meth.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 4: GLOBAL METRICS MATRIX AND SYSTEM RESULTS */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-20 border-t border-neutral-900/60">
          <div className="max-w-3xl mb-16">
            <p className="text-xs font-mono uppercase tracking-widest text-[#06B6D4] mb-3">System Metrics</p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-sans">Compounding Performance Metrics Across Production Environments</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {globalImpactMetrics.map((gim, gIdx) => (
              <div key={gIdx} className="p-6 rounded-xl border border-neutral-900/40 bg-neutral-950/20 text-center sm:text-left">
                <div className="text-3xl sm:text-4xl font-bold font-mono tracking-tight text-white mb-1">
                  {gim.value}
                </div>
                <div className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-neutral-500 leading-relaxed">
                  {gim.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 5: MASTER ALLOCATED CORE TECHNOLOGIES ARRAY */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-20 border-t border-neutral-900/60">
          <div className="max-w-3xl mb-12">
            <p className="text-xs font-mono uppercase tracking-widest text-[#06B6D4] mb-3">Ecosystem Array</p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-sans">Core Platforms Powering Our Client Application Ecosystems</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {["React Engine", "Node.js Platform", "MongoDB Infrastructure", "Firebase Cloud Solutions", "Gemini Cognitive AI"].map((coreTech, ctIdx) => (
              <div key={ctIdx} className="p-5 rounded-xl border border-neutral-900 bg-neutral-950/80 hover:border-neutral-800 transition-colors duration-200">
                <h4 className="text-sm font-bold text-white font-sans tracking-wide mb-1">{coreTech}</h4>
                <p className="text-[9px] font-mono uppercase tracking-widest text-neutral-500">Verified System Asset</p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 6: COMPREHENSIVE CALL TO ACTION CONSOLE TUNNEL */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 sm:py-24 border-t border-neutral-900/60">
          <div className="p-8 sm:p-16 rounded-3xl border border-neutral-900 bg-gradient-to-r from-neutral-950 via-neutral-950 to-neutral-900/40 relative overflow-hidden text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-8">
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom_right,rgba(6,182,212,0.03),transparent_45%)] pointer-events-none" />
            <div className="max-w-2xl relative z-10">
              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white mb-3">
                Ready to Engineer Your Own Performance Case Study?
              </h2>
              <p className="text-sm text-neutral-400 leading-relaxed font-sans">
                Bring your scaling challenges into our system framework. Connect with our principal engineering architects to deploy custom software optimized for your specific operational goals.
              </p>
            </div>
            <div className="relative z-10 flex-shrink-0">
              <button 
                onClick={() => { navigateToNode('/'); setTimeout(() => { document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }, 150); }}
                className="inline-block bg-white hover:bg-[#06B6D4] text-black px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest font-bold transition-all duration-300 hover:shadow-[0_0_25px_rgba(6,182,212,0.4)] whitespace-nowrap"
              >
                Establish Pipeline Connection
              </button>
            </div>
          </div>
        </section>

      </div>

      {/* CORE GLOBAL FOOTER MODULE STRUCTURE */}
      <Footer siteConfig={siteConfig} />

    </div>
  );
}
