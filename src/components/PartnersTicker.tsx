
"use client";

import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/app/lib/placeholder-images';

export const PartnersTicker = () => {
  const partners = PlaceHolderImages.filter(img => img.id.startsWith('partner-'));

  return (
    <section className="py-16 bg-black border-y border-white/5 overflow-hidden">
      <div className="container mx-auto px-4 mb-10">
        <h4 className="text-center text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-[0.3em]">
          Comercios amigos y socios estratégicos
        </h4>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className="grayscale hover:grayscale-0 transition-all duration-500 opacity-60 hover:opacity-100"
            >
              <div className="relative h-28 w-44 md:h-40 md:w-64">
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
