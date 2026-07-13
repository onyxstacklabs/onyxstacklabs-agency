import React, { useState, useEffect } from 'react';

// LIVE DATA CORE IMPORTS
import { transmitLeadToFirebase } from '../config/firebase';
import { siteConfig } from '../config/siteConfig';

// MODULAR DETACHED COMPONENT ARCHITECTURE LAYER
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import WhyChooseUs from '../components/WhyChooseUs';
import Process from '../components/Process';
import TechStack from '../components/TechStack';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

export default function Home({ currentPath, navigateToNode }) {
  const [activeSection, setActiveSection] = useState('');

  // Monitor scroll spies safely across viewports
  useEffect(() => {
    const handleScrollSpy = () => {
      const sections = ['services', 'portfolio', 'why-choose-us', 'process', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScrollSpy);
    return () => {
      window.removeEventListener('scroll', handleScrollSpy);
    };
  }, []);

  // Lead Generation State Architecture
  const [formData, setFormData] = useState({
    companyName: '',
    email: '',
    phone: '',
    details: '',
    budget: 'Standard MVP ($1,000 - $2,000)'
  });
  
  const [submissionState, setSubmissionState] = useState('IDLE'); 
  const [errors, setErrors] = useState({});

  // Core Services Array derived from site parameters
  const coreServices = [
    {
      icon: (
        <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
        </svg>
      ),
      title: "Custom Web Applications",
      description: "Engineered from the ground up using React and Vite for blazing-fast performance, elite responsiveness, and clean code maintainability."
    },
    {
      icon: (
        <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
        </svg>
      ),
      title: "Android Applications",
      description: "Feature-rich mobile cross-platform blueprints optimized for high user adoption, modern interface dynamics, and flawless cloud data synchronization."
    },
    {
      icon: (
        <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 21l8.904-4.473L21 9l-3.383-3.383m-7.804 10.287l3.383-3.383m-3.383 3.383L3 14l6.813-6.813M16.5 6.5L18 5m-1.5 1.5L15 8m1.5-1.5l1.5 1.5m-1.5-1.5L13.5 5" />
        </svg>
      ),
      title: "AI & Business Automation",
      description: "Integrate premium artificial intelligence frameworks like Gemini AI to read unstructured text, optimize manual pipelines, and save thousands of operational hours."
    },
    {
      icon: (
        <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
        </svg>
      ),
      title: "Management Systems (ERP)",
      description: "Tailored enterprise solutions designed for complex organizational requirements, real-time balance accounts, and complete operational command."
    }
  ];

  const valueProps = [
    { title: "Fast Delivery", desc: "No bloated timelines. We deploy hyper-optimized MVP configurations and custom software quickly without taking shortcut measures on code health." },
    { title: "Modern UI", desc: "Interfaces polished for premium engagement. Your applications will naturally match the world-class design languages of Vercel, Stripe, and Linear." },
    { title: "Scalable Architecture", desc: "Built safely using flexible relational clusters inside Google Cloud Firebase to handle sudden market expansions and concurrent customer loads." },
    { title: "Dedicated Support", desc: "We act as your technical engineering partners, maintaining code iterations, regular visual design updates, and structural balance verification." },
    { title: "AI Solutions", desc: "Next-generation deep intelligence vectors embedded natively to transform regular applications into context-aware systems." },
    { title: "Enterprise Security", desc: "Defensive code-structuring strategies keeping access tokens, pipeline sync logs, and dynamic web payloads tightly contained." }
  ];

  const deliveryProcess = [
    { step: "01", label: "Discovery", desc: "Deep diving into your commercial business workflow parameters, identifying major operational friction points." },
    { step: "02", label: "Planning", desc: "Mapping explicit technical blueprints, chosen tech stack components, and predictable deployment milestones." },
    { step: "03", label: "Design", desc: "Crafting beautiful high-fidelity software visual aesthetics prioritizing breathing room and clean scannability." },
    { step: "04", label: "Development", desc: "Writing optimized frontend React components and secure backend architecture rules under continuous testing." },
    { step: "05", label: "Testing", desc: "Comprehensive structural verification loops ensuring zero broken navigation gates or payload drops." },
    { step: "06", label: "Deployment", desc: "Launching your custom system safely to live cloud infrastructures like Vercel with absolute domain mapping." }
  ];

  const techStackBadges = [
    "React", "Vite", "Firebase", "Tailwind CSS", "Gemini AI", "JavaScript (ES6+)", "HTML5 / CSS3", "Responsive Strategy", "API Architecture", "Cloud Firestore", "Git Versioning", "Vercel Cloud"
  ];

  const validateForm = () => {
    let tempErrors = {};
    if (!formData.companyName.trim()) tempErrors.companyName = "Company name is required to initialize.";
    if (!formData.email.trim()) {
      tempErrors.email = "Email address is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Please input a valid email address.";
    }
    if (!formData.phone.trim()) tempErrors.phone = "Phone verification contact is required.";
    if (!formData.details.trim()) tempErrors.details = "Please share some basic project requirements.";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const triggerDiscordNotification = async (payload) => {
    const DISCORD_WEBHOOK_URL = "https://discord.com/api/webhooks/1524387978846142494/O6FRnbl8XQmgBuMlB4P3HubPI9oUJ-Thcv4SoAEiQ9lCiDBCAeB9MxdVybF1QHkNEWqa";
    
    const discordPayload = {
      username: "OnyxStack Control Tower",
      avatar_url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=150",
      embeds: [
        {
          title: "🛑 NEW TRANSMISSION DETECTED: INCOMING LEAD",
          color: 62206, 
          fields: [
            { name: "🏢 Company Name", value: `**${payload.companyName}**`, inline: true },
            { name: "📧 Client Email", value: payload.email, inline: true },
            { name: "📱 Contact Number", value: payload.phone, inline: true },
            { name: "💰 Allocation Target", value: `\`${payload.budget}\``, inline: true },
            { name: "🔬 Scope Anchor Details", value: payload.details }
          ],
          footer: { text: "OnyxStack Labs • Infrastructure Automation Engine" },
          timestamp: new Date().toISOString()
        }
      ]
    };

    try {
      await fetch(DISCORD_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(discordPayload)
      });
    } catch (error) {
      console.error("Discord transmission dropped:", error);
    }
  };

  const handleLeadFormTransmission = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      alert("Validation Failed. Check required input nodes.");
      return;
    }

    setSubmissionState('SUBMITTING');
    const response = await transmitLeadToFirebase(formData);

    if (response.success) {
      await triggerDiscordNotification(formData);
      alert(`Verification Success!\nCompany: ${formData.companyName}\nSync Node Token: ${response.nodeRef}`);
      setSubmissionState('SUCCESS');
      setFormData({
        companyName: '',
        email: '',
        phone: '',
        details: '',
        budget: 'Standard MVP ($1,000 - $2,000)'
      });
      setErrors({});
    } else {
      alert(`Fatal Transmission Interrupt: ${response.error}`);
      setSubmissionState('IDLE');
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-neutral-100 font-sans antialiased selection:bg-[#06B6D4] selection:text-black scroll-smooth">
      
      {/* Backdrop Ambient Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[700px] bg-[radial-gradient(ellipse_at_top,rgba(6,182,212,0.08),transparent_60%)] pointer-events-none z-0" />
      <div className="absolute top-[1500px] right-0 w-[500px] h-[500px] bg-[#2563EB]/[0.03] blur-[160px] pointer-events-none" />
      <div className="absolute bottom-[600px] left-0 w-[600px] h-[600px] bg-[#06B6D4]/[0.02] blur-[200px] pointer-events-none" />

      {/* MODULAR REFACTORED SECTIONS */}
      <Navbar 
        currentPath={currentPath} 
        activeSection={activeSection} 
        navigateToNode={navigateToNode} 
        siteConfig={siteConfig} 
      />
      
      <Hero />
      
      <Services coreServices={coreServices} />
      
      <Portfolio projects={siteConfig.projects} />
      
      <WhyChooseUs valueProps={valueProps} />
      
      <Process deliveryProcess={deliveryProcess} />
      
      <TechStack techStackBadges={techStackBadges} />
      
      <ContactForm 
        formData={formData}
        setFormData={setFormData}
        submissionState={submissionState}
        setSubmissionState={setSubmissionState}
        errors={errors}
        handleLeadFormTransmission={handleLeadFormTransmission}
        siteConfig={siteConfig}
      />
      
      <Footer siteConfig={siteConfig} />

    </div>
  );
}
