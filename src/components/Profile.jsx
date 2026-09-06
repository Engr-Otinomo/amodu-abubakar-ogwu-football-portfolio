import React from 'react';
import { playerData } from '../data/playerData';
import { User, Calendar, Flag, Ruler, Weight, Footprints, Compass, Shield, CheckCircle, FileText } from 'lucide-react';

export default function Profile() {
  const profileDetails = [
    { label: "Full Name", value: playerData.fullName, icon: User },
    { label: "Age", value: `${playerData.age} Years`, icon: Calendar },
    { label: "Nationality", value: playerData.nationalityWithFlag, icon: Flag },
    { label: "Height", value: playerData.height, icon: Ruler },
    { label: "Weight", value: playerData.weight, icon: Weight },
    { label: "Preferred Foot", value: playerData.preferredFoot, highlight: true, icon: Footprints },
    { label: "Primary Position", value: playerData.primaryPosition, highlight: true, icon: Compass },
    { label: "Secondary Positions", value: "Attacking Midfielder and Winger", icon: Compass },
    { label: "Current Club", value: playerData.currentClub, icon: Shield },
    { label: "Joined Club", value: playerData.joinedClub, icon: Calendar },
    { label: "Availability", value: playerData.availability, status: true, icon: CheckCircle },
  ];

  return (
    <section id="profile" className="py-24 bg-sport-navy relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
          <span className="inline-block text-xs font-display font-bold tracking-widest text-sport-green uppercase bg-sport-emerald/10 px-3 py-1 rounded-full border border-sport-emerald/20">
            PROFILE
          </span>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight uppercase">
            {playerData.profileHeading}
          </h2>
          <p className="font-display font-semibold text-sm sm:text-base tracking-widest text-sport-gold uppercase">
            {playerData.profilePillars}
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-sport-emerald to-sport-gold mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Profile Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Headshot Photo Card & Quick Card */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-sm">
              
              {/* Outer decorative border */}
              <div className="relative rounded-2xl overflow-hidden p-1.5 bg-gradient-to-b from-white/20 via-sport-emerald/30 to-sport-dark shadow-2xl">
                <div className="relative rounded-xl overflow-hidden bg-white">
                  <img
                    src={playerData.gallery[1].src}
                    alt={playerData.gallery[1].alt}
                    className="w-full h-[400px] sm:h-[460px] object-cover object-center transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                  {/* Bottom overlay badge */}
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-sport-navy via-sport-navy/80 to-transparent p-5 text-center">
                    <h3 className="font-display font-black text-2xl text-white uppercase tracking-wide">
                      {playerData.fullName}
                    </h3>
                    <p className="text-xs font-semibold text-sport-green tracking-widest uppercase mt-0.5">
                      {playerData.primaryPosition} • {playerData.currentClub}
                    </p>
                  </div>
                </div>
              </div>

              {/* Verified scout badge */}
              <div className="mt-4 p-3.5 rounded-xl glass-panel border border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-sport-emerald/20 flex items-center justify-center text-sport-green">
                    <CheckCircle size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white tracking-wide">Official Football CV</p>
                    <p className="text-[11px] text-sport-muted">Verified stats & background</p>
                  </div>
                </div>
                <a
                  href={playerData.playerContact.cvFile}
                  download={playerData.playerContact.cvFilename}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sport-emerald/15 hover:bg-sport-emerald text-sport-green hover:text-sport-navy text-xs font-display font-bold uppercase tracking-wider transition-colors"
                >
                  <FileText size={14} />
                  <span>PDF CV</span>
                </a>
              </div>

            </div>
          </div>

          {/* Right Column: Bio & Attribute Specifications */}
          <div className="lg:col-span-7 flex flex-col space-y-8">
            
            {/* Biography Text */}
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 space-y-4">
              <h3 className="font-display font-bold text-xl sm:text-2xl text-white uppercase tracking-wide flex items-center gap-2">
                <span className="w-2 h-5 bg-sport-green rounded-full"></span>
                <span>SCOUTING OVERVIEW & BIOGRAPHY</span>
              </h3>
              <div className="space-y-3.5 text-sport-muted leading-relaxed text-sm sm:text-base font-normal">
                {playerData.profileBioParagraphs.map((para, idx) => (
                  <p key={idx} className={idx === 0 ? "text-sport-light font-medium" : ""}>
                    {para}
                  </p>
                ))}
              </div>
            </div>

            {/* Technical Attribute Grid */}
            <div>
              <h4 className="font-display font-bold text-sm tracking-widest text-sport-muted uppercase mb-4">
                PLAYER SPECIFICATIONS
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {profileDetails.map((detail, idx) => {
                  const Icon = detail.icon;
                  return (
                    <div
                      key={idx}
                      className={`p-3.5 rounded-xl border transition-all duration-200 flex items-center justify-between ${
                        detail.status
                          ? 'bg-sport-emerald/10 border-sport-emerald/40'
                          : detail.highlight
                          ? 'bg-sport-dark/90 border-sport-green/30'
                          : 'bg-sport-dark/40 border-white/5 hover:border-white/15'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <div className={`p-1.5 rounded-lg ${detail.highlight ? 'bg-sport-green/10 text-sport-green' : 'bg-white/5 text-sport-muted'}`}>
                          <Icon size={16} />
                        </div>
                        <span className="text-xs uppercase tracking-wider text-sport-muted font-medium">
                          {detail.label}
                        </span>
                      </div>
                      <span className={`font-display font-bold text-sm tracking-wide ${
                        detail.status
                          ? 'text-sport-green'
                          : detail.highlight
                          ? 'text-white'
                          : 'text-sport-light'
                      }`}>
                        {detail.value}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
