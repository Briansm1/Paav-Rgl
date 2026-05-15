
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
    <section id="inicio" className="relative min-h-[90vh] md:min-h-screen flex items-center pt-32 md:pt-28 pb-16 md:pb-10 overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImg?.imageUrl || ''}
          alt={heroImg?.description || 'Driving school background'}
          fill
          className="object-cover blur-[2px] scale-105"
          priority
          data-ai-hint={heroImg?.imageHint}
        />
        <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-background/95 via-background/80 md:via-background/70 to-background/40 md:to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5 mb-8 md:mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="text-sm md:text-base font-bold text-white">La elección N°1 de la región</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-headline leading-[1.15] md:leading-[1.1] mb-8 md:mb-6 text-white animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-100">
            Tu camino hacia la libertad comienza con nosotros
          </h1>
          
          <p className="text-lg sm:text-xl md:text-xl text-white/80 mb-12 md:mb-10 max-w-2xl animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200 leading-relaxed">
            En nuestra academia, no solo te enseñamos a manejar; te preparamos para ser un conductor responsable, seguro y con total confianza en las calles
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300">
            <Link href="#planes" className="w-full sm:w-auto">
              <Button size="lg" className="h-14 md:h-16 px-10 text-lg bg-primary hover:bg-primary/90 rounded-full w-full font-bold shadow-2xl shadow-primary/20">
                Conocer planes
                <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
          
          <div className="mt-16 md:mt-12 flex items-center justify-between sm:justify-start gap-4 sm:gap-12 md:gap-16 animate-in fade-in duration-1000 delay-500 max-w-sm sm:max-w-none">
            <div className="text-center md:text-left flex-1 sm:flex-none">
              <p className="text-xl sm:text-3xl md:text-4xl font-bold text-gold">Equipo</p>
              <p className="text-[8px] sm:text-[10px] md:text-xs text-white/50 uppercase tracking-widest font-bold mt-1">CERTIFICADO</p>
            </div>
            
            <div className="w-px h-8 sm:h-10 bg-white/20"></div>
            
            <div className="text-center md:text-left flex-1 sm:flex-none">
              <p className="text-xl sm:text-3xl md:text-4xl font-bold text-gold">+5 años</p>
              <p className="text-[8px] sm:text-[10px] md:text-xs text-white/50 uppercase tracking-widest font-bold mt-1">FORMANDO ASES</p>
            </div>
            
            <div className="w-px h-8 sm:h-10 bg-white/20"></div>
            
            <div className="text-center md:text-left flex-1 sm:flex-none">
              <p className="text-xl sm:text-3xl md:text-4xl font-bold text-gold">5/5</p>
              <div className="flex justify-center md:justify-start gap-0.5 mt-1">
                <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-yellow-400" />
                <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-yellow-400" />
                <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-yellow-400" />
                <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-yellow-400" />
                <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-yellow-400" />
              </div>
              <p className="text-[8px] sm:text-[10px] md:text-xs text-white/50 uppercase tracking-widest font-bold mt-1">LOS MÁS RECOMENDADOS</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
