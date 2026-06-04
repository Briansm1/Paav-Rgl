
"use client";

import React from 'react';
import Image from 'next/image';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
} from '@/components/ui/carousel';
import AutoScroll from 'embla-carousel-auto-scroll';
import { PlaceHolderImages } from '@/app/lib/placeholder-images';

export const Gallery = () => {
  const galleryImages = PlaceHolderImages.filter(img => img.id.startsWith('gallery-'));

  return (
    <section id="galeria" className="relative py-20 md:py-32 bg-background overflow-hidden">
      {/* Soft gradient transitions - Vertical */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background z-0">
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background via-background/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background via-background/50 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 mb-10 text-center relative z-10">
        <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-widest text-primary uppercase bg-primary/10 rounded-full">
          Momentos Pilotos
        </span>
        <h2 className="text-3xl md:text-5xl font-bold font-headline mb-2 tracking-tight">
          Galería de <span className="text-primary italic">clases</span>
        </h2>
      </div>

      <div className="max-w-full mx-auto px-0 relative z-10">
        {/* Horizontal Fades to prevent hard cuts */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-background to-transparent z-20 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-background to-transparent z-20 pointer-events-none"></div>
        
        <Carousel 
          plugins={[
            AutoScroll({ 
              speed: 1.5, 
              stopOnInteraction: false, 
              stopOnMouseEnter: false 
            })
          ]}
          opts={{ 
            align: "start", 
            loop: true,
            dragFree: true,
          }} 
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {galleryImages.map((img, index) => (
              <CarouselItem key={index} className="pl-2 basis-[45%] md:basis-1/3 lg:basis-1/4">
                <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl transition-all duration-500">
                  <Image 
                    src={img.imageUrl} 
                    alt={img.description} 
                    fill 
                    className="object-cover"
                    data-ai-hint={img.imageHint}
                  />
                  <div className="absolute inset-0 bg-black/5"></div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};
