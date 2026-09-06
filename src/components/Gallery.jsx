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
    <section id="gallery" className="py-24 bg-sport-navy/95 relative pitch-grid border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
          <span className="inline-block text-xs font-display font-bold tracking-widest text-sport-green uppercase bg-sport-emerald/10 px-3 py-1 rounded-full border border-sport-emerald/20">
            GALLERY
          </span>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight uppercase">
            IN ACTION
          </h2>
          <p className="text-sport-muted text-sm sm:text-base font-medium max-w-xl mx-auto">
            High-resolution visual record of Amodu across matches, pitch training, and official team sessions.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-sport-emerald to-sport-gold mx-auto mt-4 rounded-full"></div>
        </div>

        {/* 4 Photo Sports Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {playerData.gallery.map((img, idx) => (
            <div
              key={img.id}
              onClick={() => openLightbox(idx)}
              className="group relative rounded-2xl overflow-hidden bg-sport-dark/60 border border-white/10 hover:border-sport-green/50 cursor-pointer shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col"
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
              {/* Image Container with Fixed Aspect Ratio */}
              <div className="relative w-full h-80 sm:h-96 overflow-hidden bg-sport-surface">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                  loading="lazy"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-sport-navy via-sport-navy/30 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>

                {/* Hover Eye / Expand Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-14 h-14 rounded-full bg-sport-emerald text-sport-navy flex items-center justify-center shadow-xl shadow-sport-emerald/40 transform scale-75 group-hover:scale-100 transition-transform duration-300">
                    <Maximize2 size={24} className="stroke-[2.5]" />
                  </div>
                </div>

                {/* Category Tag (Top Right) */}
                <div className="absolute top-3 right-3">
                  <span className="text-[10px] font-display font-bold uppercase tracking-widest text-white bg-sport-navy/80 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/15">
                    {img.category}
                  </span>
                </div>

                {/* Bottom Caption */}
                <div className="absolute bottom-0 inset-x-0 p-4">
                  <p className="font-display font-bold text-lg text-white uppercase tracking-wide group-hover:text-sport-green transition-colors leading-tight">
                    {img.title}
                  </p>
                  <p className="text-xs text-sport-muted tracking-wider uppercase mt-0.5">
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
            className="absolute top-5 right-5 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-sport-green"
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
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 p-3 sm:p-4 rounded-full bg-white/10 hover:bg-sport-emerald hover:text-sport-navy text-white transition-all focus:outline-none focus:ring-2 focus:ring-sport-green"
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
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 p-3 sm:p-4 rounded-full bg-white/10 hover:bg-sport-emerald hover:text-sport-navy text-white transition-all focus:outline-none focus:ring-2 focus:ring-sport-green"
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
              <p className="text-sport-muted text-xs sm:text-sm mt-1">
                {playerData.gallery[selectedImageIndex].alt}
              </p>
              <p className="text-[11px] text-sport-green font-semibold mt-1 uppercase tracking-widest">
                Photo {selectedImageIndex + 1} of {playerData.gallery.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
