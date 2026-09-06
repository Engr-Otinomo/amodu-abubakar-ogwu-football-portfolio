import React from 'react';
import { playerData } from '../data/playerData';
import { Quote, Sparkles, Trophy } from 'lucide-react';

export default function Dream() {
  return (
    <section className="py-24 bg-sport-navy/95 relative overflow-hidden pitch-grid border-y border-white/5">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 right-1/4 w-96 h-96 bg-sport-emerald/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 left-1/4 w-96 h-96 bg-sport-gold/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Quote Container */}
        <div className="glass-panel p-8 sm:p-12 md:p-16 rounded-3xl border border-white/15 relative shadow-2xl">
          
          {/* Quote Icon */}
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-sport-emerald/20 to-sport-dark border border-sport-emerald/40 flex items-center justify-center text-sport-green mb-8 shadow-lg shadow-sport-emerald/20">
            <Quote size={32} className="rotate-180" />
          </div>

          <span className="inline-block text-xs font-display font-bold tracking-widest text-sport-green uppercase bg-sport-emerald/10 px-3 py-1 rounded-full border border-sport-emerald/20 mb-4">
            THE DREAM
          </span>

          <h2 className="font-display font-black text-2xl sm:text-4xl md:text-5xl text-white tracking-tight uppercase leading-[1.15] mb-8">
            {playerData.dream.heading}
          </h2>

          <div className="space-y-4 text-sport-light/90 text-base sm:text-lg leading-relaxed font-normal border-l-2 border-sport-green/40 pl-6 sm:pl-8">
            {playerData.dream.paragraphs.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>

          <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-sport-green">
                <img
                  src={playerData.gallery[1].src}
                  alt={playerData.fullName}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-display font-black text-white text-lg tracking-wide uppercase">
                  {playerData.fullName}
                </p>
                <p className="text-xs text-sport-muted uppercase tracking-wider">
                  Delight FA • Midfielder
                </p>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 text-xs font-display font-bold uppercase tracking-wider text-sport-gold bg-sport-gold/10 px-4 py-2 rounded-full border border-sport-gold/20">
              <Trophy size={14} />
              <span>DRIVEN BY PASSION & DISCIPLINE</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
