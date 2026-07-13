import React, { useEffect, useState } from 'react';

// LIVE DATA CORE IMPORTS
import { siteConfig } from '../config/siteConfig';

// MODULAR DETACHED COMPONENT ARCHITECTURE LAYER
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function TermsConditions({ currentPath, navigateToNode }) {
  const [activeTermSection, setActiveTermSection] = useState("acceptance");

  // Synchronize layout scroll vector on component activation
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Structural Navigation Register for Terms & Conditions Mapping
  const complianceIndices = [
    { id: "acceptance", label: "1.0 Acceptance Matrix" },
    { id: "services", label: "2.0 Service Scope & Sprints" },
    { id: "responsibilities", label: "3.0 Client Dependencies" },
    { id: "payments", label: "4.0 Payments & Billing Models" },
    { id: "intellectual", label: "5.0 Intellectual Property Ledger" },
    { id: "confidentiality", label: "6.0 Data Confidentiality Isolation" },
    { id: "liability", label: "7.0 Liability Bounds" },
    { id: "termination", label: "8.0 Agreement Termination Hooks" },
    { id: "governing", label: "9.0 Jurisdictional Governing Law" },
    { id: "changes", label: "10.0 Lifecycle Mutations" },
    { id: "contact", label: "11.0 Official Communications Node" }
  ];

  const handleScrollToTermNode = (id) => {
    setActiveTermSection(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = 120; // Structural offset for sticky navigation header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-neutral-100 font-sans antialiased selection:bg-[#06B6D4] selection:text-black relative overflow-hidden">
      
      {/* BRAND AMBIENT STRUCTURAL MASK GRAPHICS */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-[radial-gradient(ellipse_at_top,rgba(6,182,212,0.04),transparent_60%)] pointer-events-none z-0" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/[0.01] blur-[150px] pointer-events-none" />

      {/* DETACHED NAVIGATION INTERACTION LAYER */}
      <Navbar 
        currentPath={currentPath} 
        activeSection="" 
        navigateToNode={navigateToNode} 
        siteConfig={siteConfig} 
      />

      {/* CORE FRAMEWORK BODY CONTENT STREAM */}
      <div className="relative z-10 master-terms-compliance-scope">
        
        {/* SECTION 1: HERO CONTROL PANEL HEADER */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-12 sm:pt-40 sm:pb-16 border-b border-neutral-900/60">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400 text-[10px] font-mono uppercase tracking-widest mb-6">
              Legal Operations System // Effective Date: July 13, 2026
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-4 font-sans">
              Master Terms of Service & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#06B6D4] to-blue-500">
                Corporate Governance Rules
              </span>
            </h1>
            <p className="text-sm text-neutral-400 max-w-2xl leading-relaxed font-sans">
              These terms constitute the core binding operational framework executed between OnyxStack Labs and our client entities governing all custom react builds, platform consulting, and digital architecture delivery cycles.
            </p>
          </div>
        </section>

        {/* DOUBLE-COLUMN TERMS FRAMEWORK ASSEMBLY */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-12 lg:py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT BOUNDARY: STICKY CONTEXTUAL JUMP-INDEX DESKTOP INDEXER */}
          <aside className="hidden lg:block lg:col-span-3 sticky top-32 space-y-2 border-l border-neutral-900 pl-4">
            <span className="text-[10px] font-mono text-neutral-600 uppercase tracking-wider block mb-4">Agreement Keys</span>
            {complianceIndices.map((sec) => (
              <button
                key={sec.id}
                onClick={() => handleScrollToTermNode(sec.id)}
                className={`block text-left text-xs font-mono tracking-wide py-1.5 transition-colors w-full focus:outline-none ${activeTermSection === sec.id ? 'text-[#06B6D4] font-bold border-l-2 border-[#06B6D4] -ml-[18px] pl-[16px]' : 'text-neutral-500 hover:text-neutral-300'}`}
              >
                {sec.label}
              </button>
            ))}
          </aside>

          {/* RIGHT BOUNDARY: ASYMMETRIC LEGAL SPECIFICATIONS BODY */}
          <div className="lg:col-span-9 max-w-3xl space-y-16 text-neutral-300 font-sans text-sm sm:text-base leading-relaxed">
            
            {/* SECTION 2: ACCEPTANCE OF TERMS */}
            <article id="acceptance" className="scroll-mt-32 space-y-4">
              <h2 className="text-lg font-bold text-white font-sans flex items-center gap-3">
                <span className="font-mono text-xs text-[#06B6D4]">1.0</span> Acceptance Matrix
              </h2>
              <p>
                By accessing our digital interfaces, contracting custom architecture workflows, or initiating communication via our automated database routing nodes, you accept and agree to comply with all provisions contained within this Master Agreement. 
              </p>
              <p>
                If you are acting as an agent for a corporate entity, you affirm that you have the complete legal authority to bind that corporate entity to these active operational parameters. If you do not agree to these rules, you must cease all system operations immediately.
              </p>
            </article>

            {/* SECTION 3: SERVICES */}
            <article id="services" className="scroll-mt-32 space-y-4">
              <h2 className="text-lg font-bold text-white font-sans flex items-center gap-3">
                <span className="font-mono text-xs text-[#06B6D4]">2.0</span> Service Scope & Sprints
              </h2>
              <p>
                OnyxStack Labs delivers premium custom software engineering, cloud system architecture consulting, and machine learning pipeline integrations. 
              </p>
              <p>
                Every engagement requires a custom-signed **Statement of Work (SOW)** or explicit technical specification roadmap detailing distinct execution sprints, deliverables, and resource allocation windows. Any modifications to an initialized SOW require formal engineering scope evaluations.
              </p>
            </article>

            {/* SECTION 4: CLIENT RESPONSIBILITIES */}
            <article id="responsibilities" className="scroll-mt-32 space-y-4">
              <h2 className="text-lg font-bold text-white font-sans flex items-center gap-3">
                <span className="font-mono text-xs text-[#06B6D4]">3.0</span> Client Dependencies
              </h2>
              <p>
                The execution speed of our engineering sprints depends directly on client responsiveness. You agree to provide clear technical access tokens, precise database requirements, design asset variables, and timely approvals necessary for milestone continuation.
              </p>
              <blockquote>
                <p className="p-4 rounded-xl bg-neutral-950 border-l-2 border-amber-500/60 text-xs text-neutral-400 font-mono">
                  // Dependency Warning: OnyxStack Labs is not liable for project lifecycle delays resulting from third-party account configuration gaps, missing credential setups, or internal client-side approval stalls.
                </p>
              </blockquote>
            </article>

            {/* SECTION 5: PAYMENTS & BILLING */}
            <article id="payments" className="scroll-mt-32 space-y-4">
              <h2 className="text-lg font-bold text-white font-sans flex items-center gap-3">
                <span className="font-mono text-xs text-[#06B6D4]">4.0</span> Payments & Billing Models
              </h2>
              <p>
                Client entities agree to compensate OnyxStack Labs under fixed milestone billing configurations or structured multi-week engineering allocations as explicitly detailed within individual contract instruments.
              </p>
              <ul className="space-y-3 pl-5 list-disc text-neutral-400 text-sm">
                <li><strong className="text-neutral-200">Invoicing Operations:</strong> Standard accounts must settle balance logs within 14 calendar days of automated system delivery notifications.</li>
                <li><strong className="text-neutral-200">Late Account Flags:</strong> Overdue records face late assessment charges configured at 1.5% per month or the legal maximum allowed by your home jurisdiction.</li>
                <li><strong className="text-neutral-200">System Interruption:</strong> We reserve the explicit right to pause development servers, halt active staging links, and lock environment branches if accounts fall into severe payment default loops.</li>
              </ul>
            </article>

            {/* SECTION 6: INTELLECTUAL PROPERTY */}
            <article id="intellectual" className="scroll-mt-32 space-y-4">
              <h2 className="text-lg font-bold text-white font-sans flex items-center gap-3">
                <span className="font-mono text-xs text-[#06B6D4]">5.0</span> Intellectual Property Ledger
              </h2>
              <p>
                All proprietary design scripts, React codebases, API route setups, and custom modules created specifically for your product pass entirely to your corporate entity upon complete final settlement of all associated financial accounts.
              </p>
              <p>
                OnyxStack Labs preserves explicit ownership over preexisting engineering scaffolds, reusable component architectures, automated testing scripts, and foundational infrastructure wireframes utilized during production. We grant your company a permanent, royalty-free license to use these embedded core engines.
              </p>
            </article>

            {/* SECTION 7: CONFIDENTIALITY */}
            <article id="confidentiality" className="scroll-mt-32 space-y-4">
              <h2 className="text-lg font-bold text-white font-sans flex items-center gap-3">
                <span className="font-mono text-xs text-[#06B6D4]">6.0</span> Data Confidentiality Isolation
              </h2>
              <p>
                Both parties commit to keeping all system architectures, private key parameters, enterprise roadmaps, financial files, and custom algorithmic strategies confidential. 
              </p>
              <p>
                Confidential information will not be exposed to downstream tracking entities or third-party agencies unless explicitly authorized in writing or demanded by formal legal frameworks or court mandates.
              </p>
            </article>

            {/* SECTION 8: LIMITATION OF LIABILITY */}
            <article id="liability" className="scroll-mt-32 space-y-4">
              <h2 className="text-lg font-bold text-white font-sans flex items-center gap-3">
                <span className="font-mono text-xs text-[#06B6D4]">7.0</span> Liability Bounds
              </h2>
              <p>
                OnyxStack Labs delivers application codebases on an "As-Is" and "As-Available" functional standard. We provide no direct warranties that application execution maps will experience absolute zero runtime interruptions.
              </p>
              <p>
                To the maximum extent permitted by applicable international law, OnyxStack Labs will not be held liable for indirect, incidental, special, or consequential damages. This includes corporate revenue losses, data store deletions, server security breaches, or cloud hosting cost anomalies. Our total liability cap is strictly limited to the absolute financial amount paid by the client to us under the active contract loop.
              </p>
            </article>

            {/* SECTION 9: TERMINATION */}
            <article id="termination" className="scroll-mt-32 space-y-4">
              <h2 className="text-lg font-bold text-white font-sans flex items-center gap-3">
                <span className="font-mono text-xs text-[#06B6D4]">8.0</span> Agreement Termination Hooks
              </h2>
              <p>
                Either party may terminate active service contracts with a 30-day formal written notice if the counterparty commits a material breach of terms and fails to correct the violation within that specific period.
              </p>
              <p>
                Upon contract termination, the client agrees to settle outstanding payments for all verified development hours and completed milestones delivered up to the official termination date.
              </p>
            </article>

            {/* SECTION 10: GOVERNING LAW */}
            <article id="governing" className="scroll-mt-32 space-y-4">
              <h2 className="text-lg font-bold text-white font-sans flex items-center gap-3">
                <span className="font-mono text-xs text-[#06B6D4]">9.0</span> Jurisdictional Governing Law
              </h2>
              <p>
                These terms, along with all associated development agreements, are governed by and construed in strict accordance with the laws of Delaware, United States, without regard to its conflict of law principles.
              </p>
              <p>
                Any formal legal actions or arbitration procedures arising from these system terms must be resolved exclusively within the state or federal courts located in the designated state of jurisdiction.
              </p>
            </article>

            {/* SECTION 11: CHANGES TO TERMS */}
            <article id="changes" className="scroll-mt-32 space-y-4">
              <h2 className="text-lg font-bold text-white font-sans flex items-center gap-3">
                <span className="font-mono text-xs text-[#06B6D4]">10.0</span> Lifecycle Mutations
              </h2>
              <p>
                We reserve the right to mutate or adjust these legal terms at any moment. Modified frameworks take effect immediately upon updating this component view. 
              </p>
              <p>
                Your continued use of our web services, form elements, or custom code repositories after updates are published constitutes full acceptance of the updated terms.
              </p>
            </article>

            {/* SECTION 12: CONTACT INFORMATION */}
            <article id="contact" className="scroll-mt-32 space-y-4">
              <h2 className="text-lg font-bold text-white font-sans flex items-center gap-3">
                <span className="font-mono text-xs text-[#06B6D4]">11.0</span> Official Communications Node
              </h2>
              <p>
                If your legal department or risk analysis team requires clarifications or revisions regarding this Master Agreement, please contact our contracts office directly:
              </p>
              <div className="p-5 rounded-xl border border-neutral-900 bg-neutral-950/60 font-mono text-xs space-y-1.5 max-w-md">
                <div className="text-white font-bold">OnyxStack Labs LLC</div>
                <div className="text-neutral-400">Attn: Engineering Contracts & Corporate Governance</div>
                <div className="text-neutral-400">Official Ingress: <a href="mailto:contracts@onyxstacklabs.com" className="text-[#06B6D4] hover:underline">contracts@onyxstacklabs.com</a></div>
              </div>
            </article>

          </div>

        </section>

      </div>

      {/* CORE GLOBAL FOOTER ACCESS COUPLING */}
      <Footer siteConfig={siteConfig} />

    </div>
  );
}
