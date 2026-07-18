import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  User, 
  Tag, 
  Share2, 
  Bookmark, 
  ChevronRight,
  Copy,
  Check
} from 'lucide-react';
import blogArticles from '../data/blogArticles';

export default function BlogArticle() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [copied, setCopied] = React.useState(false);

  // Find the current active article
  const article = blogArticles.find((a) => a.slug === slug);

  // Redirect to 404 if article doesn't exist
  useEffect(() => {
    if (!article) {
      navigate('/404', { replace: true });
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug, article, navigate]);

  if (!article) return null;

  // Get related articles (same category, excluding current)
  const relatedArticles = blogArticles
    .filter((a) => a.category === article.category && a.slug !== article.slug)
    .slice(0, 2);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  return (
    <div className="min-h-screen bg-[#030712] text-gray-100 selection:bg-purple-500/30 selection:text-purple-200 overflow-hidden font-sans pt-24 pb-20">
      {/* Background Decorative Gradients */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Back Button & Navigation Meta */}
        <motion.div 
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8 flex items-center justify-between"
        >
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-purple-400 transition-colors duration-300 group"
          >
            <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </Link>
          <div className="hidden sm:flex items-center gap-2 text-xs text-gray-500">
            <span>Blog</span>
            <ChevronRight className="w-3 h-3" />
            <span>{article.category}</span>
            <ChevronRight className="w-3 h-3" />
            <span className="text-gray-400 truncate max-w-[200px]">{article.title}</span>
          </div>
        </motion.div>

        {/* Article Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Content Area */}
          <article className="lg:col-span-8">
            {/* Meta & Header */}
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="space-y-6"
            >
              <motion.span 
                variants={fadeInUp}
                className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase bg-purple-500/10 text-purple-400 border border-purple-500/20 backdrop-blur-md"
              >
                {article.category}
              </motion.span>

              <motion.h1 
                variants={fadeInUp}
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight bg-clip-text bg-gradient-to-r from-white via-gray-100 to-gray-400"
              >
                {article.title}
              </motion.h1>

              <motion.p 
                variants={fadeInUp}
                className="text-lg sm:text-xl text-gray-400 font-light leading-relaxed"
              >
                {article.subtitle || article.excerpt}
              </motion.p>

              {/* Author & Read Time Row */}
              <motion.div 
                variants={fadeInUp}
                className="flex flex-wrap items-center justify-between gap-4 py-6 border-y border-gray-800/80 my-8"
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center font-bold text-white shadow-lg shadow-purple-500/10 border border-white/10">
                    {article.author ? article.author.charAt(0) : <User className="w-5 h-5" />}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">{article.author || 'OnyxStack Expert'}</div>
                    <div className="text-xs text-gray-500">Technical Writer</div>
                  </div>
                </div>

                <div className="flex items-center gap-6 text-sm text-gray-400">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-purple-400" />
                    {article.date || article.publishedAt}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-blue-400" />
                    {article.readingTime || '5 min read'}
                  </span>
                </div>
              </motion.div>
            </motion.div>

            {/* Featured Hero Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden mb-12 border border-gray-800 shadow-2xl group"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent opacity-60 z-10" />
              <img 
                src={article.image || article.coverImage || "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80"} 
                alt={article.title}
                className="w-full h-full object-cover transform scale-100 group-hover:scale-[1.02] transition-transform duration-700 ease-out"
              />
            </motion.div>

            {/* Full Dynamic Content Body */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="prose prose-invert max-w-none space-y-6 text-gray-300 leading-relaxed text-base sm:text-lg"
            >
              {/* Fallback structure if article.content is an array or object, rendering standard schema patterns */}
              {Array.isArray(article.content) ? (
                article.content.map((block, idx) => {
                  if (block.type === 'paragraph') return <p key={idx}>{block.text}</p>;
                  if (block.type === 'heading') return <h2 key={idx} className="text-2xl font-bold text-white mt-8 mb-4">{block.text}</h2>;
                  if (block.type === 'quote') {
                    return (
                      <blockquote key={idx} className="border-l-4 border-purple-500 bg-purple-500/5 px-6 py-4 my-6 rounded-r-xl italic text-gray-200">
                        {block.text}
                      </blockquote>
                    );
                  }
                  if (block.type === 'code') {
                    return (
                      <div key={idx} className="relative rounded-xl overflow-hidden bg-gray-900 border border-gray-800 my-6 font-mono text-sm shadow-inner">
                        <div className="bg-gray-950 px-4 py-2 flex justify-between items-center border-b border-gray-800/60 text-xs text-gray-400">
                          <span>{block.language || 'javascript'}</span>
                        </div>
                        <pre className="p-4 overflow-x-auto text-purple-300"><code>{block.code}</code></pre>
                      </div>
                    );
                  }
                  return null;
                })
              ) : (
                /* Fallback raw text rendering supported with beautiful typography blocks if plain text */
                <div className="whitespace-pre-line space-y-4">
                  {article.content || "Detailed article content is currently being compiled by the OnyxStack editorial team. Please check back shortly for full framework specifications, deployment logs, and performance metrics."}
                </div>
              )}

              {/* Sample Structural Quote Block if plain text to ensure UI validation */}
              {!Array.isArray(article.content) && (
                <blockquote className="border-l-4 border-purple-500 bg-purple-500/5 px-6 py-4 my-8 rounded-r-xl italic text-gray-200">
                  "Excellence in infrastructure design implies architectural elegance, predictive modular patterns, and an uncompromising commitment to edge-runtime optimizations."
                </blockquote>
              )}

              {/* Sample Structural Code Block if plain text to ensure UI validation */}
              {!Array.isArray(article.content) && (
                <div className="relative rounded-xl overflow-hidden bg-[#0b0f19] border border-gray-800/80 my-8 font-mono text-sm shadow-2xl">
                  <div className="bg-[#050811] px-4 py-2 flex justify-between items-center border-b border-gray-800/60 text-xs text-gray-400">
                    <span>onyxStackConfig.js</span>
                  </div>
                  <pre className="p-4 overflow-x-auto text-emerald-400">
                    <code>{`export default defineConfig({
  target: 'edge-runtime',
  optimization: {
    splitChunks: true,
    dynamicImports: 'preload'
  },
  experimental: {
    glowingGradients: true
  }
});`}</code>
                  </pre>
                </div>
              )}
            </motion.div>

            {/* Tags & Action Row */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-12 pt-8 border-t border-gray-800/80 flex flex-wrap items-center justify-between gap-6"
            >
              <div className="flex flex-wrap items-center gap-2">
                <Tag className="w-4 h-4 text-gray-500 mr-1" />
                {(article.tags || ['Tech', 'Innovation', 'Enterprise']).map((tag, index) => (
                  <span 
                    key={index}
                    className="text-xs font-medium px-2.5 py-1 rounded bg-gray-900 border border-gray-800 text-gray-400"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3">
                <button 
                  onClick={handleCopyLink}
                  className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-2 rounded-lg bg-gray-900 border border-gray-800 text-gray-300 hover:text-white hover:bg-gray-850 transition"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Share2 className="w-3.5 h-3.5" />}
                  {copied ? 'Copied!' : 'Share Link'}
                </button>
                <button className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-2 rounded-lg bg-gray-900 border border-gray-800 text-gray-300 hover:text-white hover:bg-gray-850 transition">
                  <Bookmark className="w-3.5 h-3.5" />
                  Save
                </button>
              </div>
            </motion.div>

          </article>

          {/* Sidebar / Related Articles */}
          <aside className="lg:col-span-4 space-y-8">
            <div className="sticky top-28 space-y-8">
              
              {/* Newsletter or Info Box */}
              <div className="p-6 rounded-2xl bg-gradient-to-b from-gray-900/60 to-gray-950 border border-gray-800/80 relative overflow-hidden backdrop-blur-md">
                <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/10 rounded-full blur-xl pointer-events-none" />
                <h3 className="text-base font-bold text-white mb-2">OnyxStack Insights</h3>
                <p className="text-xs text-gray-400 leading-relaxed mb-4">
                  Subscribe to receive enterprise engineering breakthroughs, system design patterns, and deployment optimization strategies straight to your inbox.
                </p>
                <div className="space-y-2">
                  <input 
                    type="email" 
                    placeholder="Enter professional email" 
                    className="w-full px-3 py-2 rounded-lg bg-black border border-gray-800 text-xs text-white focus:outline-none focus:border-purple-500 transition"
                  />
                  <button className="w-full py-2 px-3 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-semibold text-xs transition duration-300 shadow-md shadow-purple-600/10">
                    Subscribe
                  </button>
                </div>
              </div>

              {/* Related Articles Section */}
              <div className="space-y-4">
                <h3 className="text-sm font-semibold tracking-wider uppercase text-gray-400 px-1">Related Articles</h3>
                
                {relatedArticles.length > 0 ? (
                  <div className="space-y-4">
                    {relatedArticles.map((relArticle) => (
                      <Link 
                        key={relArticle.slug} 
                        to={`/blog/${relArticle.slug}`}
                        className="block p-4 rounded-xl bg-gray-950 border border-gray-900 hover:border-gray-800 hover:bg-gray-900/40 transition duration-300 group"
                      >
                        <span className="text-[10px] font-bold text-purple-400 uppercase tracking-wider block mb-1">
                          {relArticle.category}
                        </span>
                        <h4 className="text-sm font-bold text-white line-clamp-2 group-hover:text-purple-400 transition-colors duration-300">
                          {relArticle.title}
                        </h4>
                        <div className="flex items-center gap-3 mt-3 text-[11px] text-gray-500">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {relArticle.date || relArticle.publishedAt}
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <div className="p-4 rounded-xl border border-dashed border-gray-800 text-center text-xs text-gray-500">
                    No relevant matching articles in this cluster.
                  </div>
                )}
              </div>

              {/* Structural CTA */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-950/30 to-blue-950/20 border border-purple-500/10 relative overflow-hidden text-center">
                <h4 className="text-sm font-bold text-white mb-2">Have a technical challenge?</h4>
                <p className="text-xs text-gray-400 mb-4">Let's build reliable software systems tailored to your corporate workflow goals.</p>
                <Link 
                  to="/contact"
                  className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-white text-black font-semibold text-xs hover:bg-gray-200 transition"
                >
                  Contact Engineering
                </Link>
              </div>

            </div>
          </aside>

        </div>

      </div>
    </div>
  );
}
