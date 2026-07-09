import React from 'react';

export default function ContactForm({ 
  formData, 
  setFormData, 
  submissionState, 
  setSubmissionState, 
  errors, 
  handleLeadFormTransmission, 
  siteConfig 
}) {
  return (
    <section id="contact" className="relative z-10 border-t border-neutral-900 py-28 px-6" aria-labelledby="contact-title">
      <div className="max-w-2xl mx-auto bg-[#090909]/80 border border-neutral-900 rounded-3xl p-6 md:p-10 space-y-8 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-md">
        <div className="text-center space-y-2">
          <h2 id="contact-title" className="text-xl md:text-2xl font-black uppercase tracking-tight text-white">Let's Build Your Next Project</h2>
          <p className="text-xs text-neutral-400 font-normal max-w-md mx-auto leading-relaxed tracking-wide">
            Drop your custom application parameters directly into our active design consultation funnel pipeline.
          </p>
        </div>

        {submissionState === 'SUCCESS' ? (
          <div className="bg-neutral-900/40 border border-emerald-500/20 rounded-2xl p-8 text-center space-y-5 animate-fade-in">
            <div className="w-12 h-12 rounded-full bg-emerald-950/50 border border-emerald-500 text-[#00e676] flex items-center justify-center mx-auto text-xl shadow-[0_0_15px_rgba(0,230,118,0.2)]">
              ✓
            </div>
            <div className="space-y-1.5">
              <h3 className="text-base font-bold text-[#00e676] font-mono uppercase tracking-widest">Project Request Cached</h3>
              <p className="text-xs text-neutral-400 max-w-sm mx-auto leading-relaxed">
                Your project specifications have been successfully transmitted. Our engineering partners will reach out within 24 hours.
              </p>
            </div>
            <button 
              onClick={() => setSubmissionState('IDLE')}
              className="text-[10px] text-[#06B6D4] hover:text-cyan-300 font-mono uppercase tracking-widest pt-2 font-bold focus:outline-none focus:underline"
            >
              Submit An Additional System Node
            </button>
          </div>
        ) : (
          <form onSubmit={handleLeadFormTransmission} className="space-y-5">
            <div className="space-y-1.5">
              <label htmlFor="companyName" className="text-[10px] font-mono font-bold uppercase tracking-widest text-neutral-400 block">Company Name</label>
              <input 
                type="text" 
                id="companyName"
                disabled={submissionState === 'SUBMITTING'}
                placeholder={siteConfig?.agencyName || "OnyxStack Labs"} 
                value={formData.companyName}
                onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                className={`w-full bg-[#050505] border ${errors.companyName ? 'border-red-500/80 focus:ring-red-500' : 'border-neutral-800 focus:border-[#06B6D4] focus:ring-[#06B6D4]'} focus:ring-1 rounded-xl py-3 px-4 text-xs text-white placeholder-neutral-800 outline-none transition-all disabled:opacity-50`}
              />
              {errors.companyName && <p className="text-red-400 text-[10px] font-mono mt-1">{errors.companyName}</p>}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label htmlFor="email" className="text-[10px] font-mono font-bold uppercase tracking-widest text-neutral-400 block">Email Address</label>
                <input 
                  type="email" 
                  id="email"
                  disabled={submissionState === 'SUBMITTING'}
                  placeholder="onyxstacklabs@gmail.com" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className={`w-full bg-[#050505] border ${errors.email ? 'border-red-500/80 focus:ring-red-500' : 'border-neutral-800 focus:border-[#06B6D4] focus:ring-[#06B6D4]'} focus:ring-1 rounded-xl py-3 px-4 text-xs text-white placeholder-neutral-800 outline-none transition-all disabled:opacity-50`}
                />
                {errors.email && <p className="text-red-400 text-[10px] font-mono mt-1">{errors.email}</p>}
              </div>

              <div className="space-y-1.5">
                <label htmlFor="phone" className="text-[10px] font-mono font-bold uppercase tracking-widest text-neutral-400 block">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone"
                  disabled={submissionState === 'SUBMITTING'}
                  placeholder="+92 344 5800630" 
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className={`w-full bg-[#050505] border ${errors.phone ? 'border-red-500/80 focus:ring-red-500' : 'border-neutral-800 focus:border-[#06B6D4] focus:ring-[#06B6D4]'} focus:ring-1 rounded-xl py-3 px-4 text-xs text-white placeholder-neutral-800 outline-none transition-all disabled:opacity-50`}
                />
                {errors.phone && <p className="text-red-400 text-[10px] font-mono mt-1">{errors.phone}</p>}
              </div>
            </div>

            <div className="space-y-1.5">
              <label htmlFor="details" className="text-[10px] font-mono font-bold uppercase tracking-widest text-neutral-400 block">Project Scope & Details</label>
              <textarea 
                id="details"
                rows="4"
                disabled={submissionState === 'SUBMITTING'}
                placeholder="Describe your customized system goals, required AI features, or workflow challenges..." 
                value={formData.details}
                onChange={(e) => setFormData({...formData, details: e.target.value})}
                className={`w-full bg-[#050505] border ${errors.details ? 'border-red-500/80 focus:ring-red-500' : 'border-neutral-800 focus:border-[#06B6D4] focus:ring-[#06B6D4]'} focus:ring-1 rounded-xl py-3 px-4 text-xs text-white placeholder-neutral-800 outline-none transition-all resize-none disabled:opacity-50`}
              />
              {errors.details && <p className="text-red-400 text-[10px] font-mono mt-1">{errors.details}</p>}
            </div>

            <div className="space-y-1.5">
              <label htmlFor="budget" className="text-[10px] font-mono font-bold uppercase tracking-widest text-neutral-400 block">Estimated Budget Allocation</label>
              <div className="relative">
                <select 
                  id="budget"
                  disabled={submissionState === 'SUBMITTING'}
                  value={formData.budget}
                  onChange={(e) => setFormData({...formData, budget: e.target.value})}
                  className="w-full bg-[#050505] border border-neutral-800 focus:border-[#06B6D4] rounded-xl py-3 px-4 text-xs text-white outline-none cursor-pointer appearance-none disabled:opacity-50"
                >
                  <option>Standard MVP ($1,000 - $2,000)</option>
                  <option>Premium Business Tier ($2,000 - $5,000)</option>
                  <option>Enterprise Custom Architecture ($5,000+)</option>
                </select>
                <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-neutral-500">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                </div>
              </div>
            </div>

            <button 
              type="submit"
              disabled={submissionState === 'SUBMITTING'}
              className="w-full bg-[#06B6D4] hover:bg-cyan-400 disabled:bg-cyan-950 disabled:text-cyan-700 text-black font-black text-xs uppercase tracking-widest py-3.5 px-4 rounded-xl shadow-[0_4px_20px_rgba(6,182,212,0.1)] transition-all duration-300 flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-[#06B6D4]"
            >
              {submissionState === 'SUBMITTING' ? (
                <>
                  <svg className="animate-spin h-3.5 w-3.5 text-black" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  <span className="font-mono tracking-wider">Verifying Transmission...</span>
                </>
              ) : (
                "Start Project"
              )}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
