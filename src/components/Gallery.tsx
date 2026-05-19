"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  type CarouselApi
} from '@/components/ui/carousel';
import { PlaceHolderImages } from '@/app/lib/placeholder-images';

export const Gallery = () => {
  const [api, setApi] = useState<CarouselApi>();
  const galleryImages = PlaceHolderImages.filter(img => img.id.startsWith('gallery-'));

  useEffect(() => {
    if (!api) return;

    const intervalId = setInterval(() => {
      api.scrollNext();
    }, 3000);

    return () => clearInterval(intervalId);
  }, [api]);

  return (
    <section id="galeria" className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-4 mb-12 text-center">
        <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-primary uppercase bg-primary/10 rounded-full">
          Momentos Pilotos
        </span>
        <h2 className="text-4xl md:text-5xl font-bold font-headline mb-4 tracking-tight">
          Galería de <span className="text-primary italic">clases</span>
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <Carousel 
          setApi={setApi}
          opts={{ 
            align: "start", 
            loop: true,
          }} 
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {galleryImages.map((img, index) => (
              <CarouselItem key={index} className="pl-2 basis-1/3 sm:basis-1/2 lg:basis-1/3">
                <div className="relative aspect-[8/10] rounded-xl md:rounded-[2rem] overflow-hidden shadow-xl transition-all duration-700 group">
                  <Image 
                    src={img.imageUrl} 
                    alt={img.description} 
                    fill 
                    className="object-cover"
                    data-ai-hint={img.imageHint}
                  />
                  {/* Capa de nitidez/brillo: Las imágenes son un poco más oscuras por defecto y se aclaran al estar activas (simulado con el flujo del carrusel) */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};
