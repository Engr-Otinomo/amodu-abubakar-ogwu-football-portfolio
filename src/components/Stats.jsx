import React, { useState, useEffect, useRef } from 'react';
import { playerData } from '../data/playerData';
import { Target, Award, Flame, Trophy, TrendingUp } from 'lucide-react';

export default function Stats() {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState({
    goals: 0,
    assists: 0,
    contributions: 0,
    awards: 0
  });

  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          const duration = 1800;
          const startTime = performance.now();

          const targets = {
            goals: 25,
            assists: 36,
            contributions: 61,
            awards: 2
          };

          const step = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 3);

            setCounts({
              goals: Math.round(targets.goals * easeOut),
              assists: Math.round(targets.assists * easeOut),
              contributions: Math.round(targets.contributions * easeOut),
              awards: Math.round(targets.awards * easeOut)
            });

            if (progress < 1) {
              requestAnimationFrame(step);
            } else {
              setCounts(targets);
            }
          };

          requestAnimationFrame(step);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  const statItems = [
    {
      id: "goals",
      label: "Goals",
      value: counts.goals,
      icon: Target,
      accent: "text-[#22C55E]",
      iconBg: "bg-emerald-50 border-emerald-200 text-[#22C55E]",
      description: "Deadly finishing from central & wide positions"
    },
    {
      id: "assists",
      label: "Assists",
      value: counts.assists,
      icon: Flame,
      accent: "text-[#16A34A]",
      iconBg: "bg-green-50 border-green-200 text-[#16A34A]",
      description: "Visionary chance creation & key passes"
    },
    {
      id: "contributions",
      label: "Goal Contributions",
      value: counts.contributions,
      icon: TrendingUp,
      accent: "text-[#D97706]",
      iconBg: "bg-amber-50 border-amber-200 text-[#D97706]",
      description: "Total recorded output for Delight FA"
    },
    {
      id: "awards",
      label: "Awards Won",
      value: counts.awards,
      icon: Trophy,
      accent: "text-[#B45309]",
      iconBg: "bg-yellow-50 border-yellow-200 text-[#B45309]",
      description: "Confirmed individual & tournament honours"
    }
  ];

  return (
    <section id="statistics" ref={sectionRef} className="py-24 bg-[#EEF3F1] text-[#102A43] relative pitch-grid-light border-y border-[#D8E2DE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
          <span className="inline-block text-xs font-display font-bold tracking-widest text-[#22C55E] uppercase bg-emerald-50 px-3.5 py-1 rounded-full border border-emerald-200">
            PERFORMANCE
          </span>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-[#102A43] tracking-tight uppercase">
            THE NUMBERS
          </h2>
          <p className="text-[#52667A] text-sm sm:text-base font-medium max-w-xl mx-auto">
            Delight FA recorded competition metrics demonstrating decisive output across the pitch.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-[#22C55E] to-[#F5B942] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* 4 Animated Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {statItems.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.id}
                className="bg-[#FFFFFF] p-6 rounded-2xl border border-[#D8E2DE] shadow-sm hover:shadow-md hover:border-emerald-300 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl border flex items-center justify-center group-hover:scale-110 transition-transform ${stat.iconBg}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-display font-bold uppercase tracking-wider text-[#52667A] px-2.5 py-1 rounded-md bg-slate-100">
                      OFFICIAL RECORD
                    </span>
                  </div>

                  <div className="space-y-1">
                    <div className="font-display font-black text-5xl sm:text-6xl text-[#102A43] tracking-tight leading-none flex items-baseline">
                      <span>{stat.value}</span>
                    </div>
                    <h3 className={`font-display font-bold text-lg uppercase tracking-wider ${stat.accent}`}>
                      {stat.label}
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-[#52667A] pt-4 mt-4 border-t border-[#D8E2DE]">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Supporting sentence */}
        <div className="mt-12 text-center max-w-2xl mx-auto">
          <div className="p-4 rounded-xl bg-[#FFFFFF] border border-emerald-300 shadow-sm">
            <p className="text-sm sm:text-base font-medium text-[#102A43] tracking-wide">
              {playerData.statsSummary}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
