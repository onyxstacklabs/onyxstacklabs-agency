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

      {/* --- BRAND METADATA FOOTER FRAMEWORK --- */}
      <footer className="border-t border-neutral-950 bg-black py-12 px-6 mt-12 text-center space-y-8">
        <div className="space-y-2">
          <h3 className="text-lg font-bold tracking-widest uppercase text-neutral-200">OnyxStack Labs</h3>
          <p className="text-xs text-neutral-500 max-w-md mx-auto leading-relaxed">
            Programmatic SEO Frameworks & Custom Software Ecosystems Hub.
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3 max-w-xl mx-auto font-mono text-xs font-bold uppercase tracking-widest text-neutral-400">
          <a href="#" className="hover:text-cyan-400 transition-colors">Youtube</a>
          <a href="#" className="hover:text-cyan-400 transition-colors">Linkedin</a>
          <a href="#" className="hover:text-cyan-400 transition-colors">Facebook</a>
          <a href="#" className="hover:text-cyan-400 transition-colors">Instagram</a>
          <a href="#" className="hover:text-cyan-400 transition-colors">Tiktok</a>
          <a href="#" className="text-emerald-500 hover:text-emerald-400 transition-colors">Whatsapp</a>
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
