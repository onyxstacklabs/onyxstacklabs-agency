import React, { useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';

// LIVE DATA CORE IMPORTS
import OnyxAdmin from './pages/OnyxAdmin';
import Home from './pages/Home';

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
      {/* Target Route: Onyx Admin Control Tower Control Deck */}
      <Route 
        path="/onyx-control-tower" 
        element={<OnyxAdmin navigateToNode={navigateToNode} />} 
      />

      {/* Target Route: Core Application Framework Landing Node */}
      <Route 
        path="/" 
        element={<Home currentPath={currentPath} navigateToNode={navigateToNode} />} 
      />
    </Routes>
  );
}
