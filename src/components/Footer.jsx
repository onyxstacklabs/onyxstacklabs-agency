// Footer.jsx
import React from 'react';

export default function Footer({ siteConfig }) {
  // Gracefully handles structural anchoring if a visitor triggers a link from an absolute subroute
  const handleFooterNavClick = (e, target) => {
    if (target.startsWith('#')) {
      const currentPath = window.location.pathname;
      if (currentPath !== '/') {
        e.preventDefault();
        // Redirect to home with the hash appended to allow correct route initialization
        window.location.href = '/' + target;
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

  const legalLinks = [
    { label: 'Privacy Policy', target: '/privacy-policy' },
    { label: 'Terms & Conditions', target: '/terms-conditions' },
    { label: 'Sitemap', target: '/sitemap.xml' }
  ];

  const email = siteConfig?.contactEmail || 'onyxstacklabs@gmail.com';
  const website = siteConfig?.website || 'www.onyxstacklabs.com';
  const phone = siteConfig?.contactPhone || '+92 344 5800630';

  return (
    <footer
      className="relative border-t border-[#1E293B] bg-[#05070B] pt-16 pb-10 px-6 md:px-12 z-10 overflow-hidden text-slate-200 antialiased"
      aria-label="Site Footer"
    >
      {/* Ambient premium background glows, matching the enterprise layout */}
      <div
        className="absolute top-0 left-1/3 w-[500px] h-[300px] bg-[radial-gradient(circle,rgba(6,182,212,0.06)_0%,transparent_70%)] blur-[100px] rounded-full pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-10 w-[300px] h-[200px] bg-[radial-gradient(circle,rgba(37,99,235,0.04)_0%,transparent_70%)] blur-[80px] rounded-full pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12">

          {/* COMPANY */}
          <div className="sm:col-span-2 lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-[#06B6D4] shadow-[0_0_12px_rgba(6,182,212,0.8)]" aria-hidden="true" />
              <span className="text-sm font-black tracking-wider text-white uppercase font-sans">
                {siteConfig?.agencyName || 'OnyxStack Labs'}
              </span>
            </div>
            <p className="text-[10px] font-mono text-[#06B6D4] uppercase tracking-[0.2em] font-bold">
              Building Smarter Solutions
            </p>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              A premium enterprise software agency engineering custom platforms, cloud
              infrastructure, and applied AI for businesses that plan to be around a long time.
            </p>
          </div>

          {/* QUICK LINKS */}
          <nav className="lg:col-span-2 space-y-4" aria-label="Quick Links">
            <h3 className="text-[11px] uppercase tracking-[0.2em] text-slate-500 font-mono font-bold">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm text-slate-400">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.target}
                    onClick={(e) => handleFooterNavClick(e, link.target)}
                    className="hover:text-[#06B6D4] focus:text-[#06B6D4] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#06B6D4] rounded transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* LEGAL */}
          <nav className="lg:col-span-2 space-y-4" aria-label="Legal">
            <h3 className="text-[11px] uppercase tracking-[0.2em] text-slate-500 font-mono font-bold">
              Legal
            </h3>
            <ul className="space-y-3 text-sm text-slate-400">
              {legalLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.target}
                    className="hover:text-[#06B6D4] focus:text-[#06B6D4] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#06B6D4] rounded transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* CONTACT - Enhanced Premium Card Depth & Enterprise Glass Treatment */}
          <section className="lg:col-span-4 space-y-4" aria-label="Contact Information">
            <h3 className="text-[11px] uppercase tracking-[0.2em] text-slate-500 font-mono font-bold">
              Contact
            </h3>
            <div className="p-6 rounded-2xl border border-[#1E293B] bg-[#0F172A]/80 shadow-[inset_0_2px_4px_rgba(0,0,0,0.5),0_10px_30px_rgba(0,0,0,0.3)] backdrop-blur-md space-y-4 hover:border-[#06B6D4]/30 transition-all duration-500 group relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#06B6D4]/10 to-transparent" />
              
              <div>
                <span className="text-[9px] font-mono uppercase tracking-widest text-[#06B6D4] block mb-1 font-bold">Email</span>
                <a
                  href={`mailto:${email}`}
                  className="text-sm text-white hover:text-[#06B6D4] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#06B6D4] rounded transition-colors duration-200 break-all font-sans"
                >
                  {email}
                </a>
              </div>
              
              <div>
                <span className="text-[9px] font-mono uppercase tracking-widest text-[#06B6D4] block mb-1 font-bold">Phone / WhatsApp</span>
                <a
                  href={`tel:${phone.replace(/\s+/g, '')}`}
                  className="text-sm text-white hover:text-[#06B6D4] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#06B6D4] rounded transition-colors duration-200 font-sans"
                >
                  {phone}
                </a>
              </div>
              
              <div>
                <span className="text-[9px] font-mono uppercase tracking-widest text-[#06B6D4] block mb-1 font-bold">Website</span>
                <span className="text-sm text-slate-300 font-mono">{website}</span>
              </div>
              
              <div>
                <span className="text-[9px] font-mono uppercase tracking-widest text-[#06B6D4] block mb-1 font-bold">Headquarters</span>
                <span className="text-sm text-slate-300">Pakistan</span>
              </div>
            </div>
          </section>
        </div>

        {/* SOCIAL + COPYRIGHT STRIP */}
        <div className="border-t border-[#1E293B] pt-8 flex flex-col sm:flex-row justify-between items-center gap-6">

          <nav
            className="flex flex-wrap items-center justify-center gap-4"
            aria-label="Social Media Links"
          >
            {/* GitHub */}
            <a
              href="https://github.com/onyxstacklabs"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-9 h-9 rounded-xl border border-[#1E293B] bg-[#0F172A]/50 text-slate-400 hover:text-[#06B6D4] hover:border-[#06B6D4]/30 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#06B6D4] transition-all duration-300 shadow-[inset_0_1px_2px_rgba(255,255,255,0.05)]"
              aria-label="OnyxStack Labs on GitHub"
            >
              <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </a>

            {/* LinkedIn */}
            {siteConfig?.socialLinks?.linkedin && (
              <a
                href={siteConfig.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 rounded-xl border border-[#1E293B] bg-[#0F172A]/50 text-slate-400 hover:text-[#06B6D4] hover:border-[#06B6D4]/30 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#06B6D4] transition-all duration-300 shadow-[inset_0_1px_2px_rgba(255,255,255,0.05)]"
                aria-label="OnyxStack Labs on LinkedIn"
              >
                <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            )}

            {/* Facebook */}
            {siteConfig?.socialLinks?.facebook && (
              <a
                href={siteConfig.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 rounded-xl border border-[#1E293B] bg-[#0F172A]/50 text-slate-400 hover:text-[#06B6D4] hover:border-[#06B6D4]/30 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#06B6D4] transition-all duration-300 shadow-[inset_0_1px_2px_rgba(255,255,255,0.05)]"
                aria-label="OnyxStack Labs on Facebook"
              >
                <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            )}

            {/* Instagram */}
            {siteConfig?.socialLinks?.instagram && (
              <a
                href={siteConfig.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 rounded-xl border border-[#1E293B] bg-[#0F172A]/50 text-slate-400 hover:text-[#06B6D4] hover:border-[#06B6D4]/30 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#06B6D4] transition-all duration-300 shadow-[inset_0_1px_2px_rgba(255,255,255,0.05)]"
                aria-label="OnyxStack Labs on Instagram"
              >
                <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                </svg>
              </a>
            )}

            {/* YouTube */}
            {siteConfig?.socialLinks?.youtube && (
              <a
                href={siteConfig.socialLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 rounded-xl border border-[#1E293B] bg-[#0F172A]/50 text-slate-400 hover:text-[#06B6D4] hover:border-[#06B6D4]/30 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#06B6D4] transition-all duration-300 shadow-[inset_0_1px_2px_rgba(255,255,255,0.05)]"
                aria-label="OnyxStack Labs on YouTube"
              >
                <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93 .502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            )}

            {/* TikTok */}
            {siteConfig?.socialLinks?.tiktok && (
              <a
                href={siteConfig.socialLinks.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 rounded-xl border border-[#1E293B] bg-[#0F172A]/50 text-slate-400 hover:text-[#06B6D4] hover:border-[#06B6D4]/30 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#06B6D4] transition-all duration-300 shadow-[inset_0_1px_2px_rgba(255,255,255,0.05)]"
                aria-label="OnyxStack Labs on TikTok"
              >
                <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.02 1.59 4.23.94 1.15 2.25 1.95 3.67 2.31v3.7c-1.35-.14-2.68-.67-3.79-1.48-.69-.51-1.28-1.15-1.74-1.89-.04 1.96-.02 3.91-.03 5.87 0 2.05-.44 4.15-1.57 5.87-1.32 2.04-3.61 3.44-6.04 3.53-2.61.16-5.27-.85-6.83-2.95-1.69-2.22-1.92-5.46-.6-7.89 1.13-2.11 3.42-3.53 5.81-3.65.01 1.28-.01 2.56-.01 3.84-1.27.05-2.54.73-3.16 1.84-.74 1.26-.54 3 .47 4.05.99 1.05 2.65 1.16 3.77.24.87-.69 1.28-1.83 1.26-2.94-.01 4.13-.01-8.26-.01-12.39z" />
                </svg>
              </a>
            )}

            {/* WhatsApp */}
            {siteConfig?.socialLinks?.whatsapp && (
              <a
                href={siteConfig.socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 rounded-xl border border-[#1E293B] bg-[#0F172A]/50 text-[#06B6D4] hover:text-cyan-300 hover:border-[#06B6D4]/40 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#06B6D4] transition-all duration-300 shadow-[inset_0_1px_2px_rgba(255,255,255,0.05)]"
                aria-label="OnyxStack Labs on WhatsApp"
              >
                <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397 0 11.966 0c3.178.001 6.169 1.24 8.419 3.496 2.25 2.255 3.488 5.248 3.487 8.425-.004 6.616-5.34 11.965-11.912 11.965-1.996-.001-3.963-.502-5.716-1.458L0 24zm6.588-3.418l.366.218c1.5.892 3.314 1.363 5.166 1.364h.006c5.52 0 10.011-4.505 10.014-10.04a9.92 9.92 0 0 0-2.914-7.094A9.855 9.855 0 0 0 11.966 1.96c-5.522 0-10.015 4.508-10.018 10.043-.001 1.865.485 3.689 1.409 5.3l.239.417-1.002 3.662 3.753-.989zM18.06 14.85c-.333-.167-1.97-.974-2.278-1.087-.308-.113-.532-.167-.756.167-.224.334-.868 1.087-1.064 1.313-.196.226-.392.254-.725.087-1.361-.682-2.333-1.181-3.238-2.73-.241-.413.241-.383.69-.1.403.253.392.424.588.756.196.334.098.623-.05.924-.147.302-.756 1.821-.924 2.226-.164.394-.329.34-.45.34h-.382c-.132 0-.346-.049-.527-.247-.182-.198-.693-.677-.693-1.652 0-.975.709-1.916.821-2.066.112-.15 1.396-2.132 3.382-2.99.473-.204.843-.326 1.131-.418.475-.152.907-.13 1.25-.181.382-.057 1.173-.48 1.338-.943.165-.463.165-.86.116-.943-.049-.084-.182-.132-.515-.299z" />
                </svg>
              </a>
            )}
          </nav>

          <div className="text-xs text-slate-500 tracking-wide text-center sm:text-right font-mono">
            © 2026 OnyxStack Labs. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
