
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
          Nuestra <span className="text-primary italic">galería</span>
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
          <CarouselContent className="-ml-4">
            {galleryImages.map((img, index) => (
              <CarouselItem key={index} className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden group shadow-xl">
                  <Image 
                    src={img.imageUrl} 
                    alt={img.description} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    data-ai-hint={img.imageHint}
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500"></div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};
