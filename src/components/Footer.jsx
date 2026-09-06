import React from 'react';
import { playerData } from '../data/playerData';
import { MessageCircle, Phone, Mail, Youtube, FileText, ArrowUp, Shield } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const { playerContact, highlights, attribution } = playerData;

  const quickIconLinks = [
    {
      name: "WhatsApp",
      href: playerContact.whatsappLink,
      icon: MessageCircle,
      external: true,
      color: "hover:text-sport-green hover:border-sport-green"
    },
    {
      name: "Phone",
      href: playerContact.phoneLink,
      icon: Phone,
      external: false,
      color: "hover:text-sport-gold hover:border-sport-gold"
    },
    {
      name: "Email",
      href: playerContact.emailLink,
      icon: Mail,
      external: false,
      color: "hover:text-sky-400 hover:border-sky-400"
    },
    {
      name: "YouTube Highlight 1",
      href: highlights[0].url,
      icon: Youtube,
      external: true,
      color: "hover:text-red-500 hover:border-red-500"
    },
    {
      name: "YouTube Highlight 2",
      href: highlights[1].url,
      icon: Youtube,
      external: true,
      color: "hover:text-red-500 hover:border-red-500"
    },
    {
      name: "Football CV",
      href: playerContact.cvFile,
      icon: FileText,
      external: true,
      download: playerContact.cvFilename,
      color: "hover:text-sport-emerald hover:border-sport-emerald"
    }
  ];

  return (
    <footer className="bg-sport-navy border-t border-white/10 pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-white/10">
          
          {/* Brand & Summary */}
          <div className="text-center md:text-left space-y-2">
            <h3 className="font-display font-black text-2xl sm:text-3xl text-white uppercase tracking-tight">
              AMODU ABUBAKAR OGWU
            </h3>
            <p className="text-sm font-semibold text-sport-green uppercase tracking-wider">
              Central Midfielder • Attacking Midfielder • Winger
            </p>
            <p className="text-xs text-sport-muted uppercase tracking-widest">
              Nigeria • Delight FA • Available for Trials
            </p>
          </div>

          {/* Quick Icon Links */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {quickIconLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  download={link.download}
                  className={`w-11 h-11 rounded-xl bg-sport-dark/80 border border-white/10 flex items-center justify-center text-sport-light ${link.color} transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-sport-green`}
                  title={link.name}
                  aria-label={link.name}
                >
                  <Icon size={20} />
                </a>
              );
            })}

            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              className="w-11 h-11 rounded-xl bg-sport-emerald/20 border border-sport-emerald/40 flex items-center justify-center text-sport-green hover:bg-sport-emerald hover:text-sport-navy transition-all duration-200 hover:scale-110 ml-2 focus:outline-none focus:ring-2 focus:ring-sport-green"
              title="Back to top"
              aria-label="Back to top"
            >
              <ArrowUp size={20} />
            </button>
          </div>

        </div>

        {/* Bottom Legal & Attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-sport-muted text-center sm:text-left">
          <p>© 2026 Amodu Abubakar Ogwu. All rights reserved.</p>
          
          <p className="flex items-center gap-1">
            <span>Website created by</span>
            <a
              href={attribution.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sport-light font-bold hover:text-sport-green transition-colors"
            >
              {attribution.creator}
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
}
