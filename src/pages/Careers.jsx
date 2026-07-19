import React, { useEffect, useState } from 'react';

// LIVE DATA CORE IMPORTS
import { siteConfig } from '../config/siteConfig';

// MODULAR DETACHED COMPONENT ARCHITECTURE LAYER
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Careers({ currentPath, navigateToNode }) {
  const [activeFaq, setActiveFaq] = useState(null);
  const [selectedDept, setSelectedDept] = useState("All");
  
  // Custom Modal Pipeline State Matrix
  const [activeApplicationModal, setActiveApplicationModal] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Synchronize layout viewport configuration on initial mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleFaq = (idx) => {
    setActiveFaq(activeFaq === idx ? null : idx);
  };

  const handleModalClose = () => {
    setActiveApplicationModal(null);
    setIsSubmitted(false);
  };

  // Section 2 Data: Corporate Cultural Vectors
  const cultureVectors = [
    { title: "Pure Innovation", desc: "We actively reject rigid copy-paste code patterns. Our team continuously develops greenfield serverless systems and custom telemetry dashboards." },
    { title: "Vertical Growth Loops", desc: "Clear engineering advancement paths designed to elevate mid-tier developers to senior platform architects based on structural performance metrics." },
    { title: "Sovereign Work Formats", desc: "Asynchronously balanced operating framework. Work from any location globally, assuming clear container milestone obligations are maintained." },
    { title: "Continuous Technical Buffers", desc: "Quarterly institutional learning tracks covering state-of-the-art developments in generative AI, edge execution layers, and safe database isolation." },
    { title: "High-Density Global Scope", desc: "Build critical digital infrastructure models for prominent cross-border logistics systems, educational networks, and corporate enterprise clients." },
    { title: "Decoupled Collaboration", desc: "Zero pointless daily standup rituals. Communication runs on clean document specs, precise code logs, and automated repository trackers." }
  ];

  // Section 3 Data: Extensible Open Positions Pipeline Matrix (ATS-Ready)
  const openPositions = [
    {
      id: "job-01",
      title: "Frontend React Developer",
      dept: "Engineering",
      type: "Full-Time (Remote)",
      experience: "Senior (4+ Years)",
      location: "Global",
      mode: "Remote",
      desc: "Architect scalable B2B dashboards, design atomized layout tokens, and continuously balance sub-second view paint speeds across complex data structures."
    },
    {
      id: "job-02",
      title: "Backend Node.js Engineer",
      dept: "Engineering",
      type: "Full-Time (Remote)",
      experience: "Mid-to-Senior",
      location: "Global",
      mode: "Remote",
      desc: "Deploy highly concurrent Node/Express APIs, model nested Mongo schemas, and implement multi-tenant validation boundaries to handle extreme traffic shocks safely."
    },
    {
      id: "job-03",
      title: "Full Stack MERN Developer",
      dept: "Engineering",
      type: "Full-Time (Remote)",
      experience: "Senior (5+ Years)",
      location: "Global",
      mode: "Remote",
      desc: "Bridge modular React client interfaces with secure distributed microservices. Own features end-to-end, managing deployment state loops across cloud environments."
    },
    {
      id: "job-04",
      title: "UI/UX Designer",
      dept: "Design",
      type: "Contract-to-FTE",
      experience: "Senior (5+ Years)",
      location: "Global",
      mode: "Remote",
      desc: "Draft sophisticated user flows and pixel-perfect dark theme design structures using systemic component patterns easily translated into utility CSS tokens."
    },
    {
      id: "job-05",
      title: "AI Engineer",
      dept: "Engineering",
      type: "Full-Time (Remote)",
      experience: "Expert Level",
      location: "Global",
      mode: "Remote",
      desc: "Integrate stateless LLM inference engines, embed secure prompt vectors into active application codebeds, and minimize browser data transit lag."
    },
    {
      id: "job-06",
      title: "Flutter Developer",
      dept: "Engineering",
      type: "Full-Time (Remote)",
      experience: "Senior (3+ Years)",
      location: "Global",
      mode: "Remote",
      desc: "Compile optimized cross-platform native engines. Maintain continuous 60 FPS performance states while processing high-concurrency background sync pipelines."
    },
    {
      id: "job-07",
      title: "DevOps Engineer",
      dept: "Engineering",
      type: "Full-Time (Remote)",
      experience: "Senior",
      location: "Global",
      mode: "Remote",
      desc: "Configure automated multi-region serverless deployment architecture, edge isolation networks, and secure repository integration matrices for total up-time."
    }
  ];

  // Section 4 Data: Linear Hiring Flow Lifecycle Stages
  const hiringProcess = [
    { phase: "01. Digital Application", info: "Submit your technical portfolio link, active GitHub profile overview, or structural resume breakdown for pipeline evaluation." },
    { phase: "02. Profile Architecture Review", info: "Our lead engineers screen your repository patterns to look for atomic clean coding habits and smart layout separation loops." },
    { phase: "03. Technical Interview", info: "A deep dive into structural application design, system state paradigms, runtime performance optimization, and memory isolation vectors." },
    { phase: "04. Final Interview", info: "A structured session with our engineering leaders to verify communication synergy, global remote alignment, and cross-functional product ownership." },
    { phase: "05. Institutional Offer", info: "Receive a transparent, comprehensive compensation blueprint detailing your base salary packages, equity points, and growth tracks." },
    { phase: "06. Environment Onboarding", info: "Access localized sandbox servers, read production architecture runbooks, and deploy initial code nodes within week one." }
  ];

  // Section 5 Data: Corporate Benefits Directory Matrix
  const corporateBenefits = [
    { category: "Hardware & Terminal Allowances", benefit: "Receive a premium workstation stipend every 2 years to procure the high-speed chips and displays your work demands." },
    { category: "Universal Health Infrastructure", benefit: "Global medical and dental insurance subsidies mapped safely to support your local region's private care networks." },
    { category: "Asynchronous PTO Ecosystem", benefit: "28 days of baseline annual paid time off alongside regional calendar breaks, backed by a strict 'no notification check' code." },
    { category: "Learning Resource Endowments", benefit: "$1,500 annual personal development budget for software licenses, advanced certifications, and technical text access." }
  ];

  // Section 6 Data: Talent Pipeline FAQs
  const careerFaqs = [
    {
      q: "Can I apply if my current geographical timezone sits outside of standard operational boundaries?",
      a: "Yes. OnyxStack Labs operates with an asynchronous workflow matrix. As long as you maintain core alignment intersections with your technical pod for code reviews and document updates, you control your clock variables completely."
    },
    {
      q: "What programming style conventions does your technical organization look for in coding tests?",
      a: "We highly prioritize declarative state formatting, defensive boundary conditions against edge exceptions, isolated atomic components, and readable commit annotations. We favor long-term maintainability over over-engineered micro-optimizations."
    },
    {
      q: "How fast do applications advance through the enterprise screening pipeline?",
      a: "Our typical review-to-offer trajectory completes in under 14 business days. We understand top technical talent moves rapidly through market options, so we keep evaluation channels direct and responsive."
    },
    {
      q: "Are the contract-based roles eligible for conversion into full permanent employee positions?",
      a: "Absolutely. We routinely evaluate our enterprise engineering contractor loops after 90 operational days to transition highly aligned individuals into long-term salaried positions."
    },
    {
      q: "Does OnyxStack Labs maintain physical corporate offices for collaborative use?",
      a: "We are proudly remote-first by design. However, we coordinate periodic localized meetup sprints and sponsor access to premium shared coworking spaces in major global metropolitan centers."
    },
    {
      q: "How frequently are internal promotion evaluations executed for engineering pods?",
      a: "Structural contribution reviews occur twice per fiscal year. Advancements are driven entirely by objective metrics like code quality velocity, technical runtime efficiency improvements, and systemic documentation management."
    }
  ];

  const handleApplicationPlaceholder = (jobTitle) => {
    setActiveApplicationModal(jobTitle);
  };

  const scrollToOpportunities = () => {
    document.getElementById('open-positions-frame')?.scrollIntoView({ behavior: 'smooth' });
  };

  const filteredJobs = selectedDept === "All" 
    ? openPositions 
    : openPositions.filter(j => j.dept === selectedDept);

  return (
    <div className="min-h-screen bg-[#050505] text-neutral-100 font-sans antialiased selection:bg-[#06B6D4] selection:text-black relative overflow-hidden">
      
      {/* BRAND AMBIENT STRUCTURAL AMBIENCE GRAPHICS */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[850px] bg-[radial-gradient(ellipse_at_top,rgba(6,182,212,0.06),transparent_65%)] pointer-events-none z-0" />
      <div className="absolute top-[1800px] left-0 w-[450px] h-[450px] bg-[#06B6D4]/[0.012] blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[900px] right-0 w-[550px] h-[550px] bg-purple-600/[0.01] blur-[220px] pointer-events-none" />

      {/* CORE NAVBAR ROUTER INTEGRATION */}
      <Navbar 
        currentPath={currentPath} 
        activeSection="" 
        navigateToNode={navigateToNode} 
        siteConfig={siteConfig} 
      />

      {/* ENTERPRISE CAREERS ARCHITECTURE CONTENT PACKET */}
      <div className="relative z-10 enterprise-recruitment-view-scope">
        
        {/* SECTION 1: HERO BRIEFING TERMINAL */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-16 sm:pt-40 sm:pb-24 text-center sm:text-left relative">
          <div className="max-w-4xl mx-auto sm:mx-0 transition-all duration-700 transform translate-y-0 opacity-100">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#06B6D4]/10 border border-[#06B6D4]/20 text-[#06B6D4] text-xs font-mono uppercase tracking-widest mb-6 animate-pulse">
              Global Operations Pipeline // Open Cadres
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.1] font-sans">
              Write Code That Defies Technical Debt. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#06B6D4] via-cyan-200 to-blue-500">
                Build Institutional Systems.
              </span>
            </h1>
            <p className="text-base sm:text-lg text-neutral-400 max-w-2xl leading-relaxed mb-8 font-sans">
              We connect expert engineers and meticulous interface designers to replace brittle templates with resilient, high-speed customized platforms. Explore our global vacancies.
            </p>
            <div>
              <button
                onClick={scrollToOpportunities}
                className="bg-white hover:bg-[#06B6D4] text-black px-8 py-4 rounded-full text-xs font-bold font-mono uppercase tracking-widest transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] transform hover:-translate-y-0.5"
              >
                Join Our Team // Review Positions
              </button>
            </div>
          </div>
        </section>

        {/* SECTION 2: WHY WORK WITH US // CORE VECTORS GRID */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 border-t border-neutral-900/60">
          <div className="max-w-3xl mb-12">
            <p className="text-xs font-mono uppercase tracking-widest text-[#06B6D4] mb-3">Organizational Philosophy</p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-sans">Our Operational Infrastructure Blueprint</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cultureVectors.map((vec, vIdx) => (
              <div key={vIdx} className="p-6 rounded-xl border border-neutral-900 bg-neutral-950/30 hover:border-[#06B6D4]/30 hover:bg-neutral-900/20 transition-all duration-300 group hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                <div className="text-xs font-mono text-neutral-600 mb-4 group-hover:text-[#06B6D4] transition-colors">// Vector_0{vIdx + 1}</div>
                <h3 className="text-sm font-bold text-white font-sans mb-2 tracking-wide group-hover:text-white transition-colors">{vec.title}</h3>
                <p className="text-xs text-neutral-400 leading-relaxed font-sans">{vec.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 3: RECRUITMENT PIPELINE ACTIVE JOB BOARD */}
        <section id="open-positions-frame" className="max-w-7xl mx-auto px-6 md:px-12 py-16 border-t border-neutral-900/60 scroll-mt-24">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-[#06B6D4] mb-3">Live Registries</p>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-sans">Active Enterprise Openings</h2>
            </div>
            
            {/* Department Filter Toggle Mechanism */}
            <div className="flex flex-wrap items-center gap-1.5 bg-neutral-950 p-1.5 rounded-xl border border-neutral-900 self-start lg:self-auto">
              {["All", "Engineering", "Design"].map((d, dIdx) => (
                <button
                  key={dIdx}
                  onClick={() => setSelectedDept(d)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all focus:outline-none ${selectedDept === d ? 'bg-neutral-900 border border-[#06B6D4]/20 text-[#06B6D4] font-bold' : 'text-neutral-500 hover:text-neutral-300'}`}
                >
                  {d}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredJobs.map((job) => (
              <div 
                key={job.id}
                className="p-6 rounded-2xl border border-neutral-900/80 bg-gradient-to-b from-neutral-950 to-neutral-950/40 flex flex-col justify-between items-stretch group min-h-[360px] transition-all duration-300 hover:border-[#06B6D4]/30 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(6,182,212,0.03)]"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="px-2.5 py-0.5 rounded bg-neutral-900 border border-neutral-850 text-neutral-400 font-mono text-[9px] uppercase tracking-wider">
                      {job.dept}
                    </span>
                    <span className="text-[10px] font-mono text-neutral-500">{job.experience}</span>
                  </div>
                  
                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#06B6D4] transition-colors font-sans mb-1 tracking-wide">
                    {job.title}
                  </h3>
                  
                  <div className="flex items-center gap-2 text-[10px] font-mono text-neutral-500 uppercase tracking-widest mb-4">
                    <span className="text-[#06B6D4]/80">{job.type}</span>
                    <span>•</span>
                    <span>{job.location} ({job.mode})</span>
                  </div>
                  
                  <p className="text-xs text-neutral-400 leading-relaxed font-sans line-clamp-4">
                    {job.desc}
                  </p>
                </div>

                <div className="mt-8">
                  <button
                    onClick={() => handleApplicationPlaceholder(job.title)}
                    className="w-full py-3 rounded-xl bg-neutral-900 text-neutral-300 border border-neutral-850 group-hover:border-[#06B6D4]/30 group-hover:bg-[#06B6D4] group-hover:text-black font-mono font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-sm group-hover:shadow-[0_0_20px_rgba(6,182,212,0.2)]"
                  >
                    Initialize Application
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 4: LINEAR HIRING PROCESS TUNNEL */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 border-t border-neutral-900/60">
          <div className="max-w-3xl mb-12">
            <p className="text-xs font-mono uppercase tracking-widest text-[#06B6D4] mb-3">Candidate Runbook</p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-sans">Our Technical Evaluation Track</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {hiringProcess.map((proc, pIdx) => (
              <div key={pIdx} className="p-5 rounded-xl border border-neutral-900/60 bg-neutral-950/10 hover:border-neutral-800 transition-colors duration-300">
                <h3 className="text-sm font-bold text-white font-mono mb-2 tracking-wide text-[#06B6D4]">
                  {proc.phase}
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed font-sans">{proc.info}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 5: INSTITUTIONAL BENEFITS DIRECTORY */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 border-t border-neutral-900/60">
          <div className="bg-neutral-950 rounded-2xl border border-neutral-900 p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4">
              <span className="text-xs font-mono text-[#06B6D4] uppercase tracking-widest block mb-2">// Structural Support</span>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white font-sans mb-3">Enterprise Perks & Endowments</h3>
              <p className="text-xs text-neutral-400 leading-relaxed font-sans">
                We safeguard operational capabilities by providing absolute environmental support, reducing fatigue vectors, and keeping your development setups optimized.
              </p>
            </div>
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {corporateBenefits.map((ben, bIdx) => (
                <div key={bIdx} className="p-4 rounded-xl bg-[#050505] border border-neutral-900 hover:border-neutral-800 transition-colors">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#06B6D4] mb-1.5">{ben.category}</h4>
                  <p className="text-xs text-neutral-400 leading-relaxed font-sans">{ben.benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 6: TARGETED RECRUITMENT FAQS */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 border-t border-neutral-900/60">
          <div className="max-w-3xl mb-12">
            <p className="text-xs font-mono uppercase tracking-widest text-[#06B6D4] mb-3">Talent Evaluation Guide</p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-sans">Candidate FAQ Clearance</h2>
          </div>
          <div className="space-y-4 max-w-4xl">
            {careerFaqs.map((faq, idx) => (
              <div 
                key={idx} 
                className="rounded-xl border border-neutral-900 bg-neutral-950/40 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 font-sans text-sm sm:text-base font-bold text-neutral-200 hover:text-white transition-colors focus:outline-none"
                >
                  <span>{faq.q}</span>
                  <span className="text-[#06B6D4] font-mono text-xl transform transition-transform duration-200">
                    {activeFaq === idx ? '−' : '+'}
                  </span>
                </button>
                {activeFaq === idx && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-neutral-400 leading-relaxed font-sans border-t border-neutral-900/40 mt-1 bg-neutral-950/20">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 7: FINAL CALL TO ACTION MODULE */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 sm:py-24 border-t border-neutral-900/60">
          <div className="p-8 sm:p-14 rounded-3xl border border-neutral-900 bg-gradient-to-br from-neutral-950 via-neutral-950 to-neutral-900/30 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/[0.015] blur-[120px] pointer-events-none rounded-full" />
            
            <div className="max-w-2xl">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-3 font-sans">
                Don't Find an Exact Structural Match For Your Skillsets?
              </h2>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-sans">
                We consistently monitor for elite engineering operators, product managers, and UI/UX custom framework specialists. Initiate an open spec application track directly with our technical leads.
              </p>
            </div>

            <div className="flex-shrink-0 w-full sm:w-auto">
              <button
                onClick={() => handleApplicationPlaceholder("Open Specification Alignment")}
                className="w-full sm:w-auto bg-neutral-100 hover:bg-[#06B6D4] text-black px-8 py-4 rounded-full text-xs font-bold font-mono uppercase tracking-widest transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] whitespace-nowrap transform hover:-translate-y-0.5"
              >
                Submit Open Specification Profile
              </button>
            </div>
          </div>
        </section>

      </div>

      {/* CUSTOM PREMIUM RECRUITMENT MODAL DIALOG INTEGRATION */}
      {activeApplicationModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-x-hidden overflow-y-auto">
          {/* Backdrop blur overlay layer */}
          <div 
            className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-300"
            onClick={handleModalClose}
          />
          
          {/* Modal surface architecture container */}
          <div className="relative w-full max-w-md transform rounded-2xl border border-neutral-800 bg-neutral-950 p-6 shadow-2xl transition-all duration-300 z-10 animate-in fade-in zoom-in-95">
            {/* Holographic accent lighting inside modal */}
            <div className="absolute -top-12 -left-12 w-40 h-40 bg-[#06B6D4]/[0.05] blur-3xl pointer-events-none rounded-full" />
            
            {/* Header frame */}
            <div className="flex items-start justify-between gap-4 mb-6">
              <div>
                <span className="inline-flex items-center px-2 py-0.5 rounded bg-[#06B6D4]/10 border border-[#06B6D4]/20 text-[#06B6D4] text-[10px] font-mono uppercase tracking-widest mb-1.5">
                  System API Terminal Connected
                </span>
                <h3 className="text-lg font-bold text-white tracking-wide font-sans">
                  {isSubmitted ? "Pipeline Connection Complete" : "Pipeline Initialization"}
                </h3>
              </div>
              <button 
                onClick={handleModalClose}
                className="text-neutral-500 hover:text-neutral-300 p-1 font-mono text-sm transition-colors focus:outline-none"
              >
                [ESC]
              </button>
            </div>

            {/* Dynamic UI Terminal Screen Matrix (No alerts) */}
            {!isSubmitted ? (
              <>
                <div className="bg-[#050505] border border-neutral-900 rounded-xl p-4 font-mono text-xs space-y-3 mb-6 text-neutral-300">
                  <div className="flex items-start gap-2">
                    <span className="text-[#06B6D4] select-none">&gt;</span>
                    <p className="leading-relaxed">Initializing OnyxStack Application Terminal Pipeline Node...</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[#06B6D4] select-none">&gt;</span>
                    <p className="leading-relaxed">
                      Target Position: <span className="text-white font-bold">{activeApplicationModal}</span>
                    </p>
                  </div>
                  <div className="flex items-start gap-2 pt-2 border-t border-neutral-900/60 text-cyan-400">
                    <span className="select-none">✓</span>
                    <p className="font-bold">[Recruitment API Tunnel Linked Successfully]</p>
                  </div>
                </div>

                <div className="flex items-center justify-end gap-3">
                  <button
                    onClick={handleModalClose}
                    className="px-5 py-2.5 rounded-xl border border-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-900 text-xs font-mono font-bold uppercase tracking-wider transition-all duration-200"
                  >
                    Cancel Node
                  </button>
                  <button
                    onClick={() => setIsSubmitted(true)}
                    className="px-5 py-2.5 rounded-xl bg-white hover:bg-[#06B6D4] text-black text-xs font-mono font-bold uppercase tracking-wider transition-all duration-200 shadow-[0_0_25px_rgba(6,182,212,0.15)] hover:shadow-[0_0_25px_rgba(6,182,212,0.35)]"
                  >
                    Proceed to Intake
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="bg-[#050505] border border-neutral-900 rounded-xl p-5 font-mono text-xs space-y-4 mb-6 text-neutral-300 text-center">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto text-base">
                    ✓
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1 font-sans text-sm">Intake Pipeline Activated</h4>
                    <p className="text-[11px] text-neutral-400 leading-relaxed">
                      Secure connection handshake for <span className="text-white font-semibold">"{activeApplicationModal}"</span> established successfully.
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <button
                    onClick={handleModalClose}
                    className="w-full py-2.5 rounded-xl border border-neutral-800 text-neutral-300 hover:text-white bg-neutral-900/50 text-xs font-mono font-bold uppercase tracking-wider transition-all duration-200"
                  >
                    Close Terminal Node
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* CORE GLOBAL FOOTER COUPLING */}
      <Footer siteConfig={siteConfig} />

    </div>
  );
}
