// Footer.jsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Footer({ siteConfig }) {
  const navigate = useNavigate();

  // Handle dynamic routing for anchor hashes vs absolute pages cleanly
  const handleFooterLinkClick = (e, target) => {
    if (target.startsWith('#')) {
      e.preventDefault();
      const elementId = target.substring(1);
      const currentPath = window.location.pathname;

      if (currentPath === '/') {
        const element = document.getElementById(elementId);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      } else {
        navigate('/');
        setTimeout(() => {
          const element = document.getElementById(elementId);
          if (element) element.scrollIntoView({ behavior: 'smooth' });
        }, 250);
      }
    }
  };

  const quickLinks = [
    { label: 'Home', target: '/' },
    { label: 'Services', target: '#services' },
    { label: 'Portfolio', target: '#portfolio' },
    { label: 'About', target: '/about' },
    { label: 'Contact', target: '/contact' }
  ];

  const resourceLinks = [
    { label: 'Projects', target: '/projects' },
    { label: 'Industries', target: '/industries' },
    { label: 'Pricing', target: '/pricing' },
    { label: 'Careers', target: '/careers' },
    { label: 'Insights & Blog', target: '/blog' }
  ];

  const legalLinks = [
    { label: 'Privacy Policy', target: '/privacy-policy' },
    { label: 'Terms & Conditions', target: '/terms-conditions' },
    { label: 'Cookies Policy', target: '/cookies-policy' }
  ];

  const email = siteConfig?.contactEmail || 'onyxstacklabs@gmail.com';
  const website = siteConfig?.website || 'www.onyxstacklabs.com';
  const phone = siteConfig?.contactPhone || '+92 344 5800630';

  return (
    <footer
      className="relative border-t border-[#1E293B] bg-[#05070B] pt-20 pb-12 px-6 md:px-12 z-10 overflow-hidden text-slate-200 antialiased"
      aria-label="Site Footer"
    >
      {/* Blueprint grid layout backdrop */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b08_1px,transparent_1px),linear-gradient(to_bottom,#1e293b08_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#1E293B] to-transparent pointer-events-none" 
        aria-hidden="true" 
      />

      {/* Background ambient light nodes */}
      <div
        className="absolute -top-40 left-1/4 w-[600px] h-[400px] bg-[radial-gradient(circle,rgba(6,182,212,0.07)_0%,transparent_70%)] blur-[120px] rounded-full pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-1/4 w-[500px] h-[300px] bg-[radial-gradient(circle,rgba(37,99,235,0.05)_0%,transparent_70%)] blur-[100px] rounded-full pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8 pb-16 items-stretch">

          {/* BRAND IDENTITY */}
          <div className="sm:col-span-2 lg:col-span-3 p-6 rounded-2xl border border-[#1E293B]/70 bg-[#0F172A]/40 backdrop-blur-md shadow-[inset_0_1px_1px_rgba(255,255,255,0.03)] flex flex-col justify-between group">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-[#06B6D4] shadow-[0_0_12px_rgba(6,182,212,0.8)]" aria-hidden="true" />
                <span className="text-sm font-black tracking-widest text-white uppercase font-sans">
                  {siteConfig?.agencyName || 'OnyxStack Labs'}
                </span>
              </div>
              <div className="space-y-3">
                <p className="text-[10px] font-mono text-[#06B6D4] uppercase tracking-[0.25em] font-bold">
                  Building Smarter Solutions
                </p>
                <p className="text-sm text-slate-400 leading-relaxed font-sans font-light">
                  A premium enterprise software agency engineering custom platforms, cloud
                  infrastructure, and applied AI automation.
                </p>
              </div>
            </div>
          </div>

          {/* QUICK LINKS */}
          <nav className="lg:col-span-2 p-6 rounded-2xl border border-[#1E293B]/70 bg-[#0F172A]/40 backdrop-blur-md" aria-label="Quick Links">
            <div className="space-y-6">
              <h3 className="text-[11px] uppercase tracking-[0.25em] text-slate-400 font-mono font-bold">
                Quick Links
              </h3>
              <ul className="space-y-4 text-sm text-slate-400">
                {quickLinks.map((link, idx) => (
                  <li key={idx}>
                    <Link
                      to={link.target}
                      onClick={(e) => handleFooterLinkClick(e, link.target)}
                      className="inline-block hover:text-[#06B6D4] hover:translate-x-1 transition-all duration-300 font-sans font-medium"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          {/* RESOURCES COLUMN */}
          <nav className="lg:col-span-2 p-6 rounded-2xl border border-[#1E293B]/70 bg-[#0F172A]/40 backdrop-blur-md" aria-label="Resources">
            <div className="space-y-6">
              <h3 className="text-[11px] uppercase tracking-[0.25em] text-slate-400 font-mono font-bold">
                Resources
              </h3>
              <ul className="space-y-4 text-sm text-slate-400">
                {resourceLinks.map((link, idx) => (
                  <li key={idx}>
                    <Link
                      to={link.target}
                      className="inline-block hover:text-[#06B6D4] hover:translate-x-1 transition-all duration-300 font-sans font-medium"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          {/* LEGAL COLUMN */}
          <nav className="lg:col-span-2 p-6 rounded-2xl border border-[#1E293B]/70 bg-[#0F172A]/40 backdrop-blur-md" aria-label="Legal">
            <div className="space-y-6">
              <h3 className="text-[11px] uppercase tracking-[0.25em] text-slate-400 font-mono font-bold">
                Legal
              </h3>
              <ul className="space-y-4 text-sm text-slate-400">
                {legalLinks.map((link, idx) => (
                  <li key={idx}>
                    <Link
                      to={link.target}
                      className="inline-block hover:text-[#06B6D4] hover:translate-x-1 transition-all duration-300 font-sans font-medium"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          {/* CONTACT INFO */}
          <section className="lg:col-span-3 p-6 rounded-2xl border border-[#1E293B]/70 bg-[#0F172A]/40 backdrop-blur-md" aria-label="Contact Information">
            <div className="space-y-6">
              <h3 className="text-[11px] uppercase tracking-[0.25em] text-slate-400 font-mono font-bold">
                Contact
              </h3>
              <div className="space-y-5">
                <div>
                  <span className="text-[9px] font-mono uppercase tracking-widest text-[#06B6D4] block mb-1 font-bold">Email</span>
                  <a href={`mailto:${email}`} className="text-sm text-white/90 hover:text-[#06B6D4] break-all font-sans font-semibold tracking-wide transition-colors">
                    {email}
                  </a>
                </div>
                
                <div>
                  <span className="text-[9px] font-mono uppercase tracking-widest text-[#06B6D4] block mb-1 font-bold">Phone / WhatsApp</span>
                  <a href={`tel:${phone.replace(/\s+/g, '')}`} className="text-sm text-white/90 hover:text-[#06B6D4] font-sans font-semibold tracking-wide transition-colors">
                    {phone}
                  </a>
                </div>
                
                <div className="grid grid-cols-2 gap-2 pt-4 border-t border-[#1E293B]/60">
                  <div>
                    <span className="text-[9px] font-mono uppercase tracking-widest text-[#06B6D4] block mb-1 font-bold">Website</span>
                    <span className="text-xs text-slate-300 font-mono font-medium truncate block">{website}</span>
                  </div>
                  <div>
                    <span className="text-[9px] font-mono uppercase tracking-widest text-[#06B6D4] block mb-1 font-bold">HQ</span>
                    <span className="text-xs text-slate-300 font-sans font-medium block">{siteConfig?.headquarters || 'Pakistan'}</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* SOCIAL & COPYRIGHT STRIP */}
        <div className="border-t border-[#1E293B] mt-6 pt-10 flex flex-col sm:flex-row justify-between items-center gap-6">
          <nav className="flex flex-wrap items-center justify-center gap-3.5" aria-label="Social Media Links">
            <a href="https://github.com/onyxstacklabs" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 rounded-xl border border-[#1E293B] bg-[#0F172A]/40 text-slate-400 hover:text-[#06B6D4] hover:border-[#06B6D4]/80 hover:scale-[1.06] transition-all duration-300" aria-label="GitHub">
              <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
            </a>
            {siteConfig?.socialLinks?.linkedin && (
              <a href={siteConfig.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 rounded-xl border border-[#1E293B] bg-[#0F172A]/40 text-slate-400 hover:text-[#06B6D4] hover:scale-[1.06] transition-all duration-300" aria-label="LinkedIn">
                <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
            )}
          </nav>
          <div className="text-xs text-slate-500 tracking-wider text-center sm:text-right font-mono font-medium">
            © 2026 OnyxStack Labs. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
