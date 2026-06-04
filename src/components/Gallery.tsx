
"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/app/lib/placeholder-images';
import { cn } from '@/lib/utils';
import { ChevronRight, MousePointer2 } from 'lucide-react';

export const Gallery = () => {
  const galleryImages = PlaceHolderImages.filter(img => img.id.startsWith('gallery-'));
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  };

  // Obtenemos las próximas 3 imágenes para mostrar en la pila
  const getStackedImages = () => {
    const stacked = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % galleryImages.length;
      stacked.push({
        ...galleryImages[index],
        stackPosition: i
      });
    }
    return stacked;
  };

  return (
    <section id="galeria" className="relative py-20 md:py-32 bg-background overflow-hidden">
      {/* Fondos degradados para suavizar la sección */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background z-0">
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background via-background/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background via-background/50 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <div className="mb-12 md:mb-20 text-center">
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-widest text-primary uppercase bg-primary/10 rounded-full">
              Momentos Pilotos
            </span>
            <h2 className="text-3xl md:text-5xl font-bold font-headline mb-4 tracking-tight">
              Galería de <span className="text-primary italic">clases</span>
            </h2>
          </div>

          {/* Stack Container */}
          <div className="relative w-full max-w-[320px] md:max-w-[400px] aspect-[4/5] cursor-pointer" onClick={nextImage}>
            {getStackedImages().reverse().map((img, i) => {
              // i es la posición en el array invertido (2, 1, 0)
              // La tarjeta frontal es la que tiene stackPosition 0
              const pos = img.stackPosition;
              
              return (
                <div
                  key={`${img.id}-${pos}`}
                  className={cn(
                    "absolute inset-0 rounded-[2.5rem] overflow-hidden shadow-2xl transition-all duration-500 ease-in-out border border-white/10",
                    pos === 0 && "z-30 scale-100 opacity-100 translate-y-0",
                    pos === 1 && "z-20 scale-[0.92] opacity-60 translate-y-6 md:translate-y-8",
                    pos === 2 && "z-10 scale-[0.84] opacity-30 translate-y-12 md:translate-y-16"
                  )}
                  style={{
                    transformOrigin: 'bottom center'
                  }}
                >
                  <Image 
                    src={img.imageUrl} 
                    alt={img.description} 
                    fill 
                    className="object-cover"
                    data-ai-hint={img.imageHint}
                  />
                  {/* Overlay sutil para la frontal */}
                  {pos === 0 && (
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end justify-center p-8">
                      <div className="flex items-center gap-2 text-white/80 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 animate-pulse">
                        <MousePointer2 className="w-4 h-4" />
                        <span className="text-xs font-bold uppercase tracking-widest">Siguiente</span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Indicador de progreso */}
          <div className="mt-20 md:mt-28 flex items-center gap-4">
            <div className="text-slate-500 font-bold text-sm tracking-widest">
              {String(currentIndex + 1).padStart(2, '0')} / {String(galleryImages.length).padStart(2, '0')}
            </div>
            <div className="h-px w-12 bg-white/10"></div>
            <button 
              onClick={nextImage}
              className="group flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-[0.2em] hover:text-white transition-colors"
            >
              Ver más <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
