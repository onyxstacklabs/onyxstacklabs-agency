import React from 'react';

export default function Navbar({ currentPath, activeSection, navigateToNode, siteConfig }) {
  
  // Handles multi-page routing transitions vs in-page smooth scrolling anchors
  const handleNavClick = (e, target) => {
    e.preventDefault();
    
    if (target.startsWith('#')) {
      const elementId = target.substring(1);
      
      if (currentPath === '/') {
        // We are on the homepage: execute clean browser scroll behavior natively
        const element = document.getElementById(elementId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // We are on another page: push back to root first, then focus structural anchor
        navigateToNode('/');
        setTimeout(() => {
          const element = document.getElementById(elementId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    } else {
      // Standard absolute architectural navigation path shift
      navigateToNode(target);
    }
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-neutral-900/80 bg-[#050505]/70 backdrop-blur-md px-6 md:px-12 py-4 transition-all duration-300" aria-label="Main Navigation">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a 
          href="#" 
          onClick={(e) => handleNavClick(e, '/')}
          className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#06B6D4] rounded-md p-1" 
          aria-label={`${siteConfig?.agencyName || 'OnyxStack Labs'} Homepage`}
        >
          <div className="w-2.5 h-2.5 rounded-full bg-[#06B6D4] shadow-[0_0_12px_#06B6D4] group-hover:scale-110 transition-transform duration-300"></div>
          <span className="text-base font-bold tracking-wider uppercase font-mono text-white">
            OnyxStack<span className="text-[#06B6D4] font-sans tracking-normal lowercase font-semibold">Labs</span>
          </span>
        </a>
        
        <div className="hidden md:flex items-center gap-8 text-xs font-mono uppercase tracking-widest text-neutral-400">
          <a 
            href="#services" 
            onClick={(e) => handleNavClick(e, '#services')}
            className={`transition-all duration-200 hover:text-white focus:outline-none ${activeSection === 'services' && currentPath === '/' ? 'text-[#06B6D4] font-bold' : ''}`}
          >
            Services
          </a>
          <a 
            href="#portfolio" 
            onClick={(e) => handleNavClick(e, '#portfolio')}
            className={`transition-all duration-200 hover:text-white focus:outline-none ${activeSection === 'portfolio' && currentPath === '/' ? 'text-[#06B6D4] font-bold' : ''}`}
          >
            Portfolio
          </a>
          <a 
            href="#why-choose-us" 
            onClick={(e) => handleNavClick(e, '#why-choose-us')}
            className={`transition-all duration-200 hover:text-white focus:outline-none ${activeSection === 'why-choose-us' && currentPath === '/' ? 'text-[#06B6D4] font-bold' : ''}`}
          >
            Philosophy
          </a>
          <a 
            href="#process" 
            onClick={(e) => handleNavClick(e, '#process')}
            className={`transition-all duration-200 hover:text-white focus:outline-none ${activeSection === 'process' && currentPath === '/' ? 'text-[#06B6D4] font-bold' : ''}`}
          >
            Our Process
          </a>
          <a 
            href="/about" 
            onClick={(e) => handleNavClick(e, '/about')}
            className={`transition-all duration-200 hover:text-white focus:outline-none ${currentPath === '/about' ? 'text-[#06B6D4] font-bold' : ''}`}
          >
            About
          </a>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-2 bg-neutral-900/40 border border-neutral-800/80 px-3 py-1 rounded-full" aria-label="System status node indicator">
            <div className="w-1.5 h-1.5 rounded-full bg-[#00e676] shadow-[0_0_8px_#00e676] animate-pulse"></div>
            <span className="text-[9px] uppercase tracking-widest text-neutral-400 font-mono">Ready For Partnerships</span>
          </div>
          <a 
            href="#contact" 
            onClick={(e) => handleNavClick(e, '#contact')}
            className="bg-neutral-100 hover:bg-[#06B6D4] text-black px-4.5 py-2 rounded-full text-[11px] font-bold uppercase tracking-widest transition-all duration-300 hover:shadow-[0_0_15px_rgba(6,182,212,0.4)] focus:outline-none focus:ring-2 focus:ring-[#06B6D4]"
          >
            Start Project
          </a>
        </div>
      </div>
    </nav>
  );
}
