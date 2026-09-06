import React from 'react';
import { playerData } from '../data/playerData';
import { MessageCircle, Phone, Mail, User, ArrowUpRight } from 'lucide-react';

export default function Representative() {
  const { representative } = playerData;

  const managerCards = [
    {
      id: "whatsapp",
      title: "WHATSAPP",
      text: "Message the Manager",
      value: "+44 7440 733165",
      href: "https://wa.me/447440733165",
      icon: MessageCircle,
      isExternal: true,
      color: "text-[#22C55E]",
      bg: "bg-emerald-50 border-emerald-200",
      border: "hover:border-emerald-400"
    },
    {
      id: "phone",
      title: "CALL",
      text: "Direct Phone",
      value: "+44 7440 733165",
      href: "tel:+447440733165",
      icon: Phone,
      isExternal: false,
      color: "text-[#D97706]",
      bg: "bg-amber-50 border-amber-200",
      border: "hover:border-amber-400"
    },
    {
      id: "email",
      title: "EMAIL",
      text: "Direct Email",
      value: "Clintonpartrick32@gmail.com",
      href: "mailto:Clintonpartrick32@gmail.com",
      icon: Mail,
      isExternal: false,
      color: "text-[#102A43]",
      bg: "bg-slate-100 border-slate-200",
      border: "hover:border-slate-400"
    }
  ];

  return (
    <section id="representative" className="py-20 bg-[#F7F8F4] text-[#102A43] relative pitch-grid-light">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="inline-block text-xs font-display font-bold tracking-widest text-[#22C55E] uppercase bg-emerald-50 px-3.5 py-1 rounded-full border border-emerald-200">
            MANAGER / COACH
          </span>
          <h2 className="font-display font-black text-2xl sm:text-4xl text-[#102A43] tracking-tight uppercase">
            PROFESSIONAL ENQUIRIES
          </h2>
          <p className="text-[#52667A] text-xs sm:text-sm font-medium max-w-xl mx-auto">
            For official trial arrangements, club discussions, and scouting enquiries, contact Amodu’s manager/coach.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-[#22C55E] to-[#F5B942] mx-auto mt-3 rounded-full"></div>
        </div>

        {/* Manager/Coach Profile Card */}
        <div className="bg-[#FFFFFF] p-6 rounded-2xl border border-[#D8E2DE] shadow-sm mb-6 max-w-3xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <div className="w-14 h-14 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-[#102A43] flex-shrink-0">
              <User size={28} />
            </div>
            <div className="space-y-0.5">
              <h3 className="font-display font-black text-xl sm:text-2xl text-[#102A43] uppercase tracking-wide">
                Partrick Clinton Erutere
              </h3>
              <p className="font-display font-bold text-sm text-[#22C55E] uppercase tracking-wider">
                Manager / Coach
              </p>
            </div>
          </div>
        </div>

        {/* 3 Clickable Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {managerCards.map((card) => {
            const Icon = card.icon;
            return (
              <a
                key={card.id}
                href={card.href}
                target={card.isExternal ? "_blank" : undefined}
                rel={card.isExternal ? "noopener noreferrer" : undefined}
                className={`bg-[#FFFFFF] p-5 rounded-xl border border-[#D8E2DE] ${card.border} transition-all duration-300 transform hover:-translate-y-1 group flex flex-col justify-between shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#22C55E]`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className={`w-10 h-10 rounded-lg border flex items-center justify-center ${card.bg} ${card.color} group-hover:scale-105 transition-transform`}>
                      <Icon size={20} />
                    </div>
                    <span className="text-[10px] font-display font-bold uppercase tracking-wider text-[#52667A] bg-slate-100 px-2 py-0.5 rounded border border-[#D8E2DE]">
                      {card.title}
                    </span>
                  </div>

                  <h4 className="font-display font-bold text-base text-[#102A43] uppercase tracking-wide group-hover:text-[#22C55E] transition-colors">
                    {card.text}
                  </h4>
                </div>

                <div className="mt-4 pt-3 border-t border-[#D8E2DE] flex items-center justify-between">
                  <span className="font-display font-medium text-xs text-[#52667A] tracking-tight break-all">
                    {card.value}
                  </span>
                  <span className="w-6 h-6 rounded bg-slate-100 flex items-center justify-center text-[#52667A] group-hover:bg-[#22C55E] group-hover:text-white transition-colors flex-shrink-0 ml-2">
                    <ArrowUpRight size={14} />
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
