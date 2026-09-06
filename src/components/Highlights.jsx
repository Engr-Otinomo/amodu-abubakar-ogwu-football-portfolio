import React from 'react';
import { playerData } from '../data/playerData';
import { Play, ExternalLink, Film } from 'lucide-react';

export default function Highlights() {
  return (
    <section id="highlights" className="py-24 bg-sport-navy relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
          <span className="inline-block text-xs font-display font-bold tracking-widest text-sport-green uppercase bg-sport-emerald/10 px-3 py-1 rounded-full border border-sport-emerald/20">
            HIGHLIGHTS
          </span>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight uppercase">
            WATCH AMODU IN ACTION
          </h2>
          <p className="text-sport-muted text-sm sm:text-base font-medium max-w-2xl mx-auto">
            Watch Amodu’s football highlights, skills, goals, assists, and match performances.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-sport-emerald to-sport-gold mx-auto mt-4 rounded-full"></div>
        </div>

        {/* 2 Highlight Video Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {playerData.highlights.map((video, idx) => (
            <div
              key={video.id}
              className="glass-panel p-5 sm:p-7 rounded-2xl border border-white/10 hover:border-sport-green/40 transition-all duration-300 flex flex-col justify-between shadow-2xl"
            >
              <div>
                {/* 16:9 Responsive Video Embed */}
                <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-black/80 border border-white/10 shadow-lg">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}?rel=0&modestbranding=1`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full border-0"
                    loading="lazy"
                  ></iframe>
                </div>

                {/* Video Info */}
                <div className="mt-5 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1 text-[11px] font-display font-bold uppercase tracking-wider text-sport-gold bg-sport-gold/10 px-2.5 py-0.5 rounded border border-sport-gold/20">
                      <Film size={12} />
                      REEL {idx + 1}
                    </span>
                    <span className="text-xs text-sport-muted font-medium">Official Match Footage</span>
                  </div>

                  <h3 className="font-display font-bold text-xl sm:text-2xl text-white uppercase tracking-wide">
                    {video.title}
                  </h3>

                  <p className="text-sport-muted text-sm leading-relaxed">
                    {video.description}
                  </p>
                </div>
              </div>

              {/* Action Button: Watch on YouTube */}
              <div className="mt-6 pt-4 border-t border-white/10">
                <a
                  href={video.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 py-3 px-5 rounded-xl font-display font-bold text-sm tracking-wider uppercase bg-sport-dark hover:bg-sport-emerald text-white hover:text-sport-navy border border-white/15 hover:border-transparent transition-all duration-200 shadow-md group"
                >
                  <Play size={16} className="text-sport-green group-hover:text-sport-navy fill-current" />
                  <span>WATCH ON YOUTUBE</span>
                  <ExternalLink size={15} className="text-sport-muted group-hover:text-sport-navy" />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
