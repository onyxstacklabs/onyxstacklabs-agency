import React from 'react';

// LIVE DATA CORE IMPORTS
import { siteConfig } from '../config/siteConfig';

// MODULAR DETACHED COMPONENT ARCHITECTURE LAYER
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function About({ currentPath, navigateToNode }) {
  return (
    <div className="min-h-screen bg-[#050505] text-neutral-100 font-sans antialiased selection:bg-[#06B6D4] selection:text-black">
      
      {/* Backdrop Ambient Effects matching original ecosystem parameters */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-[radial-gradient(ellipse_at_top,rgba(6,182,212,0.06),transparent_60%)] pointer-events-none z-0" />

      {/* Global Interface Layout Navigation Node */}
      <Navbar 
        currentPath={currentPath} 
        activeSection="" 
        navigateToNode={navigateToNode} 
        siteConfig={siteConfig} 
      />
      
      {/* Structural Main Target Context Wrapper */}
      <main className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-medium mb-6 tracking-wide uppercase">
            Corporate Architecture
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-6">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">OnyxStack Labs</span>
          </h1>
          <p className="text-lg text-neutral-400 leading-relaxed max-w-2xl mb-8">
            Enterprise software systems, intelligence integration matrices, and deep automation architecture layers designed for real-world reliability.
          </p>
          <div className="p-6 rounded-xl border border-neutral-800/60 bg-neutral-900/20 backdrop-blur-sm max-w-xl">
            <p className="text-xs text-neutral-500 tracking-wider uppercase font-mono mb-2">System Status</p>
            <p className="text-sm text-neutral-400">
              Structural placeholder successfully established. Architectural routing is active and awaiting layout design configurations.
            </p>
          </div>
        </div>
      </main>
      
      {/* Global Foot Interface Frame Container */}
      <Footer siteConfig={siteConfig} />

    </div>
  );
}
