import React from 'react';
import { playerData } from '../data/playerData';
import { MessageCircle, Phone, Mail, FileDown, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const { playerContact } = playerData;

  const contactCards = [
    {
      id: "whatsapp",
      title: "Direct WhatsApp",
      subtitle: "Fastest response for match & trial inquiries",
      value: playerContact.whatsappNumberDisplay,
      href: playerContact.whatsappLink,
      icon: MessageCircle,
      isExternal: true,
      color: "text-sport-green",
      bg: "bg-sport-emerald/10",
      border: "hover:border-sport-green/50",
      badge: "ACTIVE NOW"
    },
    {
      id: "phone",
      title: "Direct Call",
      subtitle: "Direct mobile line (Nigeria)",
      value: playerContact.phoneDisplay,
      href: playerContact.phoneLink,
      icon: Phone,
      isExternal: false,
      color: "text-sport-gold",
      bg: "bg-sport-gold/10",
      border: "hover:border-sport-gold/50",
      badge: "DIRECT LINE"
    },
    {
      id: "email",
      title: "Email Correspondence",
      subtitle: "Official email communications",
      value: playerContact.email,
      href: playerContact.emailLink,
      icon: Mail,
      isExternal: false,
      color: "text-sky-400",
      bg: "bg-sky-400/10",
      border: "hover:border-sky-400/50",
      badge: "OFFICIAL"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-sport-navy relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
          <span className="inline-block text-xs font-display font-bold tracking-widest text-sport-green uppercase bg-sport-emerald/10 px-3 py-1 rounded-full border border-sport-emerald/20">
            GET IN TOUCH
          </span>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight uppercase">
            CONTACT AMODU
          </h2>
          <p className="text-sport-muted text-sm sm:text-base font-medium max-w-2xl mx-auto">
            Currently available for football trials, scouting opportunities, club enquiries, and professional discussions.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-sport-emerald to-sport-gold mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {contactCards.map((card) => {
            const Icon = card.icon;
            return (
              <a
                key={card.id}
                href={card.href}
                target={card.isExternal ? "_blank" : undefined}
                rel={card.isExternal ? "noopener noreferrer" : undefined}
                className={`glass-panel p-6 sm:p-7 rounded-2xl border border-white/10 ${card.border} transition-all duration-300 transform hover:-translate-y-1 group flex flex-col justify-between shadow-xl focus:outline-none focus:ring-2 focus:ring-sport-green`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl ${card.bg} flex items-center justify-center ${card.color} group-hover:scale-110 transition-transform`}>
                      <Icon size={24} />
                    </div>
                    <span className="text-[10px] font-display font-bold uppercase tracking-wider text-sport-muted bg-white/5 px-2 py-0.5 rounded border border-white/10">
                      {card.badge}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-xl text-white uppercase tracking-wide group-hover:text-sport-green transition-colors">
                    {card.title}
                  </h3>
                  
                  <p className="text-xs text-sport-muted mt-1">
                    {card.subtitle}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="font-display font-bold text-sm sm:text-base text-white tracking-wide break-all">
                    {card.value}
                  </span>
                  <span className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-sport-muted group-hover:text-white group-hover:bg-sport-green group-hover:text-sport-navy transition-colors flex-shrink-0 ml-2">
                    <ArrowUpRight size={16} />
                  </span>
                </div>
              </a>
            );
          })}
        </div>

        {/* CV Download Feature Banner */}
        <div className="mt-12 max-w-5xl mx-auto">
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-sport-dark via-sport-surface to-sport-dark border border-white/15 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
            <div className="flex items-center gap-4 text-center sm:text-left">
              <div className="w-14 h-14 rounded-2xl bg-sport-gold/15 border border-sport-gold/30 flex items-center justify-center text-sport-gold flex-shrink-0">
                <FileDown size={28} />
              </div>
              <div>
                <h3 className="font-display font-black text-xl text-white uppercase tracking-wide">
                  Complete Football Player CV
                </h3>
                <p className="text-xs sm:text-sm text-sport-muted mt-0.5">
                  Download the official 3-page scouting document with complete athletic metrics and career references.
                </p>
              </div>
            </div>

            <a
              href={playerContact.cvFile}
              download={playerContact.cvFilename}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-display font-bold text-sm tracking-wider uppercase bg-sport-emerald hover:bg-sport-green text-sport-navy transition-all duration-200 shadow-xl shadow-sport-emerald/25 hover:scale-105 active:scale-95 flex-shrink-0 focus:outline-none focus:ring-2 focus:ring-sport-green focus:ring-offset-2 focus:ring-offset-sport-navy"
            >
              <FileDown size={18} />
              <span>DOWNLOAD PLAYER CV</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
