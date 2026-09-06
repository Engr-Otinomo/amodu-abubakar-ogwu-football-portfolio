import React from 'react';
import { playerData } from '../data/playerData';
import { FileDown, FileCheck } from 'lucide-react';

export default function FootballCV() {
  const { playerContact } = playerData;

  return (
    <section id="cv" className="py-20 bg-[#EEF3F1] text-[#102A43] relative pitch-grid-light border-y border-[#D8E2DE]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Football CV Card */}
        <div className="bg-[#FFFFFF] p-8 sm:p-10 rounded-3xl border border-[#D8E2DE] shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row items-center justify-between gap-8">
          
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-left">
            <div className="w-16 h-16 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-[#22C55E] flex-shrink-0 shadow-sm">
              <FileDown size={32} />
            </div>
            
            <div className="space-y-2 max-w-xl">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-[#22C55E] border border-emerald-200 text-xs font-display font-bold uppercase tracking-wider">
                <FileCheck size={14} />
                <span>OFFICIAL VERIFIED SCOUTING DOCUMENT</span>
              </div>

              <h2 className="font-display font-black text-2xl sm:text-3xl text-[#102A43] uppercase tracking-wide">
                FOOTBALL PLAYER CV
              </h2>

              <p className="text-sm sm:text-base text-[#52667A] leading-relaxed">
                Download Amodu’s official three-page football CV containing his player profile, career record, strengths, achievements, highlight links, and reference details.
              </p>
            </div>
          </div>

          <div className="flex-shrink-0 w-full sm:w-auto">
            <a
              href={playerContact.cvFile}
              download={playerContact.cvFilename}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-display font-bold text-sm tracking-wider uppercase bg-[#22C55E] hover:bg-emerald-600 text-white transition-all duration-200 shadow-md shadow-emerald-500/20 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#22C55E] focus:ring-offset-2"
            >
              <FileDown size={20} />
              <span>DOWNLOAD PLAYER CV</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
