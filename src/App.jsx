import React, { useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';

// LAYOUT SYSTEM IMPORT (Explicitly specified extension for strict Unix filesystems)
import MainLayout from './layouts/MainLayout.jsx';

// LIVE DATA CORE IMPORTS
import OnyxAdmin from './pages/OnyxAdmin';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';

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

        {/* Target Route: High-Conversion Lead Ingress Node */}
        <Route 
          path="/contact" 
          element={<Contact currentPath={currentPath} navigateToNode={navigateToNode} />} 
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
      </Route>
    </Routes>
  );
}
