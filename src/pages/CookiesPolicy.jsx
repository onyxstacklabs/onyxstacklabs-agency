import React, { useEffect } from 'react';

// LIVE DATA CORE IMPORTS
import { siteConfig } from '../config/siteConfig';

export default function CookiesPolicy({ currentPath, navigateToNode }) {
  
  // Set explicit subview window focus on mounting phase and sync SEO headers
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Cookies Policy | OnyxStack Labs";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Learn how OnyxStack Labs uses cookies to improve your browsing experience while protecting your privacy.");
    }
  }, []);

  // Section 3 Data: Categorized System Cookies Matrix
  const cookieCategories = [
    {
      title: "Essential Cookies",
      purpose: "System Stability & Session Management",
      desc: "These cookies are strictly required to operate our secure infrastructure nodes. They enable core security features, user authentication state preservation, and structural layout memory. Without these, our platform cannot process incoming traffic loops safely.",
      status: "Always Active"
    },
    {
      title: "Performance Cookies",
      purpose: "Telemetry & Payload Tuning",
      desc: "These files securely monitor data transfer speeds, serverless function response times, and component load thresholds. They provide our infrastructure team with real-time feedback to optimize layout rendering pipelines and minimize loading latency.",
      status: "Optimization Only"
    },
    {
      title: "Preference Cookies",
      purpose: "Interface Localization State",
      desc: "These assets allow our framework to remember your custom choices, such as selected layout filters, navigation history pathways, and local time zones. They help us adjust interface layouts to match your work style on repeat sessions.",
      status: "User Toggled"
    },
    {
      title: "Analytics Cookies",
      purpose: "Future Audience Metrics",
      desc: "Planned for future integration, these tracking cookies will securely map anonymous user behavior, entry channels, and overall platform engagement. They will help us guide feature roadmaps and evaluate the success of updates.",
      status: "Staged / Disabled"
    }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-neutral-100 font-sans antialiased selection:bg-[#06B6D4] selection:text-black scroll-smooth relative overflow-hidden">
      
      {/* BACKGROUND AMBIENT INFRASTRUCTURE NODE */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[800px] bg-[radial-gradient(ellipse_at_top,rgba(6,182,212,0.06),transparent_55%)] pointer-events-none z-0" />
      <div className="absolute top-[1200px] left-0 w-[500px] h-[500px] bg-blue-600/[0.015] blur-[160px] pointer-events-none" />
      <div className="absolute bottom-[400px] right-0 w-[550px] h-[550px] bg-[#06B6D4]/[0.01] blur-[180px] pointer-events-none" />

      {/* MAIN TARGET MATRIX CONTROLLER */}
      <div className="relative z-10 distribution-container-layer">
        
        {/* SECTION 1: HERO CONTAINER */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-16 sm:pt-40 sm:pb-24">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#06B6D4]/10 border border-[#06B6D4]/20 text-[#06B6D4] text-xs font-mono uppercase tracking-widest mb-6">
              Compliance Ledger // Core Transparency
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
              Cookies <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#06B6D4] via-cyan-300 to-blue-500">
                Data Policy
              </span>
            </h1>
            <p className="text-base sm:text-lg text-neutral-400 leading-relaxed max-w-2xl mb-6 font-sans">
              Learn how OnyxStack Labs uses cookies to improve your browsing experience while respecting your privacy. We are committed to complete clarity regarding our system logs and storage policies.
            </p>
            <div className="text-xs font-mono text-neutral-500 uppercase tracking-wider">
              Last Updated: July 13, 2026
            </div>
          </div>
        </section>

        {/* SECTION 2: WHAT ARE COOKIES */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 border-t border-neutral-900/60">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4">
              <p className="text-xs font-mono uppercase tracking-widest text-[#06B6D4] mb-3">// Storage Definitions</p>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-sans">Understanding Local State Files</h2>
            </div>
            <div className="lg:col-span-8 text-neutral-400 space-y-5 text-sm sm:text-base leading-relaxed font-sans">
              <p>
                Cookies are small text files placed securely on your computer or mobile device when you browse online platforms. They function as a local temporary storage mechanism, enabling modern web engines to maintain state configurations, recall your navigation choices, and protect active sessions against external interference.
              </p>
              <p>
                At OnyxStack Labs, we limit our data usage to essential performance markers. We avoid intrusive ad tracking systems, using these local storage rows exclusively to give you stable layout velocities and clear data displays across our entire cloud network.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 3: COOKIES WE USE */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 border-t border-neutral-900/60">
          <div className="max-w-3xl mb-12">
            <p className="text-xs font-mono uppercase tracking-widest text-[#06B6D4] mb-3">// Allocation Matrix</p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">How We Deploy Local Storage Keys</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cookieCategories.map((cookie, idx) => (
              <div key={idx} className="p-6 rounded-2xl border border-neutral-900 bg-neutral-950/40 relative group hover:border-neutral-800 transition-colors duration-300">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 block mb-1">
                      {cookie.purpose}
                    </span>
                    <h3 className="text-base font-bold text-white font-sans">{cookie.title}</h3>
                  </div>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider ${
                    idx === 0 
                      ? 'bg-cyan-950/40 border border-cyan-800/40 text-[#06B6D4]' 
                      : idx === 3 
                        ? 'bg-neutral-900 border border-neutral-800 text-neutral-500' 
                        : 'bg-neutral-950 border border-neutral-900 text-neutral-400'
                  }`}>
                    {cookie.status}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-sans">{cookie.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 4: THIRD-PARTY SERVICES */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 border-t border-neutral-900/60">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4">
              <p className="text-xs font-mono uppercase tracking-widest text-[#06B6D4] mb-3">// Architecture Nodes</p>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-sans">Vendor Processing & Infrastructure Integrations</h2>
            </div>
            <div className="lg:col-span-8 text-neutral-400 space-y-6 text-sm sm:text-base leading-relaxed font-sans">
              <p>
                To provide safe web access, we deploy our application modules across external enterprise infrastructure systems. These trusted third-party providers may save independent data values to your browser to manage their own cloud pipelines and edge networks:
              </p>
              <ul className="space-y-4 pt-2">
                <li className="flex gap-3">
                  <span className="text-[#06B6D4] font-mono text-sm font-bold pt-0.5">▪</span>
                  <div>
                    <strong className="text-neutral-200 block font-semibold mb-0.5">Firebase Platform Node</strong>
                    <span className="text-xs sm:text-sm">Maintains active backend synchronization vectors and protects database records against automated threat vectors.</span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#06B6D4] font-mono text-sm font-bold pt-0.5">▪</span>
                  <div>
                    <strong className="text-neutral-200 block font-semibold mb-0.5">Vercel Deployment Network</strong>
                    <span className="text-xs sm:text-sm">Saves optimization markers to direct global user traffic to the closest serverless CDN data cluster, keeping response speeds fast.</span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#06B6D4] font-mono text-sm font-bold pt-0.5">▪</span>
                  <div>
                    <strong className="text-neutral-200 block font-semibold mb-0.5">Google Analytics Layer (Staged Future Use)</strong>
                    <span className="text-xs sm:text-sm">Planned for upcoming deployments to review overall platform use. It will handle all telemetry data strictly under fully anonymized parameters.</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* SECTION 5: MANAGING COOKIES */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 border-t border-neutral-900/60">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4">
              <p className="text-xs font-mono uppercase tracking-widest text-[#06B6D4] mb-3">// User Management</p>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-sans">Controlling Storage Permissions</h2>
            </div>
            <div className="lg:col-span-8 text-neutral-400 text-sm sm:text-base leading-relaxed font-sans">
              <p>
                You have the absolute right to manage or entirely disable cookie storage files through your individual browser configuration panel (such as Google Chrome, Apple Safari, or Mozilla Firefox). You can easily wipe your browser cache history to remove active local storage structures at any time. Please note that adjusting these switches might disable essential layout features, which could cause display friction or performance delays within our secure interface nodes.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 6: POLICY UPDATES */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 border-t border-neutral-900/60">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4">
              <p className="text-xs font-mono uppercase tracking-widest text-[#06B6D4] mb-3">// Dynamic Revision</p>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-sans">Maintenance & Framework Iterations</h2>
            </div>
            <div className="lg:col-span-8 text-neutral-400 text-sm sm:text-base leading-relaxed font-sans">
              <p>
                OnyxStack Labs reviews this data policy periodically to align with evolving international data standards and updates to our cloud configuration architecture. Any adjustments will be committed to this row address instantly with an updated system timestamp tracker displayed clearly at the top of the section. We encourage users to check this page occasionally to stay fully informed about our data practices.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 7: CONTACT SECTION */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 sm:py-24 border-t border-neutral-900/60">
          <div className="p-8 sm:p-14 rounded-3xl border border-neutral-900 bg-gradient-to-br from-neutral-950 via-neutral-950 to-neutral-900/30 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/[0.015] blur-[120px] pointer-events-none rounded-full" />
            
            <div className="max-w-xl">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-3 font-sans">
                Questions Regarding Privacy Configurations?
              </h2>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-sans mb-4">
                If you require technical clarification regarding our storage rules or need to request complete telemetry logs, connect directly with our compliance officer.
              </p>
              <div className="inline-block text-xs font-mono text-neutral-400 bg-neutral-900 border border-neutral-800 rounded-lg px-3 py-1.5">
                Support Node: <a href="mailto:onyxstacklabs@gmail.com" className="text-[#06B6D4] hover:underline">onyxstacklabs@gmail.com</a>
              </div>
            </div>

            <div className="flex-shrink-0 relative z-10">
              <button
                onClick={() => navigateToNode('/contact')}
                className="bg-neutral-100 hover:bg-[#06B6D4] text-black px-8 py-4 rounded-full text-xs font-bold font-mono uppercase tracking-widest transition-all duration-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] whitespace-nowrap"
              >
                Contact Us
              </button>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
