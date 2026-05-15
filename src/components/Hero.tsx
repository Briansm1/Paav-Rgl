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
    <section id="inicio" className="relative h-[100svh] md:h-screen flex items-center pt-16 md:pt-20 overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImg?.imageUrl || ''}
          alt={heroImg?.description || 'Driving school background'}
          fill
          className="object-cover blur-[3px] scale-110 opacity-70"
          priority
          data-ai-hint={heroImg?.imageHint}
        />
        {/* Gradient overlays for readability and transition */}
        <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-background/95 via-background/80 to-transparent"></div>
        {/* Bottom transition fade - deeper for smoother scroll feel */}
        <div className="absolute bottom-0 left-0 right-0 h-40 md:h-64 bg-gradient-to-t from-background via-background/60 to-transparent z-10"></div>
      </div>

      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-6 relative z-20">
        <div className="max-w-4xl text-left">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5 mb-3 md:mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="text-[10px] md:text-sm font-bold text-white uppercase tracking-wider">La elección N°1 de la región</span>
          </div>
          
          <h1 className="text-3xl sm:text-5xl md:text-5xl lg:text-6xl font-bold font-headline leading-[1.1] mb-4 text-white animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-100">
            Tu camino hacia la <span className="text-primary">libertad</span> comienza con nosotros
          </h1>
          
          <p className="text-sm sm:text-lg md:text-xl text-white/80 mb-6 md:mb-8 max-w-2xl animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200 leading-relaxed text-left">
            En nuestra academia, no solo te enseñamos a manejar; te preparamos para ser un conductor responsable, seguro y con total confianza en las calles
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-8 md:mb-12 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300">
            <Link href="#planes" className="w-full sm:w-auto">
              <Button size="lg" className="h-11 md:h-14 px-8 md:px-10 text-base md:text-lg bg-primary hover:bg-primary/90 rounded-full w-full font-bold shadow-2xl shadow-primary/20 transition-all hover:scale-105">
                Conocer planes
                <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
          
          <div className="flex items-center justify-start gap-4 sm:gap-10 md:gap-14 animate-in fade-in duration-1000 delay-500">
            <div className="text-left">
              <p className="text-lg sm:text-2xl md:text-3xl font-bold text-gold">Equipo</p>
              <p className="text-[7px] sm:text-[9px] md:text-[10px] text-white/50 uppercase tracking-[0.2em] font-bold mt-0.5">CERTIFICADO</p>
            </div>
            
            <div className="w-px h-6 md:h-10 bg-white/20"></div>
            
            <div className="text-left">
              <p className="text-lg sm:text-2xl md:text-3xl font-bold text-gold">+5 años</p>
              <p className="text-[7px] sm:text-[9px] md:text-[10px] text-white/50 uppercase tracking-[0.2em] font-bold mt-0.5">FORMANDO ASES</p>
            </div>
            
            <div className="w-px h-6 md:h-10 bg-white/20"></div>
            
            <div className="text-left">
              <div className="flex flex-col items-start">
                <p className="text-lg sm:text-2xl md:text-3xl font-bold text-gold">5/5</p>
                <div className="flex gap-0.5 mt-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-2 md:w-3 h-2 md:h-3 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
              </div>
              <p className="text-[7px] sm:text-[9px] md:text-[10px] text-white/50 uppercase tracking-[0.2em] font-bold mt-0.5">RECOMENDADOS</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 animate-bounce hidden md:block opacity-30">
        <ChevronDown className="w-6 h-6 text-white" />
      </div>
    </section>
  );
};
