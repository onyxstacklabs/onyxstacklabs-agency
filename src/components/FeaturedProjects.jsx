import React, { useState, useEffect, useRef, useCallback } from 'react';
import { 
  ArrowUpRight, 
  X, 
  Cpu, 
  Layers, 
  Zap, 
  ShieldCheck, 
  Database, 
  CheckCircle2, 
  LineChart, 
  Users, 
  QrCode, 
  Lock, 
  Terminal, 
  Workflow, 
  Sparkles, 
  Activity, 
  FileSpreadsheet, 
  Wallet,
  Expand,
  Maximize2
} from 'lucide-react';

export default function FeaturedProjects() {
  const [activeProject, setActiveProject] = useState(null);
  const modalRef = useRef(null);
  const triggerRef = useRef(null);

  const corporateProjects = [
    {
      name: "OnyxStack Tailors",
      desc: "Next-generation software module utilizing artificial intelligence models to parse handwritten data streams into relational database layers.",
      tags: ["AI", "Gemini", "React", "Node.js", "Tailwind CSS"],
      status: "Live",
      liveUrl: "https://onyxstacklabs.com", 
      icon: Sparkles,
      image: "", 
      caseStudy: {
        overview: "A specialized AI-powered business optimization system engineered to transform manual, handwritten fashion measurements and order streams into structured digital database layers with zero clerical intervention.",
        businessProblem: "Traditional bespoke tailoring operations heavily rely on manual ledger books and physical tags. Handwritten notes cause critical overheads, measurement tracking errors, and extreme loss of searchable historical customer data records.",
        solution: "Deployed a customized multi-modal processing module that ingests images of handwritten paper chits, isolates numeric values via domain-trained intelligence models, and auto-populates localized CRM dashboards.",
        aiFeatures: [
          "Handwriting OCR parsing via multi-modal AI prompt engineering.",
          "Automatic tokenization of custom tailoring terminology (e.g., length, chest, shoulder, cuffs).",
          "Anomalous measurement detection flag using historical variance profiles."
        ],
        customerManagement: "Centralized client profiling featuring historical metric analytics, custom preference tracking variables, and multi-tier interaction logs.",
        measurements: "Dynamic configuration layout mapping complex geometric body structural vectors. Supports historical record revision comparison grids.",
        orders: "Real-time task state workflow handling order booking, inventory materials allocation, tailors routing matrices, and deadline alerts.",
        architecture: "React functional client application layer communicating over a secured TLS gateway with a decoupled Node.js computing core backed by real-time NoSQL document nodes.",
        businessBenefits: "Reduces processing time from 12 minutes down to 4 seconds per intake slip. Reclaims 99.8% of manual typographical discrepancies and improves retention rates by offering programmatic digital metrics tracking.",
        deployment: "Containerized deployment orchestrations managing horizontal auto-scaling nodes behind optimized server reverse-proxies.",
        scalability: "Engineered with localized context payload batch processing pipelines capable of executing up to 10,000 asynchronous concurrent image structural extractions.",
        futureRoadmap: "Integrating fully immersive camera-based body scanning technology using standard WebRTC video stream processing matrix layers."
      }
    },
    {
      name: "OnyxStack School ERP",
      desc: "A multi-tenant institutional framework managing enterprise logistics, automated fee structures, and administrative records in real time.",
      tags: ["React", "Firebase", "ERP", "Tailwind CSS", "Security"],
      status: "Live",
      liveUrl: "https://onyxstacklabs.com",
      icon: Layers,
      image: "",
      caseStudy: {
        erp: "A high-performance cloud enterprise resource planning ecosystem engineered exclusively for multi-campus institutional logistics management.",
        students: "Complete academic lifecycle node from intake tracking, custom transcript compilation matrices, to active demographic databases.",
        attendance: "Automated real-time attendance validation engine utilizing localized hardware integrations and biometric tracking flags.",
        teachers: "Comprehensive payload profiles monitoring payroll algorithms, resource scheduling, substitution routing matrix grids, and performance monitoring indices.",
        fees: "Automated billing infrastructure layer processing multi-tiered fee templates, fine distribution systems, and real-time digital bank statement reconciliation hooks.",
        reports: "Granular administrative report builder mapping institutional health metrics through exportable spreadsheet layouts and modern visualization nodes.",
        realtimeDatabase: "Asynchronous distributed pub-sub subscription framework allowing multi-tenant dashboard instances to update within microsecond windows under heavy client strain.",
        security: "Enforced structural granular Row-Level Security (RLS) policies layered beneath 256-bit data encryption at rest and advanced token-based route authorization protocols."
      }
    },
    {
      name: "GatePass Security",
      desc: "Dual-camera infrastructure deployment integrating automated QR-code access verification pipelines with minimal platform latency.",
      tags: ["React", "QR System", "Firebase", "Security"],
      status: "Live",
      liveUrl: "https://onyxstacklabs.com",
      icon: QrCode,
      image: "",
      caseStudy: {
        visitorManagement: "An uncompromised, mission-critical authentication checkpoint engine designed to regulate real-time high-throughput commercial facility traffic.",
        qrVerification: "Instant decryption pipeline extracting custom temporal cryptography keys embedded inside vector QR matrix arrays with sub-50ms verification intervals.",
        authentication: "Multi-factor cryptographic identity matching enforcing unique multi-step user tokens and hardware-bound terminal authorization keys.",
        logs: "Immutable stream storage recording all terminal ingress and egress operations with deep chronological meta-tag profiles.",
        realtimeSecurity: "Asynchronous push framework routing automated operational security warnings and emergency lockdown overrides across active system components instantly."
      }
    },
    {
      name: "Lottery Platform",
      desc: "High-throughput deterministic allocation platform handling real-time heavy user request interactions seamlessly under pressure.",
      tags: ["Realtime Database", "React", "Cloud Architecture"],
      status: "Live",
      liveUrl: "https://onyxstacklabs.com",
      icon: Cpu,
      image: "",
      caseStudy: {
        realtimeDatabase: "State-synchronized cluster engine optimized to capture, validate, and index hundreds of thousands of entries per second with zero locking overhead.",
        winnerEngine: "Fully verified deterministic randomization mechanics processing participant pools securely using audited linear cryptographic seed distribution algorithms.",
        cloudArchitecture: "Highly resilient serverless micro-routing mesh designed with container pools that distribute incoming dynamic packet payloads across geo-redundant data silos.",
        scalability: "Proven architectural scalability thresholds managing massive spike events effortlessly, maintaining complete UI frame-rate integrity and transaction processing pipelines."
      }
    },
    {
      name: "Cricket Scoring",
      desc: "An ultra-responsive scoring topology built to process live microsecond statistics layout updates and bracket calculations.",
      tags: ["React", "Live Score", "Analytics", "AI Integration"],
      status: "Coming Soon",
      liveUrl: null,
      icon: Activity,
      image: "",
      caseStudy: {
        realtimeScores: "Sub-millisecond data synchronization pathways updating running player counts, historical vector data tables, and running point metric logs simultaneously.",
        statistics: "Complex analytic framework running instantaneous calculations on dynamic performance variations, historical tracking matrices, and continuous run-rate curves.",
        analytics: "Advanced predictive statistical models analyzing live match conditions to forecast outcome metrics, structural shifting trends, and player trajectory paths.",
        futureAiIntegration: "Developing customized deep-learning model hooks to evaluate contextual live stream data feeds, optimizing predictive run estimations in real time."
      }
    },
    {
      name: "Mudra Platform",
      desc: "High-fidelity modern dashboard simulator monitoring enterprise transactional ledgers and automated analytical frameworks.",
      tags: ["Finance", "Dashboard", "Security", "Analytics"],
      status: "Coming Soon",
      liveUrl: null,
      icon: Wallet,
      image: "",
      caseStudy: {
        financeDashboard: "An elegant, premium banking-grade operations dashboard visualizer built with multi-layered layout arrays tracking dynamic monetary capital allocations.",
        reporting: "Automated continuous synthesis systems compiling raw operational ledger files into clean, fully accessible performance reporting records.",
        transactions: "High-fidelity immutable data models structured to track ledger history records with absolute mathematical precision across multiple currency systems.",
        security: "Advanced hardware-based cryptographic access schemas coupled with deep application-level firewalls to safeguard highly sensitive data streams.",
        analytics: "Predictive asset velocity tracing tools providing automated algorithmic risk profiling matrices and asset optimization parameters."
      }
    }
  ];

  const openModal = (project, index) => {
    triggerRef.current = document.getElementById(`project-trigger-${index}`);
    setActiveProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = useCallback(() => {
    setActiveProject(null);
    document.body.style.overflow = '';
    if (triggerRef.current) {
      triggerRef.current.focus();
    }
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && activeProject) {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeProject, closeModal]);

  useEffect(() => {
    if (activeProject && modalRef.current) {
      const focusableElements = modalRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (focusableElements.length > 0) {
        focusableElements[0].focus();
      }
    }
  }, [activeProject]);

  return (
    <section 
      className="relative w-full py-20 lg:py-28 bg-[#000000] overflow-hidden select-none"
      aria-labelledby="featured-heading"
    >
      {/* Ambient Micro-Glow Layer Nodes */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#00f2fe]/5 blur-[130px] rounded-full pointer-events-none mix-blend-screen" aria-hidden="true" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-[#4facfe]/5 blur-[130px] rounded-full pointer-events-none mix-blend-screen" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header Content Node */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16 max-w-3xl mx-auto">
          
          {/* Accent Upper Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900/90 border border-neutral-800 text-[10px] font-bold tracking-widest text-[#00f2fe] uppercase backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00f2fe]" aria-hidden="true" />
            Featured Work
          </div>

          {/* Primary Text Anchor */}
          <h2 
            id="featured-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-white"
          >
            Projects That Solve{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00f2fe] via-[#4facfe] to-neutral-400">
              Real Business Problems
            </span>
          </h2>

          {/* Descriptive Content Paragraph */}
          <p className="text-base sm:text-lg text-neutral-400 font-light leading-relaxed">
            OnyxStack Labs architectures and engineers scalable enterprise software engines, custom AI automation grids, 
            centralized ERP management layers, high-adoption mobile software, and secure web application frameworks.
          </p>
        </div>

        {/* 6-Column Responsive Project Grid Network */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full"
          role="region"
          aria-label="Enterprise software product portfolio grid"
        >
          {corporateProjects.map((project, idx) => {
            const isLive = project.status === "Live";
            const ProjectIcon = project.icon;
            
            return (
              <div
                key={idx}
                className="group relative flex flex-col justify-between p-6 rounded-2xl bg-neutral-950/40 border border-neutral-900/80 backdrop-blur-md transition-all duration-300 ease-out outline-none hover:-translate-y-2 hover:bg-neutral-900/10 hover:border-neutral-800/80 hover:shadow-[0_12px_40px_rgba(0,0,0,0.5)] cursor-default"
              >
                {/* Micro Ambient Radial Background Glow */}
                <div 
                  className="absolute inset-0 rounded-2xl bg-[radial-gradient(ellipse_at_bottom_right,rgba(0,242,254,0.03),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" 
                  aria-hidden="true" 
                />

                {/* Card Header Content */}
                <div>
                  <div className="flex items-start justify-between gap-4 mb-5">
                    {/* Icon and Name Container */}
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center p-2 rounded-xl bg-neutral-900/80 border border-neutral-800 text-neutral-400 group-hover:text-[#00f2fe] group-hover:border-[#00f2fe]/30 transition-all duration-300">
                        <ProjectIcon className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg font-bold text-neutral-100 group-hover:text-white transition-colors duration-200">
                        {project.name}
                      </h3>
                    </div>

                    {/* Status Operational Indicator */}
                    <span 
                      className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                        isLive 
                          ? 'bg-[#00f2fe]/10 text-[#00f2fe] border border-[#00f2fe]/20 shadow-[0_0_10px_rgba(0,242,254,0.05)]' 
                          : 'bg-neutral-900 text-neutral-500 border border-neutral-800'
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>

                  {/* Elegant Dynamic Image Placeholder */}
                  <div className="relative w-full h-36 mb-5 rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-950 border border-neutral-900 flex items-center justify-center overflow-hidden group-hover:border-neutral-800 transition-colors duration-300">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:16px_16px]" />
                    <ProjectIcon className="w-10 h-10 text-neutral-800 group-hover:text-neutral-700 group-hover:scale-110 transition-all duration-300" />
                    <div className="absolute bottom-2 right-2 text-[9px] text-neutral-600 tracking-widest font-mono uppercase">
                      SYS_PRV_ENG
                    </div>
                  </div>

                  {/* Structural Business Description */}
                  <p className="text-xs text-neutral-400 leading-relaxed font-light mb-6 group-hover:text-neutral-300 transition-colors duration-200">
                    {project.desc}
                  </p>
                </div>

                {/* Lower Action & Tag Node Layout */}
                <div>
                  {/* Technology Badges Segment */}
                  <div className="flex flex-wrap gap-1.5 mb-6" aria-label="Used tech stack">
                    {project.tags.map((tag, tIdx) => (
                      <span 
                        key={tIdx} 
                        className="text-[10px] font-medium px-2 py-0.5 bg-neutral-900/60 text-neutral-400 rounded border border-neutral-800/60 hover:border-neutral-700 hover:text-white transition-colors duration-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Dynamic Action Trigger Button */}
                  <button 
                    id={`project-trigger-${idx}`}
                    type="button"
                    onClick={() => openModal(project, idx)}
                    className="w-full py-2.5 px-4 rounded-lg bg-neutral-900 border border-neutral-800 text-xs font-semibold text-neutral-300 transition-all duration-300 hover:bg-gradient-to-r hover:from-[#00f2fe] hover:to-[#4facfe] hover:text-black hover:border-transparent hover:shadow-[0_4px_15px_rgba(0,242,254,0.15)] focus:outline-none focus:ring-2 focus:ring-[#00f2fe]/40"
                    aria-label={`Open interactive architectural case study for ${project.name}`}
                  >
                    View Details
                  </button>
                </div>

                {/* Outer Ring Border Glow Gradient */}
                <div 
                  className="absolute -inset-[1px] rounded-2xl bg-gradient-to-tr from-[#00f2fe]/10 via-transparent to-[#4facfe]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none blur-xs z-[-1]" 
                  aria-hidden="true" 
                />
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Conversion Node Linkage */}
        <div className="mt-16 text-center border-t border-neutral-900 pt-8 max-w-xl mx-auto space-y-2">
          <p className="text-sm font-bold text-white tracking-tight">
            Want a custom software solution?
          </p>
          <p className="text-xs sm:text-sm font-medium tracking-wide text-neutral-500 uppercase">
            Let's build your next product with{' '}
            <span className="text-neutral-300 font-semibold tracking-normal normal-case">
              enterprise-grade technologies.
            </span>
          </p>
        </div>

      </div>

      {/* Premium Glassmorphism Case Study Modal System */}
      {activeProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/80 backdrop-blur-xl transition-all duration-300 animate-fadeIn"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-heading"
          onClick={closeModal}
        >
          <div 
            ref={modalRef}
            className="relative w-full max-w-4xl h-[85vh] md:h-[80vh] bg-neutral-950/90 border border-neutral-800 rounded-2xl overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.8)] flex flex-col animate-slideUp"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Ambient Glow Overlay Lines */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#00f2fe]/30 to-transparent pointer-events-none" />

            {/* Sticky Header Node */}
            <div className="p-6 border-b border-neutral-900 flex items-center justify-between bg-neutral-950/80 backdrop-blur-md z-10">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-neutral-900 text-[#00f2fe] border border-neutral-800">
                  {React.createElement(activeProject.icon, { className: "w-5 h-5" })}
                </div>
                <div>
                  <h3 id="modal-heading" className="text-xl font-black tracking-tight text-white">
                    {activeProject.name}
                  </h3>
                  <p className="text-[11px] text-neutral-500 uppercase tracking-widest font-mono">Architectural Case Study</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                {/* Dynamic Demo External Action */}
                {activeProject.status === "Live" ? (
                  <a
                    href={activeProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#00f2fe] text-black text-xs font-bold hover:bg-[#4facfe] hover:shadow-[0_0_15px_rgba(0,242,254,0.3)] transition-all duration-200"
                    aria-label={`Visit live deployment site for ${activeProject.name}`}
                  >
                    Visit Live Demo
                    <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
                  </a>
                ) : (
                  <button
                    disabled
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-600 text-xs font-semibold cursor-not-allowed"
                    aria-label="Live preview unavailable for coming soon system modules"
                  >
                    Coming Soon
                  </button>
                )}

                {/* Dismiss Trigger */}
                <button
                  type="button"
                  onClick={closeModal}
                  className="p-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700 transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-[#00f2fe]"
                  aria-label="Close case study panel"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Scrollable Architectural Specifications Body */}
            <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-8 bg-gradient-to-b from-neutral-950 to-[#030303] custom-scrollbar">
              
              {/* Tech Stack Horizontal Track */}
              <div className="space-y-2">
                <h4 className="text-[10px] font-bold tracking-widest text-neutral-500 uppercase font-mono flex items-center gap-1.5">
                  <Terminal className="w-3 h-3 text-[#00f2fe]" /> Core Integrated Stack Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeProject.tags.map((tag, tIdx) => (
                    <span 
                      key={tIdx}
                      className="px-2.5 py-1 text-xs rounded bg-neutral-900/80 text-neutral-300 border border-neutral-800/80 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Dynamic Structural Grid Mapping Content Properties conditionally based on standard configuration requests */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                
                {/* Render Configuration Parameters for Tailors Project */}
                {activeProject.caseStudy.overview && (
                  <div className="p-5 rounded-xl bg-neutral-900/30 border border-neutral-900 backdrop-blur-sm space-y-2 md:col-span-2">
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                      <div className="w-1 h-3 rounded-full bg-[#00f2fe]" /> Project Overview
                    </h4>
                    <p className="text-xs text-neutral-400 leading-relaxed font-light">{activeProject.caseStudy.overview}</p>
                  </div>
                )}

                {activeProject.caseStudy.businessProblem && (
                  <div className="p-5 rounded-xl bg-neutral-900/30 border border-neutral-900 space-y-2">
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                      <div className="w-1 h-3 rounded-full bg-red-500" /> Business Problem
                    </h4>
                    <p className="text-xs text-neutral-400 leading-relaxed font-light">{activeProject.caseStudy.businessProblem}</p>
                  </div>
                )}

                {activeProject.caseStudy.solution && (
                  <div className="p-5 rounded-xl bg-neutral-900/30 border border-neutral-900 space-y-2">
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                      <div className="w-1 h-3 rounded-full bg-green-500" /> Engineered Solution
                    </h4>
                    <p className="text-xs text-neutral-400 leading-relaxed font-light">{activeProject.caseStudy.solution}</p>
                  </div>
                )}

                {activeProject.caseStudy.aiFeatures && (
                  <div className="p-5 rounded-xl bg-neutral-900/30 border border-neutral-900 space-y-3 md:col-span-2">
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                      <div className="w-1 h-3 rounded-full bg-[#00f2fe]" /> Core Intelligent Machine Capabilities
                    </h4>
                    <ul className="space-y-2">
                      {activeProject.caseStudy.aiFeatures.map((feat, fidx) => (
                        <li key={fidx} className="flex items-start gap-2.5 text-xs text-neutral-400 leading-relaxed font-light">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#00f2fe] mt-0.5 shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {activeProject.caseStudy.customerManagement && (
                  <div className="p-5 rounded-xl bg-neutral-900/30 border border-neutral-900 space-y-2">
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                      <Users className="w-3.5 h-3.5 text-[#00f2fe]" /> Client Logistical Profiles
                    </h4>
                    <p className="text-xs text-neutral-400 leading-relaxed font-light">{activeProject.caseStudy.customerManagement}</p>
                  </div>
                )}

                {activeProject.caseStudy.measurements && (
                  <div className="p-5 rounded-xl bg-neutral-900/30 border border-neutral-900 space-y-2">
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                      <Maximize2 className="w-3.5 h-3.5 text-[#00f2fe]" /> Geometric Vector Calculations
                    </h4>
                    <p className="text-xs text-neutral-400 leading-relaxed font-light">{activeProject.caseStudy.measurements}</p>
                  </div>
                )}

                {activeProject.caseStudy.orders && (
                  <div className="p-5 rounded-xl bg-neutral-900/30 border border-neutral-900 space-y-2">
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                      <Workflow className="w-3.5 h-3.5 text-[#00f2fe]" /> Task Orchestration Grid
                    </h4>
                    <p className="text-xs text-neutral-400 leading-relaxed font-light">{activeProject.caseStudy.orders}</p>
                  </div>
                )}

                {activeProject.caseStudy.architecture && (
                  <div className="p-5 rounded-xl bg-neutral-900/30 border border-neutral-900 space-y-2">
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                      <Database className="w-3.5 h-3.5 text-[#00f2fe]" /> Cloud Infrastructure Layer
                    </h4>
                    <p className="text-xs text-neutral-400 leading-relaxed font-light">{activeProject.caseStudy.architecture}</p>
                  </div>
                )}

                {activeProject.caseStudy.businessBenefits && (
                  <div className="p-5 rounded-xl bg-neutral-900/30 border border-neutral-900 space-y-2 md:col-span-2">
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                      <LineChart className="w-3.5 h-3.5 text-green-400" /> Core Business Return Matrix
                    </h4>
                    <p className="text-xs text-neutral-400 leading-relaxed font-light">{activeProject.caseStudy.businessBenefits}</p>
                  </div>
                )}

                {activeProject.caseStudy.deployment && (
                  <div className="p-5 rounded-xl bg-neutral-900/30 border border-neutral-900 space-y-2">
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                      <Zap className="w-3.5 h-3.5 text-[#00f2fe]" /> Runtime Node Provisioning
                    </h4>
                    <p className="text-xs text-neutral-400 leading-relaxed font-light">{activeProject.caseStudy.deployment}</p>
                  </div>
                )}

                {activeProject.caseStudy.scalability && (
                  <div className="p-5 rounded-xl bg-neutral-900/30 border border-neutral-900 space-y-2">
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                      <Cpu className="w-3.5 h-3.5 text-[#00f2fe]" /> Dynamic Load Scalability
                    </h4>
                    <p className="text-xs text-neutral-400 leading-relaxed font-light">{activeProject.caseStudy.scalability}</p>
                  </div>
                )}

                {activeProject.caseStudy.futureRoadmap && (
                  <div className="p-5 rounded-xl bg-neutral-900/30 border border-neutral-900 space-y-2 md:col-span-2">
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                      <Sparkles className="w-3.5 h-3.5 text-[#00f2fe]" /> Engineering Target Horizons
                    </h4>
                    <p className="text-xs text-neutral-400 leading-relaxed font-light">{activeProject.caseStudy.futureRoadmap}</p>
                  </div>
                )}

                {/* Render Configuration Parameters for School ERP Project */}
                {activeProject.caseStudy.erp && (
                  <div className="p-5 rounded-xl bg-neutral-900/30 border border-neutral-900 space-y-2 md:col-span-2">
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                      <Layers className="w-3.5 h-3.5 text-[#00f2fe]" /> Infrastructure System Framework
                    </h4>
                    <p className="text-xs text-neutral-400 leading-relaxed font-light">{activeProject.caseStudy.erp}</p>
                  </div>
                )}

                {activeProject.caseStudy.students && (
                  <div className="p-5 rounded-xl bg-neutral-900/30 border border-neutral-900 space-y-2">
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                      <Users className="w-3.5 h-3.5 text-[#00f2fe]" /> Student Information Pipelines
                    </h4>
                    <p className="text-xs text-neutral-400 leading-relaxed font-light">{activeProject.caseStudy.students}</p>
                  </div>
                )}

                {activeProject.caseStudy.attendance && (
                  <div className="p-5 rounded-xl bg-neutral-900/30 border border-neutral-900 space-y-2">
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                      <Activity className="w-3.5 h-3.5 text-[#00f2fe]" /> Real-time Biometric Ingestion
                    </h4>
                    <p className="text-xs text-neutral-400 leading-relaxed font-light">{activeProject.caseStudy.attendance}</p>
                  </div>
                )}

                {activeProject.caseStudy.teachers && (
                  <div className="p-5 rounded-xl bg-neutral-900/30 border border-neutral-900 space-y-2">
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                      <Cpu className="w-3.5 h-3.5 text-[#00f2fe]" /> Administrative Resource Routing
                    </h4>
                    <p className="text-xs text-neutral-400 leading-relaxed font-light">{activeProject.caseStudy.teachers}</p>
                  </div>
                )}

                {activeProject.caseStudy.fees && (
                  <div className="p-5 rounded-xl bg-neutral-900/30 border border-neutral-900 space-y-2">
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                      <Wallet className="w-3.5 h-3.5 text-green-400" /> Transactional Ledger Modules
                    </h4>
                    <p className="text-xs text-neutral-400 leading-relaxed font-light">{activeProject.caseStudy.fees}</p>
                  </div>
                )}

                {activeProject.caseStudy.reports && (
                  <div className="p-5 rounded-xl bg-neutral-900/30 border border-neutral-900 space-y-2">
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                      <FileSpreadsheet className="w-3.5 h-3.5 text-[#00f2fe]" /> Analytical Synthesis Engines
                    </h4>
                    <p className="text-xs text-neutral-400 leading-relaxed font-light">{activeProject.caseStudy.reports}</p>
                  </div>
                )}

                {activeProject.caseStudy.realtimeDatabase && (
                  <div className="p-5 rounded-xl bg-neutral-900/30 border border-neutral-900 space-y-2">
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                      <Database className="w-3.5 h-3.5 text-[#00f2fe]" /> High-Concurrency Store Nodes
                    </h4>
                    <p className="text-xs text-neutral-400 leading-relaxed font-light">{activeProject.caseStudy.realtimeDatabase}</p>
                  </div>
                )}

                {activeProject.caseStudy.security && (
                  <div className="p-5 rounded-xl bg-neutral-900/30 border border-neutral-900 space-y-2 md:col-span-2">
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                      <ShieldCheck className="w-3.5 h-3.5 text-green-400" /> Security Access Controls
                    </h4>
                    <p className="text-xs text-neutral-400 leading-relaxed font-light">{activeProject.caseStudy.security}</p>
                  </div>
                )}

                {/* Render Configuration Parameters for GatePass Security */}
                {activeProject.caseStudy.visitorManagement && (
                  <div className="p-5 rounded-xl bg-neutral-900/30 border border-neutral-900 space-y-2 md:col-span-2">
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                      <Users className="w-3.5 h-3.5 text-[#00f2fe]" /> Facility Traffic Supervision
                    </h4>
                    <p className="text-xs text-neutral-400 leading-relaxed font-light">{activeProject.caseStudy.visitorManagement}</p>
                  </div>
                )}

                {activeProject.caseStudy.qrVerification && (
                  <div className="p-5 rounded-xl bg-neutral-900/30 border border-neutral-900 space-y-2">
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                      <QrCode className="w-3.5 h-3.5 text-[#00f2fe]" /> Matrix Cryptographic Scanning
                    </h4>
                    <p className="text-xs text-neutral-400 leading-relaxed font-light">{activeProject.caseStudy.qrVerification}</p>
                  </div>
                )}

                {activeProject.caseStudy.authentication && (
                  <div className="p-5 rounded-xl bg-neutral-900/30 border border-neutral-900 space-y-2">
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                      <Lock className="w-3.5 h-3.5 text-green-400" /> Identity Matrix Terminals
                    </h4>
                    <p className="text-xs text-neutral-400 leading-relaxed font-light">{activeProject.caseStudy.authentication}</p>
                  </div>
                )}

                {activeProject.caseStudy.logs && (
                  <div className="p-5 rounded-xl bg-neutral-900/30 border border-neutral-900 space-y-2">
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                      <Terminal className="w-3.5 h-3.5 text-neutral-400" /> Chronological Event Registries
                    </h4>
                    <p className="text-xs text-neutral-400 leading-relaxed font-light">{activeProject.caseStudy.logs}</p>
                  </div>
                )}

                {activeProject.caseStudy.realtimeSecurity && (
                  <div className="p-5 rounded-xl bg-neutral-900/30 border border-neutral-900 space-y-2">
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                      <ShieldCheck className="w-3.5 h-3.5 text-red-500" /> Perimeter Failure Overrides
                    </h4>
                    <p className="text-xs text-neutral-400 leading-relaxed font-light">{activeProject.caseStudy.realtimeSecurity}</p>
                  </div>
                )}

                {/* Render Configuration Parameters for Lottery Platform */}
                {activeProject.caseStudy.winnerEngine && (
                  <div className="p-5 rounded-xl bg-neutral-900/30 border border-neutral-900 space-y-2">
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                      <Cpu className="w-3.5 h-3.5 text-[#00f2fe]" /> Deterministic Seed Selectors
                    </h4>
                    <p className="text-xs text-neutral-400 leading-relaxed font-light">{activeProject.caseStudy.winnerEngine}</p>
                  </div>
                )}

                {activeProject.caseStudy.cloudArchitecture && (
                  <div className="p-5 rounded-xl bg-neutral-900/30 border border-neutral-900 space-y-2">
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                      <Layers className="w-3.5 h-3.5 text-[#00f2fe]" /> Geo-Redundant Cluster Routing
                    </h4>
                    <p className="text-xs text-neutral-400 leading-relaxed font-light">{activeProject.caseStudy.cloudArchitecture}</p>
                  </div>
                )}

                {/* Render Configuration Parameters for Cricket Scoring */}
                {activeProject.caseStudy.realtimeScores && (
                  <div className="p-5 rounded-xl bg-neutral-900/30 border border-neutral-900 space-y-2">
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                      <Activity className="w-3.5 h-3.5 text-[#00f2fe]" /> Microsecond Frame Synchronization
                    </h4>
                    <p className="text-xs text-neutral-400 leading-relaxed font-light">{activeProject.caseStudy.realtimeScores}</p>
                  </div>
                )}

                {activeProject.caseStudy.statistics && (
                  <div className="p-5 rounded-xl bg-neutral-900/30 border border-neutral-900 space-y-2">
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                      <FileSpreadsheet className="w-3.5 h-3.5 text-[#00f2fe]" /> Dynamic Progression Layouts
                    </h4>
                    <p className="text-xs text-neutral-400 leading-relaxed font-light">{activeProject.caseStudy.statistics}</p>
                  </div>
                )}

                {activeProject.caseStudy.analytics && (
                  <div className="p-5 rounded-xl bg-neutral-900/30 border border-neutral-900 space-y-2">
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                      <LineChart className="w-3.5 h-3.5 text-[#00f2fe]" /> Continuous Outcome Processing
                    </h4>
                    <p className="text-xs text-neutral-400 leading-relaxed font-light">{activeProject.caseStudy.analytics}</p>
                  </div>
                )}

                {activeProject.caseStudy.futureAiIntegration && (
                  <div className="p-5 rounded-xl bg-neutral-900/30 border border-neutral-900 space-y-2">
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                      <Sparkles className="w-3.5 h-3.5 text-[#00f2fe]" /> Intended Deep Intelligence Modules
                    </h4>
                    <p className="text-xs text-neutral-400 leading-relaxed font-light">{activeProject.caseStudy.futureAiIntegration}</p>
                  </div>
                )}

                {/* Render Configuration Parameters for Mudra Platform */}
                {activeProject.caseStudy.financeDashboard && (
                  <div className="p-5 rounded-xl bg-neutral-900/30 border border-neutral-900 space-y-2">
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                      <Wallet className="w-3.5 h-3.5 text-[#00f2fe]" /> Premium Ledger Simulators
                    </h4>
                    <p className="text-xs text-neutral-400 leading-relaxed font-light">{activeProject.caseStudy.financeDashboard}</p>
                  </div>
                )}

                {activeProject.caseStudy.reporting && (
                  <div className="p-5 rounded-xl bg-neutral-900/30 border border-neutral-900 space-y-2">
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                      <FileSpreadsheet className="w-3.5 h-3.5 text-[#00f2fe]" /> Automated Continuous Synthesis
                    </h4>
                    <p className="text-xs text-neutral-400 leading-relaxed font-light">{activeProject.caseStudy.reporting}</p>
                  </div>
                )}

                {activeProject.caseStudy.transactions && (
                  <div className="p-5 rounded-xl bg-neutral-900/30 border border-neutral-900 space-y-2">
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                      <Layers className="w-3.5 h-3.5 text-[#00f2fe]" /> Immutable Currency Matrices
                    </h4>
                    <p className="text-xs text-neutral-400 leading-relaxed font-light">{activeProject.caseStudy.transactions}</p>
                  </div>
                )}

              </div>
            </div>

            {/* Sticky Footer Layout Node */}
            <div className="p-4 border-t border-neutral-900 bg-neutral-950 flex items-center justify-between text-[11px] text-neutral-500 font-mono">
              <span>SECURE DATA CORE ENVIRONMENT // ACC_OK</span>
              <span>ONYXSTACK LABS PROPRIETARY SYSTEM</span>
            </div>
          </div>
        </div>
      )}

      {/* Embedded CSS Modifiers for Custom System Animation Modules */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { transform: translateY(16px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-slideUp {
          animation: slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #050505;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #1f1f1f;
          border-radius: 999px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #2e2e2e;
        }
      `}</style>
    </section>
  );
}
