// src/pages/BlogArticle.jsx
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

// LIVE DATA CORE IMPORTS
import { db } from '../config/firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { siteConfig } from '../config/siteConfig';

const fxFadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
};

export default function BlogArticle({ currentPath, navigateToNode }) {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const fetchArticle = async () => {
      try {
        setLoading(true);
        const blogsRef = collection(db, 'blogs');
        
        // Query to match either slug field or fallback document id
        const q = query(blogsRef, where('published', '==', true));
        const querySnapshot = await getDocs(q);
        
        let foundDoc = null;
        
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          if (data.slug === slug || doc.id === slug) {
            foundDoc = { id: doc.id, ...data };
          }
        });

        if (foundDoc) {
          setArticle({
            ...foundDoc,
            title: foundDoc.title || "Untitled Blueprint",
            content: foundDoc.content || foundDoc.summary || "No blueprint architecture content provided.",
            category: foundDoc.category || "AI",
            author: typeof foundDoc.author === 'object' ? (foundDoc.author.name || "Senior Architect") : (foundDoc.author || "Senior Architect")
          });
        } else {
          // If no article matches, route to 404 root cleanly
          navigate('/404', { replace: true });
        }
      } catch (err) {
        console.error("Failed fetching structural node logs:", err);
        navigate('/404', { replace: true });
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchArticle();
    }
  }, [slug, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#030303] text-neutral-500 font-mono text-sm flex items-center justify-center animate-pulse">
        Decompressing edge document node sharding data...
      </div>
    );
  }

  if (!article) return null;

  return (
    <div className="min-h-screen bg-[#030303] text-neutral-200 font-sans antialiased selection:bg-cyan-500 selection:text-black relative overflow-hidden">
      
      {/* BRAND STRUCTURAL LIGHTING FIELDS */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-[radial-gradient(ellipse_at_top,rgba(6,182,212,0.08),transparent_50%)] pointer-events-none z-0" />
      
      <Navbar currentPath={currentPath} activeSection="" navigateToNode={navigateToNode} siteConfig={siteConfig} />

      <main className="relative z-10 max-w-4xl mx-auto px-6 pt-40 pb-24">
        <motion.article initial="hidden" animate="visible" variants={fxFadeUp}>
          
          {/* META NODE METRICS */}
          <div className="flex items-center gap-3 text-xs font-mono text-cyan-400 mb-6">
            <span className="px-2.5 py-1 rounded bg-cyan-500/10 border border-cyan-500/20 text-[10px] uppercase font-bold tracking-widest">
              {article.category}
            </span>
            <span className="text-neutral-600">•</span>
            <span className="text-neutral-400">
              {article.createdAt?.seconds ? new Date(article.createdAt.seconds * 1000).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) : 'Active Node'}
            </span>
          </div>

          {/* MAIN DOCUMENT HEADLINE */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-8 leading-tight font-sans">
            {article.title}
          </h1>

          {/* COVER IMAGE NODE */}
          {article.coverImage && (
            <div className="w-full aspect-[16/9] rounded-2xl overflow-hidden border border-neutral-900 bg-neutral-950 mb-12">
              <img src={article.coverImage} alt={article.title} className="w-full h-full object-cover opacity-80" />
            </div>
          )}

          {/* AUTHOR METRIC PROFILE */}
          <div className="flex items-center gap-4 py-6 border-y border-neutral-900/60 mb-10 text-xs font-mono">
            <div className="w-8 h-8 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-cyan-400 font-bold font-sans">
              OA
            </div>
            <div>
              <div className="text-neutral-300 font-bold">{article.author}</div>
              <div className="text-neutral-500 text-[10px]">OnyxStack Core Engineering</div>
            </div>
          </div>

          {/* CONTENT DISPATCH RENDER CORES */}
          <div className="text-neutral-300 space-y-6 leading-relaxed font-sans text-sm sm:text-base tracking-wide whitespace-pre-wrap">
            {article.content}
          </div>

          {/* PIPELINE FOOTER UTILITY NAVIGATION */}
          <div className="mt-16 pt-8 border-t border-neutral-900 flex justify-between items-center">
            <button 
              onClick={() => navigate('/blog')}
              className="text-xs font-mono text-neutral-400 hover:text-cyan-400 flex items-center gap-2 transition-colors duration-200"
            >
              ← Back to Repository Node Index
            </button>
          </div>

        </motion.article>
      </main>

      <Footer siteConfig={siteConfig} />
    </div>
  );
}
