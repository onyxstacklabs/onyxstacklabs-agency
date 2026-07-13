import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import siteConfig from '../config/siteConfig';

/**
 * MainLayout
 * High-performance corporate layout wrapping the application frame.
 * Seamlessly manages root navigation variables down to the UI interface nodes.
 */
export default function MainLayout({ currentPath, activeSection, navigateToNode }) {
  return (
    <div className="relative min-h-screen bg-[#050505] text-white flex flex-col overflow-x-hidden antialiased selection:bg-[#06B6D4]/30 selection:text-white">
      {/* Background Micro-Grid Ambient Mesh */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff03_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none z-0" aria-hidden="true" />

      {/* Global Application Navigation Header Layer */}
      <Navbar
        currentPath={currentPath}
        activeSection={activeSection}
        navigateToNode={navigateToNode}
        siteConfig={siteConfig}
      />

      {/* Primary Routing Portal Frame */}
      <main className="flex-grow w-full relative z-10 focus:outline-none">
        <Outlet />
      </main>

      {/* Corporate Identity & Link Repository Footer */}
      <Footer siteConfig={siteConfig} />
    </div>
  );
}
