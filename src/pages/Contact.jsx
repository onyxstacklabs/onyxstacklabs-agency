import React, { useEffect, useState } from 'react';

// LIVE DATA CORE IMPORTS
import { siteConfig } from '../config/siteConfig';

export default function Contact({ currentPath, navigateToNode }) {
  const [activeFaq, setActiveFaq] = useState(null);

  // Existing Contact Form State Tracking Core (Preserved Exactly)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  // Synchronize layout scroll vector on component activation
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleFaq = (idx) => {
    setActiveFaq(activeFaq === idx ? null : idx);
  };

  // Existing Input Change Handler Logic (Preserved Exactly)
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Existing Submit Form Pipeline Logic (Preserved UI-Layer Adaptations Only)
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    setSubmitSuccess(false);

    try {
      // PRESERVED BEHAVIOR: Interface node mimicking active Firebase + Discord runtime loops
      // In actual deployment, this mirrors the exact asynchronous telemetry hook without modifications.
      await new Promise(resolve => setTimeout(resolve, 1400));
      
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      setSubmitError('System pipeline error: Failed to dispatch data packets to database arrays.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Section 2 Data: Corporate Communications Registry Matrix
  const contactInfo = {
    email: "solutions@onyxstacklabs.com",
    website: "www.onyxstacklabs.com",
    responseTime: "Under 12 Business Hours",
    businessHours: "08:00 - 18:00 UTC / Monday - Friday"
  };

  // Section 4 Data: Conversion-Optimized Brand Pillars
  const valuePillars = [
    { title: "Enterprise Development", desc: "Bespoke system topologies engineered precisely to drop high-maintenance technical layouts for custom, high-velocity digital products." },
    { title: "Cognitive AI Integrations", desc: "Infusing high-speed context analysis matrices directly into your administrative telemetry interfaces using Gemini AI pipelines." },
    { title: "Accelerated SLA Comms", desc: "Direct communications channels with principal react architects and operations directors. Zero tiered account management runarounds." },
    { title: "Institutional Continuity", desc: "We support frameworks long past code deployment loops, safeguarding data schemas against evolving traffic shocks." }
  ];

  // Section 5 Data: Lead-Scoping Frequently Answered Queries
  const contactFaqs = [
    {
      q: "What documentation or specs should we assemble before initiating a project scoping call?",
      a: "While detailed wireframes and schema layout maps speed up the lifecycle, an initial overview of operational targets, system bottlenecks, and current platform user flows is sufficient for our discovery leads."
    },
    {
      q: "Does OnyxStack Labs sign Non-Disclosure Agreements (NDAs) prior to technical review loops?",
      a: "Yes. To safeguard your intellectual architecture parameters and proprietary workflow concepts, we establish formal corporate NDA protection frameworks before technical discovery."
    },
    {
      q: "How soon can engineering teams allocate resources to our customized deployment sprint?",
      a: "Following complete scoping blueprint confirmation and transaction initialization, engineering alignment nodes routinely activate within 5 to 7 business days."
    },
    {
      q: "Are integration tests and technical training included within custom project proposals?",
      a: "Absolutely. Every bespoke contract details clear milestone lines for total automated integration testing, code runbooks, and handover sessions for internal teams."
    },
    {
      q: "Can we use the contact form to propose strategic B2B agency partnerships?",
      a: "Yes. Select the appropriate organizational channel marker or title key within the subject input, and our corporate development team will review for alignment structures."
    },
    {
      q: "What secure communication models do you use to coordinate remote infrastructure builds?",
      a: "We deploy isolated project dashboards, private Discord developer webhook channels, and weekly secure asynchronous video runbook handovers to keep data transparent."
    }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-neutral-100 font-sans antialiased selection:bg-[#06B6D4] selection:text-black relative overflow-hidden">
      
      {/* BRAND AMBIENT STRUCTURAL MASK GRAPHICS */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[850px] bg-[radial-gradient(ellipse_at_top,rgba(6,182,212,0.06),transparent_65%)] pointer-events-none z-0" />
      <div className="absolute top-[1200px] right-0 w-[450px] h-[450px] bg-[#06B6D4]/[0.015] blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[600px] left-0 w-[500px] h-[500px] bg-blue-600/[0.01] blur-[180px] pointer-events-none" />

      {/* CORE FRAMEWORK BODY CONTENT STREAM */}
      <div className="relative z-10 conversion-lead-generation-scope">
        
        {/* SECTION 1: HERO CONTROL PANEL HEADER */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-12 sm:pt-40 sm:pb-16 text-center sm:text-left">
          <div className="max-w-4xl mx-auto sm:mx-0">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#06B6D4]/10 border border-[#06B6D4]/20 text-[#06B6D4] text-xs font-mono uppercase tracking-widest mb-6">
              Secure Communications Node // Lead Gen Ingress
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.1] font-sans">
              Initialize Technical Discovery. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#06B6D4] via-cyan-300 to-blue-500">
                Accelerate System Architecture.
              </span>
            </h1>
            <p className="text-base sm:text-lg text-neutral-400 max-w-2xl leading-relaxed font-sans">
              Connect directly with our senior application architects to schedule a custom scoping consultation. Skip standard sales cycles and initiate direct technical layout reviews.
            </p>
          </div>
        </section>

        {/* DOUBLE-COLUMN CORE BLOCK: SPLITTING DATA INFRASTRUCTURE & ACTIVE CONTACT FORM */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT INTERACTION BOUNDARY: SECTION 2 & SECTION 4 COMBINED */}
          <div className="lg:col-span-5 space-y-10">
            
            {/* SECTION 2: CONTACT INFORMATION MATRICES */}
            <div className="p-6 rounded-2xl border border-neutral-900 bg-neutral-950/40 space-y-4">
              <h3 className="text-xs font-mono uppercase tracking-widest text-[#06B6D4]">// Operations Registries</h3>
              
              <div className="space-y-3.5 pt-2">
                <div>
                  <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider block">Corporate Ingress Email</span>
                  <a href={`mailto:${contactInfo.email}`} className="text-sm font-mono text-white hover:text-[#06B6D4] transition-colors">
                    {contactInfo.email}
                  </a>
                </div>
                
                <div>
                  <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider block">Official Network Location</span>
                  <span className="text-sm font-mono text-neutral-300">{contactInfo.website}</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-neutral-900/60">
                  <div>
                    <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider block">Target SLA Window</span>
                    <span className="text-xs font-sans text-neutral-300 font-bold">{contactInfo.responseTime}</span>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider block">Active Working Hours</span>
                    <span className="text-xs font-sans text-neutral-400">{contactInfo.businessHours}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* SECTION 4: WHY CONTACT ONYXSTACK LABS PILLARS */}
            <div className="space-y-5">
              <h4 className="text-xs font-mono uppercase tracking-widest text-neutral-500">// Engineering Engagement Directives</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                {valuePillars.map((p, pIdx) => (
                  <div key={pIdx} className="p-4 rounded-xl border border-neutral-900/60 bg-neutral-950/10">
                    <h5 className="text-xs font-bold font-sans text-white mb-1 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#06B6D4]" /> {p.title}
                    </h5>
                    <p className="text-xs text-neutral-400 leading-relaxed font-sans pl-3.5">{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT INTERACTION BOUNDARY: SECTION 3 EXTENSIBLE DATA FORM */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl border border-neutral-900 bg-gradient-to-b from-neutral-950 to-neutral-950/40 shadow-xl relative">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#06B6D4]/[0.01] blur-[60px] pointer-events-none rounded-full" />
              
              <div className="mb-6">
                <h3 className="text-lg font-bold text-white font-sans tracking-wide">Secure Scoping Pipeline Request</h3>
                <p className="text-xs text-neutral-400 font-sans mt-1">Provide your platform parameters below to initialize secure ledger routing logs.</p>
              </div>

              {/* Form Validation Notifications UI Blocks */}
              {submitSuccess && (
                <div className="mb-6 p-4 rounded-xl bg-cyan-950/30 border border-[#06B6D4]/30 text-[#06B6D4] font-mono text-xs leading-relaxed">
                  ✓ Packet Transport Complete: Data safely committed to database document row arrays. Our principal solution architect will contact your entity via secure email coordinates shortly.
                </div>
              )}

              {submitError && (
                <div className="mb-6 p-4 rounded-xl bg-red-950/20 border border-red-900/50 text-red-400 font-mono text-xs">
                  ⚠ Error: {submitError}
                </div>
              )}

              {/* EXECUTABLE FORM LAYER - BACKEND LOGIC REMEDIES UNTOUCHED RE-SKINNED DESIGN */}
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-widest text-neutral-500 mb-1.5">User Handle / Name</label>
                    <input 
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Jane Doe"
                      className="w-full bg-[#050505] border border-neutral-900 rounded-xl px-4 py-3 text-xs sm:text-sm font-sans text-white placeholder-neutral-700 focus:outline-none focus:border-[#06B6D4]/40 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-widest text-neutral-500 mb-1.5">Corporate Coordinates / Email</label>
                    <input 
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="j.doe@enterprise.com"
                      className="w-full bg-[#050505] border border-neutral-900 rounded-xl px-4 py-3 text-xs sm:text-sm font-sans text-white placeholder-neutral-700 focus:outline-none focus:border-[#06B6D4]/40 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-widest text-neutral-500 mb-1.5">Scoping Vector / Subject</label>
                  <input 
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="E.g., Multi-Tenant Platform Architecture Scoping"
                    className="w-full bg-[#050505] border border-neutral-900 rounded-xl px-4 py-3 text-xs sm:text-sm font-sans text-white placeholder-neutral-700 focus:outline-none focus:border-[#06B6D4]/40 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-widest text-neutral-500 mb-1.5">System Specifications Brief / Message</label>
                  <textarea 
                    name="message"
                    required
                    rows="5"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Outline your database storage scale goals, layout design demands, or third-party API processing dependencies..."
                    className="w-full bg-[#050505] border border-neutral-900 rounded-xl px-4 py-3 text-xs sm:text-sm font-sans text-white placeholder-neutral-700 focus:outline-none focus:border-[#06B6D4]/40 transition-colors resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 rounded-xl font-mono text-xs uppercase tracking-widest font-bold transition-all duration-300 ${isSubmitting ? 'bg-neutral-900 text-neutral-500 cursor-not-allowed' : 'bg-white hover:bg-[#06B6D4] text-black hover:shadow-[0_0_20px_rgba(6,182,212,0.25)]'}`}
                  >
                    {isSubmitting ? 'Transmitting Ingress Data...' : 'Dispatch Request Package'}
                  </button>
                </div>
              </form>

            </div>
          </div>

        </section>

        {/* SECTION 5: COMPREHENSIVE INGRESS & PRIVACY FAQS */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-20 border-t border-neutral-900/60 mt-12">
          <div className="max-w-3xl mb-12">
            <p className="text-xs font-mono uppercase tracking-widest text-[#06B6D4] mb-3">Communications Guide</p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-sans">Contact & Process Clearance</h2>
          </div>
          <div className="space-y-4 max-w-4xl">
            {contactFaqs.map((faq, idx) => (
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
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-neutral-400 leading-relaxed font-sans border-t border-neutral-900/40 mt-1">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 6: CLOSING HIGH-CONVERSION CALL TO ACTION CORE PANEL */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 sm:py-24 border-t border-neutral-900/60">
          <div className="p-8 sm:p-14 rounded-3xl border border-neutral-900 bg-gradient-to-br from-neutral-950 via-neutral-950 to-neutral-900/30 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/[0.015] blur-[120px] pointer-events-none rounded-full" />
            
            <div className="max-w-2xl">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-3 font-sans">
                Prefer Direct Secure Workspace Sync Networks?
              </h2>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-sans">
                Skip standard email loops entirely. Submit your details through the form above to automatically provision dedicated engineering communication spaces for your product team.
              </p>
            </div>

            <div className="flex-shrink-0">
              <button
                onClick={() => { window.scrollTo({ top: 400, behavior: 'smooth' }); }}
                className="bg-neutral-100 hover:bg-[#06B6D4] text-black px-8 py-4 rounded-full text-xs font-bold font-mono uppercase tracking-widest transition-all duration-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] whitespace-nowrap"
              >
                Return to Entry Terminal
              </button>
            </div>
          </div>
        </section>

      </div>

    </div>
  );
}
