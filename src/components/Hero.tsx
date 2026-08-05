
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
    <section id="inicio" className="relative h-[100svh] min-h-[100svh] flex flex-col items-center overflow-hidden bg-black">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
          src={heroImg?.imageUrl || ''} 
          alt={heroImg?.description || 'Autoescuela'} 
          fill 
          className="object-cover object-center blur-[1px] md:blur-[2px] scale-105 opacity-50" 
          priority 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/60 to-background z-10"></div>
      </div>

      {/* Content Container */}
      <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-10 relative z-20 flex-1 flex flex-col justify-center pt-24 pb-8">
        <div className="w-full flex flex-col md:flex-row justify-between items-center md:items-center gap-8 md:gap-12">
          
          {/* Main content block */}
          <div className="max-w-3xl flex flex-col items-center text-center md:items-start md:text-left gap-6 md:gap-8">
            <div className="space-y-4 md:space-y-6">
              {/* Badge */}
              <div className="inline-block px-4 py-2 text-sm md:text-eyebrow font-bold text-white uppercase tracking-[0.15em] bg-white/10 backdrop-blur-md border border-white/20 rounded-full animate-in fade-in slide-in-from-bottom-4 duration-700 whitespace-nowrap">
                Autoescuela en Río Gallegos
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-h1 font-display font-semibold text-white drop-shadow-lg animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-100 leading-[1.1]">
                <span className="text-primary">Aprendé a conducir</span> con clases adaptadas a tu nivel
              </h1>
              
              <p className="text-lg md:text-body-lg text-white/90 max-w-[60ch] animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200 font-medium">
                Clases teóricas y prácticas para empezar desde cero, mejorar tu manejo o prepararte para el examen práctico. Avanzá con acompañamiento profesional.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300 w-full sm:w-auto">
              <Link href="#planes" className="w-full sm:w-auto">
                <Button size="lg" className="h-16 md:h-16 px-10 md:px-12 text-xl md:text-lg bg-primary hover:bg-primary/90 rounded-full w-full font-bold transition-all active:scale-95 shadow-xl shadow-primary/20 border-none">
                  <span className="inline-flex items-center min-w-[6rem] justify-center">
                    {typedText}
                    <span className="ml-1 w-[2px] h-5 bg-white animate-pulse" />
                  </span>
                  <ChevronRight className="ml-2 w-6 h-6" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Trust Indicators - SUBIDOS MÁS ARRIBA */}
        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-y-6 gap-x-8 sm:gap-x-10 md:gap-x-14 animate-in fade-in duration-1000 delay-500 w-full mt-10 md:mt-14">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <p className="text-2xl md:text-h3 font-display font-bold text-gold leading-none">Equipo</p>
            <p className="text-[11px] md:text-eyebrow text-white/60 uppercase font-bold mt-1.5 tracking-wider">Certificado por la ANSV</p>
          </div>
          
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <p className="text-2xl md:text-h3 font-display font-bold text-gold leading-none">+5 años</p>
            <p className="text-[11px] md:text-eyebrow text-white/60 uppercase font-bold mt-1.5 tracking-wider">formando conductores</p>
          </div>
          
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="flex gap-0.5 justify-center lg:justify-start py-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} strokeWidth={0} className={cn("w-4 h-4 md:w-5 md:h-5 transition-all duration-300", i < starCount ? "text-yellow-400 fill-yellow-400 scale-110" : "text-white/10 fill-white/10")} />
              ))}
            </div>
            <p className="text-[11px] md:text-eyebrow text-white/60 uppercase font-bold mt-1 tracking-wider">Recomendados</p>
          </div>
        </div>
      </div>
      
      {/* Scroll arrow on the left */}
      <div className="absolute bottom-6 left-8 z-30 animate-bounce opacity-50">
        <ChevronDown className="w-6 h-6 md:w-8 md:h-8 text-white" />
      </div>
    </section>
  );
};
