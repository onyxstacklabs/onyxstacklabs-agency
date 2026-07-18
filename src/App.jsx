// src/App.jsx
import React, { useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';

// LAYOUT SYSTEM IMPORT 
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
  const currentPath = location.pathname;

  useEffect(() => {
    document.title = "OnyxStack Labs | Enterprise Software & AI Automation Agency";
  }, []);

  const navigateToNode = (path) => {
    navigate(path);
  };

  return (
    <Routes>
      <Route 
        path="/onyx-control-tower" 
        element={<OnyxAdmin navigateToNode={navigateToNode} />} 
      />

      <Route 
        element={
          <MainLayout 
            currentPath={currentPath} 
            activeSection="" 
            navigateToNode={navigateToNode} 
          />
        }
      >
        <Route 
          index 
          element={<Home currentPath={currentPath} navigateToNode={navigateToNode} />} 
        />
        <Route 
          path="/about" 
          element={<About currentPath={currentPath} navigateToNode={navigateToNode} />} 
        />
        <Route 
          path="/services" 
          element={<Services currentPath={currentPath} navigateToNode={navigateToNode} />} 
        />
        <Route 
          path="/portfolio" 
          element={<Portfolio currentPath={currentPath} navigateToNode={navigateToNode} />} 
        />
        <Route 
          path="/contact" 
          element={<Contact currentPath={currentPath} navigateToNode={navigateToNode} />} 
        />
        <Route 
          path="/industries" 
          element={<Industries currentPath={currentPath} navigateToNode={navigateToNode} />} 
        />
        <Route 
          path="/projects" 
          element={<Projects currentPath={currentPath} navigateToNode={navigateToNode} />} 
        />
        <Route 
          path="/pricing" 
          element={<Pricing currentPath={currentPath} navigateToNode={navigateToNode} />} 
        />
        <Route 
          path="/blog" 
          element={<Blog currentPath={currentPath} navigateToNode={navigateToNode} />} 
        />

        {/* FALLBACK ROUTING LAYER: Agar slug database mein na ho toh id ko bhi catch kr sky */}
        <Route 
          path="/blog/:slug" 
          element={<BlogArticle currentPath={currentPath} navigateToNode={navigateToNode} />} 
        />

        <Route 
          path="/careers" 
          element={<Careers currentPath={currentPath} navigateToNode={navigateToNode} />} 
        />
        <Route 
          path="/cookies-policy" 
          element={<CookiesPolicy currentPath={currentPath} navigateToNode={navigateToNode} />} 
        />
        <Route 
          path="/privacy-policy" 
          element={<PrivacyPolicy currentPath={currentPath} navigateToNode={navigateToNode} />} 
        />
        <Route 
          path="/terms-conditions" 
          element={<TermsConditions currentPath={currentPath} navigateToNode={navigateToNode} />} 
        />
        <Route 
          path="/thank-you" 
          element={<ThankYou currentPath={currentPath} navigateToNode={navigateToNode} />} 
        />
        <Route 
          path="*" 
          element={<NotFound />} 
        />
      </Route>
    </Routes>
  );
}
