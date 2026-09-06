import React from 'react';
import { playerData } from '../data/playerData';
import { MessageCircle, Phone, Mail, ArrowUpRight } from 'lucide-react';

export default function Contact() {
  const { playerContact } = playerData;

  const contactCards = [
    {
      id: "whatsapp",
      title: "DIRECT WHATSAPP",
      subtitle: "Fastest response for match & trial inquiries",
      value: "+234 806 450 3457",
      href: "https://wa.me/2348064503457",
      icon: MessageCircle,
      isExternal: true,
      color: "text-[#22C55E]",
      bg: "bg-emerald-50 border-emerald-200",
      border: "hover:border-emerald-400",
      badge: "ACTIVE NOW"
    },
    {
      id: "phone",
      title: "DIRECT CALL",
      subtitle: "Direct mobile line (Nigeria)",
      value: "+234 806 450 3457",
      href: "tel:+2348064503457",
      icon: Phone,
      isExternal: false,
      color: "text-[#D97706]",
      bg: "bg-amber-50 border-amber-200",
      border: "hover:border-amber-400",
      badge: "DIRECT LINE"
    },
    {
      id: "email",
      title: "EMAIL",
      subtitle: "Official email correspondence",
      value: "abumadridamodu@gmail.com",
      href: "mailto:abumadridamodu@gmail.com",
      icon: Mail,
      isExternal: false,
      color: "text-[#102A43]",
      bg: "bg-slate-100 border-slate-200",
      border: "hover:border-slate-400",
      badge: "OFFICIAL"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-[#F7F8F4] text-[#102A43] relative pitch-grid-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
          <span className="inline-block text-xs font-display font-bold tracking-widest text-[#22C55E] uppercase bg-emerald-50 px-3.5 py-1 rounded-full border border-emerald-200">
            GET IN TOUCH
          </span>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-[#102A43] tracking-tight uppercase">
            CONTACT AMODU
          </h2>
          <p className="text-[#52667A] text-sm sm:text-base font-medium max-w-2xl mx-auto">
            Currently available for football trials, scouting opportunities, club enquiries, and professional discussions.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-[#22C55E] to-[#F5B942] mx-auto mt-4 rounded-full"></div>
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
                className={`bg-[#FFFFFF] p-6 sm:p-7 rounded-2xl border border-[#D8E2DE] ${card.border} transition-all duration-300 transform hover:-translate-y-1 group flex flex-col justify-between shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#22C55E]`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl border flex items-center justify-center ${card.bg} ${card.color} group-hover:scale-110 transition-transform`}>
                      <Icon size={24} />
                    </div>
                    <span className="text-[10px] font-display font-bold uppercase tracking-wider text-[#52667A] bg-slate-100 px-2 py-0.5 rounded border border-[#D8E2DE]">
                      {card.badge}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-xl text-[#102A43] uppercase tracking-wide group-hover:text-[#22C55E] transition-colors">
                    {card.title}
                  </h3>
                  
                  <p className="text-xs text-[#52667A] mt-1">
                    {card.subtitle}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#D8E2DE] flex items-center justify-between">
                  <span className="font-display font-bold text-sm sm:text-base text-[#102A43] tracking-wide break-all">
                    {card.value}
                  </span>
                  <span className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-[#52667A] group-hover:bg-[#22C55E] group-hover:text-white transition-colors flex-shrink-0 ml-2">
                    <ArrowUpRight size={16} />
                  </span>
                </div>
              </a>
            );
          })}
        </div>

      </div>
    </section>
  );
}
