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
    { title: "Integrity", desc: "We believe in honest partnerships. From transparent communication to reliable timelines, we deliver on our promises without hidden surprises." },
    { title: "Craftsmanship", desc: "We write clean, well-documented code designed to last. Shortcuts create technical debt, so we focus on building stable foundations from day one." },
    { title: "User-Centric Design", desc: "Software should be a pleasure to use. We combine powerful engineering with intuitive user experiences that simplify complex operational workflows." },
    { title: "Continuous Innovation", desc: "The digital landscape evolves rapidly. We constantly refine our technical workflows and adopt proven technologies to keep your business ahead." },
    { title: "Reliability", desc: "Your software is the backbone of your operations. We design resilient, secure cloud applications that ensure maximum uptime and data integrity." },
    { title: "Shared Success", desc: "We don't just build software and walk away. We invest deeply in your goals, working closely with your team to drive real business growth." }
  ];

  // Section 5 Data: Enterprise Value Props
  const differentiators = [
    { title: "Professional Development", desc: "Our team writes clean, modular, production-ready code that complies with the highest industry standards, ensuring seamless handoffs." },
    { title: "Scalable Architecture", desc: "We design robust systems engineered to handle growing traffic, high transactional volumes, and future business expansions smoothly." },
    { title: "Transparent Communication", desc: "Stay informed at every step. We provide regular updates and direct lines of communication to eliminate friction and build true alignment." },
    { title: "Modern UI/UX Engineering", desc: "We build fast, responsive, and beautiful interfaces tailored for maximum conversion, accessibility, and high user retention." },
    { title: "Practical AI Integration", desc: "Automate manual tasks and unlock internal data insights with intelligent, tailor-made artificial intelligence features integrated directly into your workflows." },
    { title: "Long-Term Partnerships", desc: "We support your platform long after launch with dedicated systems optimization, proactive monitoring, and iterative feature development." }
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
    { step: "01", label: "Discovery", desc: "We begin by understanding your business goals, target audience, and functional requirements to define a precise project scope." },
    { step: "02", label: "Planning", desc: "Our team maps out the technical architecture, choose the best data models, and schedules clear milestones for the development cycle." },
    { step: "03", label: "Design", desc: "We design high-fidelity visual layouts, building highly intuitive user journeys that put focus on readability and smooth interactivity." },
    { step: "04", label: "Development", desc: "Our engineers build your solution using modern engineering principles, writing clean, modular code designed for long-term reliability." },
    { step: "05", label: "Testing", desc: "We run rigorous automated and manual diagnostic tests to ensure your software is completely secure, performant, and bug-free." },
    { step: "06", label: "Deployment", desc: "Your application is securely launched to high-availability cloud platforms using modern continuous integration tools for zero downtime." },
    { step: "07", label: "Support", desc: "Post-launch, we continuously monitor performance, implement user feedback, and scale the application infrastructure to support your growth." }
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
              Our Agency Profile
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
              Engineering reliable software <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#06B6D4] via-cyan-300 to-blue-500">
                built to scale with your business
              </span>
            </h1>
            <p className="text-base sm:text-lg text-neutral-400 leading-relaxed max-w-2xl mb-10 font-sans">
              OnyxStack Labs is an agile software development company specializing in custom software, high-performance web development, smart AI solutions, and cloud applications. We build digital products that combine intentional design with robust production engineering to help businesses automate operations and scale with confidence.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a 
                href="#contact-initiate" 
                onClick={(e) => { e.preventDefault(); navigateToNode('/'); setTimeout(() => { document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }, 150); }}
                className="bg-neutral-100 hover:bg-[#06B6D4] text-black px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)]"
              >
                Get In Touch
              </a>
              <a 
                href="#narrative" 
                onClick={(e) => { e.preventDefault(); document.getElementById('company-narrative')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="border border-neutral-800 hover:border-neutral-700 bg-neutral-900/30 text-neutral-300 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300"
              >
                Our Story
              </a>
            </div>
          </div>
        </section>

        {/* SECTION 2: COMPANY STORY */}
        <section id="company-narrative" className="max-w-7xl mx-auto px-6 md:px-12 py-20 border-t border-neutral-900/60 scroll-mt-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4">
              <p className="text-xs font-mono uppercase tracking-widest text-[#06B6D4] mb-3">Who We Are</p>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-sans">The story behind OnyxStack Labs</h2>
            </div>
            <div className="lg:col-span-8 text-neutral-400 space-y-6 text-sm sm:text-base leading-relaxed font-sans">
              <p>
                OnyxStack Labs was founded to bridge the gap between fast product delivery and durable product engineering. We realized that many fast-growing brands struggle with brittle technical systems because their developers relied on short-term fixes over scalable software architectures.
              </p>
              <p>
                We built our agency to give businesses a better alternative: high-quality software craftsmanship that aligns perfectly with real commercial business objectives. Whether we are building custom React development solutions, refining business automation tools, or assembling full MERN stack solutions, we deliver systems that run smoothly from launch day and scale effortlessly as your needs grow.
              </p>
              <p>
                Today, we act as an extended engineering team for forward-thinking companies. We work closely with scaling startups and mid-market organizations to replace operational bottlenecks with elegant, intuitive, and secure platforms.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 3: MISSION & VISION */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-8 rounded-2xl border border-neutral-900 bg-gradient-to-br from-neutral-950 to-neutral-900/40 relative group">
              <div className="w-8 h-8 rounded-lg bg-[#06B6D4]/10 border border-[#06B6D4]/20 flex items-center justify-center text-[#06B6D4] mb-6 font-mono text-sm font-bold">M</div>
              <h3 className="text-lg font-bold text-white mb-3">Our Mission</h3>
              <p className="text-sm text-neutral-400 leading-relaxed font-sans">
                To equip growing organizations with high-quality custom software that simplifies everyday operational tasks, fosters sustainable innovation, and builds tangible, long-term commercial value.
              </p>
            </div>
            <div className="p-8 rounded-2xl border border-neutral-900 bg-gradient-to-br from-neutral-950 to-neutral-900/40 relative group">
              <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-6 font-mono text-sm font-bold">V</div>
              <h3 className="text-lg font-bold text-white mb-3">Our Vision</h3>
              <p className="text-sm text-neutral-400 leading-relaxed font-sans">
                To be the world's most trusted software development partner, recognized for creating scalable, resilient digital products that set the standard for modern interface design and reliable web performance.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 4: CORE VALUES */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-20 border-t border-neutral-900/60">
          <div className="max-w-3xl mb-12">
            <p className="text-xs font-mono uppercase tracking-widest text-[#06B6D4] mb-3">What We Stand For</p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">The principles that guide our everyday decisions</h2>
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
            <p className="text-xs font-mono uppercase tracking-widest text-[#06B6D4] mb-3">The Agency Difference</p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">Why businesses choose us over other developers</h2>
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
            <p className="text-xs font-mono uppercase tracking-widest text-[#06B6D4] mb-3">Our Core Toolkit</p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">Proven modern frameworks for reliable digital platforms</h2>
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
            <p className="text-xs font-mono uppercase tracking-widest text-[#06B6D4] mb-3">How We Work</p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">Our clean, predictable software development lifecycle</h2>
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
                Let's turn your product ideas into real, functional code
              </h2>
              <p className="text-sm sm:text-base text-neutral-400 leading-relaxed font-sans">
                Tell us about your project requirements. Our engineering team is ready to map out your digital solution and help build your next modern web applications.
              </p>
            </div>
            <div className="relative z-10 flex-shrink-0">
              <a 
                href="#contact-terminal" 
                onClick={(e) => { e.preventDefault(); navigateToNode('/'); setTimeout(() => { document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }, 150); }}
                className="inline-block bg-white hover:bg-[#06B6D4] text-black px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 hover:shadow-[0_0_25px_rgba(6,182,212,0.5)] whitespace-nowrap"
              >
                Talk to our Team
              </a>
            </div>
          </div>
        </section>

      </div>

    </div>
  );
}
