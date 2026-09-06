import React from 'react';
import { playerData } from '../data/playerData';
import { Trophy, Goal, Star, Award } from 'lucide-react';

export default function Achievements() {
  const iconMap = {
    Trophy: Trophy,
    Goal: Goal,
    Star: Star
  };

  return (
    <section id="achievements" className="py-24 bg-[#F7F8F4] text-[#102A43] relative pitch-grid-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
          <span className="inline-block text-xs font-display font-bold tracking-widest text-[#22C55E] uppercase bg-emerald-50 px-3.5 py-1 rounded-full border border-emerald-200">
            ACHIEVEMENTS
          </span>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-[#102A43] tracking-tight uppercase">
            RECOGNITION
          </h2>
          <p className="text-[#52667A] text-sm sm:text-base font-medium max-w-xl mx-auto">
            Honours and competitive recognition earned through match performances.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-[#22C55E] to-[#F5B942] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* 3 Achievement Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {playerData.achievements.map((item, idx) => {
            const IconComponent = iconMap[item.icon] || Award;
            return (
              <div
                key={idx}
                className="bg-[#FFFFFF] p-8 rounded-2xl border border-[#D8E2DE] shadow-sm hover:shadow-md hover:border-amber-300 transition-all duration-300 relative overflow-hidden group text-center flex flex-col items-center justify-between"
              >
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center text-[#D97706] shadow-sm mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent size={32} className="stroke-[2]" />
                  </div>

                  <span className="text-[11px] font-display font-bold uppercase tracking-widest text-[#22C55E] bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 mb-3">
                    {item.tag}
                  </span>

                  <h3 className="font-display font-black text-xl sm:text-2xl text-[#102A43] uppercase tracking-wide group-hover:text-[#D97706] transition-colors leading-tight">
                    {item.title}
                  </h3>
                </div>

                <div className="mt-8 pt-4 border-t border-[#D8E2DE] w-full flex items-center justify-center">
                  <span className="text-xs text-[#52667A] uppercase tracking-wider font-semibold">
                    Competitive Football Record
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Note on Confirmed Awards */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFFFFF] border border-[#D8E2DE] shadow-sm text-xs text-[#52667A]">
            <Award size={14} className="text-[#D97706]" />
            <span>Includes 2 confirmed individual honours in verified tournament play</span>
          </div>
        </div>

      </div>
    </section>
  );
}
