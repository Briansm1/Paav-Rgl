
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
    <section id="galeria" className="relative pt-8 pb-20 md:pt-12 bg-background overflow-hidden">
      {/* Top and Bottom fades */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background via-background/50 to-transparent pointer-events-none z-10"></div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background via-background/50 to-transparent pointer-events-none z-10"></div>

      <div className="container mx-auto px-4 mb-12 text-center relative z-10">
        <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-primary uppercase bg-primary/10 rounded-full">
          Momentos Pilotos
        </span>
        <h2 className="text-4xl md:text-5xl font-bold font-headline mb-4 tracking-tight">
          Galería de <span className="text-primary italic">clases</span>
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <Carousel 
          plugins={[
            AutoScroll({ 
              speed: 2, 
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
              <CarouselItem key={index} className="pl-2 basis-1/2 md:basis-1/3">
                <div className="relative aspect-[8/10] rounded-xl md:rounded-[2rem] overflow-hidden shadow-xl">
                  <Image 
                    src={img.imageUrl} 
                    alt={img.description} 
                    fill 
                    className="object-cover"
                    data-ai-hint={img.imageHint}
                  />
                  <div className="absolute inset-0 bg-black/10"></div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};
