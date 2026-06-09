"use client";

import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/app/lib/placeholder-images';

export const PartnersTicker = () => {
  const partners = PlaceHolderImages.filter(img => img.id.startsWith('partner-'));
  
  // Duplicamos el array para crear el efecto de scroll infinito
  const duplicatedPartners = [...partners, ...partners, ...partners, ...partners];

  return (
    <section className="relative py-20 md:py-32 bg-black overflow-hidden">
      {/* Smooth transitions at edges */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background z-0">
        <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-background via-background/80 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
      </div>

      {/* Mask for fading edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-black to-transparent z-30 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-black to-transparent z-30 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 mb-12 relative z-20">
        <h4 className="text-center text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-[0.3em]">
          socios estratégicos
        </h4>
      </div>
      
      <div className="relative z-20 w-full overflow-hidden">
        <div className="flex w-fit items-center gap-16 md:gap-32 animate-scroll">
          {duplicatedPartners.map((partner, index) => (
            <div 
              key={`${partner.id}-${index}`} 
              className="grayscale hover:grayscale-0 transition-all duration-500 opacity-60 hover:opacity-100 shrink-0"
            >
              <div className="relative h-24 w-36 sm:h-28 sm:w-44 md:h-36 md:w-56">
                <Image
                  src={partner.imageUrl}
                  alt={partner.description}
                  fill
                  className="object-contain"
                  data-ai-hint={partner.imageHint}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};