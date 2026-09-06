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
    <section id="achievements" className="py-24 bg-sport-navy relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
          <span className="inline-block text-xs font-display font-bold tracking-widest text-sport-green uppercase bg-sport-emerald/10 px-3 py-1 rounded-full border border-sport-emerald/20">
            ACHIEVEMENTS
          </span>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight uppercase">
            RECOGNITION
          </h2>
          <p className="text-sport-muted text-sm sm:text-base font-medium max-w-xl mx-auto">
            Honours and competitive recognition earned through match performances.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-sport-emerald to-sport-gold mx-auto mt-4 rounded-full"></div>
        </div>

        {/* 3 Achievement Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {playerData.achievements.map((item, idx) => {
            const IconComponent = iconMap[item.icon] || Award;
            return (
              <div
                key={idx}
                className="glass-panel glass-panel-hover p-8 rounded-2xl border border-white/10 relative overflow-hidden group text-center flex flex-col items-center justify-between"
              >
                {/* Subtle gold glow behind icon */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-sport-gold/10 rounded-full blur-2xl pointer-events-none"></div>

                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-sport-dark to-sport-navy border border-sport-gold/30 flex items-center justify-center text-sport-gold shadow-lg shadow-sport-gold/15 mb-6 group-hover:scale-110 group-hover:border-sport-gold transition-all duration-300">
                    <IconComponent size={32} className="stroke-[2]" />
                  </div>

                  <span className="text-[11px] font-display font-bold uppercase tracking-widest text-sport-green bg-sport-emerald/15 px-3 py-1 rounded-full border border-sport-emerald/30 mb-3">
                    {item.tag}
                  </span>

                  <h3 className="font-display font-black text-xl sm:text-2xl text-white uppercase tracking-wide group-hover:text-sport-gold transition-colors leading-tight">
                    {item.title}
                  </h3>
                </div>

                <div className="mt-8 pt-4 border-t border-white/10 w-full flex items-center justify-center">
                  <span className="text-xs text-sport-muted uppercase tracking-wider font-semibold">
                    Competitive Football Record
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Note on Confirmed Awards */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sport-dark/60 border border-white/10 text-xs text-sport-muted">
            <Award size={14} className="text-sport-gold" />
            <span>Includes 2 confirmed individual honours in verified tournament play</span>
          </div>
        </div>

      </div>
    </section>
  );
}
