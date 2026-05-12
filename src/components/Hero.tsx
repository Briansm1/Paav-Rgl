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
    <section id="inicio" className="relative min-h-screen flex items-center pt-24 md:pt-28 pb-10 overflow-hidden">
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
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5 mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            <span className="text-sm md:text-base font-bold text-white">La elección N°1 de la región</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-headline leading-[1.1] mb-4 text-white animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-100">
            Tu camino hacia la <span className="text-primary">libertad</span> comienza con nosotros.
          </h1>
          
          <p className="text-lg sm:text-xl md:text-xl text-white/80 mb-6 max-w-2xl animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200 leading-relaxed">
            En nuestra academia, no solo te enseñamos a manejar; te preparamos para ser un conductor responsable, seguro y con total confianza en las calles.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300">
            <Link href="#planes" className="w-full sm:w-auto">
              <Button size="lg" className="h-12 md:h-14 px-10 text-lg bg-primary hover:bg-primary/90 rounded-full w-full font-bold">
                Conocer planes
                <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
          
          <div className="mt-8 md:mt-10 flex items-center gap-6 sm:gap-12 md:gap-16 animate-in fade-in duration-1000 delay-500">
            <div className="text-center">
              <p className="text-2xl md:text-4xl font-bold text-white">Equipo</p>
              <p className="text-[10px] md:text-xs text-white/50 uppercase tracking-widest font-bold mt-1">calificado</p>
            </div>
            <div className="w-px h-10 bg-white/20"></div>
            <div className="text-center">
              <p className="text-2xl md:text-4xl font-bold text-white">+5 años</p>
              <p className="text-[10px] md:text-xs text-white/50 uppercase tracking-widest font-bold mt-1">FORMANDO ASES</p>
            </div>
            <div className="w-px h-10 bg-white/20"></div>
            <div className="text-center">
              <p className="text-2xl md:text-4xl font-bold text-white">4.9/5</p>
              <p className="text-[10px] md:text-xs text-white/50 uppercase tracking-widest font-bold mt-1">LOS MÁS RECOMENDADOS</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};