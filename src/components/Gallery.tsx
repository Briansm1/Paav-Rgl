"use client";

import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/app/lib/placeholder-images';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import AutoScroll from "embla-carousel-auto-scroll";

export const Gallery = () => {
  const galleryImages = PlaceHolderImages.filter(img => img.id.startsWith('gallery-'));
  const galleryVideos = PlaceHolderImages.filter(img => img.id.startsWith('gallery-video-'));

  const combinedMedia = [];
  const maxLength = Math.max(galleryImages.length, galleryVideos.length);
  
  for (let i = 0; i < maxLength; i++) {
    if (i < galleryImages.length) combinedMedia.push(galleryImages[i]);
    if (i < galleryVideos.length) combinedMedia.push(galleryVideos[i]);
  }

  return (
    <section id="galeria" className="relative py-20 md:py-32 bg-background overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background z-0">
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background via-background/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background via-background/50 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <div className="mb-12 md:mb-20 text-center">
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-widest text-primary uppercase bg-primary/10 rounded-full">
              momentos piloto
            </span>
            <h2 className="text-3xl md:text-5xl font-bold font-headline mb-4 tracking-tight">
              Galería de <span className="text-primary italic">clases</span>
            </h2>
          </div>

          <div className="w-full">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[
                AutoScroll({
                  speed: 1,
                  stopOnInteraction: false,
                  stopOnMouseEnter: false,
                }),
              ]}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {combinedMedia.map((media, index) => {
                  const isVideo = media.imageUrl.endsWith('.mp4');
                  
                  return (
                    <CarouselItem key={index} className="pl-4 basis-[75%] sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                      <div className="relative aspect-[4/5] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl bg-secondary group">
                        {isVideo ? (
                          <video 
                            src={media.imageUrl} 
                            autoPlay 
                            loop 
                            muted 
                            playsInline 
                            preload="none"
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <Image 
                            src={media.imageUrl} 
                            alt={media.description} 
                            fill 
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                            sizes="(max-width: 640px) 75vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                            data-ai-hint={media.imageHint}
                          />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};
