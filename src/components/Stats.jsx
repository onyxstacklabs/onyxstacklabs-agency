
import React from 'react';

/**
 * Stats Component
 * A premium, enterprise-grade business matrix presentation layer.
 * Engineered with interactive metric metrics, fluid layout matrices, and hover neon elevations.
 */
export default function Stats() {
  const analyticsMatrix = [
    { value: '10+', label: 'Projects Delivered', suffix: 'Enterprise Grade' },
    { value: '12+', label: 'Core Technologies', suffix: 'Modern Stack' },
    { value: '100%', label: 'Client Satisfaction', suffix: 'Guaranteed' },
    { value: '24/7', label: 'Dedicated Support', suffix: 'Global Runtime' },
  ];

  return (
    <section 
      className="relative w-full py-20 lg:py-28 bg-[#000000] overflow-hidden select-none"
      aria-labelledby="stats-heading"
    >
      {/* Ambient Grid Layer & Light Conduits */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-[#00f2fe]/5 to-[#4facfe]/5 blur-[130px] rounded-full pointer-events-none mix-blend-screen" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Core Description Core Section */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16 max-w-3xl mx-auto">
          
          {/* Section Indicator Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900/80 border border-neutral-800/60 text-xs font-semibold tracking-wider text-[#00f2fe] uppercase backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00e676]" aria-hidden="true" />
            Our Impact
          </div>

          {/* Primary Typography Anchor */}
          <h2 
            id="stats-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-white"
          >
            Delivering Reliable{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00f2fe] via-[#4facfe] to-[#00e676]">
              Software Solutions
            </span>
          </h2>

          {/* Context Explainer */}
          <p className="text-base sm:text-lg text-neutral-400 font-light leading-relaxed">
            OnyxStack Labs deploys highly scalable web ecosystems, optimized intelligence modules, 
            high-fidelity native mobile software, and secure enterprise automation graphs engineered for transactional scale.
          </p>
        </div>

        {/* 4-Column Matrix Presentation Layer */}
        <div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full"
          role="region"
          aria-label="Performance performance numbers"
        >
          {analyticsMatrix.map((metric, idx) => (
            <div
              key={idx}
              tabIndex={0}
              className="group relative flex flex-col justify-between p-8 rounded-xl bg-neutral-900/20 border border-neutral-800/40 backdrop-blur-md transition-all duration-300 ease-out outline-none hover:-translate-y-2 hover:bg-neutral-900/50 hover:border-neutral-700/60 focus:ring-2 focus:ring-[#4facfe]/50 focus:border-[#4facfe] cursor-pointer"
            >
              {/* Internal Accent Glow Engine */}
              <div 
                className="absolute inset-0 rounded-xl bg-[radial-gradient(ellipse_at_top_left,rgba(0,242,254,0.03),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" 
                aria-hidden="true" 
              />

              {/* Data Value Core Block */}
              <div className="space-y-2">
                <div className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter text-white group-hover:text-[#00f2fe] transition-colors duration-300">
                  {metric.value}
                </div>
                
                <div className="text-base font-bold text-neutral-200 tracking-tight">
                  {metric.label}
                </div>
              </div>

              {/* Functional Decorative Segment Subtitle */}
              <div className="mt-6 pt-4 border-t border-neutral-800/60 flex items-center justify-between">
                <span className="text-xs font-medium text-neutral-500 group-hover:text-neutral-400 transition-colors duration-300">
                  {metric.suffix}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-700 group-hover:bg-[#00e676] group-hover:shadow-[0_0_8px_#00e676] transition-all duration-300" aria-hidden="true" />
              </div>

              {/* Outer Layer Shadow Frame Modifier */}
              <div 
                className="absolute -inset-[1px] rounded-xl bg-gradient-to-b from-[#00f2fe]/10 via-transparent to-[#4facfe]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none blur-sm z-[-1]" 
                aria-hidden="true" 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
