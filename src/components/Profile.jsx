import React from 'react';
import { playerData } from '../data/playerData';
import { User, Calendar, Flag, Ruler, Weight, Footprints, Compass, Shield, CheckCircle } from 'lucide-react';

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
    <section id="profile" className="py-24 bg-[#F7F8F4] text-[#102A43] relative pitch-grid-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
          <span className="inline-block text-xs font-display font-bold tracking-widest text-[#22C55E] uppercase bg-emerald-50 px-3.5 py-1 rounded-full border border-emerald-200">
            PROFILE
          </span>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-[#102A43] tracking-tight uppercase">
            {playerData.profileHeading}
          </h2>
          <p className="font-display font-semibold text-sm sm:text-base tracking-widest text-[#D97706] uppercase">
            {playerData.profilePillars}
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-[#22C55E] to-[#F5B942] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Profile Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Headshot Photo Card */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-sm">
              <div className="relative rounded-2xl overflow-hidden p-2 bg-[#FFFFFF] border border-[#D8E2DE] shadow-md hover:shadow-lg transition-shadow">
                <div className="relative rounded-xl overflow-hidden bg-white">
                  <img
                    src={playerData.gallery[1].src}
                    alt={playerData.gallery[1].alt}
                    className="w-full h-[400px] sm:h-[480px] object-cover object-center transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                  {/* Bottom overlay badge */}
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#071A2D] via-[#071A2D]/85 to-transparent p-5 text-center">
                    <h3 className="font-display font-black text-2xl text-white uppercase tracking-wide">
                      {playerData.fullName}
                    </h3>
                    <p className="text-xs font-semibold text-[#4ADE80] tracking-widest uppercase mt-0.5">
                      {playerData.primaryPosition} • {playerData.currentClub}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio & Attribute Specifications */}
          <div className="lg:col-span-7 flex flex-col space-y-8">
            
            {/* Biography Text Box */}
            <div className="bg-[#FFFFFF] p-6 sm:p-8 rounded-2xl border border-[#D8E2DE] shadow-sm space-y-4">
              <h3 className="font-display font-bold text-xl sm:text-2xl text-[#102A43] uppercase tracking-wide flex items-center gap-2.5">
                <span className="w-2.5 h-6 bg-[#22C55E] rounded-full"></span>
                <span>SCOUTING OVERVIEW & BIOGRAPHY</span>
              </h3>
              <div className="space-y-3.5 text-[#52667A] leading-relaxed text-sm sm:text-base font-normal">
                {playerData.profileBioParagraphs.map((para, idx) => (
                  <p key={idx} className={idx === 0 ? "text-[#102A43] font-medium" : ""}>
                    {para}
                  </p>
                ))}
              </div>
            </div>

            {/* Technical Attribute Grid */}
            <div>
              <h4 className="font-display font-bold text-sm tracking-widest text-[#52667A] uppercase mb-4">
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
                          ? 'bg-emerald-50/70 border-emerald-300'
                          : detail.highlight
                          ? 'bg-[#FFFFFF] border-emerald-400 shadow-sm'
                          : 'bg-[#FFFFFF] border-[#D8E2DE] hover:border-slate-300 shadow-sm'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <div className={`p-1.5 rounded-lg ${detail.highlight || detail.status ? 'bg-emerald-100 text-[#22C55E]' : 'bg-slate-100 text-[#52667A]'}`}>
                          <Icon size={16} />
                        </div>
                        <span className="text-xs uppercase tracking-wider text-[#52667A] font-medium">
                          {detail.label}
                        </span>
                      </div>
                      <span className={`font-display font-bold text-sm tracking-wide ${
                        detail.status
                          ? 'text-[#22C55E]'
                          : detail.highlight
                          ? 'text-[#102A43]'
                          : 'text-[#102A43]'
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
