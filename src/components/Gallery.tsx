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
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[300px] bg-primary/6 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <div className="mb-12 md:mb-20 text-center">
            <span className="kicker text-accent mb-6 inline-block bg-accent/10 px-4 py-1.5 rounded-full font-sans text-eyebrow font-semibold uppercase tracking-[0.12em]">
              MOMENTOS PILOTO
            </span>
            <h2 className="text-h2 font-display mb-4 tracking-tight">
              Así vivimos cada <span className="text-primary">clase</span>
            </h2>
            <p className="text-body-lg text-muted-foreground max-w-[68ch] mx-auto font-sans">
              Conocé nuestros vehículos y algunos momentos de las clases prácticas durante el proceso de formación.
            </p>
          </div>

          {/* Carousel wrapper with edge fades */}
          <div className="w-full relative">
            {/* Left fade edge */}
            <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-background to-transparent z-20 pointer-events-none" />
            {/* Right fade edge */}
            <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-background to-transparent z-20 pointer-events-none" />

            <div className="pointer-events-none select-none">
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                  watchDrag: false,
                }}
                plugins={[
                  Autoscroll({
                    speed: 1.5,
                    stopOnInteraction: false,
                    stopOnMouseEnter: false,
                    stopOnFocusIn: false,
                  }),
                ]}
                className="w-full"
              >
                <CarouselContent className="-ml-4">
                  {galleryMedia.map((media, index) => (
                    <CarouselItem key={index} className="pl-4 basis-[80%] sm:basis-1/2 lg:basis-1/4">
                      <div className="relative aspect-[4/5] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl bg-secondary w-full h-full group">
                        {/* Glow ring on each card */}
                        <div className="absolute -inset-[1px] rounded-[2.5rem] bg-gradient-to-br from-primary/30 via-transparent to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-20" />

                        {media.imageUrl.endsWith('.mp4') ? (
                          <video
                            src={media.imageUrl}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover scale-[1.03] transition-transform duration-[2000ms] group-hover:scale-[1.08]"
                          />
                        ) : (
                          <Image
                            src={media.imageUrl}
                            alt={media.description}
                            fill
                            className="object-cover scale-[1.03] transition-transform duration-[2000ms] group-hover:scale-[1.08]"
                          />
                        )}

                        {/* Base gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent z-10" />

                        {/* Shimmer line at top */}
                        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent z-10" />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
