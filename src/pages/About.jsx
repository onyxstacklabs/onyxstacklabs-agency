import React, { useEffect } from 'react';

// LIVE DATA CORE IMPORTS
import { siteConfig } from '../config/siteConfig';

export default function About({ currentPath, navigateToNode }) {
  
  // Set explicit subview window focus on mounting phase
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Section 4 Data: Core Values Matrix
  const coreValues = [
    { title: "Innovation", desc: "We don't merely adopt modern development practices; we actively prototype next-generation technical workflows to build compounding competitive advantages." },
    { title: "Transparency", desc: "No hidden layers. From absolute version-control commits to raw timeline metrics, our partners maintain persistent clarity over their software engineering pipelines." },
    { title: "Performance", desc: "Every structural asset we build is measured under extreme processing thresholds, achieving optimal rendering velocities and sub-second payload distributions." },
    { title: "Scalability", desc: "We design databases and cluster models from day one to handle volatile traffic spikes and exponential transactional expansions without friction." },
    { title: "Security", desc: "Implementing absolute cryptographic boundaries and strict serverless execution rules keeps critical application data securely isolated." },
    { title: "Client Success", desc: "We view our engagements as shared engineering partnerships. Your key commercial business outcomes directly drive our technical architecture objectives." }
  ];

  // Section 5 Data: Enterprise Value Props
  const differentiators = [
    { title: "Enterprise-Quality Development", desc: "We write clean, production-grade code structured around strict component isolation principles and long-term maintainability standards." },
    { title: "Modern UI/UX Engineering", desc: "Interfaces polished for deep user engagement. Your platform will naturally match the crisp design aesthetics of top-tier global technical products." },
    { title: "Premium AI Integration", desc: "We inject fine-tuned large language models and cognitive intelligence vectors straight into core systems to automate complex manual loops." },
    { title: "Accelerated Velocity", desc: "Leveraging decoupled architectural components allows us to deploy production-ready configurations quickly without lowering software quality." },
    { title: "Long-Term Support Nodes", desc: "Our partnership persists past deployment. We provide dedicated systems optimization, feature scaling, and infrastructure validation loops." },
    { title: "Flexible Core Architecture", desc: "Built using modular frameworks designed to handle fast product changes, dynamic API integrations, and continuous deployments." }
  ];

  // Section 6 Data: Verified Technical Stack Matrix
  const stackItems = [
    { name: "React", category: "Frontend Engine", glow: "hover:border-cyan-500/40 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)]" },
    { name: "Vite", category: "Build Systems", glow: "hover:border-purple-500/40 hover:shadow-[0_0_20px_rgba(168,85,247,0.15)]" },
    { name: "Firebase", category: "Cloud Platform", glow: "hover:border-amber-500/40 hover:shadow-[0_0_20px_rgba(245,158,11,0.15)]" },
    { name: "Tailwind CSS", category: "Design Layer", glow: "hover:border-sky-400/40 hover:shadow-[0_0_20px_rgba(56,189,248,0.15)]" },
    { name: "Node.js", category: "Runtime Environment", glow: "hover:border-emerald-500/40 hover:shadow-[0_0_20px_rgba(16,185,129,0.15)]" },
    { name: "Express.js", category: "API Framework", glow: "hover:border-neutral-400/40 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]" },
    { name: "MongoDB", category: "Database Layer", glow: "hover:border-green-600/40 hover:shadow-[0_0_20px_rgba(22,163,74,0.15)]" },
    { name: "Gemini AI", category: "Intelligence Matrix", glow: "hover:border-blue-500/40 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)]" },
    { name: "Git", category: "Version Infrastructure", glow: "hover:border-orange-500/40 hover:shadow-[0_0_20px_rgba(249,115,22,0.15)]" },
    { name: "Vercel", category: "Edge Deployment", glow: "hover:border-neutral-100/40 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]" }
  ];

  // Section 7 Data: Engineering Roadmap Steps
  const workflows = [
    { step: "01", label: "Discovery", desc: "Deep architectural extraction of commercial business workflow models and system bottlenecks." },
    { step: "02", label: "Planning", desc: "Formulating technical implementation specifications, exact data mapping models, and milestone allocations." },
    { step: "03", label: "Design", desc: "Constructing high-fidelity system aesthetics prioritizing information scannability and structural interface hierarchies." },
    { step: "04", label: "Development", desc: "Writing hyper-optimized components and cloud backend security access tokens under rigid isolated environments." },
    { step: "05", label: "Testing", desc: "Rigorous diagnostic validation loops ensuring absolute route integrity and payload delivery stability." },
    { step: "06", label: "Deployment", desc: "Safe orchestration to cloud serverless clusters under full automated continuous integration monitoring." },
    { step: "07", label: "Support", desc: "Continuous code optimization metrics, visual tuning implementations, and scale expansions." }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-neutral-100 font-sans antialiased selection:bg-[#06B6D4] selection:text-black scroll-smooth relative overflow-hidden">
      
      {/* BACKGROUND AMBIENT INFRASTRUCTURE NODE */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[800px] bg-[radial-gradient(ellipse_at_top,rgba(6,182,212,0.07),transparent_55%)] pointer-events-none z-0" />
      <div className="absolute top-[2000px] right-0 w-[600px] h-[600px] bg-[#2563EB]/[0.02] blur-[180px] pointer-events-none" />
      <div className="absolute bottom-[800px] left-0 w-[700px] h-[700px] bg-[#06B6D4]/[0.015] blur-[220px] pointer-events-none" />
      
      {/* MAIN TARGET MATRIX CONTROLLER */}
      <div className="relative z-10 distribution-container-layer">
        
        {/* SECTION 1: HERO CONTAINER */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-20 sm:pt-40 sm:pb-28">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#06B6D4]/10 border border-[#06B6D4]/20 text-[#06B6D4] text-xs font-mono uppercase tracking-widest mb-6">
              About OnyxStack Labs
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
              Building Modern Software <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#06B6D4] via-cyan-300 to-blue-500">
                for Growing Businesses
              </span>
            </h1>
            <p className="text-base sm:text-lg text-neutral-400 leading-relaxed max-w-2xl mb-10 font-sans">
              OnyxStack Labs is a software development company focused on building modern web applications, AI-powered solutions, enterprise software, and scalable digital platforms. We combine clean engineering, thoughtful design, and reliable technologies to help businesses transform ideas into successful digital products.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a 
                href="#contact-initiate" 
                onClick={(e) => { e.preventDefault(); navigateToNode('/'); setTimeout(() => { document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }, 150); }}
                className="bg-neutral-100 hover:bg-[#06B6D4] text-black px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)]"
              >
                Start Your Project
              </a>
              <a 
                href="#narrative" 
                onClick={(e) => { e.preventDefault(); document.getElementById('company-narrative')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="border border-neutral-800 hover:border-neutral-700 bg-neutral-900/30 text-neutral-300 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300"
              >
                Learn About Us
              </a>
            </div>
          </div>
        </section>

        {/* SECTION 2: COMPANY STORY */}
        <section id="company-narrative" className="max-w-7xl mx-auto px-6 md:px-12 py-20 border-t border-neutral-900/60 scroll-mt-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4">
              <p className="text-xs font-mono uppercase tracking-widest text-[#06B6D4] mb-3">Our Origin</p>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-sans">The Genesis of Uncompromising Code</h2>
            </div>
            <div className="lg:col-span-8 text-neutral-400 space-y-6 text-sm sm:text-base leading-relaxed font-sans">
              <p>
                OnyxStack Labs was founded to eliminate a major gap in modern tech services: the trend of prioritizing cosmetic speed over long-term code quality. We realized that while modern frameworks make rapid deployment easier, they often result in fragile systems that struggle under real-world workloads.
              </p>
              <p>
                We built this agency on a simple foundation: <strong className="text-neutral-200 font-semibold">uncompromising software craftsmanship</strong>. By combining elite cloud structures with modern user interface standards, we help engineering leads and founders deploy scalable platforms with absolute predictability.
              </p>
              <p>
                Today, OnyxStack Labs operates as an enterprise-grade technical partner. We avoid short-term workarounds, building robust solutions that secure operations, automate processes, and scale effortlessly alongside your business expansions.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 3: MISSION & VISION */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-8 rounded-2xl border border-neutral-900 bg-gradient-to-br from-neutral-950 to-neutral-900/40 relative group">
              <div className="w-8 h-8 rounded-lg bg-[#06B6D4]/10 border border-[#06B6D4]/20 flex items-center justify-center text-[#06B6D4] mb-6 font-mono text-sm font-bold">M</div>
              <h3 className="text-lg font-bold text-white mb-3">Our Core Mission</h3>
              <p className="text-sm text-neutral-400 leading-relaxed font-sans">
                To equip scaling operations with hyper-optimized custom software environments, replacing legacy friction points with high-speed, maintainable architecture built for long-term production.
              </p>
            </div>
            <div className="p-8 rounded-2xl border border-neutral-900 bg-gradient-to-br from-neutral-950 to-neutral-900/40 relative group">
              <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-6 font-mono text-sm font-bold">V</div>
              <h3 className="text-lg font-bold text-white mb-3">Our Long-Term Vision</h3>
              <p className="text-sm text-neutral-400 leading-relaxed font-sans">
                To become the global standard for outsourced software engineering, trusted by enterprises to translate complex operational processes into high-performance, secure digital tools.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 4: CORE VALUES */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-20 border-t border-neutral-900/60">
          <div className="max-w-3xl mb-12">
            <p className="text-xs font-mono uppercase tracking-widest text-[#06B6D4] mb-3">Engineering Pillars</p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">The Codes We Operationalize By</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((val, idx) => (
              <div key={idx} className="p-6 rounded-xl border border-neutral-900 bg-neutral-950/40 hover:border-neutral-800 transition-colors duration-300">
                <h3 className="text-sm font-mono uppercase tracking-wider text-white mb-3 flex items-center gap-3">
                  <span className="text-[#06B6D4] font-bold">//</span> {val.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-sans">{val.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 5: WHY CHOOSE ONYXSTACK LABS */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-20 border-t border-neutral-900/60">
          <div className="max-w-3xl mb-12">
            <p className="text-xs font-mono uppercase tracking-widest text-[#06B6D4] mb-3">Operational Edge</p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">Why Modern Technical Teams Align With Us</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {differentiators.map((diff, idx) => (
              <div key={idx} className="p-6 rounded-xl border border-neutral-900/30 bg-gradient-to-b from-neutral-950 to-[#050505] relative">
                <div className="absolute top-0 left-6 w-8 h-[1px] bg-gradient-to-r from-[#06B6D4] to-transparent" />
                <h3 className="text-base font-bold text-white mb-3 font-sans">{diff.title}</h3>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-sans">{diff.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 6: TECHNOLOGIES RUNTIME ENVIRONMENT */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-20 border-t border-neutral-900/60">
          <div className="max-w-3xl mb-12">
            <p className="text-xs font-mono uppercase tracking-widest text-[#06B6D4] mb-3">Enterprise Stack</p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">Our Validated Tactical Technology Array</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {stackItems.map((item, idx) => (
              <div 
                key={idx} 
                className={`p-5 rounded-xl border border-neutral-900 bg-neutral-950/80 text-left transition-all duration-300 cursor-default ${item.glow}`}
              >
                <p className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 mb-1">{item.category}</p>
                <h4 className="text-sm font-bold text-white tracking-wide font-sans">{item.name}</h4>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 7: DEVELOPMENT PROCESS MAP */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-20 border-t border-neutral-900/60">
          <div className="max-w-3xl mb-16">
            <p className="text-xs font-mono uppercase tracking-widest text-[#06B6D4] mb-3">Execution Engineering</p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">Our Deterministic Operational Delivery Protocol</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {workflows.map((flow, idx) => (
              <div key={idx} className="relative group">
                <div className="text-3xl font-bold font-mono text-neutral-800 mb-3 tracking-tighter group-hover:text-[#06B6D4] transition-colors duration-300">
                  {flow.step}
                </div>
                <h3 className="text-base font-bold text-white mb-2 font-sans">{flow.label}</h3>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-sans">{flow.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 8: FINAL SYSTEM CONSOLE CTA */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 sm:py-24 border-t border-neutral-900/60">
          <div className="p-8 sm:p-16 rounded-3xl border border-neutral-900 bg-gradient-to-r from-neutral-950 via-neutral-950 to-neutral-900/50 relative overflow-hidden text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-8">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom_right,rgba(6,182,212,0.04),transparent_50%)] pointer-events-none" />
            <div className="max-w-2xl relative z-10">
              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white mb-4">
                Ready to Secure Your System Infrastructure?
              </h2>
              <p className="text-sm sm:text-base text-neutral-400 leading-relaxed font-sans">
                Let's discuss your engineering requirements. Connect directly with our technical architecture team to deploy your high-performance custom platform.
              </p>
            </div>
            <div className="relative z-10 flex-shrink-0">
              <a 
                href="#contact-terminal" 
                onClick={(e) => { e.preventDefault(); navigateToNode('/'); setTimeout(() => { document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }, 150); }}
                className="inline-block bg-white hover:bg-[#06B6D4] text-black px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 hover:shadow-[0_0_25px_rgba(6,182,212,0.5)] whitespace-nowrap"
              >
                Establish Connection
              </a>
            </div>
          </div>
        </section>

      </div>

    </div>
  );
}
