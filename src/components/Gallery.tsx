"use client";

import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/app/lib/placeholder-images';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import Autoscroll from 'embla-carousel-auto-scroll';

export const Gallery = () => {
  const galleryMedia = PlaceHolderImages.filter(img => img.id.startsWith('gallery-'));
  
  return (
    <section id="galeria" className="relative py-20 md:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <div className="mb-12 md:mb-20 text-center">
            <span className="kicker text-primary mb-4 inline-block bg-primary/10 px-4 py-1.5 rounded-full font-sans text-eyebrow font-semibold uppercase tracking-[0.12em]">
              MOMENTOS PILOTO
            </span>
            <h2 className="text-h2 font-display mb-4 tracking-tight">
              Así vivimos cada <span className="text-primary">clase</span>
            </h2>
            <p className="text-body-lg text-muted-foreground max-w-[68ch] mx-auto font-sans">
              Conocé nuestros vehículos y algunos momentos de las clases prácticas durante el proceso de formación.
            </p>
          </div>
          
          <div className="w-full max-w-[100vw]">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[
                Autoscroll({
                  speed: 1.5,
                  stopOnInteraction: false,
                  stopOnMouseEnter: true,
                }),
              ]}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {galleryMedia.map((media, index) => (
                  <CarouselItem key={index} className="pl-4 basis-[80%] sm:basis-1/2 lg:basis-1/4">
                    <div className="relative aspect-[4/5] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl bg-secondary group w-full h-full">
                      {media.imageUrl.endsWith('.mp4') ? (
                        <video 
                          src={media.imageUrl} 
                          autoPlay 
                          loop 
                          muted 
                          playsInline 
                          className="w-full h-full object-cover" 
                        />
                      ) : (
                        <Image 
                          src={media.imageUrl} 
                          alt={media.description} 
                          fill 
                          className="object-cover transition-transform duration-700 group-hover:scale-110" 
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};
