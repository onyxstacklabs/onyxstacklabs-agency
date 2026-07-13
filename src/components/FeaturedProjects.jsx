
import React from 'react';

/**
 * FeaturedProjects Component
 * A premium, international-standard project grid showcase engineered with 
 * glassmorphism card skins, active indicator modules, and semantic HTML5 accessibility hooks.
 */
export default function FeaturedProjects() {
  const corporateProjects = [
    {
      name: "OnyxStack School ERP",
      desc: "A multi-tenant institutional framework managing enterprise logistics, automated fee structures, and administrative records in real time.",
      tags: ["React", "Firebase", "ERP"],
      status: "Live"
    },
    {
      name: "GatePass Security",
      desc: "Dual-camera infrastructure deployment integrating automated QR-code access verification pipelines with minimal platform latency.",
      tags: ["React", "QR System", "Firebase"],
      status: "Live"
    },
    {
      name: "OnyxStack Tailors",
      desc: "Next-generation software module utilizing artificial intelligence models to parse handwritten data streams into relational database layers.",
      tags: ["AI", "Gemini", "React"],
      status: "Live"
    },
    {
      name: "Lottery Platform",
      desc: "High-throughput deterministic allocation platform handling real-time heavy user request interactions seamlessly under pressure.",
      tags: ["Realtime Database", "React"],
      status: "Live"
    },
    {
      name: "Cricket Scoring",
      desc: "An ultra-responsive scoring topology built to process live microsecond statistics layout updates and bracket calculations.",
      tags: ["React", "Live Score"],
      status: "Coming Soon"
    },
    {
      name: "Mudra Platform",
      desc: "High-fidelity modern dashboard simulator monitoring enterprise transactional ledgers and automated analytical frameworks.",
      tags: ["Finance", "Dashboard"],
      status: "Coming Soon"
    }
  ];

  return (
    <section 
      className="relative w-full py-20 lg:py-28 bg-[#000000] overflow-hidden select-none"
      aria-labelledby="featured-heading"
    >
      {/* Ambient Micro-Glow Layer Nodes */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#00f2fe]/5 blur-[130px] rounded-full pointer-events-none mix-blend-screen" aria-hidden="true" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-[#4facfe]/5 blur-[130px] rounded-full pointer-events-none mix-blend-screen" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
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
            return (
              <div
                key={idx}
                tabIndex={0}
                className="group relative flex flex-col justify-between p-6 rounded-2xl bg-neutral-950/40 border border-neutral-900/80 backdrop-blur-md transition-all duration-300 ease-out outline-none hover:-translate-y-2 hover:bg-neutral-900/10 hover:border-neutral-800 focus:ring-2 focus:ring-[#00f2fe]/40 focus:border-[#00f2fe] cursor-default"
                aria-label={`Project card: ${project.name}. Status: ${project.status}`}
              >
                {/* Micro Ambient Radial Background Glow */}
                <div 
                  className="absolute inset-0 rounded-2xl bg-[radial-gradient(ellipse_at_bottom_right,rgba(0,242,254,0.02),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" 
                  aria-hidden="true" 
                />

                {/* Upper Infrastructure Block */}
                <div>
                  <div className="flex items-start justify-between gap-4 mb-4">
                    {/* Project Title Block */}
                    <h3 className="text-lg font-bold text-neutral-100 group-hover:text-white transition-colors duration-200">
                      {project.name}
                    </h3>

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
                        className="text-[10px] font-medium px-2 py-0.5 bg-neutral-900 text-neutral-400 rounded border border-neutral-800/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Dummy Interface View Anchor Trigger */}
                  <button 
                    type="button"
                    className="w-full py-2.5 px-4 rounded-lg bg-neutral-900 border border-neutral-800 text-xs font-semibold text-neutral-300 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-[#00f2fe] group-hover:to-[#4facfe] group-hover:text-black group-hover:border-transparent group-hover:shadow-[0_4px_15px_rgba(0,242,254,0.1)] focus:outline-none focus:ring-1 focus:ring-[#00f2fe]"
                    aria-label={`View documentation and structure parameters for ${project.name}`}
                  >
                    View Details
                  </button>
                </div>

                {/* Outer Ring Border Linear Glow Gradient Mapping */}
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
    </section>
  );
}
