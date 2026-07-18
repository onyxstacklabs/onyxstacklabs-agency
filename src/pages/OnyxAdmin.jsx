import React, { useState, useEffect } from 'react';
// Exact relative trajectory mapping targeting the real firebase module location
import { db } from '../config/firebase'; 
import { collection, query, orderBy, onSnapshot, doc, updateDoc, addDoc, deleteDoc, serverTimestamp } from 'firebase/firestore';

export default function OnyxAdmin() {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passkey, setPasskey] = useState('');

  // Enterprise Blog CMS State Matrix
  const [currentTab, setCurrentTab] = useState('leads'); // 'leads' or 'blog'
  const [blogs, setBlogs] = useState([]);
  const [blogsLoading, setBlogsLoading] = useState(true);
  
  // Blog Filter/Sort/Search Pipeline State
  const [blogSearch, setBlogSearch] = useState('');
  const [blogCategoryFilter, setBlogCategoryFilter] = useState('All');
  const [blogStatusFilter, setBlogStatusFilter] = useState('All');
  const [blogSortOrder, setBlogSortOrder] = useState('newest');
  const [blogPage, setBlogPage] = useState(1);
  const blogsPerPage = 5;

  // Blog Form / Editor State
  const [isEditing, setIsEditing] = useState(false);
  const [currentBlogId, setCurrentBlogId] = useState(null);
  const [blogForm, setBlogForm] = useState({
    title: '',
    slug: '',
    summary: '',
    content: '',
    coverImage: '',
    category: 'React',
    tags: '',
    author: '',
    published: false,
    featured: false,
    seoTitle: '',
    seoDescription: '',
    readTime: '1 min read'
  });

  const [previewMode, setPreviewMode] = useState(false);

  // Auto-generate Slug & Reading Time on Title/Content Mutations
  useEffect(() => {
    if (!isEditing) {
      const computedSlug = blogForm.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)+/g, '');
      setBlogForm(prev => ({ ...prev, slug: computedSlug }));
    }
  }, [blogForm.title, isEditing]);

  useEffect(() => {
    const words = blogForm.content.trim().split(/\s+/).length;
    const minutes = Math.max(1, Math.ceil(words / 225));
    setBlogForm(prev => ({ ...prev, readTime: `${minutes} min read` }));
  }, [blogForm.content]);

  // Simple Secure Entry Gate for OnyxStack Labs Admin Control
  const handleAdminAuth = (e) => {
    e.preventDefault();
    if (passkey === 'OnyxAdmin2026!') {
      setIsAuthenticated(true);
    } else {
      alert('Access Denied: Invalid Security Node Token.');
    }
  };

  // Real-time listener for incoming agency leads
  useEffect(() => {
    if (!isAuthenticated) return;

    const leadsRef = collection(db, 'agency_leads');
    const q = query(leadsRef, orderBy('timestamp', 'desc'));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const fetchedLeads = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setLeads(fetchedLeads);
      setLoading(false);
    }, (error) => {
      console.error("Firestore stream error: ", error);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [isAuthenticated]);

  // Real-time listener for Enterprise Blog CMS Matrix
  useEffect(() => {
    if (!isAuthenticated) return;

    const blogsRef = collection(db, 'blogs');
    const q = query(blogsRef, orderBy('createdAt', 'desc'));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const fetchedBlogs = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setBlogs(fetchedBlogs);
      setBlogsLoading(false);
    }, (error) => {
      console.error("Firestore blogs stream error: ", error);
      setBlogsLoading(false);
    });

    return () => unsubscribe();
  }, [isAuthenticated]);

  // Core Mutation Logic for updating Lead Status
  const updateLeadStatus = async (leadId, newStatus) => {
    try {
      const leadDocRef = doc(db, 'agency_leads', leadId);
      await updateDoc(leadDocRef, {
        status: newStatus
      });
      alert(`Lead state successfully mutated to: ${newStatus}`);
    } catch (error) {
      console.error("Error updating lead status: ", error);
      alert("Failed to update status node.");
    }
  };

  // Helper to safely open communication channel with dynamic templates
  const triggerWhatsAppCommunication = (phone, companyName) => {
    const cleanPhone = phone.replace(/[^\d+]/g, ''); 
    const message = `Hello ${companyName},\n\nThis is OnyxStack Labs. We have successfully verified your project parameters and initiated your active engineering funnel.\n\nLet us schedule a quick technical discovery call. Please let us know your availability.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${cleanPhone}?text=${encodedMessage}`, '_blank');
  };

  // Blog Action Logic Handlers
  const handleBlogFormChange = (e) => {
    const { name, value, type, checked } = e.target;
    setBlogForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const resetBlogForm = () => {
    setIsEditing(false);
    setCurrentBlogId(null);
    setPreviewMode(false);
    setBlogForm({
      title: '',
      slug: '',
      summary: '',
      content: '',
      coverImage: '',
      category: 'React',
      tags: '',
      author: '',
      published: false,
      featured: false,
      seoTitle: '',
      seoDescription: '',
      readTime: '1 min read'
    });
  };

  const handleSaveBlog = async (e) => {
    e.preventDefault();
    try {
      const processedTags = blogForm.tags.split(',').map(t => t.trim()).filter(t => t.length > 0);
      const blogPayload = {
        ...blogForm,
        tags: processedTags,
        updatedAt: serverTimestamp()
      };

      if (isEditing) {
        const blogDocRef = doc(db, 'blogs', currentBlogId);
        await updateDoc(blogDocRef, blogPayload);
        alert("Blog node updated successfully.");
      } else {
        const blogsRef = collection(db, 'blogs');
        await addDoc(blogsRef, {
          ...blogPayload,
          createdAt: serverTimestamp()
        });
        alert("New blog document compiled and pushed to Firestore.");
      }
      resetBlogForm();
    } catch (error) {
      console.error("Error committing blog record: ", error);
      alert("Failed to write document parameters into database cluster.");
    }
  };

  const handleEditSelect = (blog) => {
    setIsEditing(true);
    setCurrentBlogId(blog.id);
    setPreviewMode(false);
    setBlogForm({
      title: blog.title || '',
      slug: blog.slug || '',
      summary: blog.summary || '',
      content: blog.content || '',
      coverImage: blog.coverImage || '',
      category: blog.category || 'React',
      tags: Array.isArray(blog.tags) ? blog.tags.join(', ') : blog.tags || '',
      author: blog.author || '',
      published: !!blog.published,
      featured: !!blog.featured,
      seoTitle: blog.seoTitle || '',
      seoDescription: blog.seoDescription || '',
      readTime: blog.readTime || '1 min read'
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDeleteBlog = async (blogId) => {
    if (window.confirm("CRITICAL WARNING: Are you certain you want to purge this blog document from the system cluster permanently?")) {
      try {
        await deleteDoc(doc(db, 'blogs', blogId));
        alert("Blog document successfully purged.");
        if (currentBlogId === blogId) resetBlogForm();
      } catch (error) {
        console.error("Error purging blog document: ", error);
        alert("Purge transaction failed.");
      }
    }
  };

  // Metrics Dashboard Calculation
  const totalBlogsCount = blogs.length;
  const publishedBlogsCount = blogs.filter(b => b.published).length;
  const draftBlogsCount = blogs.filter(b => !b.published).length;
  const featuredBlogsCount = blogs.filter(b => b.featured).length;

  // Pipeline Filter Processing Functionality
  const filteredBlogs = blogs.filter(blog => {
    const matchesSearch = blog.title?.toLowerCase().includes(blogSearch.toLowerCase()) || 
                          blog.summary?.toLowerCase().includes(blogSearch.toLowerCase());
    const matchesCategory = blogCategoryFilter === 'All' || blog.category === blogCategoryFilter;
    const matchesStatus = blogStatusFilter === 'All' || 
                          (blogStatusFilter === 'Published' && blog.published) || 
                          (blogStatusFilter === 'Draft' && !blog.published) ||
                          (blogStatusFilter === 'Featured' && blog.featured);
    return matchesSearch && matchesCategory && matchesStatus;
  });

  // Sorting Pipeline Node
  const sortedBlogs = [...filteredBlogs].sort((a, b) => {
    if (blogSortOrder === 'newest') return (b.createdAt?.seconds || 0) - (a.createdAt?.seconds || 0);
    if (blogSortOrder === 'oldest') return (a.createdAt?.seconds || 0) - (b.createdAt?.seconds || 0);
    if (blogSortOrder === 'alphabetical') return (a.title || '').localeCompare(b.title || '');
    return 0;
  });

  // Pagination Compute Node
  const indexOfLastBlog = blogPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentPaginatedBlogs = sortedBlogs.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(sortedBlogs.length / blogsPerPage) || 1;

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#0d0d0d] flex flex-col justify-center items-center px-4 font-sans text-white">
        <div className="max-w-md w-full bg-[#141414] border border-[#00f2fe]/20 rounded-xl p-8 shadow-2xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-3 h-3 rounded-full bg-[#00f2fe] animate-pulse"></div>
            <h2 className="text-xl font-bold tracking-wider uppercase text-slate-200">OnyxStack Control Tower</h2>
          </div>
          <form onSubmit={handleAdminAuth} className="space-y-4">
            <div>
              <label className="block text-xs uppercase tracking-widest text-slate-400 mb-2">Security Passkey</label>
              <input
                type="password"
                value={passkey}
                onChange={(e) => setPasskey(e.target.value)}
                placeholder="Enter system access token..."
                className="w-full bg-[#1a1a1a] border border-slate-800 focus:border-[#00f2fe] rounded-lg px-4 py-3 text-white placeholder-slate-600 outline-none transition-all duration-300"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#00f2fe] to-[#0575e6] hover:opacity-90 text-black font-semibold uppercase tracking-wider py-3 rounded-lg transition-all duration-300 shadow-lg shadow-[#00f2fe]/10"
            >
              Initialize Console
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-slate-100 font-sans flex flex-col md:flex-row">
      
      {/* SIDEBAR NAVIGATION MATRIX CONTROLLER */}
      <aside className="w-full md:w-64 bg-[#0d0d0d] border-b md:border-b-0 md:border-r border-slate-900 p-6 flex flex-col justify-between shrink-0">
        <div>
          <div className="flex items-center gap-2 mb-8">
            <span className="w-2 h-2 rounded-full bg-[#00f2fe]"></span>
            <h1 className="text-xl font-black uppercase tracking-wider text-white">OnyxStack Labs</h1>
          </div>
          
          <nav className="space-y-2">
            <button
              onClick={() => setCurrentTab('leads')}
              className={`w-full flex items-center gap-3 px-4 py-3 text-xs uppercase tracking-widest font-mono rounded-lg transition-all duration-200 ${
                currentTab === 'leads' 
                  ? 'bg-gradient-to-r from-[#00f2fe]/10 to-transparent text-[#00f2fe] border-l-2 border-[#00f2fe]' 
                  : 'text-slate-400 hover:text-white hover:bg-[#141414]'
              }`}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Lead Management
            </button>

            <button
              onClick={() => setCurrentTab('blog')}
              className={`w-full flex items-center gap-3 px-4 py-3 text-xs uppercase tracking-widest font-mono rounded-lg transition-all duration-200 ${
                currentTab === 'blog' 
                  ? 'bg-gradient-to-r from-[#00f2fe]/10 to-transparent text-[#00f2fe] border-l-2 border-[#00f2fe]' 
                  : 'text-slate-400 hover:text-white hover:bg-[#141414]'
              }`}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
              Blog Management
            </button>
          </nav>
        </div>

        <div className="mt-8 pt-4 border-t border-slate-900 text-[10px] font-mono text-slate-500">
          Operational Anchor v2.2.0<br/>
          Secure Environment Protected
        </div>
      </aside>

      {/* MAIN SYSTEM WORKSPACE CONTENT COMPONENT */}
      <div className="flex-1 p-4 sm:p-8 overflow-y-auto">
        <header className="max-w-7xl mx-auto mb-10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-900 pb-6">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-[#00f2fe]"></span>
              <h1 className="text-2xl font-black uppercase tracking-wider text-white">
                {currentTab === 'leads' ? 'Lead Matrix Hub' : 'Enterprise Blog CMS Engine'}
              </h1>
            </div>
            <p className="text-xs text-slate-400 uppercase tracking-widest">
              {currentTab === 'leads' ? 'Central Lead Matrix & Funnel Control' : 'Decoupled Semantic Layout and Content Pipelines'}
            </p>
          </div>
          <div className="bg-[#111] border border-slate-800 rounded-lg px-4 py-2 text-xs font-mono text-slate-400">
            {currentTab === 'leads' ? (
              <>Total Nodes Cached: <span className="text-[#00f2fe] font-bold">{leads.length}</span></>
            ) : (
              <>Core Collection Entries: <span className="text-[#00f2fe] font-bold">{blogs.length}</span></>
            )}
          </div>
        </header>

        <main className="max-w-7xl mx-auto">
          
          {/* TAB AREA 1: ORIGINAL LEAD MANAGEMENT CHANNEL MATRIX */}
          {currentTab === 'leads' && (
            <>
              {loading ? (
                <div className="text-center py-20 text-slate-500 font-mono text-sm animate-pulse">Syncing streaming channels...</div>
              ) : leads.length === 0 ? (
                <div className="text-center py-20 border border-dashed border-slate-800 rounded-xl">
                  <p className="text-slate-500 font-mono text-sm">No operational data pipelines detected in agency_leads.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {leads.map((lead) => (
                    <div 
                      key={lead.id} 
                      className={`bg-[#121212] border rounded-xl p-6 transition-all duration-300 flex flex-col justify-between ${
                        lead.status === 'approved' ? 'border-[#00f2fe]/30 shadow-md shadow-[#00f2fe]/5' :
                        lead.status === 'contracted' ? 'border-emerald-500/30' :
                        lead.status === 'rejected' ? 'border-red-900/40 opacity-40 hover:opacity-60' : 'border-slate-800'
                      }`}
                    >
                      <div>
                        <div className="flex justify-between items-start gap-4 mb-4">
                          <div>
                            <h3 className="text-lg font-bold text-white tracking-wide">{lead.companyName || 'Anonymous Project'}</h3>
                            <p className="text-xs text-slate-400 font-mono mt-0.5">{lead.email}</p>
                          </div>
                          <span className={`text-[10px] uppercase font-mono font-bold tracking-widest px-2.5 py-1 rounded border ${
                            lead.status === 'approved' ? 'bg-[#00f2fe]/10 text-[#00f2fe] border-[#00f2fe]/20' :
                            lead.status === 'contracted' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' :
                            lead.status === 'rejected' ? 'bg-red-500/10 text-red-400 border-red-500/20' : 'bg-amber-500/10 text-amber-400 border-amber-500/20'
                          }`}>
                            {lead.status?.replace('_', ' ') || 'unassigned'}
                          </span>
                        </div>

                        <div className="grid grid-cols-2 gap-4 bg-[#181818] border border-slate-900 rounded-lg p-4 mb-6 text-xs font-mono">
                          <div>
                            <span className="block text-[10px] uppercase tracking-wider text-slate-500 mb-0.5">Allocation Target</span>
                            <span className="text-slate-200">{lead.budget || 'Not specified'}</span>
                          </div>
                          <div>
                            <span className="block text-[10px] uppercase tracking-wider text-slate-500 mb-0.5">Scope Anchor</span>
                            <span className="text-slate-200 capitalize">{lead.details || 'General Request'}</span>
                          </div>
                          <div className="col-span-2 border-t border-slate-900 pt-2 mt-1">
                            <span className="block text-[10px] uppercase tracking-wider text-slate-500 mb-0.5">Transmission Timestamp</span>
                            <span className="text-slate-400 text-[11px]">
                              {lead.timestamp?.seconds ? new Date(lead.timestamp.seconds * 1000).toLocaleString() : 'N/A'}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="border-t border-slate-900 pt-4 mt-2 flex flex-wrap gap-2 justify-between items-center">
                        <div className="flex gap-1">
                          <button
                            onClick={() => updateLeadStatus(lead.id, 'approved')}
                            disabled={lead.status === 'approved'}
                            className="px-3 py-1.5 bg-[#00f2fe]/10 hover:bg-[#00f2fe]/20 text-[#00f2fe] disabled:opacity-40 disabled:hover:bg-[#00f2fe]/10 text-xs font-semibold rounded uppercase tracking-wider transition-all"
                          >
                            Approve
                          </button>
                          <button
                            onClick={() => updateLeadStatus(lead.id, 'contracted')}
                            disabled={lead.status === 'contracted'}
                            className="px-3 py-1.5 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 disabled:opacity-40 disabled:hover:bg-emerald-500/10 text-xs font-semibold rounded uppercase tracking-wider transition-all"
                          >
                            Contracted
                          </button>
                          <button
                            onClick={() => updateLeadStatus(lead.id, 'rejected')}
                            disabled={lead.status === 'rejected'}
                            className="px-3 py-1.5 bg-red-500/10 hover:bg-red-500/20 text-red-400 disabled:opacity-40 disabled:hover:bg-red-500/10 text-xs font-semibold rounded uppercase tracking-wider transition-all"
                          >
                            Reject
                          </button>
                        </div>

                        {lead.phone && (
                          <button
                            onClick={() => triggerWhatsAppCommunication(lead.phone, lead.companyName)}
                            className="px-3 py-1.5 bg-white hover:bg-slate-200 text-black text-xs font-bold rounded uppercase tracking-wider transition-all flex items-center gap-1"
                          >
                            <span>Launch Loop</span>
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}

          {/* TAB AREA 2: ENTERPRISE CMS COMPONENT SYSTEM */}
          {currentTab === 'blog' && (
            <div className="space-y-10">
              
              {/* MODULE 1: ANALYTICAL METRICS CONTROL CONSOLE PANEL */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-[#121212] border border-slate-900 rounded-xl p-5 shadow-sm">
                  <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-1">Total Blogs</div>
                  <div className="text-3xl font-black text-white tracking-tight">{totalBlogsCount}</div>
                </div>
                <div className="bg-[#121212] border border-slate-900 rounded-xl p-5 shadow-sm">
                  <div className="text-[10px] font-mono text-emerald-500 uppercase tracking-widest mb-1">Published Blogs</div>
                  <div className="text-3xl font-black text-emerald-400 tracking-tight">{publishedBlogsCount}</div>
                </div>
                <div className="bg-[#121212] border border-slate-900 rounded-xl p-5 shadow-sm">
                  <div className="text-[10px] font-mono text-amber-500 uppercase tracking-widest mb-1">Draft Blogs</div>
                  <div className="text-3xl font-black text-amber-400 tracking-tight">{draftBlogsCount}</div>
                </div>
                <div className="bg-[#121212] border border-slate-900 rounded-xl p-5 shadow-sm">
                  <div className="text-[10px] font-mono text-cyan-500 uppercase tracking-widest mb-1">Featured Blogs</div>
                  <div className="text-3xl font-black text-cyan-400 tracking-tight">{featuredBlogsCount}</div>
                </div>
              </div>

              {/* MODULE 2: DOCUMENT GENERATION AND COMPILATION PIPELINE WRITER */}
              <div className="bg-[#121212] border border-slate-900 rounded-2xl p-6 relative overflow-hidden">
                <div className="flex items-center justify-between mb-6 border-b border-slate-900 pb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00f2fe] animate-pulse"></span>
                    <h2 className="text-base font-bold uppercase tracking-wider text-slate-200">
                      {isEditing ? 'Modify Active Blog Payload' : 'Compile New Knowledge Node'}
                    </h2>
                  </div>
                  {isEditing && (
                    <button
                      type="button"
                      onClick={resetBlogForm}
                      className="text-xs font-mono px-2.5 py-1 rounded bg-red-500/10 text-red-400 border border-red-500/20 hover:bg-red-500/20 transition-all"
                    >
                      Abort Modification Loop
                    </button>
                  )}
                </div>

                {previewMode ? (
                  /* REUSABLE EMBEDDED CONTENT PREVIEW MATRIX EYE SCREEN */
                  <div className="space-y-6 bg-[#0a0a0a] border border-slate-800 rounded-xl p-6 max-w-4xl mx-auto">
                    <div className="flex justify-between items-center border-b border-slate-900 pb-4">
                      <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">// Virtual DOM Preview Node</span>
                      <button 
                        type="button" 
                        onClick={() => setPreviewMode(false)}
                        className="text-xs font-mono px-3 py-1.5 bg-[#1a1a1a] border border-slate-800 rounded text-slate-300 hover:text-white"
                      >
                        Return to Workspace Editor
                      </button>
                    </div>

                    {blogForm.coverImage && (
                      <img src={blogForm.coverImage} alt="Cover Preview" className="w-full h-64 object-cover rounded-xl border border-slate-800" />
                    )}

                    <div className="space-y-2">
                      <div className="flex gap-2 text-xs font-mono text-slate-500">
                        <span className="text-[#00f2fe] font-bold">{blogForm.category}</span>
                        <span>•</span>
                        <span>{blogForm.readTime}</span>
                        <span>•</span>
                        <span>By {blogForm.author || 'Anonymous Author'}</span>
                      </div>
                      <h1 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">{blogForm.title || 'Untitled Document Template'}</h1>
                      <p className="text-slate-400 text-sm italic">{blogForm.summary || 'No summary overview assigned.'}</p>
                    </div>

                    <div className="border-t border-slate-900 pt-4 text-slate-300 text-sm leading-relaxed whitespace-pre-wrap font-sans">
                      {blogForm.content || 'Payload body stream is vacant.'}
                    </div>

                    <div className="bg-[#111] p-4 rounded-lg border border-slate-900 font-mono text-xs text-slate-400 space-y-1">
                      <div className="text-slate-500 uppercase text-[10px] font-bold tracking-wider mb-1">SEO Routing Header Parameters</div>
                      <div><span className="text-slate-600">Slug Endpoint:</span> /blog/{blogForm.slug}</div>
                      <div><span className="text-slate-600">Meta Title:</span> {blogForm.seoTitle || blogForm.title}</div>
                      <div><span className="text-slate-600">Meta Tags:</span> {blogForm.tags}</div>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSaveBlog} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                      
                      {/* Left Core Parameter Stack */}
                      <div className="md:col-span-8 space-y-4">
                        <div>
                          <label className="block text-xs uppercase tracking-widest text-slate-400 mb-1.5">Article Headline Title</label>
                          <input
                            type="text"
                            name="title"
                            required
                            value={blogForm.title}
                            onChange={handleBlogFormChange}
                            placeholder="Orchestrating Sub-Second Inference Loops..."
                            className="w-full bg-[#1a1a1a] border border-slate-800 focus:border-[#00f2fe] rounded-lg px-4 py-2.5 text-white placeholder-slate-600 outline-none transition-all"
                          />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs uppercase tracking-widest text-slate-400 mb-1.5">Static Slug Router Node (Auto/Manual)</label>
                            <input
                              type="text"
                              name="slug"
                              required
                              value={blogForm.slug}
                              onChange={handleBlogFormChange}
                              placeholder="gemini-cognitive-fabrics"
                              className="w-full bg-[#1a1a1a] border border-slate-800 focus:border-[#00f2fe] rounded-lg px-4 py-2.5 text-xs font-mono text-white placeholder-slate-600 outline-none transition-all"
                            />
                          </div>
                          <div>
                            <label className="block text-xs uppercase tracking-widest text-slate-400 mb-1.5">Structural Category Faculty</label>
                            <select
                              name="category"
                              value={blogForm.category}
                              onChange={handleBlogFormChange}
                              className="w-full bg-[#1a1a1a] border border-slate-800 focus:border-[#00f2fe] rounded-lg px-4 py-2.5 text-xs text-white outline-none transition-all"
                            >
                              {["AI", "Web Development", "Mobile Apps", "React", "Firebase", "UI/UX", "Business", "Case Studies"].map(c => (
                                <option key={c} value={c}>{c}</option>
                              ))}
                            </select>
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs uppercase tracking-widest text-slate-400 mb-1.5">Editorial Executive Summary</label>
                          <textarea
                            name="summary"
                            required
                            rows="2"
                            value={blogForm.summary}
                            onChange={handleBlogFormChange}
                            placeholder="A structural analysis detailing core optimizations across layout containers..."
                            className="w-full bg-[#1a1a1a] border border-slate-800 focus:border-[#00f2fe] rounded-lg px-4 py-2.5 text-xs text-white placeholder-slate-600 outline-none transition-all resize-none"
                          />
                        </div>

                        <div>
                          <label className="block text-xs uppercase tracking-widest text-slate-400 mb-1.5">Rich Text Content Core Payload Block</label>
                          <textarea
                            name="content"
                            required
                            rows="10"
                            value={blogForm.content}
                            onChange={handleBlogFormChange}
                            placeholder="Write full Markdown or prose content rows here..."
                            className="w-full bg-[#1a1a1a] border border-slate-800 focus:border-[#00f2fe] rounded-lg px-4 py-3 text-xs font-sans text-white placeholder-slate-600 outline-none transition-all resize-y"
                          />
                          <div className="text-[10px] font-mono text-slate-500 mt-1 flex justify-between">
                            <span>Computed Output Pipeline: {blogForm.readTime}</span>
                            <span>Standard breaks and spaces delineate word maps.</span>
                          </div>
                        </div>
                      </div>

                      {/* Right Meta Configuration Stack */}
                      <div className="md:col-span-4 space-y-4 bg-[#161616]/60 border border-slate-900 rounded-xl p-4">
                        <div className="text-xs font-mono text-slate-400 uppercase tracking-wider border-b border-slate-900 pb-2 mb-2">// Meta Schema Fields</div>
                        
                        <div>
                          <label className="block text-xs uppercase tracking-widest text-slate-400 mb-1.5">Author Signature</label>
                          <input
                            type="text"
                            name="author"
                            required
                            value={blogForm.author}
                            onChange={handleBlogFormChange}
                            placeholder="Alex Rivers"
                            className="w-full bg-[#1a1a1a] border border-slate-800 focus:border-[#00f2fe] rounded-lg px-4 py-2 text-xs text-white placeholder-slate-600 outline-none transition-all"
                          />
                        </div>

                        <div>
                          <label className="block text-xs uppercase tracking-widest text-slate-400 mb-1.5">Cover Image CDN Trajectory Target</label>
                          <input
                            type="text"
                            name="coverImage"
                            value={blogForm.coverImage}
                            onChange={handleBlogFormChange}
                            placeholder="https://images.unsplash.com/..."
                            className="w-full bg-[#1a1a1a] border border-slate-800 focus:border-[#00f2fe] rounded-lg px-4 py-2 text-xs font-mono text-white placeholder-slate-600 outline-none transition-all"
                          />
                        </div>

                        <div>
                          <label className="block text-xs uppercase tracking-widest text-slate-400 mb-1.5">Tags Indices (Comma Separated)</label>
                          <input
                            type="text"
                            name="tags"
                            value={blogForm.tags}
                            onChange={handleBlogFormChange}
                            placeholder="Gemini AI, Tailwind, Architecture"
                            className="w-full bg-[#1a1a1a] border border-slate-800 focus:border-[#00f2fe] rounded-lg px-4 py-2 text-xs font-mono text-white placeholder-slate-600 outline-none transition-all"
                          />
                        </div>

                        <div className="pt-2 border-t border-slate-900 space-y-3">
                          <label className="block text-[10px] font-mono uppercase tracking-widest text-slate-500">// SEO Edge Overrides</label>
                          
                          <div>
                            <input
                              type="text"
                              name="seoTitle"
                              value={blogForm.seoTitle}
                              onChange={handleBlogFormChange}
                              placeholder="SEO Meta Custom Title Token"
                              className="w-full bg-[#1a1a1a] border border-slate-800 focus:border-[#00f2fe] rounded-lg px-3 py-2 text-xs text-white placeholder-slate-600 outline-none transition-all"
                            />
                          </div>

                          <div>
                            <textarea
                              name="seoDescription"
                              rows="2"
                              value={blogForm.seoDescription}
                              onChange={handleBlogFormChange}
                              placeholder="SEO Description Parameter Field Index"
                              className="w-full bg-[#1a1a1a] border border-slate-800 focus:border-[#00f2fe] rounded-lg px-3 py-2 text-xs text-white placeholder-slate-600 outline-none transition-all resize-none"
                            />
                          </div>
                        </div>

                        <div className="pt-4 border-t border-slate-900 space-y-3 bg-[#111] p-3 rounded-lg">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-mono uppercase tracking-wider text-slate-300">Set Blog Live</span>
                            <label className="relative inline-flex items-center cursor-pointer">
                              <input 
                                type="checkbox" 
                                name="published"
                                checked={blogForm.published}
                                onChange={handleBlogFormChange}
                                className="sr-only peer" 
                              />
                              <div className="w-9 h-5 bg-slate-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-slate-400 after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-emerald-500 peer-checked:after:bg-black"></div>
                            </label>
                          </div>

                          <div className="flex items-center justify-between">
                            <span className="text-xs font-mono uppercase tracking-wider text-slate-300">Feature Headline</span>
                            <label className="relative inline-flex items-center cursor-pointer">
                              <input 
                                type="checkbox" 
                                name="featured"
                                checked={blogForm.featured}
                                onChange={handleBlogFormChange}
                                className="sr-only peer" 
                              />
                              <div className="w-9 h-5 bg-slate-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-slate-400 after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-cyan-500 peer-checked:after:bg-black"></div>
                            </label>
                          </div>
                        </div>

                      </div>
                    </div>

                    <div className="border-t border-slate-900 pt-4 flex flex-wrap items-center justify-between gap-4">
                      <button
                        type="button"
                        onClick={() => setPreviewMode(true)}
                        className="px-4 py-2 border border-slate-800 bg-[#161616] text-slate-300 hover:text-white rounded-lg text-xs font-mono tracking-wider transition-all"
                      >
                        Inspect Node Blueprint Preview
                      </button>

                      <div className="flex gap-2">
                        <button
                          type="button"
                          onClick={() => {
                            setBlogForm(prev => ({ ...prev, published: false }));
                            setTimeout(() => { document.getElementById('cms-commit-anchor')?.click(); }, 50);
                          }}
                          className="px-4 py-2 bg-slate-800 text-slate-200 hover:bg-slate-700 rounded-lg text-xs font-mono tracking-wider transition-all"
                        >
                          Draft State Caching
                        </button>
                        <button
                          id="cms-commit-anchor"
                          type="submit"
                          className="px-5 py-2 bg-gradient-to-r from-[#00f2fe] to-[#0575e6] text-black font-bold uppercase text-xs tracking-widest rounded-lg transition-all shadow-md shadow-[#00f2fe]/10"
                        >
                          {isEditing ? 'Commit Node Updates' : 'Publish to Edge Registry'}
                        </button>
                      </div>
                    </div>
                  </form>
                )}
              </div>

              {/* MODULE 3: EXTENSIBLE CONTENT CATALOG MATRIX TABLE LIST */}
              <div className="bg-[#121212] border border-slate-900 rounded-2xl p-6">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6 border-b border-slate-900 pb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    <h3 className="text-base font-bold uppercase tracking-wider text-slate-200">System Document Registry</h3>
                  </div>

                  {/* Operational Sorting/Filtering Tools Terminal Dashboard */}
                  <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                    <input
                      type="text"
                      placeholder="Search registry rows..."
                      value={blogSearch}
                      onChange={(e) => setBlogSearch(e.target.value)}
                      className="bg-[#1a1a1a] border border-slate-800 rounded px-3 py-1.5 text-xs text-white placeholder-slate-600 outline-none focus:border-[#00f2fe]"
                    />
                    
                    <select
                      value={blogCategoryFilter}
                      onChange={(e) => setBlogCategoryFilter(e.target.value)}
                      className="bg-[#1a1a1a] border border-slate-800 rounded px-2 py-1.5 text-xs text-slate-300 outline-none"
                    >
                      <option value="All">All Categories</option>
                      {["AI", "Web Development", "Mobile Apps", "React", "Firebase", "UI/UX", "Business", "Case Studies"].map(c => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>

                    <select
                      value={blogStatusFilter}
                      onChange={(e) => setBlogStatusFilter(e.target.value)}
                      className="bg-[#1a1a1a] border border-slate-800 rounded px-2 py-1.5 text-xs text-slate-300 outline-none"
                    >
                      <option value="All">All Statuses</option>
                      <option value="Published">Published Node</option>
                      <option value="Draft">Draft Staged</option>
                      <option value="Featured">Featured Cluster</option>
                    </select>

                    <select
                      value={blogSortOrder}
                      onChange={(e) => setBlogSortOrder(e.target.value)}
                      className="bg-[#1a1a1a] border border-slate-800 rounded px-2 py-1.5 text-xs text-slate-300 outline-none"
                    >
                      <option value="newest">Newest Sequence</option>
                      <option value="oldest">Oldest Sequence</option>
                      <option value="alphabetical">Alphabetical</option>
                    </select>
                  </div>
                </div>

                {blogsLoading ? (
                  <div className="text-center py-10 font-mono text-xs text-slate-500 animate-pulse">Querying cloud document arrays...</div>
                ) : currentPaginatedBlogs.length === 0 ? (
                  <div className="text-center py-12 border border-dashed border-slate-800 rounded-xl text-xs font-mono text-slate-500">
                    No documents returned under current matching parameters inside collection: blogs.
                  </div>
                ) : (
                  <div className="space-y-3">
                    <div className="hidden sm:grid grid-cols-12 gap-4 px-4 text-[10px] font-mono uppercase text-slate-500 tracking-wider">
                      <div className="col-span-5">Meta Title Context Mapping</div>
                      <div className="col-span-2">Category</div>
                      <div className="col-span-2">Status Node</div>
                      <div className="col-span-3 text-right">Cluster Operations</div>
                    </div>

                    {currentPaginatedBlogs.map((blog) => (
                      <div 
                        key={blog.id}
                        className="grid grid-cols-1 sm:grid-cols-12 items-center gap-4 bg-[#161616]/70 border border-slate-900 rounded-xl p-4 transition-all hover:border-slate-800"
                      >
                        <div className="col-span-1 sm:col-span-5">
                          <div className="text-sm font-bold text-white tracking-wide truncate">{blog.title}</div>
                          <div className="text-[10px] font-mono text-slate-500 mt-0.5 truncate">/blog/{blog.slug} | By {blog.author || 'N/A'}</div>
                        </div>

                        <div className="col-span-1 sm:col-span-2">
                          <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-900 text-slate-300 border border-slate-800">
                            {blog.category}
                          </span>
                        </div>

                        <div className="col-span-1 sm:col-span-2 flex flex-wrap gap-1.5">
                          <span className={`px-2 py-0.5 rounded text-[9px] font-mono uppercase tracking-widest font-bold border ${
                            blog.published 
                              ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' 
                              : 'bg-amber-500/10 text-amber-400 border-amber-500/20'
                          }`}>
                            {blog.published ? 'Live' : 'Draft'}
                          </span>
                          {blog.featured && (
                            <span className="px-1.5 py-0.5 rounded text-[9px] font-mono uppercase bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 font-bold">
                              Star
                            </span>
                          )}
                        </div>

                        <div className="col-span-1 sm:col-span-3 flex justify-end gap-1.5">
                          <button
                            onClick={() => {
                              handleEditSelect(blog);
                              setPreviewMode(true);
                            }}
                            className="px-2.5 py-1 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 rounded text-[10px] font-mono transition-all"
                          >
                            Preview
                          </button>
                          <button
                            onClick={() => handleEditSelect(blog)}
                            className="px-2.5 py-1 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/20 text-cyan-400 rounded text-[10px] font-mono transition-all"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleDeleteBlog(blog.id)}
                            className="px-2.5 py-1 bg-red-500/10 hover:bg-red-500/20 border border-red-500/20 text-red-400 rounded text-[10px] font-mono transition-all"
                          >
                            Purge
                          </button>
                        </div>
                      </div>
                    ))}

                    {/* Pagination Router Controller Node */}
                    <div className="flex items-center justify-between pt-4 font-mono text-xs text-slate-500">
                      <div>
                        Page {blogPage} of {totalPages} ({sortedBlogs.length} target records matched)
                      </div>
                      <div className="flex gap-1">
                        <button
                          disabled={blogPage === 1}
                          onClick={() => setBlogPage(prev => prev - 1)}
                          className="px-2.5 py-1 bg-slate-900 border border-slate-800 disabled:opacity-30 rounded hover:text-white"
                        >
                          Prev
                        </button>
                        <button
                          disabled={blogPage === totalPages}
                          onClick={() => setBlogPage(prev => prev + 1)}
                          className="px-2.5 py-1 bg-slate-900 border border-slate-800 disabled:opacity-30 rounded hover:text-white"
                        >
                          Next
                        </button>
                      </div>
                    </div>

                  </div>
                )}
              </div>

            </div>
          )}

        </main>
      </div>

    </div>
  );
}
