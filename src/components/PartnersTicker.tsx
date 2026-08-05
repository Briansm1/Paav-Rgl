
"use client";

import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/app/lib/placeholder-images';

export const PartnersTicker = () => {
  const partners = PlaceHolderImages.filter(img => img.id.startsWith('partner-'));
  // Duplicamos varias veces para asegurar un flujo continuo sin saltos visuales
  const duplicatedPartners = [...partners, ...partners, ...partners, ...partners];

  return (
    <section className="relative py-20 md:py-32 bg-black overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-4 mb-12 relative z-20 text-center">
        <span className="kicker text-slate-500 uppercase tracking-[0.2em] font-bold text-xs">
          SOCIOS ESTRATÉGICOS
        </span>
      </div>

      <div className="relative z-20 w-full overflow-hidden">
        {/* Contenedor con la animación de scroll infinito */}
        <div className="flex animate-scroll w-max gap-16 md:gap-32 items-center py-8">
          {duplicatedPartners.map((partner, index) => (
            <div 
              key={`${partner.id}-${index}`} 
              className="grayscale transition-all duration-500 opacity-60 hover:opacity-100 shrink-0"
            >
              <div className="relative h-28 w-48 md:h-44 md:w-72 lg:h-64 lg:w-[480px]">
                <Image 
                  src={partner.imageUrl} 
                  alt={partner.description} 
                  fill 
                  className="object-contain" 
                  priority={index < 4}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Overlay para suavizar los bordes del carrusel */}
      <div className="absolute inset-y-0 left-0 w-20 md:w-40 bg-gradient-to-r from-black to-transparent z-30 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-20 md:w-40 bg-gradient-to-l from-black to-transparent z-30 pointer-events-none"></div>
    </section>
  );
};
