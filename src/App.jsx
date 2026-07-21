// src/App.jsx
import React, { useEffect, Suspense, lazy } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';

// LAYOUT SYSTEM IMPORT 
import MainLayout from './Layouts/MainLayout.jsx';

// DIRECT HOME IMPORT (FOR 0-DELAY INSTANT INITIAL RENDER)
import Home from './pages/Home';

// LAZY LOADED SECONDARY PAGES ONLY
const OnyxAdmin = lazy(() => import('./pages/OnyxAdmin'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Portfolio = lazy(() => import('./pages/Portfolio'));
const Contact = lazy(() => import('./pages/Contact'));
const Industries = lazy(() => import('./pages/Industries'));
const Projects = lazy(() => import('./pages/Projects'));
const Pricing = lazy(() => import('./pages/Pricing'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogArticle = lazy(() => import('./pages/BlogArticle'));
const Careers = lazy(() => import('./pages/Careers'));
const CookiesPolicy = lazy(() => import('./pages/CookiesPolicy'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsConditions = lazy(() => import('./pages/TermsConditions'));
const ThankYou = lazy(() => import('./pages/ThankYou'));
const NotFound = lazy(() => import('./pages/NotFound'));

// FAST FALLBACK LOADER
const PageLoader = () => (
  <div className="min-h-screen bg-[#050505] flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-cyan-500 border-t-transparent rounded-full animate-spin" />
  </div>
);

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
    <Suspense fallback={<PageLoader />}>
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
          {/* HOME PAGE DIRECT RENDER */}
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

          {/* FALLBACK ROUTING LAYER */}
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
    </Suspense>
  );
}
