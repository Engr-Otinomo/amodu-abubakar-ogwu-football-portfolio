import React, { useState, useEffect, useCallback } from 'react';
import { playerData } from '../data/playerData';
import { Maximize2, X, ChevronLeft, ChevronRight, Eye } from 'lucide-react';

export default function Gallery() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const openLightbox = (index) => {
    setSelectedImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
  };

  const nextImage = useCallback(() => {
    setSelectedImageIndex((prevIndex) => 
      prevIndex === null ? null : (prevIndex + 1) % playerData.gallery.length
    );
  }, []);

  const prevImage = useCallback(() => {
    setSelectedImageIndex((prevIndex) => 
      prevIndex === null ? null : (prevIndex - 1 + playerData.gallery.length) % playerData.gallery.length
    );
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedImageIndex === null) return;

      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowRight') {
        nextImage();
      } else if (e.key === 'ArrowLeft') {
        prevImage();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImageIndex, nextImage, prevImage]);

  // Lock body scroll when modal open
  useEffect(() => {
    if (selectedImageIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedImageIndex]);

  return (
    <section id="gallery" className="py-24 bg-[#EEF3F1] text-[#102A43] relative pitch-grid-light border-t border-[#D8E2DE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
          <span className="inline-block text-xs font-display font-bold tracking-widest text-[#22C55E] uppercase bg-emerald-50 px-3.5 py-1 rounded-full border border-emerald-200">
            GALLERY
          </span>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-[#102A43] tracking-tight uppercase">
            IN ACTION
          </h2>
          <p className="text-[#52667A] text-sm sm:text-base font-medium max-w-xl mx-auto">
            High-resolution visual record of Amodu across matches, pitch training, and official team sessions.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-[#22C55E] to-[#F5B942] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* 4 Photo Sports Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {playerData.gallery.map((img, idx) => (
            <div
              key={img.id}
              onClick={() => openLightbox(idx)}
              className="group relative rounded-2xl overflow-hidden bg-[#FFFFFF] p-2 sm:p-2.5 border border-[#D8E2DE] hover:border-emerald-300 cursor-pointer shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  openLightbox(idx);
                }
              }}
              aria-label={`View full image: ${img.alt}`}
            >
              {/* Image Container */}
              <div className="relative w-full h-80 sm:h-96 overflow-hidden rounded-xl bg-slate-100">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#071A2D] via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>

                {/* Hover Eye / Expand Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-14 h-14 rounded-full bg-[#22C55E] text-white flex items-center justify-center shadow-lg transform scale-75 group-hover:scale-100 transition-transform duration-300">
                    <Maximize2 size={24} className="stroke-[2.5]" />
                  </div>
                </div>

                {/* Category Tag (Top Right) */}
                <div className="absolute top-3 right-3">
                  <span className="text-[10px] font-display font-bold uppercase tracking-widest text-white bg-[#071A2D]/80 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/20">
                    {img.category}
                  </span>
                </div>

                {/* Bottom Caption Overlay */}
                <div className="absolute bottom-0 inset-x-0 p-4 text-left">
                  <p className="font-display font-bold text-lg text-white uppercase tracking-wide group-hover:text-[#4ADE80] transition-colors leading-tight">
                    {img.title}
                  </p>
                  <p className="text-xs text-slate-200 tracking-wider uppercase mt-0.5">
                    {img.subtitle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedImageIndex !== null && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Image Lightbox"
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#22C55E]"
            aria-label="Close image lightbox"
          >
            <X size={26} />
          </button>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 p-3 sm:p-4 rounded-full bg-white/10 hover:bg-[#22C55E] hover:text-[#071A2D] text-white transition-all focus:outline-none focus:ring-2 focus:ring-[#22C55E]"
            aria-label="Previous image"
          >
            <ChevronLeft size={28} />
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 p-3 sm:p-4 rounded-full bg-white/10 hover:bg-[#22C55E] hover:text-[#071A2D] text-white transition-all focus:outline-none focus:ring-2 focus:ring-[#22C55E]"
            aria-label="Next image"
          >
            <ChevronRight size={28} />
          </button>

          {/* Active Image and Caption */}
          <div 
            className="relative max-w-4xl max-h-[85vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={playerData.gallery[selectedImageIndex].src}
              alt={playerData.gallery[selectedImageIndex].alt}
              className="max-h-[75vh] w-auto max-w-full rounded-xl object-contain border border-white/20 shadow-2xl"
            />
            <div className="mt-4 text-center">
              <p className="text-white font-display font-bold text-lg sm:text-xl uppercase tracking-wide">
                {playerData.gallery[selectedImageIndex].title}
              </p>
              <p className="text-slate-300 text-xs sm:text-sm mt-1">
                {playerData.gallery[selectedImageIndex].alt}
              </p>
              <p className="text-[11px] text-[#4ADE80] font-semibold mt-1 uppercase tracking-widest">
                Photo {selectedImageIndex + 1} of {playerData.gallery.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
