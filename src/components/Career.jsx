import React from 'react';
import { playerData } from '../data/playerData';
import { Shield, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export default function Career() {
  return (
    <section id="career" className="py-24 bg-[#EEF3F1] text-[#102A43] relative pitch-grid-light border-t border-[#D8E2DE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
          <span className="inline-block text-xs font-display font-bold tracking-widest text-[#22C55E] uppercase bg-emerald-50 px-3.5 py-1 rounded-full border border-emerald-200">
            CAREER
          </span>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-[#102A43] tracking-tight uppercase">
            THE JOURNEY
          </h2>
          <p className="text-[#52667A] text-sm sm:text-base font-medium max-w-xl mx-auto">
            Playing pathway, current club affiliation, and competitive development.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-[#22C55E] to-[#F5B942] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Timeline Container */}
        <div className="max-w-3xl mx-auto relative">
          
          {/* Vertical Timeline Line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#22C55E] via-emerald-300 to-transparent -translate-x-1/2"></div>

          {playerData.career.map((item, idx) => (
            <div key={idx} className="relative mb-12 flex flex-col sm:flex-row items-start sm:items-center">
              
              {/* Timeline Center Node */}
              <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#FFFFFF] border-2 border-[#22C55E] flex items-center justify-center z-10 shadow-md">
                <div className="w-3 h-3 rounded-full bg-[#22C55E] animate-pulse"></div>
              </div>

              {/* Timeline Card */}
              <div className="ml-12 sm:ml-0 sm:w-1/2 sm:pr-10 w-full">
                <div className="bg-[#FFFFFF] p-6 sm:p-7 rounded-2xl border border-[#D8E2DE] hover:border-emerald-300 transition-all duration-300 shadow-sm hover:shadow-md group">
                  
                  {/* Status Tag */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="inline-flex items-center gap-1 text-[11px] font-display font-bold uppercase tracking-wider text-[#22C55E] bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] animate-ping"></span>
                      ACTIVE SQUAD
                    </span>
                    <div className="flex items-center gap-1 text-xs text-[#D97706] font-display font-semibold">
                      <Calendar size={13} />
                      <span>{item.period}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-[#22C55E] border border-emerald-200">
                      <Shield size={20} />
                    </div>
                    <div>
                      <h3 className="font-display font-black text-2xl text-[#102A43] uppercase tracking-wide group-hover:text-[#22C55E] transition-colors">
                        {item.club}
                      </h3>
                      <p className="text-xs font-semibold text-[#52667A] uppercase tracking-wider">
                        {item.role}
                      </p>
                    </div>
                  </div>

                  <p className="mt-4 text-[#52667A] text-sm leading-relaxed border-t border-[#D8E2DE] pt-3 font-normal">
                    “{item.description}”
                  </p>

                  <div className="mt-4 pt-3 border-t border-[#D8E2DE] flex items-center justify-between text-xs text-[#52667A]">
                    <span className="flex items-center gap-1 font-medium">
                      <MapPin size={13} /> Nigeria
                    </span>
                    <span className="text-[#22C55E] font-bold flex items-center gap-1">
                      <CheckCircle2 size={13} /> 61 Total G/A
                    </span>
                  </div>

                </div>
              </div>

              {/* Destination Card on desktop */}
              <div className="hidden sm:block sm:w-1/2 sm:pl-10">
                <div className="p-5 rounded-2xl bg-[#FFFFFF] border border-[#D8E2DE] shadow-sm text-xs">
                  <p className="font-display font-bold text-sm text-[#102A43] uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#22C55E]"></span>
                    NEXT DESTINATION
                  </p>
                  <p className="text-[#52667A] leading-relaxed">
                    Currently open to professional trial opportunities with domestic and international clubs.
                  </p>
                </div>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
