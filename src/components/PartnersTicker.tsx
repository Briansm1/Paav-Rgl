"use client";

import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/app/lib/placeholder-images';

export const PartnersTicker = () => {
  const partners = PlaceHolderImages.filter(img => img.id.startsWith('partner-'));
  const duplicatedPartners = [...partners, ...partners, ...partners, ...partners];
  return (
    <section className="relative py-20 md:py-32 bg-black overflow-hidden">
      <div className="container mx-auto px-4 mb-12 relative z-20 text-center">
        <h4 className="kicker text-slate-500 uppercase">SOCIOS</h4>
      </div>
      <div className="relative z-20 w-full overflow-hidden">
        <div className="flex w-fit items-center gap-16 md:gap-32 animate-scroll">
          {duplicatedPartners.map((partner, index) => (
            <div key={`${partner.id}-${index}`} className="grayscale hover:grayscale-0 transition-all duration-500 opacity-60 hover:opacity-100 shrink-0">
              <div className="relative h-24 w-36 md:h-36 md:w-56">
                <Image src={partner.imageUrl} alt={partner.description} fill className="object-contain" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
