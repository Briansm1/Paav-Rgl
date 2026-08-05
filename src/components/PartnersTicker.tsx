
"use client";

import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/app/lib/placeholder-images';

// Mapeo de IDs de socios a sus respectivos links de Instagram
// Puedes editar estos enlaces aquí mismo
const partnerLinks: Record<string, string> = {
  'partner-1': 'https://www.instagram.com/', 
  'partner-2': 'https://www.instagram.com/',
  'partner-3': 'https://www.instagram.com/',
};

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
        <div className="flex animate-scroll w-max gap-16 md:gap-32 items-center py-8 hover:[animation-play-state:paused]">
          {duplicatedPartners.map((partner, index) => (
            <a 
              key={`${partner.id}-${index}`} 
              href={partnerLinks[partner.id] || '#'} 
              target="_blank" 
              rel="noopener noreferrer"
              className="grayscale transition-all duration-500 opacity-60 hover:opacity-100 hover:grayscale-0 shrink-0 block cursor-pointer transition-transform hover:scale-105 active:scale-95"
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
            </a>
          ))}
        </div>
      </div>
      
      {/* Overlay para suavizar los bordes del carrusel */}
      <div className="absolute inset-y-0 left-0 w-20 md:w-40 bg-gradient-to-r from-black to-transparent z-30 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-20 md:w-40 bg-gradient-to-l from-black to-transparent z-30 pointer-events-none"></div>
    </section>
  );
};
