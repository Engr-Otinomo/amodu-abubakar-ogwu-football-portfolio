import React from 'react';
import { playerData } from '../data/playerData';
import { Footprints, Zap, ShieldCheck, Sparkles, Target, Layers } from 'lucide-react';

export default function Strengths() {
  const iconMap = {
    Footprints: Footprints,
    Zap: Zap,
    ShieldCheck: ShieldCheck,
    Sparkles: Sparkles,
    Target: Target,
    Layers: Layers
  };

  return (
    <section id="strengths" className="py-24 bg-sport-navy relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
          <span className="inline-block text-xs font-display font-bold tracking-widest text-sport-green uppercase bg-sport-emerald/10 px-3 py-1 rounded-full border border-sport-emerald/20">
            STRENGTHS
          </span>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight uppercase">
            WHAT AMODU BRINGS
          </h2>
          <p className="text-sport-muted text-sm sm:text-base font-medium max-w-xl mx-auto">
            Key athletic attributes and tactical qualities evaluated across competitive fixtures.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-sport-emerald to-sport-gold mx-auto mt-4 rounded-full"></div>
        </div>

        {/* 6 Strength Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {playerData.strengths.map((strength) => {
            const IconComponent = iconMap[strength.icon] || Sparkles;
            return (
              <div
                key={strength.num}
                className="glass-panel glass-panel-hover p-6 sm:p-7 rounded-2xl border border-white/10 relative overflow-hidden group flex flex-col justify-between"
              >
                {/* Big decorative background number */}
                <span className="absolute top-2 right-4 font-display font-black text-6xl text-white/5 select-none pointer-events-none group-hover:text-sport-green/10 transition-colors">
                  {strength.num}
                </span>

                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-sport-emerald/10 border border-sport-emerald/30 flex items-center justify-center text-sport-green group-hover:scale-110 group-hover:bg-sport-emerald group-hover:text-sport-navy transition-all duration-300">
                      <IconComponent size={22} className="stroke-[2.2]" />
                    </div>
                    <span className="text-xs font-display font-black text-sport-gold tracking-widest uppercase bg-sport-gold/10 px-2.5 py-1 rounded border border-sport-gold/20">
                      ATTR {strength.num}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-xl text-white uppercase tracking-wide group-hover:text-sport-green transition-colors">
                    {strength.num}. {strength.title}
                  </h3>

                  <p className="mt-3 text-sport-muted text-sm leading-relaxed font-normal">
                    {strength.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-sport-muted">
                  <span className="uppercase tracking-wider font-semibold text-[11px]">Match Rating</span>
                  <span className="text-sport-green font-bold">High Impact</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bold Statement Banner */}
        <div className="mt-16 text-center">
          <div className="inline-block p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-sport-dark via-sport-surface to-sport-dark border border-sport-green/30 shadow-2xl shadow-sport-emerald/10 max-w-4xl mx-auto">
            <p className="font-display font-black text-xl sm:text-2xl md:text-3xl text-white tracking-wider uppercase leading-snug">
              <span className="text-sport-green">CALM IN POSSESSION.</span>{" "}
              <span className="text-white">CREATIVE IN ATTACK.</span>{" "}
              <span className="text-sport-gold">DANGEROUS WITH BOTH FEET.</span>
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
