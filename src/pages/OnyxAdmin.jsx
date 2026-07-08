import React, { useState, useEffect } from 'react';
// Locked relative layer fallback pointing strictly to the matching project source root folder mapping
import { db } from '@firebase/config'; 
import { collection, query, orderBy, onSnapshot, doc, updateDoc } from 'firebase/firestore';

export default function OnyxAdmin() {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passkey, setPasskey] = useState('');

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
    <div className="min-h-screen bg-[#0a0a0a] text-slate-100 font-sans p-4 sm:p-8">
      <header className="max-w-7xl mx-auto mb-10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-900 pb-6">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-[#00f2fe]"></span>
            <h1 className="text-2xl font-black uppercase tracking-wider text-white">OnyxStack Labs</h1>
          </div>
          <p className="text-xs text-slate-400 uppercase tracking-widest">Central Lead Matrix & Funnel Control</p>
        </div>
        <div className="bg-[#111] border border-slate-800 rounded-lg px-4 py-2 text-xs font-mono text-slate-400">
          Total Nodes Cached: <span className="text-[#00f2fe] font-bold">{leads.length}</span>
        </div>
      </header>

      <main className="max-w-7xl mx-auto">
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
      </main>
    </div>
  );
}
