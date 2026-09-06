import React from 'react';
import { playerData } from '../data/playerData';
import { Shield, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export default function Career() {
  return (
    <section id="career" className="py-24 bg-sport-navy/95 relative pitch-grid border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
          <span className="inline-block text-xs font-display font-bold tracking-widest text-sport-green uppercase bg-sport-emerald/10 px-3 py-1 rounded-full border border-sport-emerald/20">
            CAREER
          </span>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight uppercase">
            THE JOURNEY
          </h2>
          <p className="text-sport-muted text-sm sm:text-base font-medium max-w-xl mx-auto">
            Playing pathway, current club affiliation, and competitive development.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-sport-emerald to-sport-gold mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Timeline Container */}
        <div className="max-w-3xl mx-auto relative">
          
          {/* Vertical Timeline Line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-sport-green via-sport-emerald to-transparent -translate-x-1/2"></div>

          {playerData.career.map((item, idx) => (
            <div key={idx} className="relative mb-12 flex flex-col sm:flex-row items-start sm:items-center">
              
              {/* Timeline Center Node */}
              <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-sport-navy border-2 border-sport-green flex items-center justify-center z-10 shadow-lg shadow-sport-green/30">
                <div className="w-3 h-3 rounded-full bg-sport-green animate-pulse"></div>
              </div>

              {/* Timeline Card */}
              <div className="ml-12 sm:ml-0 sm:w-1/2 sm:pr-10 w-full">
                <div className="glass-panel p-6 sm:p-7 rounded-2xl border border-white/10 hover:border-sport-green/40 transition-all duration-300 shadow-xl group">
                  
                  {/* Status Tag */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="inline-flex items-center gap-1 text-[11px] font-display font-bold uppercase tracking-wider text-sport-green bg-sport-emerald/15 px-2.5 py-1 rounded-full border border-sport-emerald/30">
                      <span className="w-1.5 h-1.5 rounded-full bg-sport-green animate-ping"></span>
                      ACTIVE SQUAD
                    </span>
                    <div className="flex items-center gap-1 text-xs text-sport-gold font-display font-semibold">
                      <Calendar size={13} />
                      <span>{item.period}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-xl bg-sport-dark flex items-center justify-center text-sport-green border border-white/10">
                      <Shield size={20} />
                    </div>
                    <div>
                      <h3 className="font-display font-black text-2xl text-white uppercase tracking-wide group-hover:text-sport-green transition-colors">
                        {item.club}
                      </h3>
                      <p className="text-xs font-semibold text-sport-muted uppercase tracking-wider">
                        {item.role}
                      </p>
                    </div>
                  </div>

                  <p className="mt-4 text-sport-light/90 text-sm leading-relaxed border-t border-white/5 pt-3">
                    “{item.description}”
                  </p>

                  <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs text-sport-muted">
                    <span className="flex items-center gap-1 font-medium">
                      <MapPin size={13} /> Nigeria
                    </span>
                    <span className="text-sport-green font-bold flex items-center gap-1">
                      <CheckCircle2 size={13} /> 61 Total G/A
                    </span>
                  </div>

                </div>
              </div>

              {/* Empty placeholder for opposite side balance on desktop */}
              <div className="hidden sm:block sm:w-1/2 sm:pl-10">
                <div className="p-4 rounded-xl border border-dashed border-white/10 text-sport-muted text-xs">
                  <p className="font-display font-bold text-sm text-white uppercase tracking-wider mb-1">
                    NEXT DESTINATION
                  </p>
                  <p>
                    Currently pursuing professional trial opportunities with domestic and international clubs.
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
