
"use client";

import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/app/lib/placeholder-images';

export const PartnersTicker = () => {
  const partners = PlaceHolderImages.filter(img => img.id.startsWith('partner-'));

  return (
    <section className="relative py-20 md:py-32 bg-black overflow-hidden">
      {/* Smooth transitions */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background z-0">
        <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-background via-background/80 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 mb-10 relative z-20">
        <h4 className="text-center text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-[0.3em]">
          socios estratégicos
        </h4>
      </div>
      
      <div className="container mx-auto px-4 relative z-20">
        <div className="flex flex-row justify-center items-center gap-8 md:gap-24">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className="grayscale hover:grayscale-0 transition-all duration-500 opacity-60 hover:opacity-100 shrink-0"
            >
              <div className="relative h-28 w-44 sm:h-32 sm:w-52 md:h-40 md:w-64">
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
