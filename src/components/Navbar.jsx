import React, { useState, useEffect } from 'react';

export default function Navbar({ currentPath, activeSection, navigateToNode, siteConfig }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile drawer automatically on viewport changes
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Handles dynamic state synchronization for in-page anchors vs absolute page jumps
  const handleNavClick = (e, target) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    
    if (target.startsWith('#')) {
      const elementId = target.substring(1);
      
      if (currentPath === '/') {
        const element = document.getElementById(elementId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // Safe programmatic deferred routing anchor evaluation
        navigateToNode('/');
        setTimeout(() => {
          const element = document.getElementById(elementId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 250);
      }
    } else {
      navigateToNode(target);
    }
  };

  const navLinks = [
    { label: "Services", target: "#services", type: "anchor", sectionKey: "services" },
    { label: "Portfolio", target: "#portfolio", type: "anchor", sectionKey: "portfolio" },
    { label: "Philosophy", target: "#why-choose-us", type: "anchor", sectionKey: "why-choose-us" },
    { label: "Our Process", target: "#process", type: "anchor", sectionKey: "process" },
    { label: "About", target: "/about", type: "absolute", sectionKey: null }
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-neutral-900/80 bg-[#050505]/70 backdrop-blur-md px-6 md:px-12 py-4 transition-all duration-300" aria-label="Main Navigation">
      <div className="max-w-7xl mx-auto flex items-center justify-between relative">
        
        {/* BRAND IDENTITY LINK NODE */}
        <a 
          href="/" 
          onClick={(e) => handleNavClick(e, '/')}
          className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#06B6D4] rounded-md p-1 z-50" 
          aria-label={`${siteConfig?.agencyName || 'OnyxStack Labs'} Homepage`}
        >
          <div className="w-2.5 h-2.5 rounded-full bg-[#06B6D4] shadow-[0_0_12px_#06B6D4] group-hover:scale-110 transition-transform duration-300"></div>
          <span className="text-base font-bold tracking-wider uppercase font-mono text-white">
            OnyxStack<span className="text-[#06B6D4] font-sans tracking-normal lowercase font-semibold">Labs</span>
          </span>
        </a>
        
        {/* DESKTOP MATRIX LINK TRACKER GROUP */}
        <div className="hidden md:flex items-center gap-8 text-xs font-mono uppercase tracking-widest text-neutral-400">
          {navLinks.map((link, idx) => {
            const isActive = link.type === 'anchor' 
              ? activeSection === link.sectionKey && currentPath === '/'
              : currentPath === link.target;
            
            return (
              <a 
                key={idx}
                href={link.target} 
                onClick={(e) => handleNavClick(e, link.target)}
                className={`transition-all duration-200 hover:text-white focus:outline-none focus:text-white ${isActive ? 'text-[#06B6D4] font-bold' : ''}`}
              >
                {link.label}
              </a>
            );
          })}
        </div>

        {/* ACTIONS AND INTERACTION INDICATORS */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-2 bg-neutral-900/40 border border-neutral-800/80 px-3 py-1 rounded-full" aria-label="System status node indicator">
            <div className="w-1.5 h-1.5 rounded-full bg-[#00e676] shadow-[0_0_8px_#00e676] animate-pulse"></div>
            <span className="text-[9px] uppercase tracking-widest text-neutral-400 font-mono">Ready For Partnerships</span>
          </div>
          
          <a 
            href="/contact" 
            onClick={(e) => handleNavClick(e, '/contact')}
            className={`bg-neutral-100 hover:bg-[#06B6D4] text-black px-4.5 py-2 rounded-full text-[11px] font-bold uppercase tracking-widest transition-all duration-300 hover:shadow-[0_0_15px_rgba(6,182,212,0.4)] focus:outline-none focus:ring-2 focus:ring-[#06B6D4] ${currentPath === '/contact' ? 'bg-[#06B6D4] text-black shadow-[0_0_12px_rgba(6,182,212,0.3)]' : ''}`}
          >
            Start Project
          </a>

          {/* RESPONSIVE MOBILE ACCESSIBILITY DISPATCHER */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex md:hidden flex-col justify-center items-center w-8 h-8 rounded-md border border-neutral-800 bg-neutral-900/50 text-white focus:outline-none focus:ring-2 focus:ring-[#06B6D4] z-50 p-1"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation structural drawer"
          >
            <span className={`block w-4 h-0.5 bg-current transition-all duration-300 ${mobileMenuOpen ? 'transform rotate-44 translate-y-1' : '-translate-y-0.5'}`} />
            <span className={`block w-4 h-0.5 bg-current transition-all duration-200 my-0.5 ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
            <span className={`block w-4 h-0.5 bg-current transition-all duration-300 ${mobileMenuOpen ? 'transform -rotate-44 -translate-y-1' : 'translate-y-0.5'}`} />
          </button>
        </div>

        {/* SLIDE-OUT MOBILE NAVIGATION PANEL */}
        {mobileMenuOpen && (
          <div className="absolute top-14 left-0 w-full bg-[#050505] border-b border-neutral-900 p-6 flex flex-col gap-4 md:hidden shadow-2xl z-40 animate-fadeIn animate-duration-200">
            {navLinks.map((link, idx) => {
              const isActive = link.type === 'anchor' 
                ? activeSection === link.sectionKey && currentPath === '/'
                : currentPath === link.target;
              
              return (
                <a
                  key={idx}
                  href={link.target}
                  onClick={(e) => handleNavClick(e, link.target)}
                  className={`text-xs font-mono uppercase tracking-widest py-2 border-b border-neutral-900/40 hover:text-white transition-colors ${isActive ? 'text-[#06B6D4] font-bold' : 'text-neutral-400'}`}
                >
                  {link.label}
                </a>
              );
            })}
            <div className="flex items-center gap-2 pt-2" aria-label="System status node indicator">
              <div className="w-1.5 h-1.5 rounded-full bg-[#00e676] shadow-[0_0_8px_#00e676] animate-pulse"></div>
              <span className="text-[9px] uppercase tracking-widest text-neutral-500 font-mono">System Online Matrix</span>
            </div>
          </div>
        )}

      </div>
    </nav>
  );
}
