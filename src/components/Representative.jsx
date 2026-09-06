import React from 'react';
import { playerData } from '../data/playerData';
import { ShieldCheck, MessageCircle, Phone, Mail, UserCheck, ExternalLink, Globe2 } from 'lucide-react';

export default function Representative() {
  const { representative } = playerData;

  return (
    <section id="representative" className="py-24 bg-gradient-to-b from-sport-navy via-sport-dark/95 to-sport-navy relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
          <span className="inline-block text-xs font-display font-bold tracking-widest text-sport-green uppercase bg-sport-emerald/10 px-3 py-1 rounded-full border border-sport-emerald/20">
            PLAYER REPRESENTATIVE
          </span>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight uppercase">
            SCOUTING & CLUB ENQUIRIES
          </h2>
          <p className="text-sport-muted text-sm sm:text-base font-medium max-w-2xl mx-auto">
            For official club trials, academy invitations, scouting reports, and professional representation discussions, please contact Amodu’s representative directly.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-sport-emerald to-sport-gold mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Representative Container */}
        <div className="max-w-5xl mx-auto">
          
          {/* Representative Profile Card */}
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border-2 border-sport-emerald/30 shadow-2xl mb-8 relative overflow-hidden bg-gradient-to-br from-sport-dark/90 via-sport-navy/95 to-sport-dark">
            {/* Top Accent Bar */}
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-sport-emerald via-sport-green to-sport-gold"></div>

            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
              {/* Profile Avatar / Badge */}
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br from-sport-emerald to-sport-dark border-2 border-sport-green/40 flex items-center justify-center text-sport-navy font-display font-black text-3xl shadow-xl shadow-sport-emerald/20 flex-shrink-0">
                <UserCheck size={44} className="text-white" />
              </div>

              {/* Representative Bio & Credentials */}
              <div className="flex-1 space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sport-emerald/15 border border-sport-emerald/30 text-sport-green text-xs font-display font-bold uppercase tracking-wider">
                  <ShieldCheck size={14} />
                  <span>OFFICIAL PLAYER REPRESENTATIVE</span>
                </div>

                <h3 className="font-display font-black text-2xl sm:text-4xl text-white uppercase tracking-wide">
                  {representative.name}
                </h3>
                
                <p className="font-display font-bold text-base sm:text-lg text-sport-gold uppercase tracking-wider">
                  {representative.role}
                </p>

                <p className="text-sport-muted text-xs sm:text-sm pt-1 max-w-xl">
                  UK & International Football Liaison. Direct point of contact for clubs, scouts, tournament directors, and agents seeking trial arrangements for Amodu Abubakar Ogwu.
                </p>
              </div>

              {/* Verified Liaison Badge */}
              <div className="hidden lg:flex flex-col items-end justify-center h-full pt-2">
                <div className="px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 text-right">
                  <span className="block text-[10px] uppercase font-bold text-sport-muted tracking-widest">
                    PRIMARY CONTACT FOR
                  </span>
                  <span className="text-xs font-bold text-sport-green tracking-wide uppercase">
                    Clubs • Scouts • Trials
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* 3 Large Clickable Action Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            
            {/* 1. WHATSAPP (MOST PROMINENT) */}
            <a
              href={representative.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-6 sm:p-7 rounded-2xl bg-gradient-to-b from-sport-dark to-sport-navy border-2 border-sport-emerald/50 hover:border-sport-green shadow-xl shadow-sport-emerald/15 hover:shadow-sport-emerald/30 transition-all duration-300 transform hover:-translate-y-1.5 focus:outline-none focus:ring-2 focus:ring-sport-green flex flex-col justify-between"
            >
              {/* Highlight Tag */}
              <div className="absolute top-3 right-3">
                <span className="text-[10px] font-display font-black uppercase tracking-wider text-sport-navy bg-sport-green px-2.5 py-0.5 rounded-full shadow">
                  RECOMMENDED
                </span>
              </div>

              <div>
                <div className="w-14 h-14 rounded-xl bg-sport-emerald/20 border border-sport-emerald/40 flex items-center justify-center text-sport-green mb-5 group-hover:scale-110 group-hover:bg-sport-emerald group-hover:text-sport-navy transition-all duration-300">
                  <MessageCircle size={28} className="stroke-[2.2]" />
                </div>

                <span className="block text-xs font-display font-bold text-sport-green tracking-widest uppercase mb-1">
                  WHATSAPP
                </span>

                <h4 className="font-display font-black text-xl sm:text-2xl text-white uppercase tracking-wide group-hover:text-sport-green transition-colors">
                  Message the Manager
                </h4>

                <p className="mt-2 text-xs sm:text-sm text-sport-muted font-normal">
                  Open direct WhatsApp conversation with prefilled trial inquiry.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="font-display font-bold text-sm text-white tracking-wide">
                  {representative.phoneDisplay}
                </span>
                <span className="w-8 h-8 rounded-lg bg-sport-emerald/20 flex items-center justify-center text-sport-green group-hover:bg-sport-emerald group-hover:text-sport-navy transition-colors">
                  <ExternalLink size={16} />
                </span>
              </div>
            </a>

            {/* 2. CALL */}
            <a
              href={representative.phoneLink}
              className="group relative p-6 sm:p-7 rounded-2xl bg-sport-dark/60 hover:bg-sport-dark border border-white/10 hover:border-sport-gold shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 focus:outline-none focus:ring-2 focus:ring-sport-gold flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 rounded-xl bg-sport-gold/15 border border-sport-gold/30 flex items-center justify-center text-sport-gold mb-5 group-hover:scale-110 group-hover:bg-sport-gold group-hover:text-sport-navy transition-all duration-300">
                  <Phone size={28} className="stroke-[2.2]" />
                </div>

                <span className="block text-xs font-display font-bold text-sport-gold tracking-widest uppercase mb-1">
                  DIRECT CALL
                </span>

                <h4 className="font-display font-black text-xl sm:text-2xl text-white uppercase tracking-wide group-hover:text-sport-gold transition-colors">
                  Telephone Call
                </h4>

                <p className="mt-2 text-xs sm:text-sm text-sport-muted font-normal">
                  Call Mr. Erutere directly for urgent trial scheduling and discussions.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="font-display font-bold text-sm text-white tracking-wide">
                  {representative.phoneDisplay}
                </span>
                <span className="w-8 h-8 rounded-lg bg-sport-gold/20 flex items-center justify-center text-sport-gold group-hover:bg-sport-gold group-hover:text-sport-navy transition-colors">
                  <Phone size={16} />
                </span>
              </div>
            </a>

            {/* 3. EMAIL */}
            <a
              href={representative.emailLink}
              className="group relative p-6 sm:p-7 rounded-2xl bg-sport-dark/60 hover:bg-sport-dark border border-white/10 hover:border-white/30 shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 focus:outline-none focus:ring-2 focus:ring-sport-green flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white mb-5 group-hover:scale-110 group-hover:bg-white group-hover:text-sport-navy transition-all duration-300">
                  <Mail size={28} className="stroke-[2.2]" />
                </div>

                <span className="block text-xs font-display font-bold text-sport-muted tracking-widest uppercase mb-1">
                  EMAIL INQUIRY
                </span>

                <h4 className="font-display font-black text-xl sm:text-2xl text-white uppercase tracking-wide group-hover:text-sport-green transition-colors">
                  Send Formal Email
                </h4>

                <p className="mt-2 text-xs sm:text-sm text-sport-muted font-normal">
                  Submit formal club invitation letters, contracts, and proposals.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="font-display font-semibold text-xs text-white tracking-tight break-all">
                  {representative.email}
                </span>
                <span className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white group-hover:bg-white group-hover:text-sport-navy transition-colors flex-shrink-0 ml-2">
                  <Mail size={16} />
                </span>
              </div>
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}
