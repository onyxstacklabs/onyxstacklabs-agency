// src/App.jsx
import React, { useState } from 'react';

export default function App() {
  // Production Leads Matrix Configuration (Client-side Simulation state)
  const [formData, setFormData] = useState({
    enterpriseName: '',
    coreRequirements: '',
    budgetAllocation: 'Premium ($2k - $5k)'
  });
  
  const [submissionState, setSubmissionState] = useState('IDLE'); // IDLE, TRANSMITTING, SUCCESS

  // Hardcoded Ecosystem Showcase Architecture Array mapping every single verified node
  const activeEcosystemNodes = [
    {
      id: "tailors-node",
      title: "OnyxStack Tailors",
      subTitle: "AI-ASSISTED MEASUREMENT SCANNING",
      description: "Advanced web application utilizing Gemini AI to parse handwritten measurements and images into structured relational database nodes seamlessly.",
      tags: ["React", "Firebase", "Gemini API", "Tailwind"],
      isLive: true
    },
    {
      id: "mudra-node",
      title: "OnyxStack Mudra",
      subTitle: "SECURE TRANSACTION PORTAL CORE",
      description: "High-fidelity digital ledger and interactive dashboard simulator tracking real-time fund transfers, analytical updates, and automated accounting workflows.",
      tags: ["React", "Firebase Store", "Tailwind UI"],
      isLive: false
    },
    {
      id: "school-node",
      title: "OnyxStack School",
      subTitle: "ENTERPRISE ERP MANAGEMENT MODULE",
      description: "A comprehensive, multi-tenant educational framework governing operations, real-time fee tracking, and academic administrative control centers.",
      tags: ["React", "Cloud Firestore", "Vite Engine"],
      isLive: true
    },
    {
      id: "gatepass-node",
      title: "OnyxStack GatePass",
      subTitle: "QR SECURITY SCANNING NETWORK",
      description: "Dual-camera visitor authentication deployment capturing live gate logs, processing secure QR entry matrix, and operating on low-latency DC power infrastructure nodes.",
      tags: ["React", "Firebase Auth", "Hardware API"],
      isLive: true
    },
    {
      id: "lottery-node",
      title: "OnyxStack Lottery",
      subTitle: "LIVE ENGAGEMENT MATRIX",
      description: "High-performance random selection algorithms and user visualization dashboards built for heavy live engagement platforms with low system latency.",
      tags: ["React.js", "Realtime DB", "CSS Effects"],
      isLive: true
    },
    {
      id: "cricket-node",
      title: "OnyxStack Cricket",
      subTitle: "REAL-TIME SCORING INFRASTRUCTURE",
      description: "Ultra-responsive microsecond updating network architecture delivering tournament brackets, ball-by-ball updates, and dynamic stats layouts.",
      tags: ["React", "Vite", "Live Sync Nodes"],
      isLive: false
    }
  ];

  // Core Infrastructure Blocks Metadata
  const coreInfrastructureEngine = [
    { title: "React Architecture", detail: "Component Matrix Lifecycle" },
    { title: "Firebase Database", detail: "Real-time Synchronization Nodes" },
    { title: "Gemini AI Node", detail: "Automation" },
    { title: "Vite Execution", detail: "Microsecond Hot Reload Optimization" }
  ];

  const handleParameterTransmission = (e) => {
    e.preventDefault();
    if (!formData.enterpriseName || !formData.coreRequirements) {
      alert("System Notice: Please fill all parameter fields before execution.");
      return;
    }

    setSubmissionState('TRANSMITTING');

    // Simulating asynchronous structural transport overhead pipeline (1.5s latency local execution)
    setTimeout(() => {
      setSubmissionState('SUCCESS');
      // Resetting interface buffer
      setFormData({
        enterpriseName: '',
        coreRequirements: '',
        budgetAllocation: 'Premium ($2k - $5k)'
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans antialiased selection:bg-cyan-500 selection:text-black">
      
      {/* --- TOP FIXED PLATFORM INTERFACE HEADER --- */}
      <header className="border-b border-neutral-900 bg-black/80 backdrop-blur-md sticky top-0 z-50 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_12px_#22d3ee] animate-pulse"></div>
          <h1 className="text-xl font-bold tracking-wider uppercase text-neutral-100">
            OnyxStack <br className="sm:hidden" /> Labs
          </h1>
        </div>
        
        <div className="flex items-center gap-2 bg-neutral-950 border border-neutral-800 px-4 py-2 rounded-full">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]"></div>
          <span className="text-xs uppercase tracking-widest text-neutral-400 font-mono">Systems Operational</span>
        </div>
      </header>

      {/* --- LIVE PRODUCTION ECOSYSTEM CONTEXT NODE --- */}
      <main className="max-w-4xl mx-auto px-6 py-12 space-y-16">
        
        <section className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-100 uppercase">
            Live Production <br /> Ecosystem
          </h2>
          <p className="text-neutral-400 max-w-2xl text-base leading-relaxed">
            Real-world scalable workflows and enterprise instances built from scratch.
          </p>
          <div className="inline-block bg-neutral-950 border border-neutral-800 px-4 py-2 rounded font-mono text-xs uppercase tracking-widest text-neutral-500">
            Total Context Nodes: 06
          </div>
          
          {/* --- APPLICATION ARCHITECTURE GRID --- */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            {activeEcosystemNodes.map((node) => (
              <div 
                key={node.id} 
                className="bg-neutral-950 border border-neutral-900 rounded-xl p-6 flex flex-col justify-between hover:border-neutral-800 transition-all relative overflow-hidden group"
              >
                {node.isLive && (
                  <span className="absolute top-4 right-4 bg-emerald-950/50 border border-emerald-800 text-emerald-400 text-[10px] font-mono font-bold px-2 py-0.5 rounded-full uppercase tracking-wider flex items-center gap-1">
                    <span className="w-1 h-1 rounded-full bg-emerald-400 animate-ping"></span> Live App
                  </span>
                )}
                
                <div className="space-y-3">
                  <div>
                    <h3 className="text-xl font-bold text-neutral-100 group-hover:text-cyan-400 transition-colors">{node.title}</h3>
                    <p className="text-xs font-mono font-bold text-cyan-400 tracking-wider uppercase mt-1">{node.subTitle}</p>
                  </div>
                  <p className="text-sm text-neutral-400 leading-relaxed pr-4">{node.description}</p>
                </div>

                <div className="mt-6 space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {node.tags.map((tag, idx) => (
                      <span key={idx} className="bg-neutral-900 border border-neutral-800 text-neutral-400 font-mono text-[10px] px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <button 
                    onClick={() => alert(`Simulating execution initialization pipeline for ${node.title}...`)}
                    className="w-full bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-neutral-200 hover:text-white font-mono text-xs uppercase tracking-wider py-3 px-4 rounded-lg flex items-center justify-center gap-2 group/btn transition-all"
                  >
                    Launch Live Simulation <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <hr className="border-neutral-900" />

        {/* --- CORE INFRASTRUCTURE MATRIX ENGINE --- */}
        <section className="space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-neutral-100 uppercase">
              Core Infrastructure Engine
            </h2>
            <p className="text-sm font-mono text-neutral-500 uppercase tracking-wider">
              Zero bloatware, heavy optimization runtime tech components mapping.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {coreInfrastructureEngine.map((engine, idx) => (
              <div key={idx} className="bg-neutral-950 border border-neutral-900 rounded-xl p-4 text-center space-y-1">
                <h4 className="text-sm font-bold text-neutral-200">{engine.title}</h4>
                <p className="text-[10px] font-mono text-neutral-500 uppercase tracking-wide">{engine.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <hr className="border-neutral-900" />

        {/* --- DYNAMIC SIMULATED EXPANSION LEAD SUBMISSION FORM --- */}
        <section className="bg-neutral-950 border border-neutral-900 rounded-2xl p-6 md:p-8 max-w-xl mx-auto space-y-6 relative overflow-hidden">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-extrabold tracking-tight text-neutral-100 uppercase">
              Initiate Ecosystem Expansion
            </h2>
            <p className="text-sm text-neutral-400">
              Drop your project requirements directly into our live production pipeline queue.
            </p>
          </div>

          {submissionState === 'SUCCESS' ? (
            <div className="bg-neutral-900 border border-emerald-900/50 rounded-xl p-6 text-center space-y-4 animate-fadeIn">
              <div className="w-12 h-12 rounded-full bg-emerald-950 border border-emerald-500 text-emerald-400 flex items-center justify-center mx-auto text-xl shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                ✓
              </div>
              <div className="space-y-1">
                <h4 className="text-lg font-bold text-emerald-400 font-mono uppercase tracking-wider">Transmission Complete</h4>
                <p className="text-xs text-neutral-400">Production parameters securely indexed inside local cluster simulation matrix.</p>
              </div>
              <button 
                onClick={() => setSubmissionState('IDLE')}
                className="text-xs text-cyan-400 hover:underline font-mono uppercase tracking-widest pt-2 block mx-auto"
              >
                Transmit Another Lead Node
              </button>
            </div>
          ) : (
            <form onSubmit={handleParameterTransmission} className="space-y-5">
              <div className="space-y-2">
                <label className="text-xs font-mono font-bold uppercase tracking-widest text-neutral-400">Enterprise Name</label>
                <input 
                  type="text" 
                  disabled={submissionState === 'TRANSMITTING'}
                  placeholder="e.g., Global Logistics Corp" 
                  value={formData.enterpriseName}
                  onChange={(e) => setFormData({...formData, enterpriseName: e.target.value})}
                  className="w-full bg-black border border-neutral-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 rounded-lg py-3 px-4 text-sm text-white placeholder-neutral-600 outline-none transition-all disabled:opacity-50"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono font-bold uppercase tracking-widest text-neutral-400">Core Requirements</label>
                <textarea 
                  rows="4"
                  disabled={submissionState === 'TRANSMITTING'}
                  placeholder="Describe customized app modules or automated features..." 
                  value={formData.coreRequirements}
                  onChange={(e) => setFormData({...formData, coreRequirements: e.target.value})}
                  className="w-full bg-black border border-neutral-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 rounded-lg py-3 px-4 text-sm text-white placeholder-neutral-600 outline-none transition-all resize-none disabled:opacity-50"
                ></textarea>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono font-bold uppercase tracking-widest text-neutral-400">Budget Allocation</label>
                <select 
                  disabled={submissionState === 'TRANSMITTING'}
                  value={formData.budgetAllocation}
                  onChange={(e) => setFormData({...formData, budgetAllocation: e.target.value})}
                  className="w-full bg-black border border-neutral-800 focus:border-cyan-500 rounded-lg py-3 px-4 text-sm text-white outline-none appearance-none cursor-pointer disabled:opacity-50"
                >
                  <option>Standard MVP ($1k - $2k)</option>
                  <option>Premium ($2k - $5k)</option>
                  <option>Enterprise Architecture ($5k+)</option>
                </select>
              </div>

              <button 
                type="submit"
                disabled={submissionState === 'TRANSMITTING'}
                className="w-full bg-cyan-400 hover:bg-cyan-300 disabled:bg-cyan-950 disabled:text-cyan-600 text-black font-extrabold font-mono text-xs uppercase tracking-widest py-4 px-4 rounded-xl shadow-[0_4px_20px_rgba(34,211,238,0.15)] hover:shadow-[0_4px_25px_rgba(34,211,238,0.3)] transition-all flex items-center justify-center"
              >
                {submissionState === 'TRANSMITTING' ? "TRANSMITTING..." : "TRANSMIT PRODUCTION PARAMETER LEAD"}
              </button>
            </form>
          )}
        </section>

      </main>

      {/* --- BRAND METADATA FOOTER FRAMEWORK WITH VECTOR LOGOS --- */}
      <footer className="border-t border-neutral-950 bg-black py-12 px-6 mt-12 text-center space-y-8">
        <div className="space-y-2">
          <h3 className="text-lg font-bold tracking-widest uppercase text-neutral-200">OnyxStack Labs</h3>
          <p className="text-xs text-neutral-500 max-w-md mx-auto leading-relaxed">
            Programmatic SEO Frameworks & Custom Software Ecosystems Hub.
          </p>
        </div>

        {/* Unified Responsive Brand Vector Layout */}
        <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-4 max-w-xl mx-auto font-mono text-xs font-bold uppercase tracking-widest text-neutral-400">
          
          {/* YouTube Brand Node */}
          <a href="#" className="flex items-center gap-2 hover:text-cyan-400 transition-colors group">
            <svg className="w-4 h-4 fill-current text-neutral-400 group-hover:text-cyan-400 transition-colors" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93 .502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            <span>Youtube</span>
          </a>

          {/* LinkedIn Brand Node */}
          <a href="#" className="flex items-center gap-2 hover:text-cyan-400 transition-colors group">
            <svg className="w-4 h-4 fill-current text-neutral-400 group-hover:text-cyan-400 transition-colors" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
            <span>Linkedin</span>
          </a>

          {/* Facebook Brand Node */}
          <a href="#" className="flex items-center gap-2 hover:text-cyan-400 transition-colors group">
            <svg className="w-4 h-4 fill-current text-neutral-400 group-hover:text-cyan-400 transition-colors" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            <span>Facebook</span>
          </a>

          {/* Instagram Brand Node */}
          <a href="#" className="flex items-center gap-2 hover:text-cyan-400 transition-colors group">
            <svg className="w-4 h-4 fill-current text-neutral-400 group-hover:text-cyan-400 transition-colors" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
            </svg>
            <span>Tiktok</span>
          </a>

          {/* TikTok Brand Node */}
          <a href="#" className="flex items-center gap-2 hover:text-cyan-400 transition-colors group">
            <svg className="w-4 h-4 fill-current text-neutral-400 group-hover:text-cyan-400 transition-colors" viewBox="0 0 24 24">
              <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.02 1.59 4.23.94 1.15 2.25 1.95 3.67 2.31v3.7c-1.35-.14-2.68-.67-3.79-1.48-.69-.51-1.28-1.15-1.74-1.89-.04 1.96-.02 3.91-.03 5.87 0 2.05-.44 4.15-1.57 5.87-1.32 2.04-3.61 3.44-6.04 3.53-2.61.16-5.27-.85-6.83-2.95-1.69-2.22-1.92-5.46-.6-7.89 1.13-2.11 3.42-3.53 5.81-3.65.01 1.28-.01 2.56-.01 3.84-1.27.05-2.54.73-3.16 1.84-.74 1.26-.54 3 .47 4.05.99 1.05 2.65 1.16 3.77.24.87-.69 1.28-1.83 1.26-2.94-.01-4.13-.01-8.26-.01-12.39z"/>
            </svg>
            <span>Tiktok</span>
          </a>

          {/* WhatsApp Constant Emerald Identity Node */}
          <a href="#" className="flex items-center gap-2 text-emerald-500 hover:text-emerald-400 transition-colors group">
            <svg className="w-4 h-4 fill-current text-emerald-500 group-hover:text-emerald-400 transition-colors" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397 0 11.966 0c3.178.001 6.169 1.24 8.419 3.496 2.25 2.255 3.488 5.248 3.487 8.425-.004 6.616-5.34 11.965-11.912 11.965-1.996-.001-3.963-.502-5.716-1.458L0 24zm6.588-3.418l.366.218c1.5.892 3.314 1.363 5.166 1.364h.006c5.52 0 10.011-4.505 10.014-10.04a9.92 9.92 0 0 0-2.914-7.094A9.855 9.855 0 0 0 11.966 1.96c-5.522 0-10.015 4.508-10.018 10.043-.001 1.865.485 3.689 1.409 5.3l.239.417-1.002 3.662 3.753-.989zM18.06 14.85c-.333-.167-1.97-.974-2.278-1.087-.308-.113-.532-.167-.756.167-.224.334-.868 1.087-1.064 1.313-.196.226-.392.254-.725.087-1.361-.682-2.333-1.181-3.238-2.73-.241-.413.241-.383.69-.1.403.253.392.424.588.756.196.334.098.623-.05.924-.147.302-.756 1.821-.924 2.226-.164.394-.329.34-.45.34h-.382c-.132 0-.346-.049-.527-.247-.182-.198-.693-.677-.693-1.652 0-.975.709-1.916.821-2.066.112-.15 1.396-2.132 3.382-2.99.473-.204.843-.326 1.131-.418.475-.152.907-.13 1.25-.181.382-.057 1.173-.48 1.338-.943.165-.463.165-.86.116-.943-.049-.084-.182-.132-.515-.299z"/>
            </svg>
            <span>Whatsapp</span>
          </a>

        </div>

        <div className="pt-4 border-t border-neutral-900/40 max-w-xs mx-auto space-y-2 font-mono text-[10px] text-neutral-600 uppercase tracking-widest">
          <p>© 2026 OnyxStack Labs. All Infrastructure Rights Reserved.</p>
          <div className="flex justify-center gap-4 text-neutral-700">
            <span>Secure Link Nodes Indexed</span>
            <span>•</span>
            <span>Vite Performance Optimized</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
