// src/App.jsx
import React, { useState } from 'react';
import { siteConfig } from './config/siteConfig';

export default function App() {
  const [leadSubmitted, setLeadSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    businessName: '',
    requirements: '',
    budget: 'Premium ($2k - $5k)'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleLeadSubmit = (e) => {
    e.preventDefault();
    console.log("Pushing parameters to Firebase Cloud:", formData);
    setLeadSubmitted(true);
  };

  return (
    <div className="min-h-screen text-slate-100 font-sans selection:bg-[#00f2fe] selection:text-black" style={{ backgroundColor: siteConfig.colors.bgPitchBlack }}>
      
      {/* GLOBAL PREMIUM NAVIGATION BAR */}
      <nav className="sticky top-0 z-50 backdrop-blur-md border-b border-gray-800 bg-black/60 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2 cursor-pointer group">
            <div className="w-3 h-3 rounded-full bg-[#00f2fe] shadow-[0_0_10px_#00f2fe]" />
            <span className="text-xl font-bold tracking-wider text-white group-hover:text-[#00f2fe] transition-colors">
              {siteConfig.agencyName.toUpperCase()}
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8 text-sm tracking-widest font-medium text-gray-400">
            <a href="#ecosystem" className="hover:text-[#00f2fe] transition-colors">LIVE MATRIX</a>
            <a href="#tech" className="hover:text-[#00f2fe] transition-colors">TECH STACK</a>
            <a href="#pipeline" className="hover:text-[#00f2fe] transition-colors">DIRECT NODE</a>
          </div>

          <div className="flex items-center space-x-2 bg-gray-900/80 border border-gray-800 px-3 py-1.5 rounded-full">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ backgroundColor: siteConfig.colors.neonEmerald }}></span>
              <span className="relative inline-flex rounded-full h-2 w-2" style={{ backgroundColor: siteConfig.colors.neonEmerald }}></span>
            </span>
            <span className="text-[10px] tracking-widest text-gray-400 font-semibold">SYSTEMS OPERATIONAL</span>
          </div>
        </div>
      </nav>

      {/* ULTRA-PREMIUM HERO CONVERSION FUNNEL */}
      <header className="relative overflow-hidden px-6 pt-24 pb-20 border-b border-gray-900 bg-gradient-to-b from-[#0b0f19] to-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,242,254,0.05),transparent_50%)]" />
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-8">
          <div className="inline-flex items-center space-x-2 bg-black/40 border border-gray-800 px-4 py-1 rounded-full text-xs tracking-widest text-gray-400">
            <span className="text-[#00f2fe]">⚡</span> EXPERT ARCHITECTURE STUDIO
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
            {siteConfig.tagline}
          </h1>
          <p className="text-base md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            {siteConfig.subTagline}
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#ecosystem" className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold tracking-wider text-black bg-[#00f2fe] hover:bg-[#00f2fe]/90 shadow-[0_0_20px_rgba(0,242,254,0.3)] transition-all text-center">
              EXPLORE ECOSYSTEM
            </a>
            <a href={siteConfig.socialLinks.whatsapp} target="_blank" rel="noreferrer" className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold tracking-wider text-white bg-gray-950 border border-gray-800 hover:border-[#00e676] transition-all flex items-center justify-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#00e676]" />
              DIRECT NODE (WHATSAPP)
            </a>
          </div>
        </div>
      </header>

      {/* THE 6-CORE INTERACTIVE LIVE ECOSYSTEM GRID */}
      <main id="ecosystem" className="max-w-7xl mx-auto px-6 py-24 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-gray-900 pb-8">
          <div className="space-y-2">
            <h2 className="text-2xl md:text-4xl font-bold tracking-wider text-white">LIVE PRODUCTION ECOSYSTEM</h2>
            <p className="text-gray-400 text-sm md:text-base">Real-world scalable workflows and enterprise instances built from scratch.</p>
          </div>
          <div className="text-xs tracking-widest font-semibold text-gray-500 bg-gray-900/40 border border-gray-800 px-3 py-1.5 rounded-md">
            TOTAL CONTEXT NODES: 06
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteConfig.projects.map((project) => (
            <div key={project.id} className="group relative rounded-2xl border border-gray-800/80 bg-gray-950/40 backdrop-blur-sm p-6 overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-[#00f2fe] hover:shadow-[0_0_30px_rgba(0,242,254,0.15)] flex flex-col justify-between">
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#00f2fe]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute top-0 right-0 p-3 flex items-center space-x-1.5 bg-black/40 border-b border-l border-gray-900 rounded-bl-xl z-10">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00e676] animate-pulse" />
                <span className="text-[9px] tracking-widest font-bold text-gray-400 uppercase">LIVE APP</span>
              </div>

              <div className="space-y-4 relative z-10">
                <div className="space-y-1">
                  <h3 className="text-xl font-bold tracking-wide text-white group-hover:text-[#00f2fe] transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#00f2fe]/80">
                    {project.tagline}
                  </p>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed min-h-[72px]">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.tech.map((t, idx) => (
                    <span key={idx} className="text-[10px] tracking-wide font-medium px-2 py-0.5 rounded-md bg-gray-900 border border-gray-800 text-gray-400">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 relative z-10">
                <a href={project.liveUrl} className="w-full py-2.5 inline-flex items-center justify-center rounded-lg text-xs font-bold tracking-widest bg-gray-900 hover:bg-[#00f2fe] text-gray-300 hover:text-black border border-gray-800 hover:border-[#00f2fe] transition-all">
                  LAUNCH LIVE SIMULATION →
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* CORE INTEGRATION TECH STACK GRID */}
      <section id="tech" className="border-t border-b border-gray-900 bg-gray-950/20 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-3">
            <h2 className="text-2xl md:text-3xl font-bold tracking-wider text-white">CORE INFRASTRUCTURE ENGINE</h2>
            <p className="text-gray-400 text-sm max-w-xl mx-auto">Zero bloatware, heavy optimization runtime tech components mapping.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { title: "React Architecture", detail: "Component Matrix Lifecycle" },
              { title: "Firebase Database", detail: "Real-time Synchronization Nodes" },
              { title: "Gemini AI Node", detail: "Advanced Programmatic Automation" },
              { title: "Vite Execution Engine", detail: "Microsecond Hot Reload Optimization" }
            ].map((tech, idx) => (
              <div key={idx} className="p-4 rounded-xl border border-gray-800/60 bg-black/40 text-center space-y-1">
                <div className="text-sm font-bold text-white tracking-wide">{tech.title}</div>
                <div className="text-[10px] text-gray-500 font-medium tracking-wide">{tech.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEAD CAPTURE SECTION */}
      <section id="pipeline" className="max-w-3xl mx-auto px-6 py-24 space-y-12">
        <div className="text-center space-y-3">
          <h2 className="text-2xl md:text-4xl font-bold tracking-wider text-white">INITIATE ECOSYSTEM EXPANSION</h2>
          <p className="text-gray-400 text-sm max-w-lg mx-auto">Drop your project requirements directly into our live production pipeline queue.</p>
        </div>

        <div className="p-8 rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-950 via-black to-gray-950 shadow-2xl relative">
          {leadSubmitted ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-12 h-12 rounded-full bg-[#00e676]/20 text-[#00e676] flex items-center justify-center mx-auto text-xl font-bold">✓</div>
              <h3 className="text-xl font-bold text-white">Node Transmission Successful</h3>
              <p className="text-sm text-gray-400 max-w-sm mx-auto">Our systems have successfully captured your data parameters.</p>
            </div>
          ) : (
            <form onSubmit={handleLeadSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-bold tracking-widest text-gray-400 uppercase block">Enterprise Name</label>
                <input type="text" name="businessName" required value={formData.businessName} onChange={handleInputChange} placeholder="e.g., Global Logistics Corp" className="w-full bg-black border border-gray-800 focus:border-[#00f2fe] focus:ring-1 focus:ring-[#00f2fe] rounded-xl px-4 py-3 text-sm text-white outline-none transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold tracking-widest text-gray-400 uppercase block">Core Requirements</label>
                <textarea name="requirements" required rows="4" value={formData.requirements} onChange={handleInputChange} placeholder="Describe customized app modules or automated features..." className="w-full bg-black border border-gray-800 focus:border-[#00f2fe] focus:ring-1 focus:ring-[#00f2fe] rounded-xl px-4 py-3 text-sm text-white outline-none transition-all resize-none" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold tracking-widest text-gray-400 uppercase block">Budget Allocation</label>
                <select name="budget" value={formData.budget} onChange={handleInputChange} className="w-full bg-black border border-gray-800 focus:border-[#00f2fe] focus:ring-1 focus:ring-[#00f2fe] rounded-xl px-4 py-3 text-sm text-white outline-none transition-all cursor-pointer">
                  <option>Standard MVP ($1k - $2k)</option>
                  <option>Premium ($2k - $5k)</option>
                  <option>Enterprise Level ($5k+)</option>
                </select>
              </div>
              <button type="submit" className="w-full py-4 rounded-xl font-bold tracking-widest text-black bg-[#00f2fe] hover:bg-[#00f2fe]/90 shadow-[0_0_15px_rgba(0,242,254,0.2)] transition-all uppercase text-sm">
                Transmit Production Parameter Lead
              </button>
            </form>
          )}
        </div>
      </section>

      {/* OMNIPRESENT FOOTER */}
      <footer className="border-t border-gray-900 bg-black py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center md:text-left">
            <div className="text-lg font-extrabold tracking-widest text-white">{siteConfig.agencyName.toUpperCase()}</div>
            <p className="text-xs text-gray-500 max-w-sm">Programmatic SEO Frameworks & Custom Software Ecosystems Hub.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-xs font-bold tracking-widest text-gray-400">
            <a href={siteConfig.socialLinks.youtube} target="_blank" rel="noreferrer" className="hover:text-[#00f2fe] transition-colors">YOUTUBE</a>
            <a href={siteConfig.socialLinks.linkedin} target="_blank" rel="noreferrer" className="hover:text-[#00f2fe] transition-colors">LINKEDIN</a>
            <a href={siteConfig.socialLinks.facebook} target="_blank" rel="noreferrer" className="hover:text-[#00f2fe] transition-colors">FACEBOOK</a>
            <a href={siteConfig.socialLinks.instagram} target="_blank" rel="noreferrer" className="hover:text-[#00f2fe] transition-colors">INSTAGRAM</a>
            <a href={siteConfig.socialLinks.tiktok} target="_blank" rel="noreferrer" className="hover:text-[#00f2fe] transition-colors">TIKTOK</a>
            <a href={siteConfig.socialLinks.whatsapp} target="_blank" rel="noreferrer" className="text-[#00e676] hover:underline transition-colors">WHATSAPP</a>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-8 mt-8 border-t border-gray-950 flex flex-col sm:flex-row items-center justify-between text-[10px] text-gray-600 tracking-wider gap-4">
          <div>© {new Date().getFullYear()} {siteConfig.agencyName}. All Infrastructure Rights Reserved.</div>
          <div className="flex space-x-4">
            <span>SECURE LINK NODES INDEXED</span>
            <span>•</span>
            <span>VITE PERFORMANCE OPTIMIZED</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
