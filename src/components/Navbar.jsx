import React, { useState, useEffect } from 'react';
import { playerData } from '../data/playerData';
import { Menu, X, ArrowRight, ShieldCheck } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Profile', href: '#profile' },
    { name: 'Statistics', href: '#statistics' },
    { name: 'Strengths', href: '#strengths' },
    { name: 'Career', href: '#career' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Highlights', href: '#highlights' },
    { name: 'Representative', href: '#representative' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      // Section spy
      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const navOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-sport-navy/95 backdrop-blur-md py-3 border-b border-white/10 shadow-2xl shadow-black/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Wordmark */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2 group focus:outline-none focus:ring-2 focus:ring-sport-green rounded px-1"
          >
            <div className="w-9 h-9 rounded bg-gradient-to-br from-sport-emerald to-sport-dark flex items-center justify-center font-display font-black text-xl text-white tracking-wider border border-sport-green/40 shadow-md shadow-sport-emerald/20 group-hover:scale-105 transition-transform">
              AO
            </div>
            <div className="flex flex-col">
              <span className="font-display font-black text-lg sm:text-xl tracking-tight text-white leading-none group-hover:text-sport-green transition-colors">
                AMODU OGWU
              </span>
              <span className="text-[10px] tracking-widest uppercase font-semibold text-sport-muted leading-tight">
                DELIGHT FA • MIDFIELDER
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1 lg:gap-2 text-xs font-medium uppercase tracking-wider">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3 py-2 rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-sport-green ${
                    isActive
                      ? 'text-sport-green bg-sport-emerald/10 font-bold border border-sport-emerald/20'
                      : 'text-sport-light/80 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#representative"
              onClick={(e) => handleNavClick(e, '#representative')}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider bg-sport-emerald text-sport-navy hover:bg-sport-green focus:outline-none focus:ring-2 focus:ring-sport-green focus:ring-offset-2 focus:ring-offset-sport-navy transition-all duration-200 shadow-lg shadow-sport-emerald/25 hover:scale-105 active:scale-95"
            >
              <span className="w-2 h-2 rounded-full bg-sport-navy animate-ping"></span>
              AVAILABLE FOR TRIALS
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="text-[11px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full bg-sport-emerald text-sport-navy font-display"
            >
              TRIALS
            </a>
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-sport-light hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-sport-green"
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[60px] bg-sport-navy/98 backdrop-blur-xl border-t border-white/10 z-40 overflow-y-auto px-6 py-8 flex flex-col justify-between">
          <div className="flex flex-col space-y-3">
            <div className="mb-2 pb-2 border-b border-white/10 flex items-center justify-between">
              <span className="text-xs font-bold tracking-widest text-sport-muted uppercase">NAVIGATION</span>
              <span className="inline-flex items-center gap-1.5 text-xs text-sport-green font-semibold bg-sport-green/10 px-2.5 py-1 rounded-full">
                <span className="w-2 h-2 rounded-full bg-sport-green animate-pulse"></span>
                Open For Trials
              </span>
            </div>
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-lg font-display uppercase tracking-wider py-2 px-3 rounded-lg flex items-center justify-between transition-colors ${
                    isActive
                      ? 'bg-sport-emerald/15 text-sport-green font-black border border-sport-emerald/30'
                      : 'text-sport-light hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span>{link.name}</span>
                  <ArrowRight size={16} className={isActive ? 'text-sport-green' : 'text-sport-muted'} />
                </a>
              );
            })}
          </div>

          <div className="pt-6 border-t border-white/10 space-y-3 mt-6">
            <a
              href="#representative"
              onClick={(e) => handleNavClick(e, '#representative')}
              className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-sport-emerald to-sport-green text-sport-navy font-display font-black text-center tracking-wider text-base uppercase shadow-lg shadow-sport-emerald/30 flex items-center justify-center gap-2"
            >
              <ShieldCheck size={20} />
              SCOUT & AGENT CONTACT
            </a>
            <a
              href={playerData.playerContact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 rounded-xl bg-sport-dark text-white font-display font-bold text-center tracking-wider text-sm uppercase border border-white/15 flex items-center justify-center gap-2"
            >
              MESSAGE AMODU ON WHATSAPP
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
