
"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/app/lib/placeholder-images';
import { ChevronRight, Star, ChevronDown } from 'lucide-react';

export const Hero = () => {
  const heroImg = PlaceHolderImages.find(img => img.id === 'hero-bg');
  const [starCount, setStarCount] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setStarCount((prev) => {
        if (prev >= 5) return 1;
        return prev + 1;
      });
    }, 400);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="inicio" className="relative h-[100svh] min-h-[100svh] flex flex-col items-center pt-24 pb-0 md:pt-32 md:pb-0 lg:pt-36 lg:pb-0 overflow-hidden bg-black">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImg?.imageUrl || ''}
          alt={heroImg?.description || 'Driving school background'}
          fill
          className="object-cover object-center blur-[2px] md:blur-[5px] scale-105 opacity-60 md:opacity-55"
          priority
          sizes="100vw"
          data-ai-hint={heroImg?.imageHint}
        />
        {/* Top transition fade */}
        <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-black via-black/80 to-transparent z-10"></div>
        
        {/* Readable gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-black/70 via-black/30 to-transparent"></div>
        
        {/* Bottom transition fade */}
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-background via-background/80 to-transparent z-10"></div>
      </div>

      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-6 relative z-20 flex-1 flex flex-col justify-between h-full">
        <div className="max-w-4xl text-left flex flex-col items-start gap-4 md:gap-8 mt-1 md:mt-2">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="text-[10px] md:text-xs font-bold text-white uppercase tracking-widest">AUTOESCUELA EN RÍO GALLEGOS</span>
          </div>
          
          <div className="space-y-4 md:space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold font-headline leading-[1.1] md:leading-[1.05] text-white animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-100">
              <span className="text-primary">Aprendé a conducir</span> con clases adaptadas a tu nivel
            </h1>
            
            <p className="text-lg sm:text-xl md:text-xl text-white/90 max-w-2xl animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200 leading-relaxed text-left font-medium">
              Clases teóricas y prácticas para empezar desde cero, mejorar tu manejo o prepararte para el examen práctico. Avanzá con acompañamiento profesional y horarios adaptados a tu disponibilidad.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300 w-full sm:w-auto mt-4 md:mt-0 px-2 sm:px-0">
            <Link href="#planes" className="w-full sm:w-auto">
              <Button size="lg" className="h-14 md:h-16 px-10 md:px-12 text-lg bg-primary hover:bg-primary/90 rounded-full w-full font-bold transition-all active:scale-95 shadow-none border-none">
                Ver planes
                <ChevronRight className="ml-2 w-6 h-6" />
              </Button>
            </Link>
          </div>
        </div>
        
        <div className="flex items-center justify-start gap-6 sm:gap-10 md:gap-14 animate-in fade-in duration-1000 delay-500 pt-6 pb-28 md:pb-12">
          <div className="flex flex-col items-center text-center min-w-[70px] md:min-w-[100px]">
            <p className="text-xl sm:text-2xl md:text-3xl font-bold text-gold leading-none">Equipo</p>
            <p className="text-[9px] md:text-[10px] text-white/50 uppercase tracking-[0.2em] font-bold mt-2">CERTIFICADO POR LA ANSV</p>
          </div>
          
          <div className="w-px h-10 md:h-14 bg-white/20"></div>
          
          <div className="flex flex-col items-center text-center min-w-[70px] md:min-w-[100px]">
            <p className="text-xl sm:text-2xl md:text-3xl font-bold text-gold leading-none">+5 años</p>
            <p className="text-[9px] md:text-[10px] text-white/50 uppercase tracking-[0.2em] font-bold mt-2">formando conductores</p>
          </div>
          
          <div className="w-px h-10 md:h-14 bg-white/20"></div>
          
          <div className="flex flex-col items-center text-center min-w-[70px] md:min-w-[100px]">
            <div className="flex flex-col items-center justify-center h-full">
              <div className="flex gap-0.5 justify-center py-1 min-h-[20px] md:min-h-[24px]">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    strokeWidth={0}
                    className={`w-4 h-4 md:w-5 md:h-5 transition-all duration-300 ${
                      i < starCount 
                        ? "text-yellow-400 fill-yellow-400 scale-110" 
                        : "text-white/10 fill-white/10 scale-100"
                    }`} 
                  />
                ))}
              </div>
            </div>
            <p className="text-[9px] md:text-[10px] text-white/50 uppercase tracking-[0.2em] font-bold mt-2">RECOMENDADOS</p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 animate-bounce opacity-40 hover:opacity-100 transition-opacity hidden sm:block">
        <ChevronDown className="w-8 h-8 text-white" />
      </div>
    </section>
  );
};
