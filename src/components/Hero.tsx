"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/app/lib/placeholder-images';
import { ChevronRight, Star } from 'lucide-react';

export const Hero = () => {
  const heroImg = PlaceHolderImages.find(img => img.id === 'hero-bg');

  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImg?.imageUrl || ''}
          alt={heroImg?.description || 'Driving school background'}
          fill
          className="object-cover blur-[3px] scale-105"
          priority
          data-ai-hint={heroImg?.imageHint}
        />
        <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-background/95 via-background/80 md:via-background/70 to-background/40 md:to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-4 py-1.5 mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            <span className="text-xs md:text-sm font-bold text-foreground">La elección N°1 de la región</span>
          </div>
          
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold font-headline leading-[1.1] mb-6 text-foreground animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-100">
            Tu camino hacia la <span className="text-primary">Libertad</span> comienza con nosotros.
          </h1>
          
          <p className="text-sm sm:text-lg md:text-xl text-foreground/80 mb-8 max-w-xl animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
            En nuestra academia, no solo te enseñamos a manejar; te preparamos para ser un conductor responsable, seguro y con total confianza en las calles.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300">
            <Link href="#planes" className="w-full sm:w-auto">
              <Button size="lg" className="h-12 md:h-14 px-8 text-base md:text-lg bg-primary hover:bg-primary/90 rounded-full w-full">
                Conocer nuestros planes
                <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
          
          <div className="mt-10 md:mt-16 flex items-center gap-3 sm:gap-8 md:gap-12 animate-in fade-in duration-1000 delay-500">
            <div>
              <p className="text-base sm:text-2xl md:text-4xl font-bold text-foreground whitespace-nowrap">Equipo</p>
              <p className="text-[9px] sm:text-xs md:text-sm text-foreground/60 uppercase tracking-wider font-semibold">altamente calificado</p>
            </div>
            <div className="w-px h-8 md:h-12 bg-border"></div>
            <div>
              <p className="text-base sm:text-2xl md:text-4xl font-bold text-foreground whitespace-nowrap">+5 años</p>
              <p className="text-[9px] sm:text-xs md:text-sm text-foreground/60 uppercase tracking-wider font-semibold">formando ases al volante</p>
            </div>
            <div className="w-px h-8 md:h-12 bg-border"></div>
            <div>
              <p className="text-base sm:text-2xl md:text-4xl font-bold text-foreground whitespace-nowrap">4.9/5</p>
              <p className="text-[9px] sm:text-xs md:text-sm text-foreground/60 uppercase tracking-wider font-semibold">recomendada</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};