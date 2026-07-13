
import React from 'react';

/**
 * BrandShowcase Component
 * A premium tech-stack grid ecosystem displaying enterprise technologies.
 * Engineered with pure inline SVGs, adaptive micro-grids, and high-fidelity glow interactions.
 */
export default function BrandShowcase() {
  const ecosystems = [
    {
      name: 'React',
      desc: 'High-performance component architectures and robust rendering matrices.',
      icon: (
        <svg className="w-6 h-6 text-[#00f2fe]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(30 12 12)" />
          <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(90 12 12)" />
          <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(150 12 12)" />
          <circle cx="12" cy="12" r="2" fill="currentColor" />
        </svg>
      )
    },
    {
      name: 'Vite',
      desc: 'Next-generation build tool engine providing rapid hot module replacement.',
      icon: (
        <svg className="w-6 h-6 text-[#ffcd00]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" fill="currentColor" fillOpacity="0.2" />
        </svg>
      )
    },
    {
      name: 'JavaScript',
      desc: 'Modern ES6+ logical algorithms handling application runtime tasks.',
      icon: (
        <svg className="w-6 h-6 text-[#f7df1e]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 3h18v18H3V3z" />
          <path d="M14 10v6a2 2 0 0 0 2 2h1a1 1 0 0 0 1-1v-4" />
        </svg>
      )
    },
    {
      name: 'Tailwind CSS',
      desc: 'Utility-first presentation layer matching elite enterprise parameters.',
      icon: (
        <svg className="w-6 h-6 text-[#38bdf8]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 3c-1.2 0-2.4.6-3.6 1.8-1.5 1.5-2.4 3.6-2.4 5.4 0 3 2.4 4.8 5.4 4.8 1.2 0 2.4-.6 3.6-1.8 1.5-1.5 2.4-3.6 2.4-5.4 0-3-2.4-4.8-5.4-4.8z" />
          <path d="M6 10.2c-1.2 0-2.4.6-3.6 1.8C.9 13.5 0 15.6 0 17.4c0 3 2.4 4.8 5.4 4.8 1.2 0 2.4-.6 3.6-1.8 1.5-1.5 2.4-3.6 2.4-5.4 0-3-2.4-4.8-5.4-4.8z" />
        </svg>
      )
    },
    {
      name: 'Firebase',
      desc: 'Flexible realtime database engines backed by Google Cloud infrastructure.',
      icon: (
        <svg className="w-6 h-6 text-[#f5820d]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3.5 18.5l8.5-15 4 7-12.5 8z" />
          <path d="M20.5 18.5l-3-12.5-1.5 2.5 4.5 10z" />
          <path d="M12 3.5l8.5 15H3.5L12 3.5z" />
        </svg>
      )
    },
    {
      name: 'Node.js',
      desc: 'Scalable backend JavaScript execution environment built on Chrome V8 engine.',
      icon: (
        <svg className="w-6 h-6 text-[#339933]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="12 2 20 6.5 20 15.5 12 20 4 15.5 4 6.5 12 2" />
          <line x1="12" y1="2" x2="12" y2="20" />
        </svg>
      )
    },
    {
      name: 'Express.js',
      desc: 'Minimalist web server routing systems engineered for rapid performance API networks.',
      icon: (
        <svg className="w-6 h-6 text-neutral-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 6h16M4 12h12M4 18h16" />
        </svg>
      )
    },
    {
      name: 'MongoDB',
      desc: 'Dynamic NoSQL document store frameworks maximizing structural data access.',
      icon: (
        <svg className="w-6 h-6 text-[#47a248]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2c0 0-5 4-5 10s5 10 5 10 5-4 5-10-5-10-5-10z" />
          <line x1="12" y1="2" x2="12" y2="22" />
        </svg>
      )
    },
    {
      name: 'Git',
      desc: 'Distributed version control protocols guaranteeing source change histories.',
      icon: (
        <svg className="w-6 h-6 text-[#f05032]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="5" r="2" />
          <circle cx="12" cy="19" r="2" />
          <circle cx="6" cy="12" r="2" />
          <line x1="12" y1="7" x2="12" y2="17" />
          <path d="M6 14c2 0 4-2 6-4" />
        </svg>
      )
    },
    {
      name: 'GitHub',
      desc: 'Cloud repository governance hosting secure automation pipelines and code units.',
      icon: (
        <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
        </svg>
      )
    },
    {
      name: 'Vercel',
      desc: 'Elite continuous-integration edge node infrastructure providing extreme site velocity.',
      icon: (
        <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
          <polygon points="12 2 22 22 2 22" />
        </svg>
      )
    },
    {
      name: 'Gemini AI',
      desc: 'Advanced deep models reading unstructured data objects seamlessly.',
      icon: (
        <svg className="w-6 h-6 text-[#4facfe]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v20M2 12h20M12 2l4 4-4 4-4-4 4-4zM12 14l4 4-4 4-4-4 4-4z" />
        </svg>
      )
    }
  ];

  return (
    <section 
      className="relative w-full py-20 lg:py-28 bg-[#000000] overflow-hidden select-none"
      aria-labelledby="showcase-heading"
    >
      {/* Background Vector Blur Enhancements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(0,242,254,0.04),transparent_70%)] pointer-events-none z-0" aria-hidden="true" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#4facfe]/5 blur-[120px] rounded-full pointer-events-none mix-blend-screen" aria-hidden="true" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-[#00f2fe]/5 blur-[120px] rounded-full pointer-events-none mix-blend-screen" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Block Section */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16 max-w-3xl mx-auto">
          
          {/* Accent Upper Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900/90 border border-neutral-800 text-[10px] font-bold tracking-widest text-[#00f2fe] uppercase backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00f2fe]" aria-hidden="true" />
            Ecosystem Matrix
          </div>

          {/* Main Structural Heading */}
          <h2 
            id="showcase-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-white"
          >
            Trusted Technologies &{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00f2fe] via-[#4facfe] to-neutral-400">
              Development Ecosystem
            </span>
          </h2>

          {/* Context Subtitle Explainer */}
          <p className="text-base sm:text-lg text-neutral-400 font-light leading-relaxed">
            We build scalable digital products using modern technologies trusted by startups, enterprises, and growing businesses.
          </p>
        </div>

        {/* Technical Grid Network Layout */}
        <div 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 w-full"
          role="region"
          aria-label="Engineered technology catalog matrix"
        >
          {ecosystems.map((tech, idx) => (
            <div
              key={idx}
              tabIndex={0}
              className="group relative flex flex-col p-6 rounded-xl bg-neutral-950/40 border border-neutral-900/60 backdrop-blur-md transition-all duration-300 ease-out outline-none hover:-translate-y-1.5 hover:bg-neutral-900/20 hover:border-neutral-800 focus:ring-2 focus:ring-[#00f2fe]/40 focus:border-[#00f2fe] cursor-default"
              aria-label={`Technology node: ${tech.name}. ${tech.desc}`}
            >
              {/* Internal Accent Floating Radial Shadow */}
              <div 
                className="absolute inset-0 rounded-xl bg-[radial-gradient(ellipse_at_top_left,rgba(0,242,254,0.03),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" 
                aria-hidden="true" 
              />

              {/* Header Interface: Visual Marker + Node Title */}
              <div className="flex items-center gap-3.5 mb-4">
                <div className="flex items-center justify-center p-2.5 rounded-lg bg-neutral-900/60 border border-neutral-800 text-neutral-400 group-hover:text-white group-hover:border-neutral-700/60 group-hover:shadow-[0_0_15px_rgba(255,255,255,0.05)] transition-all duration-300">
                  {tech.icon}
                </div>
                <h3 className="text-base font-bold text-neutral-200 group-hover:text-white transition-colors duration-200">
                  {tech.name}
                </h3>
              </div>

              {/* Professional Scope Descriptor */}
              <p className="text-xs text-neutral-400 leading-relaxed font-light group-hover:text-neutral-300 transition-colors duration-200">
                {tech.desc}
              </p>

              {/* Edge Gradient Ambient Overlay Ring */}
              <div 
                className="absolute -inset-[1px] rounded-xl bg-gradient-to-br from-[#00f2fe]/10 via-transparent to-[#4facfe]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none blur-xs z-[-1]" 
                aria-hidden="true" 
              />
            </div>
          ))}
        </div>

        {/* Low-Ingress Footer Bottom CTA Text */}
        <div className="mt-16 text-center border-t border-neutral-900 pt-8">
          <p className="text-xs sm:text-sm font-medium tracking-wide text-neutral-500 uppercase">
            Building modern software with{' '}
            <span className="text-neutral-300 font-semibold tracking-normal normal-case">
              enterprise-grade technologies.
            </span>
          </p>
        </div>

      </div>
    </section>
  );
}
