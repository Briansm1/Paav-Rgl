"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/app/lib/placeholder-images';
import { ChevronRight, Star, ChevronDown } from 'lucide-react';

export const Hero = () => {
  const heroImg = PlaceHolderImages.find(img => img.id === 'hero-bg');

  return (
    <section id="inicio" className="relative h-[100svh] md:h-screen flex flex-col items-center pt-28 md:pt-32 pb-12 overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImg?.imageUrl || ''}
          alt={heroImg?.description || 'Driving school background'}
          fill
          className="object-cover blur-[3px] scale-105 opacity-55"
          priority
          data-ai-hint={heroImg?.imageHint}
        />
        {/* Gradient overlays for readability and transition */}
        <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-black/85 via-black/35 to-transparent"></div>
        {/* Bottom transition fade */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background via-background/80 to-transparent z-10"></div>
      </div>

      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-6 relative z-20 flex-1 flex flex-col justify-center">
        <div className="max-w-4xl text-left flex flex-col items-start gap-6 md:gap-10">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="text-[10px] md:text-sm font-bold text-white uppercase tracking-wider">La elección N°1 de la región</span>
          </div>
          
          <div className="space-y-4 md:space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-headline leading-[1.1] md:leading-[1.05] text-white animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-100">
              Tu camino hacia la <span className="text-primary">libertad</span> comienza con nosotros
            </h1>
            
            <p className="text-base md:text-xl text-white/90 max-w-2xl animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200 leading-relaxed text-left font-medium">
              En nuestra academia, no solo te enseñamos a manejar; te preparamos para ser un conductor responsable, seguro y con total confianza en las calles.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-5 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300 w-full sm:w-auto mt-2">
            <Link href="#planes" className="w-full sm:w-auto">
              <Button size="lg" className="h-14 md:h-16 px-12 text-base md:text-xl bg-primary hover:bg-primary/90 rounded-full w-full font-bold shadow-2xl shadow-primary/20 transition-all hover:scale-105">
                Conocer planes
                <ChevronRight className="ml-2 w-6 h-6" />
              </Button>
            </Link>
          </div>
          
          <div className="flex items-center justify-start gap-6 sm:gap-10 md:gap-14 animate-in fade-in duration-1000 delay-500 pt-6 md:pt-10">
            <div className="flex flex-col items-center text-center min-w-[80px]">
              <p className="text-xl sm:text-2xl md:text-4xl font-bold text-gold leading-none">Equipo</p>
              <p className="text-[7px] sm:text-[9px] md:text-[11px] text-white/50 uppercase tracking-[0.2em] font-bold mt-1">CERTIFICADO</p>
            </div>
            
            <div className="w-px h-10 md:h-14 bg-white/20"></div>
            
            <div className="flex flex-col items-center text-center min-w-[80px]">
              <p className="text-xl sm:text-2xl md:text-4xl font-bold text-gold leading-none">+5 años</p>
              <p className="text-[7px] sm:text-[9px] md:text-[11px] text-white/50 uppercase tracking-[0.2em] font-bold mt-1">FORMANDO ASES</p>
            </div>
            
            <div className="w-px h-10 md:h-14 bg-white/20"></div>
            
            <div className="flex flex-col items-center text-center min-w-[80px]">
              <div className="flex flex-col items-center">
                <p className="text-xl sm:text-2xl md:text-4xl font-bold text-gold leading-none">5/5</p>
                <div className="flex gap-0.5 mt-1 justify-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-2.5 md:w-4 h-2.5 md:h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
              </div>
              <p className="text-[7px] sm:text-[9px] md:text-[11px] text-white/50 uppercase tracking-[0.2em] font-bold mt-1">RECOMENDADOS</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 animate-bounce hidden md:block opacity-40">
        <ChevronDown className="w-8 h-8 text-white" />
      </div>
    </section>
  );
};