import React, { useState, useEffect } from 'react';
// IMPORTING LIVE DATA ENTITIES FROM MODULAR MATRIX CONFIGURATIONS
import { transmitLeadToFirebase } from './config/firebase';
import { siteConfig } from './config/siteConfig';
// IMPORTING THE ADMIN CONTROL LAYER FROM PAGES HOUSING
import OnyxAdmin from './pages/OnyxAdmin';

export default function App() {
  // Reactive routing node tracker
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  // Monitor browser history state changes
  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  // Structural Navigation Helper
  const navigateToNode = (path) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
  };

  // Lead Generation State Architecture
  const [formData, setFormData] = useState({
    companyName: '',
    email: '',
    phone: '',
    details: '',
    budget: 'Standard MVP ($1,000 - $2,000)'
  });
  
  const [submissionState, setSubmissionState] = useState('IDLE'); // IDLE, SUBMITTING, SUCCESS
  const [errors, setErrors] = useState({});

  // Core Services Array derived from site parameters
  const coreServices = [
    {
      icon: (
        <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
        </svg>
      ),
      title: "Custom Web Applications",
      description: "Engineered from the ground up using React and Vite for blazing-fast performance, elite responsiveness, and clean code maintainability."
    },
    {
      icon: (
        <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
        </svg>
      ),
      title: "Android Applications",
      description: "Feature-rich mobile cross-platform blueprints optimized for high user adoption, modern interface dynamics, and flawless cloud data synchronization."
    },
    {
      icon: (
        <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 21l8.904-4.473L21 9l-3.383-3.383m-7.804 10.287l3.383-3.383m-3.383 3.383L3 14l6.813-6.813M16.5 6.5L18 5m-1.5 1.5L15 8m1.5-1.5l1.5 1.5m-1.5-1.5L13.5 5" />
        </svg>
      ),
      title: "AI & Business Automation",
      description: "Integrate premium artificial intelligence frameworks like Gemini AI to read unstructured text, optimize manual pipelines, and save thousands of operational hours."
    },
    {
      icon: (
        <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
        </svg>
      ),
      title: "Management Systems (ERP)",
      description: "Tailored enterprise solutions designed for complex organizational requirements, real-time balance accounts, and complete operational command."
    }
  ];

  // Value Proposition Strategic Grid Array
  const valueProps = [
    { title: "Rapid Engineering Turnaround", desc: "No bloated timelines. We deploy hyper-optimized MVP configurations and custom software quickly without taking shortcut measures on code health." },
    { title: "Premium Modern UI Design", desc: "Interfaces polished for premium engagement. Your applications will naturally match the world-class design languages of Vercel, Stripe, and Linear." },
    { title: "Scalable Architecture Core", desc: "Built safely using flexible relational clusters inside Google Cloud Firebase to handle sudden market expansions and concurrent customer loads." },
    { title: "Long-Term Dedicated Support", desc: "We act as your technical engineering partners, maintaining code iterations, regular visual design updates, and structural balance verification." }
  ];

  // Delivery Framework Roadmap Pipeline
  const deliveryProcess = [
    { step: "01", label: "Discovery", desc: "Deep diving into your commercial business workflow parameters, identifying major operational friction points." },
    { step: "02", label: "Planning", desc: "Mapping explicit technical blueprints, chosen tech stack components, and predictable deployment milestones." },
    { step: "03", label: "UI/UX Design", desc: "Crafting beautiful high-fidelity software visual aesthetics prioritizing breathing room and clean scannability." },
    { step: "04", label: "Development", desc: "Writing optimized frontend React components and secure backend architecture rules under continuous testing." },
    { step: "05", label: "Deployment", desc: "Launching your custom system safely to live cloud infrastructures like Vercel with absolute domain mapping." }
  ];

  // Technology Blueprint Badges Array
  const techStackBadges = [
    "React", "Vite", "Firebase", "Tailwind CSS", "Gemini AI", "JavaScript (ES6+)", "HTML5 / CSS3", "Responsive Strategy", "API Architecture", "Cloud Firestore", "Git Versioning", "Vercel Cloud"
  ];

  // Client Validation Form Transmission Pipeline
  const validateForm = () => {
    let tempErrors = {};
    if (!formData.companyName.trim()) tempErrors.companyName = "Company name is required to initialize.";
    if (!formData.email.trim()) {
      tempErrors.email = "Email address is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Please input a valid email address.";
    }
    if (!formData.phone.trim()) tempErrors.phone = "Phone verification contact is required.";
    if (!formData.details.trim()) tempErrors.details = "Please share some basic project requirements.";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  // Executing decoupled universal lead transmission block safely
  const handleLeadFormTransmission = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      alert("Validation Failed. Check required input nodes.");
      return;
    }

    setSubmissionState('SUBMITTING');

    // Passing local component state payload into externalized firebase pipeline engine
    const response = await transmitLeadToFirebase(formData);

    if (response.success) {
      alert(`Verification Success!\nCompany: ${formData.companyName}\nSync Node Token: ${response.nodeRef}`);
      setSubmissionState('SUCCESS');
      setFormData({
        companyName: '',
        email: '',
        phone: '',
        details: '',
        budget: 'Standard MVP ($1,000 - $2,000)'
      });
      setErrors({});
    } else {
      alert(`Fatal Transmission Interrupt: ${response.error}`);
      setSubmissionState('IDLE');
    }
  };

  // Routing Condition Gate: Route to Admin Panel if path matches our private routing node
  if (currentPath === '/onyx-control-tower') {
    return <OnyxAdmin navigateToNode={navigateToNode} />;
  }

  return (
    <div className="min-h-screen bg-[#000000] text-neutral-100 font-sans antialiased selection:bg-cyan-500 selection:text-black scroll-smooth">
      
      {/* Premium Backdrop Aesthetic Glow Nodes using Design Tokens */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-[radial-gradient(ellipse_at_top,rgba(0,242,254,0.06),transparent_50%)] pointer-events-none z-0" />
      <div className="absolute top-[1800px] right-0 w-[400px] h-[400px] bg-[#00f2fe]/[0.02] blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[800px] left-0 w-[500px] h-[500px] bg-[#00e676]/[0.01] blur-[180px] pointer-events-none" />

      {/* --- ELITE FIXED STICKY NAVIGATION BAR --- */}
      <nav className="sticky top-0 z-50 border-b border-neutral-900 bg-black/60 backdrop-blur-xl px-6 md:px-12 py-4" aria-label="Main Navigation">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded-md p-1" aria-label={`${siteConfig.agencyName} Homepage`}>
            <div className="w-3 h-3 rounded-full bg-[#00f2fe] shadow-[0_0_15px_#00f2fe] group-hover:scale-110 transition-transform duration-300"></div>
            <span className="text-lg font-bold tracking-tight uppercase font-mono text-white">
              OnyxStack<span className="text-[#00f2fe] font-sans tracking-normal lowercase font-semibold">Labs</span>
            </span>
          </a>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
            <a href="#services" className="hover:text-neutral-100 transition-colors focus:outline-none focus:text-white">Services</a>
            <a href="#portfolio" className="hover:text-neutral-100 transition-colors focus:outline-none focus:text-white">Portfolio</a>
            <a href="#why-choose-us" className="hover:text-neutral-100 transition-colors focus:outline-none focus:text-white">Philosophy</a>
            <a href="#process" className="hover:text-neutral-100 transition-colors focus:outline-none focus:text-white">Our Process</a>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2 bg-neutral-900/80 border border-neutral-800 px-3.5 py-1.5 rounded-full" aria-label="System status node indicator">
              <div className="w-2 h-2 rounded-full bg-[#00e676] shadow-[0_0_8px_#00e676] animate-pulse"></div>
              <span className="text-[10px] uppercase tracking-widest text-neutral-400 font-mono">Ready For Partnerships</span>
            </div>
            <a 
              href="#contact" 
              className="bg-neutral-100 hover:bg-[#00f2fe] text-black px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            >
              Start Project
            </a>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION SYNCED WITH SITECONFIG DYNAMIC DATA --- */}
      <header className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-20 text-center md:pt-36 md:pb-32 space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-cyan-500/20 rounded-full text-xs text-[#00f2fe] bg-cyan-950/20 backdrop-blur-md mx-auto">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00f2fe] shadow-[0_0_8px_#00f2fe]"></span>
          Building Smarter Solutions for Global Brands
        </div>
        
        <div className="space-y-6 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tighter text-white uppercase leading-none">
            {siteConfig.tagline.split('&')[0]} <br className="hidden md:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-100 via-neutral-300 to-[#00f2fe]">
              {siteConfig.tagline.split('&')[1] ? `& ${siteConfig.tagline.split('&')[1]}` : 'for High-Ticket Enterprises'}
            </span>
          </h1>
          <p className="text-base sm:text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed font-normal">
            {siteConfig.subTagline}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <a 
            href="#contact" 
            className="w-full sm:w-auto bg-[#00f2fe] hover:bg-cyan-300 text-black px-8 py-4 rounded-xl font-bold text-sm tracking-wide shadow-[0_4px_25px_rgba(0,242,254,0.15)] transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-cyan-300 text-center"
          >
            Start Your Project
          </a>
          <a 
            href="#portfolio" 
            className="w-full sm:w-auto bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-neutral-200 hover:text-white px-8 py-4 rounded-xl font-bold text-sm tracking-wide transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-neutral-700 text-center"
          >
            View Portfolio
          </a>
        </div>

        <div className="pt-16 md:pt-24 border-t border-neutral-900/60 max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-4">
          {[
            { metric: "20+", label: "Successful Deployments" },
            { metric: "100%", label: "Custom Product Engineering" },
            { metric: "AI-Powered", label: "Workflow Automation Models" },
            { metric: "Premium", label: "UI/UX Aesthetic Standard" }
          ].map((stat, idx) => (
            <div key={idx} className="space-y-1 group">
              <div className="text-2xl md:text-3xl font-extrabold text-white group-hover:text-[#00f2fe] transition-colors duration-300 font-mono">{stat.metric}</div>
              <div className="text-xs text-neutral-500 uppercase tracking-widest font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </header>

      {/* --- CORE PREMIUM SERVICES SECTION --- */}
      <section id="services" className="relative z-10 border-t border-neutral-900 bg-neutral-950/40 py-24 px-6" aria-labelledby="services-title">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 id="services-title" className="text-xs font-mono font-bold uppercase tracking-widest text-[#00f2fe]">Capabilities Matrix</h2>
            <p className="text-3xl md:text-4xl font-black tracking-tight uppercase text-white">Engineered Solutions for Complex Problems</p>
            <p className="text-sm text-neutral-400 max-w-xl mx-auto leading-relaxed">High-performance production apps built cleanly with zero bloatware runtime execution templates.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreServices.map((service, idx) => (
              <div 
                key={idx} 
                className="bg-neutral-950 border border-neutral-900/80 rounded-2xl p-6 space-y-4 hover:border-[#00f2fe]/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-neutral-900 flex items-center justify-center border border-neutral-800 group-hover:bg-cyan-950/30 group-hover:border-[#00f2fe]/20 transition-all duration-300">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-neutral-100 group-hover:text-[#00f2fe] transition-colors duration-300">{service.title}</h3>
                <p className="text-xs text-neutral-400 leading-relaxed font-normal">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PRODUCTION ECOSYSTEM ROW COMPLETELY GENERATED FROM SITECONFIG DATA --- */}
      <section id="portfolio" className="relative z-10 py-24 px-6 max-w-7xl mx-auto space-y-16" aria-labelledby="portfolio-title">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-neutral-900 pb-8">
          <div className="space-y-4">
            <h2 id="portfolio-title" className="text-xs font-mono font-bold uppercase tracking-widest text-[#00f2fe]">Selected Product Deployments</h2>
            <p className="text-3xl md:text-4xl font-black tracking-tight uppercase text-white">Live Production Ecosystem</p>
          </div>
          <div className="inline-block bg-neutral-950 border border-neutral-800 px-4 py-2 rounded-xl font-mono text-xs uppercase tracking-widest text-neutral-400">
            Active Verified Instances: {String(siteConfig.projects.length).padStart(2, '0')}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteConfig.projects.map((project) => (
            <article 
              key={project.id} 
              className="bg-neutral-950 border border-neutral-900/80 rounded-2xl p-6 flex flex-col justify-between hover:border-neutral-800 transition-all duration-300 relative overflow-hidden group hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)]"
            >
              {project.liveUrl !== "#" && (
                <span className="absolute top-4 right-4 bg-emerald-950/60 border border-emerald-500/30 text-[#00e676] text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00e676] animate-ping"></span> Live Setup
                </span>
              )}
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-[#00f2fe] transition-colors duration-300">{project.name}</h3>
                  <p className="text-[10px] font-mono font-semibold text-cyan-500 tracking-wider uppercase mt-1">{project.tagline}</p>
                </div>
                <p className="text-xs text-neutral-400 leading-relaxed font-normal min-h-[64px]">{project.description}</p>
              </div>

              <div className="mt-6 space-y-4 pt-4 border-t border-neutral-900/60">
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((tag, idx) => (
                    <span key={idx} className="bg-neutral-900 text-neutral-400 border border-neutral-800/60 font-mono text-[9px] px-2 py-0.5 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <a 
                  href={project.liveUrl}
                  target={project.liveUrl !== "#" ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className="w-full bg-neutral-900 hover:bg-[#00f2fe] border border-neutral-800 text-neutral-200 hover:text-black font-semibold text-xs py-3 px-4 rounded-xl flex items-center justify-center gap-2 group/btn transition-all duration-300 text-center"
                  aria-label={`Launch deployment instance demo for ${project.name}`}
                >
                  Launch Client Instance <span className="group-hover/btn:translate-x-1 transition-transform duration-300">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* --- STRATEGIC WHY CHOOSE US SECTION --- */}
      <section id="why-choose-us" className="relative z-10 border-t border-neutral-900 bg-neutral-950/20 py-24 px-6" aria-labelledby="why-us-title">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 id="why-us-title" className="text-xs font-mono font-bold uppercase tracking-widest text-[#00f2fe]">Our Strategic Advantage</h2>
            <p className="text-3xl md:text-4xl font-black tracking-tight uppercase text-white">Built For Real Commercial Impact</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {valueProps.map((prop, idx) => (
              <div key={idx} className="bg-neutral-950 border border-neutral-900 p-6 rounded-2xl flex gap-4 items-start hover:border-neutral-800 transition-colors duration-300">
                <div className="mt-1 w-5 h-5 rounded-full bg-cyan-950/60 border border-cyan-400/40 flex items-center justify-center shrink-0">
                  <svg className="w-3 h-3 text-[#00f2fe]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-base font-bold text-neutral-100">{prop.title}</h3>
                  <p className="text-xs text-neutral-400 leading-relaxed font-normal">{prop.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PIPELINE DELIVERY TIMELINE PROCESS SECTION --- */}
      <section id="process" className="relative z-10 border-t border-neutral-900 py-24 px-6 max-w-7xl mx-auto space-y-16" aria-labelledby="process-title">
        <div className="text-center space-y-4">
          <h2 id="process-title" className="text-xs font-mono font-bold uppercase tracking-widest text-[#00f2fe]">Execution Timeline</h2>
          <p className="text-3xl md:text-4xl font-black tracking-tight uppercase text-white">From Blueprint to Deployment Loop</p>
        </div>

        <div className="relative max-w-4xl mx-auto before:absolute before:inset-0 before:left-4 md:before:left-1/2 before:w-[1px] before:bg-neutral-900 before:pointer-events-none">
          {deliveryProcess.map((proc, idx) => (
            <div key={idx} className={`relative flex flex-col md:flex-row items-start mb-12 last:mb-0 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-black border border-neutral-800 flex items-center justify-center z-10 shadow-[0_0_10px_rgba(0,0,0,0.8)]">
                <span className="text-[10px] font-mono text-[#00f2fe] font-bold">{proc.step}</span>
              </div>
              
              <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${idx % 2 === 0 ? 'md:pr-12 text-left md:text-right' : 'md:pl-12 text-left'}`}>
                <div className="bg-neutral-950 border border-neutral-900/60 p-5 rounded-2xl hover:border-neutral-800 transition-colors duration-300 inline-block w-full">
                  <h3 className="text-base font-bold text-white mb-1.5">{proc.label}</h3>
                  <p className="text-xs text-neutral-400 leading-relaxed font-normal">{proc.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- CORE TECH STACK COMPONENT GRID --- */}
      <section className="relative z-10 border-t border-neutral-900 bg-neutral-950/30 py-20 px-6" aria-labelledby="tech-title">
        <div className="max-w-5xl mx-auto space-y-10">
          <div className="text-center space-y-2">
            <h2 id="tech-title" className="text-xs font-mono font-bold uppercase tracking-widest text-[#00f2fe]">The Technology Architecture Blueprint</h2>
            <p className="text-sm text-neutral-500 font-mono uppercase tracking-wide">High-performance tech stacks configured for microsecond hot reload optimization.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {techStackBadges.map((tech, idx) => (
              <span 
                key={idx} 
                className="bg-neutral-950 border border-neutral-900 text-neutral-300 font-mono text-xs px-4 py-2 rounded-xl hover:border-cyan-500/20 hover:text-white transition-colors duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* --- REDESIGNED HIGH-CONVERSION PARTNERSHIP CONTACT SECTION --- */}
      <section id="contact" className="relative z-10 border-t border-neutral-900 py-24 px-6" aria-labelledby="contact-title">
        <div className="max-w-2xl mx-auto bg-neutral-950/80 border border-neutral-900 rounded-3xl p-6 md:p-10 space-y-8 shadow-[0_20px_50px_rgba(0,0,0,0.4)] backdrop-blur-md">
          <div className="text-center space-y-3">
            <h2 id="contact-title" className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white">Let's Build Your Next Project</h2>
            <p className="text-xs md:text-sm text-neutral-400 font-normal">
              Drop your custom application parameters directly into our active design consultation funnel pipeline.
            </p>
          </div>

          {submissionState === 'SUCCESS' ? (
            <div className="bg-neutral-900/60 border border-emerald-500/30 rounded-2xl p-8 text-center space-y-5">
              <div className="w-14 h-14 rounded-full bg-emerald-950 border border-emerald-400 text-[#00e676] flex items-center justify-center mx-auto text-2xl shadow-[0_0_20px_rgba(0,230,118,0.3)]">
                ✓
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-[#00e676] font-mono uppercase tracking-wide">Project Request Cached</h3>
                <p className="text-xs text-neutral-400 max-w-md mx-auto leading-relaxed">
                  Your project specifications have been successfully transmitted. Our engineering partners will reach out within 24 hours.
                </p>
              </div>
              <button 
                onClick={() => setSubmissionState('IDLE')}
                className="text-xs text-[#00f2fe] hover:text-cyan-300 font-mono uppercase tracking-widest pt-2 font-bold focus:outline-none focus:underline"
              >
                Submit An Additional System Node
              </button>
            </div>
          ) : (
            <form onSubmit={handleLeadFormTransmission} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="companyName" className="text-xs font-mono font-bold uppercase tracking-widest text-neutral-400 block">Company Name</label>
                <input 
                  type="text" 
                  id="companyName"
                  disabled={submissionState === 'SUBMITTING'}
                  placeholder={siteConfig.agencyName} 
                  value={formData.companyName}
                  onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                  className={`w-full bg-black border ${errors.companyName ? 'border-red-500' : 'border-neutral-800'} focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 rounded-xl py-3.5 px-4 text-sm text-white placeholder-neutral-700 outline-none transition-all disabled:opacity-50`}
                />
                {errors.companyName && <p className="text-red-500 text-[11px] font-mono mt-1">{errors.companyName}</p>}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-mono font-bold uppercase tracking-widest text-neutral-400 block">Email Address</label>
                  <input 
                    type="email" 
                    id="email"
                    disabled={submissionState === 'SUBMITTING'}
                    placeholder="onyxstacklabs@gmail.com" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className={`w-full bg-black border ${errors.email ? 'border-red-500' : 'border-neutral-800'} focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 rounded-xl py-3.5 px-4 text-sm text-white placeholder-neutral-700 outline-none transition-all disabled:opacity-50`}
                  />
                  {errors.email && <p className="text-red-500 text-[11px] font-mono mt-1">{errors.email}</p>}
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="text-xs font-mono font-bold uppercase tracking-widest text-neutral-400 block">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone"
                    disabled={submissionState === 'SUBMITTING'}
                    placeholder="+92 344 5800630" 
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className={`w-full bg-black border ${errors.phone ? 'border-red-500' : 'border-neutral-800'} focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 rounded-xl py-3.5 px-4 text-sm text-white placeholder-neutral-700 outline-none transition-all disabled:opacity-50`}
                  />
                  {errors.phone && <p className="text-red-500 text-[11px] font-mono mt-1">{errors.phone}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="details" className="text-xs font-mono font-bold uppercase tracking-widest text-neutral-400 block">Project Scope & Details</label>
                <textarea 
                  id="details"
                  rows="4"
                  disabled={submissionState === 'SUBMITTING'}
                  placeholder="Describe your customized system goals, required AI features, or workflow challenges..." 
                  value={formData.details}
                  onChange={(e) => setFormData({...formData, details: e.target.value})}
                  className={`w-full bg-black border ${errors.details ? 'border-red-500' : 'border-neutral-800'} focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 rounded-xl py-3.5 px-4 text-sm text-white placeholder-neutral-700 outline-none transition-all resize-none disabled:opacity-50`}
                ></textarea>
                {errors.details && <p className="text-red-500 text-[11px] font-mono mt-1">{errors.details}</p>}
              </div>

              <div className="space-y-2">
                <label htmlFor="budget" className="text-xs font-mono font-bold uppercase tracking-widest text-neutral-400 block">Estimated Budget Allocation</label>
                <div className="relative">
                  <select 
                    id="budget"
                    disabled={submissionState === 'SUBMITTING'}
                    value={formData.budget}
                    onChange={(e) => setFormData({...formData, budget: e.target.value})}
                    className="w-full bg-black border border-neutral-800 focus:border-cyan-500 rounded-xl py-3.5 px-4 text-sm text-white outline-none cursor-pointer appearance-none disabled:opacity-50"
                  >
                    <option>Standard MVP ($1,000 - $2,000)</option>
                    <option>Premium Business Tier ($2,000 - $5,000)</option>
                    <option>Enterprise Custom Architecture ($5,000+)</option>
                  </select>
                  <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-neutral-500">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                  </div>
                </div>
              </div>

              <button 
                type="submit"
                disabled={submissionState === 'SUBMITTING'}
                className="w-full bg-[#00f2fe] hover:bg-cyan-300 disabled:bg-cyan-950 disabled:text-cyan-700 text-black font-extrabold text-xs uppercase tracking-widest py-4 px-4 rounded-xl shadow-[0_4px_25px_rgba(0,242,254,0.15)] transition-all duration-300 flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              >
                {submissionState === 'SUBMITTING' ? (
                  <>
                    <svg className="animate-spin h-4 w-4 text-black" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    <span>Verifying Transmission...</span>
                  </>
                ) : (
                  "Start Project"
                )}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* --- REDESIGNED HIGH-END ENTERPRISE BRAND FOOTER FRAMEWORK --- */}
      <footer className="border-t border-neutral-900 bg-black py-16 px-6 relative z-10" aria-label="Agency Directory Info">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 pb-12">
          
          {/* Brand Identity Segment */}
          <div className="space-y-4 md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-[#00f2fe] shadow-[0_0_10px_#00f2fe]"></div>
              <h3 className="text-base font-bold tracking-widest uppercase text-white font-mono">{siteConfig.agencyName}</h3>
            </div>
            <p className="text-xs text-neutral-500 max-w-sm leading-relaxed font-normal">
              High-performance premium custom software engineering agency. We turn enterprise business specifications into optimized software environments.
            </p>
            <div className="text-[11px] font-mono text-cyan-500/80 uppercase tracking-wider">
              Building Smarter Solutions
            </div>
          </div>

          {/* Quick Services Index */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-neutral-400 font-bold">Services Matrix</h4>
            <ul className="space-y-2 text-xs text-neutral-500 font-normal">
              <li><a href="#services" className="hover:text-[#00f2fe] transition-colors">Custom Web Platforms</a></li>
              <li><a href="#services" className="hover:text-[#00f2fe] transition-colors">Android Mobile Apps</a></li>
              <li><a href="#services" className="hover:text-[#00f2fe] transition-colors">AI System Automation</a></li>
              <li><a href="#services" className="hover:text-[#00f2fe] transition-colors">Management ERP Core</a></li>
            </ul>
          </div>

          {/* Core Contacts Segment */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-neutral-400 font-bold">Communication Nodes</h4>
            <ul className="space-y-2 text-xs text-neutral-500 font-normal">
              <li><span className="text-neutral-400">Inquiries:</span> onyxstacklabs@gmail.com</li>
              <li><span className="text-neutral-400">Hotline:</span> +92 344 5800630</li>
              <li><span className="text-neutral-400">Headquarters:</span> Pakistan</li>
            </ul>
          </div>
        </div>

        {/* Dynamic Social Ecosystem Matrix Links Grid with 100% Verified siteConfig Nodes */}
        <div className="border-t border-neutral-900 pt-8 max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3 font-mono text-[11px] font-bold uppercase tracking-widest text-neutral-400">
            
            {/* YouTube Link */}
            <a href={siteConfig.socialLinks.youtube} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#00f2fe] transition-colors group">
              <svg className="w-3.5 h-3.5 fill-current text-neutral-500 group-hover:text-[#00f2fe] transition-colors" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93 .502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              <span>YouTube</span>
            </a>

            {/* LinkedIn Link */}
            <a href={siteConfig.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#00f2fe] transition-colors group">
              <svg className="w-3.5 h-3.5 fill-current text-neutral-500 group-hover:text-[#00f2fe] transition-colors" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              <span>LinkedIn</span>
            </a>

            {/* Facebook Link */}
            <a href={siteConfig.socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#00f2fe] transition-colors group">
              <svg className="w-3.5 h-3.5 fill-current text-neutral-500 group-hover:text-[#00f2fe] transition-colors" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              <span>Facebook</span>
            </a>

            {/* Instagram Link */}
            <a href={siteConfig.socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#00f2fe] transition-colors group">
              <svg className="w-3.5 h-3.5 fill-current text-neutral-500 group-hover:text-[#00f2fe] transition-colors" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
              </svg>
              <span>Instagram</span>
            </a>

            {/* TikTok Link */}
            <a href={siteConfig.socialLinks.tiktok} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#00f2fe] transition-colors group">
              <svg className="w-3.5 h-3.5 fill-current text-neutral-500 group-hover:text-[#00f2fe] transition-colors" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.02 1.59 4.23.94 1.15 2.25 1.95 3.67 2.31v3.7c-1.35-.14-2.68-.67-3.79-1.48-.69-.51-1.28-1.15-1.74-1.89-.04 1.96-.02 3.91-.03 5.87 0 2.05-.44 4.15-1.57 5.87-1.32 2.04-3.61 3.44-6.04 3.53-2.61.16-5.27-.85-6.83-2.95-1.69-2.22-1.92-5.46-.6-7.89 1.13-2.11 3.42-3.53 5.81-3.65.01 1.28-.01 2.56-.01 3.84-1.27.05-2.54.73-3.16 1.84-.74 1.26-.54 3 .47 4.05.99 1.05 2.65 1.16 3.77.24.87-.69 1.28-1.83 1.26-2.94-.01 4.13-.01-8.26-.01-12.39z"/>
              </svg>
              <span>TikTok</span>
            </a>

            {/* Emerald WhatsApp Communication Anchor Node */}
            <a href={siteConfig.socialLinks.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#00e676] hover:text-emerald-400 transition-colors group">
              <svg className="w-3.5 h-3.5 fill-current text-[#00e676] group-hover:text-emerald-400 transition-colors" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397 0 11.966 0c3.178.001 6.169 1.24 8.419 3.496 2.25 2.255 3.488 5.248 3.487 8.425-.004 6.616-5.34 11.965-11.912 11.965-1.996-.001-3.963-.502-5.716-1.458L0 24zm6.588-3.418l.366.218c1.5.892 3.314 1.363 5.166 1.364h.006c5.52 0 10.011-4.505 10.014-10.04a9.92 9.92 0 0 0-2.914-7.094A9.855 9.855 0 0 0 11.966 1.96c-5.522 0-10.015 4.508-10.018 10.043-.001 1.865.485 3.689 1.409 5.3 l.239.417-1.002 3.662 3.753-.989zM18.06 14.85c-.333-.167-1.97-.974-2.278-1.087-.308-.113-.532-.167-.756.167-.224.334-.868 1.087-1.064 1.313-.196.226-.392.254-.725.087-1.361-.682-2.333-1.181-3.238-2.73-.241-.413.241-.383.69-.1.403.253.392.424.588.756.196.334.098.623-.05.924-.147.302-.756 1.821-.924 2.226-.164.394-.329.34-.45.34h-.382c-.132 0-.346-.049-.527-.247-.182-.198-.693-.677-.693-1.652 0-.975.709-1.916.821-2.066.112-.15 1.396-2.132 3.382-2.99.473-.204.843-.326 1.131-.418.475-.152.907-.13 1.25-.181.382-.057 1.173-.48 1.338-.943.165-.463.165-.86.116-.943-.049-.084-.182-.132-.515-.299z"/>
              </svg>
              <span>WhatsApp</span>
            </a>

          </div>

          <div className="font-mono text-[10px] text-neutral-600 uppercase tracking-widest text-center sm:text-right">
            © 2026 OnyxStack Labs. All Rights Reserved.
          </div>
        </div>
      </footer>

    </div>
  );
}
