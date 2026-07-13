import React, { useEffect, useState } from 'react';

// LIVE DATA CORE IMPORTS
import { siteConfig } from '../config/siteConfig';

export default function Services({ currentPath, navigateToNode }) {
  const [openFaq, setOpenFaq] = useState(null);

  // Focus layout scope on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Section 2 Data: Premium Enterprise Service Catalog Matrix
  const servicesList = [
    { title: "Custom Software Development", desc: "We design and engineer bespoke software solutions tailored to solve specific operational challenges, automate business mechanics, and support long-term commercial goals." },
    { title: "Modern Web Applications", desc: "Building responsive web development products that combine exceptional client-side performance with resilient security architectures to provide flawless user experiences." },
    { title: "MERN Stack Development", desc: "High-performance applications built from the ground up using MongoDB, Express.js, React, and Node.js for robust, end-to-end JavaScript product environments." },
    { title: "React Development", desc: "Crafting highly modular, dynamic, and lightning-fast user interfaces optimized for fluid user interaction, strict state management, and clear component rendering." },
    { title: "Firebase Development", desc: "Leveraging reliable cloud applications with secure backend service architectures, including real-time databases, user authentication loops, and serverless data tracking." },
    { title: "AI Solutions & Integrations", desc: "Deploying practical artificial intelligence tools, natural language processing models, and intelligent automated features directly into your core business workflows." },
    { title: "Business Automation", desc: "Eliminating manual overhead and human friction by creating integrated background scripts, automated tasks, and intelligent system synchronization." },
    { title: "Enterprise Software & Admin Dashboards", desc: "Designing secure, feature-rich admin dashboards, heavy data-management panels, and internal reporting consoles with strict user authorization layers." },
    { title: "ERP Systems", desc: "Building comprehensive enterprise resource planning platforms that centralize company logistics, resource schedules, accounting data, and team operations." },
    { title: "API Development & Integration", desc: "Engineering fast, fully documented RESTful and GraphQL API layers designed for high-concurrency payload deliveries and smooth third-party software connections." },
    { title: "Cloud Scale Deployment", desc: "Deploying stable software frameworks to optimized edge networks and cloud infrastructure with fully automated continuous integration monitoring." },
    { title: "Performance Optimization", desc: "Auditing existing software assets to significantly improve rendering speeds, clean up bloated data queries, and achieve near-zero visual lag." },
    { title: "Ongoing Maintenance & Support", desc: "Providing active software lifecycle support, regular technical security updates, structural code adjustments, and routine version upgrades." }
  ];

  // Section 3 Data: Engineering Differentiators
  const advantages = [
    { title: "Proven Software Craftsmanship", desc: "Our engineers focus on writing clean, accessible, and standards-compliant source code that minimizes tech debt and simplifies future engineering growth." },
    { title: "Scalable Applications Layout", desc: "We build stateless code architectures and modular technical frameworks capable of processing volatile traffic growth and business expansions gracefully." },
    { title: "Rigorous Production Testing", desc: "Every functional component goes through thorough diagnostic audits and data validation tests to completely eliminate security vulnerabilities before launch." },
    { title: "Polished UI/UX Systems", desc: "We deliver modern, visually stunning interfaces utilizing intuitive spatial hierarchies and utility layouts optimized to boost user retention." },
    { title: "Agile Project Iterations", desc: "Our development methodologies rely on transparent iterations and structured release targets to get premium digital products to market ahead of schedule." },
    { title: "Long-Term Engineering Alliances", desc: "We partner with your team far past initial deployment, offering continuous code optimization updates, database scaling, and immediate technical backing." }
  ];

  // Section 4 Data: Core Engineering Technologies
  const techStack = [
    { name: "React", type: "Interface Engine", border: "hover:border-cyan-500/30" },
    { name: "Node.js", type: "Backend Runtime", border: "hover:border-emerald-500/30" },
    { name: "Express.js", type: "API Framework", border: "hover:border-neutral-500/30" },
    { name: "MongoDB", type: "Document Database", border: "hover:border-green-500/30" },
    { name: "Firebase", type: "Cloud Architecture", border: "hover:border-amber-500/30" },
    { name: "Tailwind CSS", type: "Design Utilities", border: "hover:border-sky-400/30" },
    { name: "Vite", type: "Compilation Pipeline", border: "hover:border-purple-500/30" },
    { name: "Gemini AI", type: "Cognitive Processing", border: "hover:border-blue-500/30" },
    { name: "Git", type: "Version Control", border: "hover:border-orange-500/30" },
    { name: "Vercel", type: "Edge Optimization", border: "hover:border-neutral-200/30" }
  ];

  // Section 5 Data: System Delivery Sequence Map
  const pipelineSteps = [
    { number: "01", phase: "Discovery", scope: "We review your explicit project objectives, outline baseline technical parameters, and discover existing operational friction points." },
    { number: "02", phase: "Planning", scope: "Our team writes detailed product feature maps, specifies core data schemas, and schedules clear product release milestones." },
    { number: "03", phase: "UI/UX Architecture", scope: "We transform feature requirements into intuitive, premium design flows built to maximize user conversion and clear scannability." },
    { number: "04", phase: "Development", scope: "Using clean MERN stack and React patterns, our engineers craft modular components and secure serverless backend logic." },
    { number: "05", phase: "System Testing", scope: "We run thorough manual code reviews and rigorous performance benchmarks to guarantee zero cross-browser rendering bugs." },
    { number: "06", phase: "Cloud Deployment", scope: "Your software goes live seamlessly onto high-availability cloud hosting platforms with integrated performance monitoring." },
    { number: "07", phase: "Maintenance Support", scope: "We provide scheduled security patches, optimize real-time database queries, and implement new features as your platform scales." }
  ];

  // Section 6 Data: Enterprise Corporate FAQ Catalog
  const faqs = [
    { q: "How long does a custom software development project usually take?", a: "Most custom web applications and business automation tools transition from initial discovery to live cloud deployment within 6 to 12 weeks. Large-scale setups like extensive ERP systems or multi-tenant software are scheduled in iterative phases to maintain continuous development transparency." },
    { q: "Do we retain absolute ownership over our software assets and code repositories?", a: "Yes, completely. Once milestone allocations are successfully completed, all source code assets, database frameworks, cloud deployment parameters, and architectural documentation are fully transferred over to your organization." },
    { q: "How does your team guarantee long-term web performance and system security?", a: "We apply modern web development standards at every step. This involves implementing isolated data layers, strict cross-origin token access rules, robust password hashing, and continuous dependency updates to prevent software stability issues." },
    { q: "Can you modernize or scale our existing web software without breaking it?", a: "Yes. We frequently build modern web applications and custom admin dashboards designed to sit cleanly over legacy data setups, allowing companies to improve internal tools without causing any operational downtime." },
    { q: "What types of AI solutions can you integrate into our business platforms?", a: "We build tailored AI integrations, semantic search tools, and semantic reporting modules using advanced technology like Gemini AI. These are built to process internal data streams, automate service requests, and optimize resource logistics." },
    { q: "What kind of support is available after our product launch?", a: "We offer comprehensive maintenance plans that cover regular frontend performance optimization, software security auditing, dependency upgrades, and immediate feature scaling to ensure long-term value." }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-neutral-100 font-sans antialiased selection:bg-[#06B6D4] selection:text-black scroll-smooth relative overflow-hidden">
      
      {/* VISUAL BACKGROUND GRADIENT SYSTEM */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[700px] bg-[radial-gradient(ellipse_at_top,rgba(6,182,212,0.06),transparent_60%)] pointer-events-none z-0" />
      <div className="absolute top-[1800px] left-0 w-[500px] h-[500px] bg-[#2563EB]/[0.015] blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[600px] right-0 w-[600px] h-[600px] bg-[#06B6D4]/[0.02] blur-[200px] pointer-events-none" />

      {/* SYSTEM CONTROLLER CONTAINER */}
      <div className="relative z-10">
        
        {/* SECTION 1: HERO CONTAINER */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-20 sm:pt-40 sm:pb-28">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#06B6D4]/10 border border-[#06B6D4]/20 text-[#06B6D4] text-xs font-mono uppercase tracking-widest mb-6">
              Our Capabilities
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
              Custom Software Development <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#06B6D4] via-cyan-200 to-blue-500">
                Tailored for Business Growth
              </span>
            </h1>
            <p className="text-base sm:text-lg text-neutral-400 max-w-2xl leading-relaxed mb-10 font-sans">
              OnyxStack Labs is a modern software development company that crafts secure web applications, smart AI solutions, and performant cloud tools. We match intentional, low-friction visual layout design with robust MERN stack architecture to convert product strategies into reliable business outcomes.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a 
                href="#contact-redirect" 
                onClick={(e) => { e.preventDefault(); navigateToNode('/'); setTimeout(() => { document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }, 150); }}
                className="bg-neutral-100 hover:bg-[#06B6D4] text-black px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.35)]"
              >
                Work With Us
              </a>
              <a 
                href="#services-catalog" 
                onClick={(e) => { e.preventDefault(); document.getElementById('services-catalog')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="border border-neutral-800 hover:border-neutral-700 bg-neutral-900/20 text-neutral-300 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300"
              >
                View Services
              </a>
            </div>
          </div>
        </section>

        {/* SECTION 2: SERVICES CAPABILITIES GRID */}
        <section id="services-catalog" className="max-w-7xl mx-auto px-6 md:px-12 py-20 border-t border-neutral-900/60 scroll-mt-24">
          <div className="max-w-3xl mb-16">
            <p className="text-xs font-mono uppercase tracking-widest text-[#06B6D4] mb-3">Service Matrix</p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">Full-scale digital products built with professional clarity</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesList.map((service, idx) => (
              <div key={idx} className="p-6 rounded-2xl border border-neutral-900 bg-neutral-950/40 relative group hover:border-neutral-800 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="w-7 h-7 rounded-lg bg-[#06B6D4]/5 border border-[#06B6D4]/15 flex items-center justify-center text-[#06B6D4] text-xs font-mono font-bold mb-5">
                    {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                  </div>
                  <h3 className="text-base font-bold text-white mb-3 font-sans tracking-wide">{service.title}</h3>
                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-sans">{service.desc}</p>
                </div>
                <div className="pt-6 border-t border-neutral-900/60 mt-6 flex justify-end">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-600 group-hover:text-[#06B6D4] transition-colors duration-300">SERVICE.NODE // READY</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 3: WHY OUR SERVICES */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-20 border-t border-neutral-900/60">
          <div className="max-w-3xl mb-16">
            <p className="text-xs font-mono uppercase tracking-widest text-[#06B6D4] mb-3">Engineering Benchmarks</p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">Our standards for shipping production-grade code</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((adv, idx) => (
              <div key={idx} className="p-6 rounded-xl border border-neutral-900/30 bg-gradient-to-b from-neutral-950 to-[#050505] relative">
                <div className="absolute top-0 left-6 w-10 h-[1px] bg-gradient-to-r from-[#06B6D4] to-transparent" />
                <h3 className="text-sm font-mono uppercase tracking-wider text-white mb-3 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#06B6D4]" />
                  {adv.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-sans">{adv.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 4: TECHNOLOGIES DISPLAY ARRAY */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-20 border-t border-neutral-900/60">
          <div className="max-w-3xl mb-12">
            <p className="text-xs font-mono uppercase tracking-widest text-[#06B6D4] mb-3">Our Toolkit</p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">Vetted frameworks used to craft modern web applications</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {techStack.map((tech, idx) => (
              <div key={idx} className={`p-5 rounded-xl border border-neutral-900 bg-neutral-950/70 cursor-default transition-all duration-300 ${tech.border}`}>
                <p className="text-[9px] font-mono uppercase tracking-widest text-neutral-500 mb-1">{tech.type}</p>
                <h4 className="text-sm font-bold text-white font-sans">{tech.name}</h4>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 5: DEVELOPMENT WORKFLOW PIPELINE */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-20 border-t border-neutral-900/60">
          <div className="max-w-3xl mb-16">
            <p className="text-xs font-mono uppercase tracking-widest text-[#06B6D4] mb-3">Delivery Lifecycle</p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">A transparent approach to software development</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {pipelineSteps.map((step, idx) => (
              <div key={idx} className="relative group">
                <div className="text-4xl font-mono font-bold text-neutral-800 tracking-tighter mb-2 group-hover:text-[#06B6D4] transition-colors duration-300">
                  {step.number}
                </div>
                <h3 className="text-base font-bold text-white mb-2 font-sans">{step.phase}</h3>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-sans">{step.scope}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 6: FAQ ACCORDION ENGINE */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-20 border-t border-neutral-900/60">
          <div className="max-w-3xl mb-12">
            <p className="text-xs font-mono uppercase tracking-widest text-[#06B6D4] mb-3">Common Questions</p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">Frequently asked development questions</h2>
          </div>
          <div className="max-w-4xl space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="border border-neutral-900 rounded-xl bg-neutral-950/20 overflow-hidden transition-all duration-300">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 text-white hover:bg-neutral-900/30 transition-colors duration-200 focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm sm:text-base font-medium font-sans">{faq.q}</span>
                    <span className="text-neutral-500 font-mono text-xs flex-shrink-0">
                      {isOpen ? '[ - ]' : '[ + ]'}
                    </span>
                  </button>
                  <div className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-48 border-t border-neutral-900/50' : 'max-h-0'}`}>
                    <div className="p-6 text-xs sm:text-sm text-neutral-400 leading-relaxed font-sans">
                      {faq.a}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* SECTION 7: FINAL SYSTEM CALL TO ACTION */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 sm:py-24 border-t border-neutral-900/60">
          <div className="p-8 sm:p-16 rounded-3xl border border-neutral-900 bg-gradient-to-r from-neutral-950 via-neutral-950 to-neutral-900/40 relative overflow-hidden text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-8">
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom_right,rgba(6,182,212,0.03),transparent_45%)] pointer-events-none" />
            <div className="max-w-2xl relative z-10">
              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white mb-3">
                Let's discuss your custom software requirements
              </h2>
              <p className="text-sm text-neutral-400 leading-relaxed font-sans">
                Get in touch with our development team today to map out your feature scope, address operational challenges, and schedule a discovery call.
              </p>
            </div>
            <div className="relative z-10 flex-shrink-0">
              <a 
                href="#contact-endpoint" 
                onClick={(e) => { e.preventDefault(); navigateToNode('/'); setTimeout(() => { document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }, 150); }}
                className="inline-block bg-white hover:bg-[#06B6D4] text-black px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 hover:shadow-[0_0_25px_rgba(6,182,212,0.4)] whitespace-nowrap"
              >
                Start a Conversation
              </a>
            </div>
          </div>
        </section>

      </div>

    </div>
  );
}
