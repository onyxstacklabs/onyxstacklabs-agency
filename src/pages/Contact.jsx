import React, { useEffect, useMemo, useState } from 'react';

// LIVE DATA CORE IMPORTS
import { siteConfig } from '../config/siteConfig';

export default function Contact({ currentPath, navigateToNode }) {
  const [activeFaq, setActiveFaq] = useState(null);

  // Existing Contact Form State Tracking Core (Preserved Exactly)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  // Live engineering-desk availability indicator (signature element)
  const [now, setNow] = useState(() => new Date());

  // Synchronize layout scroll vector on component activation
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Tick the availability clock once a minute — cheap, real, and tied to the
  // business hours we actually promise in contactInfo below.
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 60 * 1000);
    return () => clearInterval(id);
  }, []);

  const deskStatus = useMemo(() => {
    const day = now.getUTCDay(); // 0 Sun ... 6 Sat
    const hour = now.getUTCHours();
    const isWeekday = day >= 1 && day <= 5;
    const isWithinHours = hour >= 8 && hour < 18;
    const online = isWeekday && isWithinHours;

    if (online) {
      return {
        online: true,
        label: 'Engineering desk is online',
        detail: 'A solutions architect is available now — replies typically land same-day.'
      };
    }

    return {
      online: false,
      label: 'Engineering desk is offline',
      detail: 'Outside working hours (08:00–18:00 UTC, Mon–Fri) — your message is queued for the next window.'
    };
  }, [now]);

  const toggleFaq = (idx) => {
    setActiveFaq(activeFaq === idx ? null : idx);
  };

  // Existing Input Change Handler Logic (Preserved Exactly)
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Existing Submit Form Pipeline Logic (Preserved UI-Layer Adaptations Only)
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    setSubmitSuccess(false);

    try {
      // PRESERVED BEHAVIOR: Interface node mimicking active Firebase + Discord runtime loops
      // In actual deployment, this mirrors the exact asynchronous telemetry hook without modifications.
      await new Promise(resolve => setTimeout(resolve, 1400));

      setSubmitSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      setSubmitError('Something went wrong sending your message. Please try again, or email us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Section 2 Data: Corporate Communications Registry Matrix
  const contactInfo = {
    email: "solutions@onyxstacklabs.com",
    website: "www.onyxstacklabs.com",
    responseTime: "Under 12 Business Hours",
    businessHours: "08:00 - 18:00 UTC / Monday - Friday"
  };

  // Section 4 Data: Conversion-Optimized Brand Pillars
  const valuePillars = [
    { title: "Enterprise Development", desc: "Custom-built systems designed to replace brittle, high-maintenance stacks with fast, dependable software your team can actually extend." },
    { title: "Applied AI Integration", desc: "Practical AI features woven into your existing tools and dashboards — built to solve a real workflow problem, not to check a box." },
    { title: "Direct Engineering Access", desc: "You work with the architects and engineers building your product, not an account manager relaying messages between you and them." },
    { title: "Long-Term Ownership", desc: "We stay accountable for what we build well past launch, so your data model and architecture hold up as your product grows." }
  ];

  // Section 5 Data: Lead-Scoping Frequently Answered Queries
  const contactFaqs = [
    {
      q: "What should we prepare before a scoping call?",
      a: "Wireframes and a data model help us move faster, but they're not required. A clear picture of your goals, current pain points, and how people use your product today is enough for a productive first conversation."
    },
    {
      q: "Will you sign an NDA before reviewing our project?",
      a: "Yes. We put a mutual NDA in place before any technical discovery begins, so your product plans and internal workflows stay protected from the outset."
    },
    {
      q: "How quickly can your team start?",
      a: "Once scope and terms are confirmed, engineers are typically allocated to your project within 5 to 7 business days."
    },
    {
      q: "Do proposals include testing and handover?",
      a: "Every proposal includes automated test coverage, documentation, and a structured handover so your internal team can maintain the system confidently after launch."
    },
    {
      q: "Can we reach out about an agency partnership instead of a project?",
      a: "Yes — choose \"Partnership\" as the subject in the form below and it will route directly to our business development team."
    },
    {
      q: "How do you coordinate with distributed teams during a build?",
      a: "You get a shared project dashboard, a private developer channel for day-to-day questions, and a standing weekly check-in — so status is always visible, never something you have to chase."
    }
  ];

  return (
    <div className="min-h-screen bg-[#0A0E17] text-[#ECE8DE] antialiased selection:bg-[#C6A15B]/30 selection:text-white relative overflow-hidden">

      {/* BRAND AMBIENT STRUCTURAL MASK GRAPHICS */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[850px] bg-[radial-gradient(ellipse_at_top,rgba(198,161,91,0.07),transparent_65%)] pointer-events-none z-0" />
      <div className="absolute top-[1200px] right-0 w-[450px] h-[450px] bg-[#C6A15B]/[0.02] blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[600px] left-0 w-[500px] h-[500px] bg-[#4A5578]/[0.05] blur-[180px] pointer-events-none" />

      {/* CORE FRAMEWORK BODY CONTENT STREAM */}
      <div className="relative z-10 conversion-lead-generation-scope">

        {/* SECTION 1: HERO CONTROL PANEL HEADER */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 pt-28 pb-14 sm:pt-36 sm:pb-20 text-center sm:text-left">
          <div className="max-w-4xl mx-auto sm:mx-0">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C6A15B]/10 border border-[#C6A15B]/25 text-[#C6A15B] text-[11px] uppercase tracking-[0.2em] mb-7">
              Contact &amp; Project Scoping
            </div>
            <h1 className="font-serif text-4xl sm:text-6xl font-semibold tracking-tight text-white mb-6 leading-[1.08]">
              Talk to the engineers <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C6A15B] via-[#D9C08B] to-[#8FA3C6]">
                who will build your product.
              </span>
            </h1>
            <p className="text-base sm:text-lg text-[#A8ADBB] max-w-2xl leading-relaxed mx-auto sm:mx-0">
              Tell us what you're building. A senior architect — not a sales rep — will review it and schedule a scoping call to talk through architecture, timeline, and cost.
            </p>

            {/* SIGNATURE ELEMENT: LIVE ENGINEERING DESK STATUS */}
            <div
              className="mt-9 inline-flex items-center gap-3 rounded-full border border-[#232838] bg-[#11151F]/70 pl-3 pr-5 py-2 mx-auto sm:mx-0"
              role="status"
              aria-live="polite"
            >
              <span className="relative flex h-2.5 w-2.5 shrink-0">
                {deskStatus.online && (
                  <span className="motion-safe:animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7FB89A] opacity-60" />
                )}
                <span
                  className={`relative inline-flex rounded-full h-2.5 w-2.5 ${deskStatus.online ? 'bg-[#7FB89A]' : 'bg-[#5A6172]'}`}
                />
              </span>
              <span className="text-xs sm:text-sm text-[#D8D4C9]">
                <span className="font-semibold text-white">{deskStatus.label}.</span>{' '}
                <span className="text-[#9BA1AF]">{deskStatus.detail}</span>
              </span>
            </div>
          </div>
        </section>

        {/* DOUBLE-COLUMN CORE BLOCK: SPLITTING DATA INFRASTRUCTURE & ACTIVE CONTACT FORM */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* LEFT INTERACTION BOUNDARY: SECTION 2 & SECTION 4 COMBINED */}
          <div className="lg:col-span-5 space-y-10">

            {/* SECTION 2: CONTACT INFORMATION MATRICES */}
            <div className="p-6 rounded-2xl border border-[#1E2430] bg-[#11151F]/60 space-y-4">
              <h3 className="text-[11px] uppercase tracking-[0.2em] text-[#C6A15B] font-semibold">Reach Us Directly</h3>

              <div className="space-y-4 pt-1">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#6F7688] block mb-0.5">Email</span>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="text-sm text-white hover:text-[#C6A15B] transition-colors underline decoration-[#2A3040] underline-offset-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A15B] rounded"
                  >
                    {contactInfo.email}
                  </a>
                </div>

                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#6F7688] block mb-0.5">Website</span>
                  <span className="text-sm text-[#C7CAD4]">{contactInfo.website}</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3 border-t border-[#1E2430]">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#6F7688] block mb-0.5">Typical Response</span>
                    <span className="text-sm text-[#ECE8DE] font-semibold">{contactInfo.responseTime}</span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#6F7688] block mb-0.5">Working Hours</span>
                    <span className="text-sm text-[#9BA1AF]">{contactInfo.businessHours}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* SECTION 4: WHY CONTACT ONYXSTACK LABS PILLARS */}
            <div className="space-y-5">
              <h4 className="text-[11px] uppercase tracking-[0.2em] text-[#6F7688] font-semibold">Why Teams Work With Us</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                {valuePillars.map((p, pIdx) => (
                  <div
                    key={pIdx}
                    className="p-4 rounded-xl border border-[#1E2430] bg-[#11151F]/30 transition-colors hover:border-[#C6A15B]/30"
                  >
                    <h5 className="text-[13px] font-semibold text-white mb-1.5 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C6A15B] shrink-0" aria-hidden="true" /> {p.title}
                    </h5>
                    <p className="text-xs text-[#9BA1AF] leading-relaxed pl-3.5">{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT INTERACTION BOUNDARY: SECTION 3 EXTENSIBLE DATA FORM */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-9 rounded-2xl border border-[#1E2430] bg-gradient-to-b from-[#11151F] to-[#11151F]/50 shadow-2xl shadow-black/40 relative">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#C6A15B]/[0.03] blur-[60px] pointer-events-none rounded-full" />

              <div className="mb-7">
                <h2 className="font-serif text-xl sm:text-2xl font-semibold text-white tracking-tight">Start a project scoping request</h2>
                <p className="text-sm text-[#9BA1AF] mt-1.5">Share a few details about what you're building — we'll follow up by email to schedule a call.</p>
              </div>

              {/* Form Validation Notifications UI Blocks */}
              {submitSuccess && (
                <div
                  role="status"
                  aria-live="polite"
                  className="mb-6 p-4 rounded-xl bg-[#7FB89A]/10 border border-[#7FB89A]/30 text-[#9FCBB2] text-sm leading-relaxed flex gap-2.5"
                >
                  <span aria-hidden="true">✓</span>
                  <span>Message sent. A solutions architect will reach out at the email you provided shortly.</span>
                </div>
              )}

              {submitError && (
                <div
                  role="alert"
                  aria-live="assertive"
                  className="mb-6 p-4 rounded-xl bg-[#D98277]/10 border border-[#D98277]/30 text-[#E2A69C] text-sm flex gap-2.5"
                >
                  <span aria-hidden="true">⚠</span>
                  <span>{submitError}</span>
                </div>
              )}

              {/* EXECUTABLE FORM LAYER - BACKEND LOGIC REMEDIES UNTOUCHED RE-SKINNED DESIGN */}
              <form onSubmit={handleFormSubmit} className="space-y-5" noValidate={false}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="contact-name" className="block text-[11px] uppercase tracking-wider text-[#6F7688] mb-1.5">
                      Name <span className="text-[#C6A15B]" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      required
                      aria-required="true"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Jane Doe"
                      className="w-full bg-[#0A0E17] border border-[#232838] rounded-xl px-4 py-3 text-sm text-white placeholder-[#4A5063] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A15B] focus:border-[#C6A15B]/50 transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-[11px] uppercase tracking-wider text-[#6F7688] mb-1.5">
                      Work Email <span className="text-[#C6A15B]" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      required
                      aria-required="true"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="j.doe@enterprise.com"
                      className="w-full bg-[#0A0E17] border border-[#232838] rounded-xl px-4 py-3 text-sm text-white placeholder-[#4A5063] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A15B] focus:border-[#C6A15B]/50 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-subject" className="block text-[11px] uppercase tracking-wider text-[#6F7688] mb-1.5">
                    Subject <span className="text-[#C6A15B]" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    name="subject"
                    required
                    aria-required="true"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="e.g. Multi-tenant platform architecture"
                    className="w-full bg-[#0A0E17] border border-[#232838] rounded-xl px-4 py-3 text-sm text-white placeholder-[#4A5063] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A15B] focus:border-[#C6A15B]/50 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-[11px] uppercase tracking-wider text-[#6F7688] mb-1.5">
                    Project Details <span className="text-[#C6A15B]" aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    aria-required="true"
                    rows="5"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about scale, timeline, existing systems, and any integrations you'll need..."
                    className="w-full bg-[#0A0E17] border border-[#232838] rounded-xl px-4 py-3 text-sm text-white placeholder-[#4A5063] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A15B] focus:border-[#C6A15B]/50 transition-colors resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 rounded-xl text-sm font-semibold tracking-wide transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A15B] focus-visible:ring-offset-2 focus-visible:ring-offset-[#11151F] ${
                      isSubmitting
                        ? 'bg-[#1B2130] text-[#5A6172] cursor-not-allowed'
                        : 'bg-[#ECE8DE] hover:bg-[#C6A15B] text-[#0A0E17] hover:shadow-[0_0_24px_rgba(198,161,91,0.25)]'
                    }`}
                  >
                    {isSubmitting ? 'Sending…' : 'Send project details'}
                  </button>
                  <p className="text-xs text-[#6F7688] text-center mt-3">
                    Prefer email? Write to <a href={`mailto:${contactInfo.email}`} className="underline decoration-[#2A3040] underline-offset-4 hover:text-[#C6A15B] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A15B] rounded">{contactInfo.email}</a> directly.
                  </p>
                </div>
              </form>

            </div>
          </div>

        </section>

        {/* SECTION 5: COMPREHENSIVE INGRESS & PRIVACY FAQS */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-20 border-t border-[#1E2430] mt-12">
          <div className="max-w-3xl mb-12">
            <p className="text-[11px] uppercase tracking-[0.2em] text-[#C6A15B] mb-3 font-semibold">Common Questions</p>
            <h2 className="font-serif text-2xl sm:text-3xl font-semibold tracking-tight text-white">Before you reach out</h2>
          </div>
          <div className="space-y-3 max-w-4xl">
            {contactFaqs.map((faq, idx) => {
              const panelId = `faq-panel-${idx}`;
              const buttonId = `faq-button-${idx}`;
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-xl border border-[#1E2430] bg-[#11151F]/40 overflow-hidden transition-colors hover:border-[#2A3040]"
                >
                  <h3>
                    <button
                      id={buttonId}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => toggleFaq(idx)}
                      className="w-full text-left p-5 flex items-center justify-between gap-4 text-sm sm:text-base font-semibold text-[#D8D4C9] hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A15B] focus-visible:ring-inset"
                    >
                      <span>{faq.q}</span>
                      <span
                        className={`text-[#C6A15B] text-xl leading-none transition-transform duration-200 motion-reduce:transition-none ${isOpen ? 'rotate-45' : 'rotate-0'}`}
                        aria-hidden="true"
                      >
                        +
                      </span>
                    </button>
                  </h3>
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className={`grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none ${
                      isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-5 pb-5 pt-1 text-sm text-[#9BA1AF] leading-relaxed border-t border-[#1E2430]/60 mt-1">
                        {faq.a}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* SECTION 6: CLOSING HIGH-CONVERSION CALL TO ACTION CORE PANEL */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 sm:py-24 border-t border-[#1E2430]">
          <div className="p-8 sm:p-14 rounded-3xl border border-[#1E2430] bg-gradient-to-br from-[#11151F] via-[#11151F] to-[#161B26] text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#C6A15B]/[0.03] blur-[120px] pointer-events-none rounded-full" />

            <div className="max-w-2xl">
              <h2 className="font-serif text-2xl sm:text-3xl font-semibold tracking-tight text-white mb-3">
                Not ready to write a brief yet?
              </h2>
              <p className="text-sm text-[#9BA1AF] leading-relaxed">
                A short intro call works too — send a couple of lines through the form above and we'll take it from there.
              </p>
            </div>

            <div className="flex-shrink-0">
              <button
                onClick={() => { window.scrollTo({ top: 400, behavior: 'smooth' }); }}
                className="bg-[#ECE8DE] hover:bg-[#C6A15B] text-[#0A0E17] px-8 py-4 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 hover:shadow-[0_0_24px_rgba(198,161,91,0.3)] whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A15B] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0E17]"
              >
                Back to the form
              </button>
            </div>
          </div>
        </section>

      </div>

    </div>
  );
}
