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
    { title: "Custom Web Development", desc: "Tailored web platforms optimized for fast loading and cross-browser performance. Built on decoupled architectures to protect your digital presence against tech churn." },
    { title: "Enterprise Web Applications", desc: "Robust dashboard panels, heavy data management engines, and real-time operations software built to support complex user authorization loops safely." },
    { title: "Mobile App Development", desc: "High-performance cross-platform mobile apps that offer native responsiveness, smooth animations, and optimized background sync capabilities." },
    { title: "AI Solutions & Automation", desc: "Deploying custom large language model connectors, vector database search indexing, and automated cognitive pipelines to lower operating costs." },
    { title: "ERP Systems", desc: "Tailored enterprise resource management applications that unify your internal logistics, resource deployment metrics, and financial reporting dashboards." },
    { title: "UI/UX Architecture & Design", desc: "Figma-to-production blueprints focusing on spatial logic, clean text hierarchies, interactive fidelity, and low-friction interface flows." },
    { title: "Secure API Integrations", desc: "Designing scalable GraphQL/REST communication pipelines with strict data validation protocols to connect perfectly with external legacy software." },
    { title: "Cloud Scale Deployment", desc: "Configuring edge networks and serverless server instances over automated continuous delivery pipelines with real-time analytics monitoring." },
    { title: "Predictive Maintenance & Support", desc: "Continuous code optimization metrics, security vulnerability patch deployments, dependency updates, and active uptime validation loops." }
  ];

  // Section 3 Data: Engineering Differentiators
  const advantages = [
    { title: "High-Velocity Performance", desc: "Every deployment is designed to maintain high performance under heavy traffic loads, keeping processing latency as low as possible." },
    { title: "Infinite Scalability Architecture", desc: "We deploy stateless software modules and dynamic database layers that scale smoothly during unpredictable traffic spikes." },
    { title: "Cryptographic Security Controls", desc: "Built using strict data sanitation rules, isolated API runtimes, and end-to-end encryption layers to safeguard sensitive customer records." },
    { title: "Premium Modern UI Systems", desc: "Polished styling variables built with clean Tailwind utilities, maintaining absolute alignment across varying screens and layouts." },
    { title: "Accelerated Delivery Pipelines", desc: "Using modular engineering templates and automated testing strategies allows us to deploy stable builds ahead of schedule." },
    { title: "Long-Term Structural Support", desc: "We provide dedicated post-launch support windows, performance tuning, and technical updates to ensure your product scales sustainably." }
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
    { number: "01", phase: "Discovery", scope: "Analyzing architectural limitations, technical requirements, and identifying process bottlenecks." },
    { number: "02", phase: "Planning", scope: "Drafting complete technical blueprints, database layout models, and setting clear delivery milestones." },
    { number: "03", phase: "UI/UX Architecture", scope: "Creating high-fidelity structural layouts focused on intuitive user flows and scannable data views." },
    { number: "04", phase: "Development", scope: "Writing clean, production-ready code organized into modular components and secure data management pipelines." },
    { number: "05", phase: "System Testing", scope: "Running end-to-end integration tests, security stress tests, and optimizing performance bottlenecks." },
    { number: "06", phase: "Cloud Deployment", scope: "Deploying live platforms onto zero-downtime serverless clouds with active monitoring systems." },
    { number: "07", phase: "Maintenance Support", scope: "Providing scheduled code updates, continuous threat monitoring, and regular performance tuning." }
  ];

  // Section 6 Data: Enterprise Corporate FAQ Catalog
  const faqs = [
    { q: "How long does a custom enterprise application build typically take?", a: "Standard operational platforms generally transition from technical discovery to cloud deployment within 6 to 12 weeks. Complex multi-tenant configurations or large legacy system migrations are managed through a phased approach to maintain continuous system stability." },
    { q: "Do we retain absolute ownership over the compiled source code?", a: "Yes. Upon completion of each project milestone, all source code assets, deployment scripts, asset repositories, and database schemas are fully transferred to your company with no ongoing licensing fees." },
    { q: "How does OnyxStack Labs ensure high data security?", a: "We apply security best practices at every level. This includes using strict cross-origin resource sharing controls, isolated serverless runtimes, secure token management, and regular dependency scanning to address vulnerabilities early." },
    { q: "Can you modernize or extend an existing legacy system?", a: "Yes. We regularly build modular, secure wrapper APIs and new frontend layers over legacy enterprise systems, allowing you to update internal tools without disrupting ongoing business operations." },
    { q: "What models of AI orchestration can your team deploy?", a: "We design custom natural language processing pipelines, vector-based semantic search tools, conversational support agents, automated internal reporting loops, and predictive analytics tools using advanced models like Gemini AI." },
    { q: "What level of engineering support is available after product deployment?", a: "We provide comprehensive service-level support models covering performance scaling, regular dependency updates, proactive feature enhancements, and continuous system monitoring." }
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
              Engineering Capabilities
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
              Production-Grade Software <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#06B6D4] via-cyan-200 to-blue-500">
                Engineered for Performance
              </span>
            </h1>
            <p className="text-base sm:text-lg text-neutral-400 max-w-2xl leading-relaxed mb-10 font-sans">
              Deploy secure custom web platforms, cloud-scalable applications, and business automation pipelines using clean, modern technical architectures.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a 
                href="#contact-redirect" 
                onClick={(e) => { e.preventDefault(); navigateToNode('/'); setTimeout(() => { document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }, 150); }}
                className="bg-neutral-100 hover:bg-[#06B6D4] text-black px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.35)]"
              >
                Initiate Project Roadmap
              </a>
              <a 
                href="#services-catalog" 
                onClick={(e) => { e.preventDefault(); document.getElementById('services-catalog')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="border border-neutral-800 hover:border-neutral-700 bg-neutral-900/20 text-neutral-300 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300"
              >
                Explore Capabilities
              </a>
            </div>
          </div>
        </section>

        {/* SECTION 2: SERVICES CAPABILITIES GRID */}
        <section id="services-catalog" className="max-w-7xl mx-auto px-6 md:px-12 py-20 border-t border-neutral-900/60 scroll-mt-24">
          <div className="max-w-3xl mb-16">
            <p className="text-xs font-mono uppercase tracking-widest text-[#06B6D4] mb-3">Service Matrix</p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">Custom Technical Frameworks Designed for Modern Business</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesList.map((service, idx) => (
              <div key={idx} className="p-6 rounded-2xl border border-neutral-900 bg-neutral-950/40 relative group hover:border-neutral-800 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="w-7 h-7 rounded-lg bg-[#06B6D4]/5 border border-[#06B6D4]/15 flex items-center justify-center text-[#06B6D4] text-xs font-mono font-bold mb-5">
                    0{idx + 1}
                  </div>
                  <h3 className="text-base font-bold text-white mb-3 font-sans tracking-wide">{service.title}</h3>
                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-sans">{service.desc}</p>
                </div>
                <div className="pt-6 border-t border-neutral-900/60 mt-6 flex justify-end">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-600 group-hover:text-[#06B6D4] transition-colors duration-300">SYSTEM.NODE // OK</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 3: WHY OUR SERVICES */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-20 border-t border-neutral-900/60">
          <div className="max-w-3xl mb-16">
            <p className="text-xs font-mono uppercase tracking-widest text-[#06B6D4] mb-3">Engineering Benchmarks</p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">Our Standards for Production-Grade Code</h2>
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
            <p className="text-xs font-mono uppercase tracking-widest text-[#06B6D4] mb-3">Runtime Assets</p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">Our Verified Technical Stack Architecture</h2>
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
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">Our Development Workflow and Project Pipeline</h2>
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
            <p className="text-xs font-mono uppercase tracking-widest text-[#06B6D4] mb-3">FAQ Database</p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">Frequently Answered Development Metrics</h2>
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
                Ready to Deploy Your Product Core?
              </h2>
              <p className="text-sm text-neutral-400 leading-relaxed font-sans">
                Connect with our technical architecture team directly to map out your infrastructure requirements and schedule project discovery.
              </p>
            </div>
            <div className="relative z-10 flex-shrink-0">
              <a 
                href="#contact-endpoint" 
                onClick={(e) => { e.preventDefault(); navigateToNode('/'); setTimeout(() => { document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }, 150); }}
                className="inline-block bg-white hover:bg-[#06B6D4] text-black px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 hover:shadow-[0_0_25px_rgba(6,182,212,0.4)] whitespace-nowrap"
              >
                Establish Hook Connection
              </a>
            </div>
          </div>
        </section>

      </div>

    </div>
  );
}
