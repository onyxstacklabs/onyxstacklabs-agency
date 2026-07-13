import React, { useEffect, useState } from 'react';

// LIVE DATA CORE IMPORTS
import { siteConfig } from '../config/siteConfig';

// MODULAR DETACHED COMPONENT ARCHITECTURE LAYER
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Blog({ currentPath, navigateToNode }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribedStatus, setSubscribedStatus] = useState(false);

  // Synchronize layout scroll position on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Section 3 Data: Categorization Filter Facets
  const categories = [
    "All", "AI", "Web Development", "Mobile Apps", "React", "Firebase", "UI/UX", "Business", "Case Studies"
  ];

  // Section 2 Data: Hero Editorial Spotlight Article
  const featuredArticle = {
    id: "feat-01",
    category: "AI",
    date: "July 10, 2026",
    readTime: "7 min read",
    title: "Orchestrating Sub-Second Inference Loops: Integrating Gemini Cognitive Fabrics into Modern React Architectures",
    summary: "An in-depth structural exploration into reducing browser token validation lag, managing real-time websocket micro-triggers, and caching complex analytical prompt models on serverless edge nodes for high-density enterprise environments.",
    author: "Alex Rivers, Principal AI Architect"
  };

  // Section 4 Data: Extensible Core Content Matrix (CMS-Ready Schema)
  const articles = [
    {
      id: "art-01",
      category: "React",
      date: "July 02, 2026",
      readTime: "5 min read",
      title: "Optimizing React Core Initialization Loops and Tree-Shaking Dead Compilation Bundles",
      summary: "How moving from complex runtime frameworks to lightweight compilation setups reduces first paint delays by up to 42% on slow client networks.",
      author: "Marcus Vance"
    },
    {
      id: "art-02",
      category: "Web Development",
      date: "June 28, 2026",
      readTime: "6 min read",
      title: "The Shift to Distributed Serverless Configurations: Designing Resilient Edge Data Routing Patterns",
      summary: "An structural evaluation of multi-region caching strategies designed to minimize network request hops for stateless enterprise platforms.",
      author: "Sarah Jenkins"
    },
    {
      id: "art-03",
      category: "UI/UX",
      date: "June 19, 2026",
      readTime: "4 min read",
      title: "Design Systems to Component Code: Translating Complex Typography Hierarchies into Utility CSS Tokens",
      summary: "Establishing atomic layout guidelines that ensure absolute screen-reader accessibility while maintaining dark futuristic visual branding.",
      author: "Elena Rostov"
    },
    {
      id: "art-04",
      category: "Firebase",
      date: "June 12, 2026",
      readTime: "5 min read",
      title: "Managing Connection Limits and Database Writing Operations in Real-Time Cloud Environments",
      summary: "Mitigating transactional state overlaps within concurrent document updates by leveraging isolated cloud validation layers.",
      author: "David Vance"
    },
    {
      id: "art-05",
      category: "Business",
      date: "May 30, 2026",
      readTime: "8 min read",
      title: "The Financial Pitfalls of Off-the-Shelf Themes: Quantifying Accrued Technical Debt in Scaled Environments",
      summary: "An analytical study of how rigid layout configurations trap long-term business processes and drive up engineering optimization costs.",
      author: "Robert Chen"
    },
    {
      id: "art-06",
      category: "Mobile Apps",
      date: "May 22, 2026",
      readTime: "6 min read",
      title: "Building High-Performance Web Views: Achieving 60 FPS Telemetry Rendering Across Handheld Frameworks",
      summary: "Leveraging virtualized container trees to map massive real-time data payloads efficiently on lower-tier mobile browser engines.",
      author: "Liam Sterling"
    },
    {
      id: "art-07",
      category: "Case Studies",
      date: "May 15, 2026",
      readTime: "9 min read",
      title: "OnyxStack School Architecture Review: Consolidating Disconnected Datastores for Multi-Campus Platforms",
      summary: "Deconstructing an institution-level migration into clean, isolated database rows backed by end-to-end cryptographic tokens.",
      author: "Aria Thorne"
    },
    {
      id: "art-08",
      category: "AI",
      date: "May 04, 2026",
      readTime: "7 min read",
      title: "Automating Dynamic Document Context Sorting Chains Using Server-Sent Cognitive Pipelines",
      summary: "How streaming structural semantic nodes lets web interfaces build custom data layout trees dynamically as user parameters adjust.",
      author: "Alex Rivers"
    }
  ];

  // Pipeline Filter Processing Functionality
  const filteredArticles = articles.filter(article => {
    const matchesCategory = selectedCategory === "All" || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          article.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setSubscribedStatus(true);
      setNewsletterEmail("");
    }
  };

  const launchArticleAlert = (title) => {
    alert(`Initializing core article repository reader node for: \n"${title}"\n\n[CMS Interface Pipeline Connected]`);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-neutral-100 font-sans antialiased selection:bg-[#06B6D4] selection:text-black relative overflow-hidden">
      
      {/* BRAND AMBIENT STRUCTURAL LIGHTING FIELDS */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[800px] bg-[radial-gradient(ellipse_at_top,rgba(6,182,212,0.05),transparent_65%)] pointer-events-none z-0" />
      <div className="absolute top-[1400px] right-0 w-[450px] h-[450px] bg-[#06B6D4]/[0.01] blur-[160px] pointer-events-none" />
      <div className="absolute bottom-[800px] left-0 w-[550px] h-[550px] bg-blue-600/[0.015] blur-[220px] pointer-events-none" />

      {/* DETACHED NAVIGATION FRAME INSULATION */}
      <Navbar 
        currentPath={currentPath} 
        activeSection="" 
        navigateToNode={navigateToNode} 
        siteConfig={siteConfig} 
      />

      {/* COMPONENT STREAM CONTENT BODY */}
      <div className="relative z-10 scalable-content-blog-scope">
        
        {/* SECTION 1: HERO CONTROL TERMINAL */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-12 sm:pt-40 sm:pb-16">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#06B6D4]/10 border border-[#06B6D4]/20 text-[#06B6D4] text-xs font-mono uppercase tracking-widest mb-6">
              Knowledge Repository Node
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.1] font-sans">
              Technical Engineering Insights & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#06B6D4] via-cyan-200 to-blue-500">
                Architectural Blueprints
              </span>
            </h1>
            <p className="text-base sm:text-lg text-neutral-400 max-w-2xl leading-relaxed mb-8">
              In-depth research documentation, interface design analysis, and performance optimization runbooks built by senior system architects.
            </p>
            
            {/* INLINE LIVE ENGINE SEARCH ACCESS BAR */}
            <div className="max-w-md relative">
              <input 
                type="text" 
                placeholder="Query database articles..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-neutral-950/80 border border-neutral-900 rounded-xl px-4 py-3.5 pl-10 text-xs sm:text-sm font-mono text-white placeholder-neutral-600 focus:outline-none focus:border-[#06B6D4]/40 focus:ring-1 focus:ring-[#06B6D4]/20 transition-all"
              />
              <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-600">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4-4m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: EDITORIAL SPOTLIGHT FEATURED ARTICLE HERO */}
        {(!searchQuery || featuredArticle.title.toLowerCase().includes(searchQuery.toLowerCase())) && (
          <section className="max-w-7xl mx-auto px-6 md:px-12 py-6">
            <div 
              onClick={() => launchArticleAlert(featuredArticle.title)}
              className="group p-6 sm:p-10 rounded-2xl border border-neutral-900 bg-gradient-to-br from-neutral-950 via-neutral-950 to-neutral-900/10 cursor-pointer hover:border-neutral-800/80 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-96 h-96 bg-[#06B6D4]/[0.02] blur-[100px] pointer-events-none rounded-full" />
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                <div className="lg:col-span-4 aspect-[16/10] sm:aspect-[16/9] lg:aspect-square w-full rounded-xl bg-gradient-to-tr from-neutral-900 to-neutral-850 border border-neutral-900 flex flex-col justify-between p-6 relative group-hover:border-[#06B6D4]/20 transition-colors">
                  <div className="text-neutral-700 font-mono text-[9px] uppercase tracking-widest">
                    [ Primary_Visual_Buffer ]
                  </div>
                  <div className="text-[#06B6D4] font-mono text-3xl font-extrabold opacity-40 group-hover:opacity-80 transition-opacity">
                    {featuredArticle.category}://
                  </div>
                </div>
                
                <div className="lg:col-span-8 space-y-4">
                  <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
                    <span className="px-2.5 py-0.5 rounded bg-[#06B6D4]/10 text-[#06B6D4] font-bold uppercase tracking-wider text-[10px]">
                      Featured Post
                    </span>
                    <span className="text-neutral-500">{featuredArticle.date}</span>
                    <span className="text-neutral-600">•</span>
                    <span className="text-neutral-500">{featuredArticle.readTime}</span>
                  </div>
                  
                  <h2 className="text-xl sm:text-3xl font-bold tracking-tight text-white group-hover:text-[#06B6D4] transition-colors leading-snug font-sans">
                    {featuredArticle.title}
                  </h2>
                  
                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-3xl font-sans">
                    {featuredArticle.summary}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-neutral-900">
                    <span className="text-xs font-mono text-neutral-500">{featuredArticle.author}</span>
                    <span className="text-xs font-mono text-[#06B6D4] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      Read Blueprint Article <span className="font-sans">→</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* SECTION 3: CATEGORIES FACTION FILTER SELECTORS */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-12">
          <div className="flex items-center gap-2 overflow-x-auto pb-3 border-b border-neutral-900/60 no-scrollbar scroll-smooth">
            {categories.map((cat, cIdx) => (
              <button
                key={cIdx}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-lg text-xs font-mono whitespace-nowrap transition-all duration-150 focus:outline-none ${selectedCategory === cat ? 'bg-neutral-900 border border-[#06B6D4]/30 text-[#06B6D4] font-bold' : 'border border-transparent text-neutral-500 hover:text-neutral-300'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* SECTION 4: LATEST ARTICLES GRID FRAME */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-6">
          {filteredArticles.length === 0 ? (
            <div className="text-center py-20 border border-dashed border-neutral-900 rounded-2xl bg-neutral-950/20">
              <p className="text-xs font-mono text-neutral-500 uppercase tracking-widest">No corresponding articles matching search keys found.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredArticles.map((art) => (
                <div 
                  key={art.id}
                  onClick={() => launchArticleAlert(art.title)}
                  className="group rounded-xl border border-neutral-900/80 bg-neutral-950/40 p-5 cursor-pointer hover:border-neutral-800 transition-all flex flex-col justify-between min-h-[420px]"
                >
                  <div>
                    {/* Visual Card Image Dynamic Placeholder Header */}
                    <div className="aspect-[16/10] w-full rounded-lg bg-neutral-900 border border-neutral-950 flex flex-col justify-between p-4 mb-5 group-hover:border-neutral-800 transition-colors">
                      <div className="text-[8px] font-mono text-neutral-700 tracking-wider">[ Grid_Frame_Asset ]</div>
                      <div className="text-neutral-500 font-mono text-xs tracking-tight">{art.category}://</div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-[10px] font-mono text-neutral-500">
                        <span>{art.date}</span>
                        <span>•</span>
                        <span>{art.readTime}</span>
                      </div>
                      <h3 className="text-base font-bold text-white tracking-wide group-hover:text-[#06B6D4] transition-colors leading-snug font-sans">
                        {art.title}
                      </h3>
                      <p className="text-xs text-neutral-400 leading-relaxed font-sans line-clamp-3">
                        {art.summary}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-neutral-900/60 flex items-center justify-between text-[11px] font-mono">
                    <span className="text-neutral-500">{art.author}</span>
                    <span className="text-[#06B6D4] flex items-center gap-0.5 group-hover:translate-x-0.5 transition-transform">
                      Read Card <span className="font-sans">→</span>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* SECTION 5: WHY FOLLOW OUR TECHNICAL JOURNAL LOGS */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-20 border-t border-neutral-900/60 mt-12">
          <div className="max-w-3xl mb-12">
            <p className="text-xs font-mono uppercase tracking-widest text-[#06B6D4] mb-3">Content Strategy Philosophy</p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-sans">Why Engineering Teams Bookmark Our Logs</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { t: "Bespoke Implementations Only", d: "We skip generic overview essays. Every article focuses directly on deployment blockers, architectural parameters, and verified benchmarks." },
              { t: "CMS-Ready Adaptability", d: "Our layout model uses fully decoupled object loops, ready to synchronize directly to Firestore document queries or GraphQL engines." },
              { t: "Production-Proven Focus", d: "Authored directly by the consultants building custom enterprise commerce cores and security identity checkpoints." }
            ].map((p, pIdx) => (
              <div key={pIdx} className="p-6 rounded-xl border border-neutral-900 bg-neutral-950/20">
                <div className="w-1 h-5 bg-[#06B6D4] mb-4 rounded-full" />
                <h3 className="text-sm font-bold text-white font-sans tracking-wide mb-2">{p.t}</h3>
                <p className="text-xs text-neutral-400 leading-relaxed font-sans">{p.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 6: NEWSLETTER SUBSCRIPTION CONSOLE ENGINE PANEL */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-12">
          <div className="p-6 sm:p-10 rounded-2xl border border-neutral-900 bg-neutral-950/60 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/[0.015] blur-[80px] pointer-events-none rounded-full" />
            <div className="max-w-xl space-y-4">
              <h3 className="text-lg sm:text-xl font-bold text-white font-sans">Subscribe to Our Structural Release Cycles</h3>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-sans">
                Receive sub-second architecture breakdowns and platform integration guides directly in your container box once every two weeks. Zero marketing noise.
              </p>
              
              {subscribedStatus ? (
                <div className="p-3.5 rounded-lg bg-[#06B6D4]/10 border border-[#06B6D4]/20 text-[#06B6D4] font-mono text-xs">
                  ✓ Node Connected: Email communication sequence authorized.
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-2 max-w-md pt-2">
                  <input 
                    type="email" 
                    required
                    placeholder="Provide enterprise email..."
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="flex-1 bg-[#050505] border border-neutral-900 rounded-lg px-3 py-2 text-xs font-mono text-white placeholder-neutral-600 focus:outline-none focus:border-[#06B6D4]/40"
                  />
                  <button 
                    type="submit"
                    className="bg-white hover:bg-[#06B6D4] text-black px-5 py-2 rounded-lg text-xs font-mono font-bold uppercase tracking-wider transition-colors"
                  >
                    Authorize Hook
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* SECTION 7: FINAL MASTER DIRECT CALL TO ACTION BLOCK */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 sm:py-24 border-t border-neutral-900/60">
          <div className="p-8 sm:p-14 rounded-3xl border border-neutral-900 bg-gradient-to-br from-neutral-950 via-neutral-950 to-neutral-900/30 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-8 relative overflow-hidden">
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-500/[0.02] blur-[100px] pointer-events-none rounded-full" />
            
            <div className="max-w-2xl">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-3 font-sans">
                Need Custom Core Architecture Developed For Your Platform?
              </h2>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-sans">
                Stop copy-pasting code templates. Partner directly with senior product consultants to build custom, high-velocity digital infrastructure configurations optimized specifically for your transaction requirements.
              </p>
            </div>

            <div className="flex-shrink-0">
              <button
                onClick={() => { navigateToNode('/'); setTimeout(() => { document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }, 150); }}
                className="bg-neutral-100 hover:bg-[#06B6D4] text-black px-8 py-4 rounded-full text-xs font-bold font-mono uppercase tracking-widest transition-all duration-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] whitespace-nowrap"
              >
                Launch Pipeline Consultation
              </button>
            </div>
          </div>
        </section>

      </div>

      {/* CORE GLOBAL FOOTER COUPLING */}
      <Footer siteConfig={siteConfig} />

    </div>
  );
}
