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
    <section id="strengths" className="py-24 bg-[#F7F8F4] text-[#102A43] relative pitch-grid-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
          <span className="inline-block text-xs font-display font-bold tracking-widest text-[#22C55E] uppercase bg-emerald-50 px-3.5 py-1 rounded-full border border-emerald-200">
            STRENGTHS
          </span>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-[#102A43] tracking-tight uppercase">
            WHAT AMODU BRINGS
          </h2>
          <p className="text-[#52667A] text-sm sm:text-base font-medium max-w-xl mx-auto">
            Key athletic attributes and tactical qualities evaluated across competitive fixtures.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-[#22C55E] to-[#F5B942] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* 6 Strength Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {playerData.strengths.map((strength) => {
            const IconComponent = iconMap[strength.icon] || Sparkles;
            return (
              <div
                key={strength.num}
                className="bg-[#FFFFFF] p-6 sm:p-7 rounded-2xl border border-[#D8E2DE] shadow-sm hover:shadow-md hover:border-emerald-300 transition-all duration-300 relative overflow-hidden group flex flex-col justify-between"
              >
                {/* Big decorative background number */}
                <span className="absolute top-2 right-4 font-display font-black text-6xl text-slate-100 select-none pointer-events-none group-hover:text-emerald-50 transition-colors">
                  {strength.num}
                </span>

                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-[#22C55E] group-hover:scale-110 group-hover:bg-[#22C55E] group-hover:text-white transition-all duration-300">
                      <IconComponent size={22} className="stroke-[2.2]" />
                    </div>
                    <span className="text-xs font-display font-black text-[#D97706] tracking-widest uppercase bg-amber-50 px-2.5 py-1 rounded border border-amber-200">
                      ATTR {strength.num}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-xl text-[#102A43] uppercase tracking-wide group-hover:text-[#22C55E] transition-colors">
                    {strength.num}. {strength.title}
                  </h3>

                  <p className="mt-3 text-[#52667A] text-sm leading-relaxed font-normal">
                    {strength.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#D8E2DE] flex items-center justify-between text-xs text-[#52667A]">
                  <span className="uppercase tracking-wider font-semibold text-[11px]">Match Rating</span>
                  <span className="text-[#22C55E] font-bold">High Impact</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bold Statement Banner */}
        <div className="mt-16 text-center">
          <div className="inline-block p-6 sm:p-8 rounded-2xl bg-[#FFFFFF] border border-[#D8E2DE] shadow-md max-w-4xl mx-auto">
            <p className="font-display font-black text-xl sm:text-2xl md:text-3xl tracking-wider uppercase leading-snug">
              <span className="text-[#22C55E]">CALM IN POSSESSION.</span>{" "}
              <span className="text-[#102A43]">CREATIVE IN ATTACK.</span>{" "}
              <span className="text-[#D97706]">DANGEROUS WITH BOTH FEET.</span>
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
