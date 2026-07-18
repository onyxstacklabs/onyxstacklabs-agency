// src/App.jsx
import React, { useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';

// LAYOUT SYSTEM IMPORT (Updated to exact case-sensitive folder path matching 'Layouts')
import MainLayout from './Layouts/MainLayout.jsx';

// LIVE DATA CORE IMPORTS
import OnyxAdmin from './pages/OnyxAdmin';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Industries from './pages/Industries';
import Projects from './pages/Projects';
import Pricing from './pages/Pricing';
import Blog from './pages/Blog';
import BlogArticle from './pages/BlogArticle';
import Careers from './pages/Careers';
import CookiesPolicy from './pages/CookiesPolicy';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import ThankYou from './pages/ThankYou';
import NotFound from './pages/NotFound';

export default function App() {
  const navigate = useNavigate();
  const location = useLocation();

  // Reactive routing node tracker mapped cleanly to React Router DOM values
  const currentPath = location.pathname;

  // Fallback SEO title sync natively without external dependencies
  useEffect(() => {
    document.title = "OnyxStack Labs | Enterprise Software & AI Automation Agency";
  }, []);

  // Structural Navigation Helper mapped to React Router's stack push logic
  const navigateToNode = (path) => {
    navigate(path);
  };

  return (
    <Routes>
      {/* Target Route: Isolated Onyx Admin Control Tower Control Deck (Outside MainLayout) */}
      <Route 
        path="/onyx-control-tower" 
        element={<OnyxAdmin navigateToNode={navigateToNode} />} 
      />

      {/* Public Pages Node Network Wrapper (Nested under MainLayout Context) */}
      <Route 
        element={
          <MainLayout 
            currentPath={currentPath} 
            activeSection="" 
            navigateToNode={navigateToNode} 
          />
        }
      >
        {/* Target Route: Core Application Framework Landing Node */}
        <Route 
          index 
          element={<Home currentPath={currentPath} navigateToNode={navigateToNode} />} 
        />

        {/* Target Route: Corporate Architecture About Information Matrix */}
        <Route 
          path="/about" 
          element={<About currentPath={currentPath} navigateToNode={navigateToNode} />} 
        />

        {/* Target Route: Architectural Capability & Core Service Meshes */}
        <Route 
          path="/services" 
          element={<Services currentPath={currentPath} navigateToNode={navigateToNode} />} 
        />

        {/* Target Route: Structural Case Studies & Corporate Portfolio Showcase */}
        <Route 
          path="/portfolio" 
          element={<Portfolio currentPath={currentPath} navigateToNode={navigateToNode} />} 
        />

        {/* Target Route: High-Conversion Lead Ingress Node */}
        <Route 
          path="/contact" 
          element={<Contact currentPath={currentPath} navigateToNode={navigateToNode} />} 
        />

        {/* Target Route: Deep Industry Verticals & Domain Engineering Solutions */}
        <Route 
          path="/industries" 
          element={<Industries currentPath={currentPath} navigateToNode={navigateToNode} />} 
        />

        {/* Target Route: Enterprise Initiatives & System Build Projects Layout */}
        <Route 
          path="/projects" 
          element={<Projects currentPath={currentPath} navigateToNode={navigateToNode} />} 
        />

        {/* Target Route: Scalable Value Tiers & Transparent Pricing Topography */}
        <Route 
          path="/pricing" 
          element={<Pricing currentPath={currentPath} navigateToNode={navigateToNode} />} 
        />

        {/* Target Route: Technical Insights & AI Automation Engineering Blog */}
        <Route 
          path="/blog" 
          element={<Blog currentPath={currentPath} navigateToNode={navigateToNode} />} 
        />

        {/* Target Route: Individual Technical Insight Article Node */}
        <Route 
          path="/blog/:slug" 
          element={<BlogArticle currentPath={currentPath} navigateToNode={navigateToNode} />} 
        />

        {/* Target Route: Core Engineering Recruitment & Open Career Desks */}
        <Route 
          path="/careers" 
          element={<Careers currentPath={currentPath} navigateToNode={navigateToNode} />} 
        />

        {/* Target Route: Global Compliance, Tracking & Cookies Policy Matrix */}
        <Route 
          path="/cookies-policy" 
          element={<CookiesPolicy currentPath={currentPath} navigateToNode={navigateToNode} />} 
        />

        {/* Target Route: Global Privacy Policy & Sovereign Data Framework */}
        <Route 
          path="/privacy-policy" 
          element={<PrivacyPolicy currentPath={currentPath} navigateToNode={navigateToNode} />} 
        />

        {/* Target Route: Master Terms of Service & Contract Governance */}
        <Route 
          path="/terms-conditions" 
          element={<TermsConditions currentPath={currentPath} navigateToNode={navigateToNode} />} 
        />

        {/* Target Route: Success Feedback & High-Conversion Lead Handshake Terminal */}
        <Route 
          path="/thank-you" 
          element={<ThankYou currentPath={currentPath} navigateToNode={navigateToNode} />} 
        />

        {/* Fallback Route Matrix Strategy: Nested 404 Handler reflecting layout elements perfectly */}
        <Route 
          path="*" 
          element={<NotFound />} 
        />
      </Route>
    </Routes>
  );
}
