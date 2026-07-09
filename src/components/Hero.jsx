import React from "react";
import heroIllustration from "../assets/hero-illustration.svg";

export default function Hero() {
  return (
    <header className="relative overflow-hidden max-w-7xl mx-auto px-6 pt-24 pb-24">

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 opacity-80">
        <img
          src={heroIllustration}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      <div className="grid lg:grid-cols-2 gap-14 items-center">

        {/* Left */}
        <div>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs uppercase tracking-[3px] font-mono">
            <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
            Building Smarter Software
          </div>

          <h1 className="mt-8 text-5xl md:text-7xl font-black leading-tight text-white uppercase">
            Enterprise Software
            <br />
            AI Automation
            <br />
            <span className="text-cyan-400">
              Digital Products
            </span>
          </h1>

          <p className="mt-6 text-neutral-400 text-lg max-w-xl">
            We build premium websites, mobile apps, AI automation and business
            software engineered for speed, security and scalability.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">

            <a
              href="#contact"
              className="bg-cyan-400 text-black px-8 py-4 rounded-xl font-bold"
            >
              Start Project
            </a>

            <a
              href="#portfolio"
              className="border border-neutral-700 px-8 py-4 rounded-xl text-white hover:bg-neutral-900"
            >
              Portfolio
            </a>

          </div>

        </div>

        {/* Right */}

        <div className="flex justify-center">

          <img
            src={heroIllustration}
            alt="OnyxStack Labs"
            className="w-full max-w-2xl drop-shadow-[0_0_70px_rgba(6,182,212,.35)]"
          />

        </div>

      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 border-t border-neutral-800 pt-10">

        {[
          ["Verified", "Production Deployments"],
          ["100%", "Custom Engineering"],
          ["AI", "Automation Systems"],
          ["Premium", "UI/UX Experience"],
        ].map(([title, text]) => (
          <div key={title}>
            <div className="text-2xl font-black text-white">
              {title}
            </div>
            <div className="text-xs uppercase tracking-widest text-neutral-500 mt-2">
              {text}
            </div>
          </div>
        ))}

      </div>

    </header>
  );
}
