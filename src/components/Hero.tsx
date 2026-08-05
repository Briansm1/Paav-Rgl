"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/app/lib/placeholder-images';
import { ChevronRight, Star, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export const Hero = () => {
  const heroImg = PlaceHolderImages.find(img => img.id === 'hero-bg');
  const [starCount, setStarCount] = useState(1);
  const [typedText, setTypedText] = useState("");
  const fullButtonText = "Ver planes";

  useEffect(() => {
    const interval = setInterval(() => {
      setStarCount((prev) => (prev >= 5 ? 1 : prev + 1));
    }, 400);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let index = 0;
    let isDeleting = false;
    let timeoutId: NodeJS.Timeout;

    const type = () => {
      const current = fullButtonText.slice(0, index);
      setTypedText(current);
      let typingSpeed = isDeleting ? 100 : 150;
      if (!isDeleting && index < fullButtonText.length) {
        index++;
      } else if (isDeleting && index > 0) {
        index--;
      } else if (!isDeleting && index === fullButtonText.length) {
        isDeleting = true;
        typingSpeed = 3000;
      } else if (isDeleting && index === 0) {
        isDeleting = false;
        typingSpeed = 1000;
      }
      timeoutId = setTimeout(type, typingSpeed);
    };
    type();
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <section id="inicio" className="relative h-[100svh] min-h-[100svh] flex flex-col items-center pt-24 pb-0 md:pt-32 md:pb-0 lg:pt-36 lg:pb-0 overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        <Image src={heroImg?.imageUrl || ''} alt={heroImg?.description || 'Autoescuela'} fill className="object-cover object-center blur-[2px] md:blur-[4px] scale-105 opacity-60" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/40 to-background z-10"></div>
      </div>

      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-6 relative z-20 flex-1 flex flex-col justify-between h-full">
        <div className="max-w-4xl text-left flex flex-col items-start gap-4 md:gap-8 mt-1 md:mt-2">
          <div className="inline-block px-4 py-1.5 text-eyebrow font-semibold text-white uppercase tracking-[0.12em] bg-white/10 backdrop-blur-md border border-white/20 rounded-full animate-in fade-in slide-in-from-bottom-4 duration-700">
            AUTOESCUELA EN RÍO GALLEGOS
          </div>
          
          <div className="space-y-4 md:space-y-6">
            <h1 className="text-h1 font-display font-semibold text-white drop-shadow-md animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-100">
              <span className="text-primary">Aprendé a conducir</span> con clases adaptadas a tu nivel
            </h1>
            
            <p className="text-body-lg text-white/90 max-w-[68ch] animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200 font-medium">
              Clases teóricas y prácticas para empezar desde cero, mejorar tu manejo o prepararte para el examen práctico. Avanzá con acompañamiento profesional y horarios adaptados a tu disponibilidad.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300 w-full sm:w-auto mt-4 md:mt-0">
            <Link href="#planes" className="w-full sm:w-auto">
              <Button size="lg" className="h-14 md:h-16 px-10 md:px-12 text-lg bg-primary hover:bg-primary/90 rounded-full w-full font-bold transition-all active:scale-95 shadow-lg shadow-primary/20">
                <span className="inline-flex items-center min-w-[6rem] justify-center">
                  {typedText}
                  <span className="ml-1 w-[2px] h-5 bg-white animate-pulse" />
                </span>
                <ChevronRight className="ml-2 w-6 h-6" />
              </Button>
            </Link>
          </div>
        </div>
        
        <div className="flex items-center justify-center lg:justify-start gap-6 sm:gap-10 md:gap-14 animate-in fade-in duration-1000 delay-500 pt-6 pb-28 md:pb-12 w-full">
          <div className="flex flex-col items-center text-center">
            <p className="text-h3 font-display font-bold text-gold leading-none">Equipo</p>
            <p className="text-eyebrow text-white/50 uppercase font-bold mt-2">CERTIFICADO POR LA ANSV</p>
          </div>
          <div className="w-px h-10 md:h-14 bg-white/20"></div>
          <div className="flex flex-col items-center text-center">
            <p className="text-h3 font-display font-bold text-gold leading-none">+5 años</p>
            <p className="text-eyebrow text-white/50 uppercase font-bold mt-2">formando conductores</p>
          </div>
          <div className="w-px h-10 md:h-14 bg-white/20"></div>
          <div className="flex flex-col items-center text-center">
            <div className="flex gap-0.5 justify-center py-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} strokeWidth={0} className={cn("w-4 h-4 md:w-5 md:h-5 transition-all duration-300", i < starCount ? "text-yellow-400 fill-yellow-400 scale-110" : "text-white/10 fill-white/10")} />
              ))}
            </div>
            <p className="text-eyebrow text-white/50 uppercase font-bold mt-2">RECOMENDADOS</p>
          </div>
        </div>
      </div>
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 animate-bounce opacity-40 hidden sm:block">
        <ChevronDown className="w-8 h-8 text-white" />
      </div>
    </section>
  );
};
