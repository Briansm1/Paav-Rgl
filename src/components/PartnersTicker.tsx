
"use client";

import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/app/lib/placeholder-images';

export const PartnersTicker = () => {
  const partners = PlaceHolderImages.filter(img => img.id.startsWith('partner-'));
  
  // Duplicamos los partners para el scroll infinito suave
  const displayPartners = [...partners, ...partners, ...partners];

  return (
    <section className="py-12 bg-black border-y border-white/5 overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        <h4 className="text-center text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-[0.3em]">
          Comercios amigos y socios estratégicos
        </h4>
      </div>
      
      <div className="relative flex overflow-x-hidden">
        <div className="flex animate-marquee whitespace-nowrap items-center py-4">
          {displayPartners.map((partner, index) => (
            <div key={index} className="mx-12 md:mx-20 flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300 opacity-50 hover:opacity-100">
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
        
        {/* Segunda cinta para el loop infinito */}
        <div className="absolute top-0 flex animate-marquee2 whitespace-nowrap items-center py-4 h-full">
          {displayPartners.map((partner, index) => (
            <div key={index} className="mx-12 md:mx-20 flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300 opacity-50 hover:opacity-100">
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

      <style jsx>{`
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .animate-marquee2 {
          animation: marquee2 40s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        @keyframes marquee2 {
          0% { transform: translateX(100%); }
          100% { transform: translateX(0%); }
        }
      `}</style>
    </section>
  );
};
