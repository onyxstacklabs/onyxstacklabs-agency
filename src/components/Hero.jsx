import React from "react";
import heroDashboard from "../assets/hero-dashboard.svg";

export default function Hero() {
  return (
    <header className="relative overflow-hidden z-10 max-w-7xl mx-auto px-6 pt-28 pb-24 md:pt-40 md:pb-36">

      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-cyan-500/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute right-0 top-40 w-80 h-80 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Badge */}
      <div className="flex justify-center">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 backdrop-blur-md text-[11px] uppercase tracking-[0.25em] font-semibold text-cyan-400">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
          Building Smarter Software For Global Businesses
        </div>
      </div>

      {/* Heading */}
      <div className="max-w-5xl mx-auto text-center mt-10">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black uppercase leading-tight text-white">
          Enterprise Software
          <br />
          AI Automation
          <br />
          <span className="bg-gradient-to-r from-white via-cyan-200 to-cyan-500 bg-clip-text text-transparent">
            Scalable Digital Products
          </span>
        </h1>

        <p className="mt-8 max-w-3xl mx-auto text-neutral-400 text-lg leading-8">
          OnyxStack Labs builds premium websites, AI solutions,
          automation systems and enterprise software engineered for
          speed, security and long-term scalability.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-5 mt-10">
          <a
            href="#contact"
            className="px-8 py-4 rounded-xl bg-cyan-500 text-black font-bold uppercase tracking-widest hover:bg-cyan-400 transition duration-300 shadow-[0_0_40px_rgba(6,182,212,.35)]"
          >
            Start Your Project
          </a>

          <a
            href="#portfolio"
            className="px-8 py-4 rounded-xl border border-neutral-700 bg-neutral-900/50 text-white uppercase tracking-widest hover:border-cyan-400 hover:text-cyan-300 transition duration-300"
          >
            View Portfolio
          </a>
        </div>
      </div>

      {/* Dashboard */}
      <div className="relative mt-24 max-w-6xl mx-auto">

        {/* Glow */}
        <div className="absolute -inset-8 bg-cyan-500/20 blur-[100px] rounded-full opacity-60"></div>

        {/* Left Floating Card */}
        <div className="hidden lg:flex absolute -left-10 top-12 z-20 bg-[#0b1120]/90 backdrop-blur-xl border border-cyan-500/20 rounded-2xl px-5 py-4 shadow-2xl flex-col">
          <span className="text-cyan-400 text-xs uppercase tracking-widest">
            AI STATUS
          </span>
          <span className="text-2xl font-black text-white mt-2">
            ONLINE
          </span>
        </div>

        {/* Right Floating Card */}
        <div className="hidden lg:flex absolute -right-10 bottom-12 z-20 bg-[#0b1120]/90 backdrop-blur-xl border border-cyan-500/20 rounded-2xl px-5 py-4 shadow-2xl flex-col">
          <span className="text-cyan-400 text-xs uppercase tracking-widest">
            DEPLOYMENTS
          </span>
          <span className="text-2xl font-black text-white mt-2">
            24/7
          </span>
        </div>

        {/* Dashboard Image */}
        <div className="relative rounded-3xl overflow-hidden border border-cyan-500/20 shadow-[0_50px_120px_rgba(6,182,212,.25)] bg-[#090909] transition duration-500 hover:scale-[1.02]">
          <img
            src={heroDashboard}
            alt="OnyxStack Dashboard"
            className="w-full"
          />
        </div>
      </div>

      {/* Scroll */}
      <div className="mt-14 flex justify-center">
        <a
          href="#services"
          className="animate-bounce text-neutral-500 hover:text-cyan-400 transition"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25L12 15.75 4.5 8.25"
            />
          </svg>
        </a>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-24 border-t border-neutral-800 pt-12">

        {[
          {
            value: "100%",
            title: "Custom Development",
          },
          {
            value: "AI",
            title: "Automation Ready",
          },
          {
            value: "24/7",
            title: "Engineering Support",
          },
          {
            value: "Premium",
            title: "Enterprise Quality",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="text-center"
          >
            <div className="text-3xl font-black text-white">
              {item.value}
            </div>

            <div className="mt-2 text-xs uppercase tracking-[0.25em] text-neutral-500">
              {item.title}
            </div>
          </div>
        ))}

      </div>

    </header>
  );
}
