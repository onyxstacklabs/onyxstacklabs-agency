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

  return (
    <footer
      className="relative border-t border-[#1E2430] bg-[#0A0E17] pt-16 pb-10 px-6 md:px-12 z-10 overflow-hidden"
      aria-label="Site Footer"
    >
      {/* Ambient background glow, consistent with the rest of the site */}
      <div
        className="absolute top-0 left-1/3 w-[500px] h-[300px] bg-[#C6A15B]/[0.04] blur-[130px] rounded-full pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12">

          {/* COMPANY */}
          <div className="sm:col-span-2 lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-[#C6A15B] shadow-[0_0_10px_rgba(198,161,91,0.6)]" aria-hidden="true" />
              <span className="text-sm font-semibold tracking-wide text-white">
                {siteConfig?.agencyName || 'OnyxStack Labs'}
              </span>
            </div>
            <p className="text-xs text-[#6F7688] uppercase tracking-[0.15em]">
              Building Smarter Solutions
            </p>
            <p className="text-sm text-[#9BA1AF] max-w-sm leading-relaxed">
              A premium enterprise software agency engineering custom platforms, cloud
              infrastructure, and applied AI for businesses that plan to be around a long time.
            </p>
          </div>

          {/* QUICK LINKS */}
          <nav className="lg:col-span-2 space-y-4" aria-label="Quick Links">
            <h3 className="text-[11px] uppercase tracking-[0.2em] text-[#6F7688] font-semibold">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm text-[#9BA1AF]">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.target}
                    onClick={(e) => handleFooterNavClick(e, link.target)}
                    className="hover:text-[#C6A15B] focus:text-[#C6A15B] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A15B] rounded transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* LEGAL */}
          <nav className="lg:col-span-2 space-y-4" aria-label="Legal">
            <h3 className="text-[11px] uppercase tracking-[0.2em] text-[#6F7688] font-semibold">
              Legal
            </h3>
            <ul className="space-y-2.5 text-sm text-[#9BA1AF]">
              {legalLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.target}
                    className="hover:text-[#C6A15B] focus:text-[#C6A15B] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A15B] rounded transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* CONTACT */}
          <section className="lg:col-span-4 space-y-4" aria-label="Contact Information">
            <h3 className="text-[11px] uppercase tracking-[0.2em] text-[#6F7688] font-semibold">
              Contact
            </h3>
            <div className="p-5 rounded-2xl border border-[#1E2430] bg-[#11151F]/50 space-y-3">
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#6F7688] block mb-0.5">Email</span>
                <a
                  href={`mailto:${email}`}
                  className="text-sm text-[#D8D4C9] hover:text-[#C6A15B] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A15B] rounded transition-colors duration-200 break-all"
                >
                  {email}
                </a>
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#6F7688] block mb-0.5">Website</span>
                <span className="text-sm text-[#9BA1AF]">{website}</span>
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#6F7688] block mb-0.5">Location</span>
                <span className="text-sm text-[#9BA1AF]">Pakistan</span>
              </div>
            </div>
          </section>
        </div>

        {/* SOCIAL + COPYRIGHT STRIP */}
        <div className="border-t border-[#1E2430] pt-8 flex flex-col sm:flex-row justify-between items-center gap-6">

          <nav
            className="flex items-center gap-5"
            aria-label="Social Media Links"
          >
            {/* GitHub */}
            <a
              href="https://github.com/onyxstacklabs"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-8 h-8 rounded-lg border border-[#1E2430] bg-[#11151F]/50 text-[#6F7688] hover:text-[#C6A15B] hover:border-[#C6A15B]/40 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A15B] transition-all duration-300"
              aria-label="OnyxStack Labs on GitHub"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </a>

            {/* LinkedIn */}
            {siteConfig?.socialLinks?.linkedin && (
              <a
                href={siteConfig.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-8 h-8 rounded-lg border border-[#1E2430] bg-[#11151F]/50 text-[#6F7688] hover:text-[#C6A15B] hover:border-[#C6A15B]/40 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A15B] transition-all duration-300"
                aria-label="OnyxStack Labs on LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            )}

            {/* YouTube */}
            {siteConfig?.socialLinks?.youtube && (
              <a
                href={siteConfig.socialLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-8 h-8 rounded-lg border border-[#1E2430] bg-[#11151F]/50 text-[#6F7688] hover:text-[#C6A15B] hover:border-[#C6A15B]/40 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A15B] transition-all duration-300"
                aria-label="OnyxStack Labs on YouTube"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93 .502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            )}

            {/* Facebook */}
            {siteConfig?.socialLinks?.facebook && (
              <a
                href={siteConfig.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-8 h-8 rounded-lg border border-[#1E2430] bg-[#11151F]/50 text-[#6F7688] hover:text-[#C6A15B] hover:border-[#C6A15B]/40 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A15B] transition-all duration-300"
                aria-label="OnyxStack Labs on Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            )}
          </nav>

          <div className="text-xs text-[#6F7688] tracking-wide text-center sm:text-right">
            © 2026 OnyxStack Labs. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
