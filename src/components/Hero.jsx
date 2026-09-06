import React from 'react';
import { playerData } from '../data/playerData';
import { MessageCircle, Play, Download, Shield, Sparkles, CheckCircle2, Award } from 'lucide-react';

export default function Hero() {
  const handleScrollToHighlights = (e) => {
    e.preventDefault();
    const target = document.getElementById('highlights');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 md:pt-32 md:pb-24 flex items-center justify-center overflow-hidden bg-sport-navy pitch-grid"
    >
      {/* Stadium & Field line overlays */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Pitch center circle subtle glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-sport-green/10 pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full border border-sport-green/10 pointer-events-none"></div>
        <div className="absolute top-0 bottom-0 left-1/2 w-px bg-gradient-to-b from-transparent via-white/5 to-transparent pointer-events-none"></div>
        {/* Glow gradients */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-sport-emerald/15 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-sport-dark/60 rounded-full blur-3xl pointer-events-none"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Player Info & Calls to Action */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-center lg:text-left pt-4 lg:pt-0">
            
            {/* Badges Row */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
              {/* Green Availability Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sport-emerald/15 border border-sport-emerald/30 text-sport-green font-semibold text-xs tracking-wider uppercase shadow-sm shadow-sport-emerald/20">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sport-green opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-sport-green"></span>
                </span>
                <span>AVAILABLE FOR TRIALS</span>
              </div>

              {/* Tagline */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-sport-light text-xs font-semibold tracking-widest uppercase">
                <span className="text-base">🇳🇬</span>
                <span>NIGERIAN FOOTBALLER</span>
              </div>
            </div>

            {/* Main Name Heading */}
            <div className="space-y-2">
              <h1 className="font-display font-black text-4xl sm:text-6xl xl:text-7xl tracking-tight text-white leading-[0.95] uppercase">
                AMODU <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sport-light via-white to-sport-green">
                  ABUBAKAR OGWU
                </span>
              </h1>
              {/* Positions */}
              <p className="font-display font-bold text-sm sm:text-base md:text-lg tracking-widest text-sport-green uppercase flex items-center justify-center lg:justify-start flex-wrap gap-2 pt-2">
                <span>CENTRAL MIDFIELDER</span>
                <span className="text-sport-muted">•</span>
                <span>ATTACKING MIDFIELDER</span>
                <span className="text-sport-muted">•</span>
                <span>WINGER</span>
              </p>
            </div>

            {/* Short Introduction */}
            <p className="text-sport-muted text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              {playerData.heroBio}
            </p>

            {/* Quick Details Chips */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="glass-panel p-3 rounded-xl border border-white/10 text-center lg:text-left">
                <span className="block text-[11px] uppercase tracking-wider text-sport-muted font-medium">Current Club</span>
                <span className="font-display font-bold text-base sm:text-lg text-white">Delight FA</span>
              </div>
              <div className="glass-panel p-3 rounded-xl border border-white/10 text-center lg:text-left">
                <span className="block text-[11px] uppercase tracking-wider text-sport-muted font-medium">Age</span>
                <span className="font-display font-bold text-base sm:text-lg text-white">20 Years</span>
              </div>
              <div className="glass-panel p-3 rounded-xl border border-white/10 text-center lg:text-left">
                <span className="block text-[11px] uppercase tracking-wider text-sport-muted font-medium">Preferred Foot</span>
                <span className="font-display font-bold text-base sm:text-lg text-sport-green">Both Feet</span>
              </div>
              <div className="glass-panel p-3 rounded-xl border border-sport-emerald/30 bg-sport-emerald/10 text-center lg:text-left">
                <span className="block text-[11px] uppercase tracking-wider text-sport-emerald font-semibold">Status</span>
                <span className="font-display font-bold text-base sm:text-lg text-white">Open to Trials</span>
              </div>
            </div>

            {/* 3 Call-To-Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3.5 pt-4">
              {/* 1. Contact Player WhatsApp */}
              <a
                href={playerData.playerContact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-display font-bold text-sm tracking-wider uppercase bg-sport-emerald text-sport-navy hover:bg-sport-green focus:outline-none focus:ring-2 focus:ring-sport-green focus:ring-offset-2 focus:ring-offset-sport-navy transition-all duration-200 shadow-xl shadow-sport-emerald/30 hover:scale-[1.02] active:scale-95"
              >
                <MessageCircle size={19} className="stroke-[2.5]" />
                <span>CONTACT PLAYER</span>
              </a>

              {/* 2. Watch Highlights Scroll */}
              <a
                href="#highlights"
                onClick={handleScrollToHighlights}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-display font-bold text-sm tracking-wider uppercase bg-sport-dark text-white hover:bg-sport-dark/80 hover:border-sport-green/40 border border-white/15 focus:outline-none focus:ring-2 focus:ring-sport-green transition-all duration-200 shadow-lg shadow-black/30 hover:scale-[1.02] active:scale-95"
              >
                <Play size={18} className="fill-sport-green text-sport-green" />
                <span>WATCH HIGHLIGHTS</span>
              </a>

              {/* 3. Download CV */}
              <a
                href={playerData.playerContact.cvFile}
                download={playerData.playerContact.cvFilename}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-display font-bold text-sm tracking-wider uppercase bg-white/5 text-sport-light hover:text-white hover:bg-white/10 border border-white/10 focus:outline-none focus:ring-2 focus:ring-sport-green transition-all duration-200 hover:scale-[1.02] active:scale-95"
              >
                <Download size={18} className="text-sport-gold" />
                <span>DOWNLOAD CV</span>
              </a>
            </div>

          </div>

          {/* Right Column: Hero Image Portrait in Red Football Kit */}
          <div className="lg:col-span-5 flex justify-center items-center relative mt-6 lg:mt-0">
            <div className="relative w-full max-w-md">
              
              {/* Backing decorative shapes */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-sport-emerald/30 via-transparent to-sport-gold/20 blur-xl"></div>
              
              {/* Image Frame */}
              <div className="relative rounded-2xl overflow-hidden border-2 border-white/15 bg-sport-dark/80 shadow-2xl shadow-black/80 group">
                <img
                  src={playerData.gallery[0].src}
                  alt={playerData.gallery[0].alt}
                  className="w-full h-[450px] sm:h-[520px] object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="eager"
                  fetchPriority="high"
                />
                
                {/* Gradient vignette on image */}
                <div className="absolute inset-0 bg-gradient-to-t from-sport-navy via-transparent to-transparent opacity-80 pointer-events-none"></div>

                {/* Overlaid Card Info Badge at bottom */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl glass-panel border border-white/15 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-red-600/90 flex items-center justify-center font-display font-black text-white text-lg border border-red-400/40">
                      23
                    </div>
                    <div>
                      <p className="font-display font-black text-white text-base tracking-wide leading-tight">
                        AMODU OGWU
                      </p>
                      <p className="text-[11px] text-sport-green font-semibold uppercase tracking-wider">
                        Delight FA • Nigeria
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-[10px] uppercase font-bold text-sport-gold tracking-widest">
                      TWO-FOOTED
                    </span>
                    <span className="text-xs font-bold text-white tracking-wide">
                      61 G/A Since '22
                    </span>
                  </div>
                </div>

                {/* Top Corner Badge */}
                <div className="absolute top-4 right-4 bg-sport-navy/90 border border-sport-green/40 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1.5 shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-sport-green animate-ping"></span>
                  <span className="text-[10px] font-display font-bold tracking-wider text-sport-green uppercase">
                    MATCH READY
                  </span>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
