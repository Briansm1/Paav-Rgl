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
      {/* Background with increased blur for better text readability */}
      <div className="absolute inset-0 z-0">
        <Image 
          src={heroImg?.imageUrl || ''} 
          alt={heroImg?.description || 'Autoescuela'} 
          fill 
          className="object-cover object-center blur-[10px] md:blur-[12px] scale-110 opacity-50" 
          priority 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/50 to-background z-10"></div>
      </div>

      {/* Content Container - Optimized for all devices */}
      <div className="w-full max-w-[1440px] mx-auto px-4 min-[375px]:px-6 lg:px-10 relative z-20 flex-1 flex flex-col justify-center pt-24 pb-8 md:pt-32 md:pb-12">
        <div className="w-full flex flex-col justify-center items-center md:items-start gap-6 min-[375px]:gap-8 md:gap-12">
          
          {/* Main content block */}
          <div className="w-full flex flex-col items-center text-center md:items-start md:text-left gap-6 md:gap-10">
            <div className="w-full space-y-6 md:space-y-8">
              {/* Header block with Title and Badge */}
              <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between gap-4 md:gap-8 w-full">
                <h1 className="text-[1.75rem] min-[375px]:text-4xl sm:text-5xl md:text-6xl lg:text-h1 font-display font-semibold text-white drop-shadow-2xl animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-100 leading-[1.1] text-balance text-center md:text-left flex-1 order-last md:order-first">
                  <span className="text-primary">Aprendé a conducir</span> con clases adaptadas a tu nivel
                </h1>
                
                <div className="shrink-0 px-4 py-2 md:px-6 md:py-3 text-[10px] min-[375px]:text-xs sm:text-sm md:text-eyebrow font-bold text-white uppercase tracking-[0.2em] bg-white/10 backdrop-blur-md border border-white/20 rounded-full animate-in fade-in slide-in-from-bottom-4 duration-700 whitespace-nowrap order-first md:order-last md:mt-4">
                  Autoescuela en Río Gallegos
                </div>
              </div>
              
              <p className="text-sm min-[375px]:text-base md:text-xl lg:text-body-lg text-white/90 max-w-[48ch] animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200 font-medium leading-relaxed mx-auto md:mx-0">
                Clases teóricas y prácticas para empezar desde cero, mejorar tu manejo o prepararte para el examen práctico.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300 w-full sm:w-auto">
              <Link href="#planes" className="w-full sm:w-auto">
                <Button size="lg" className="h-14 min-[375px]:h-16 md:h-20 px-8 min-[375px]:px-10 md:px-14 text-base min-[375px]:text-lg md:text-2xl bg-primary hover:bg-primary/90 rounded-full w-full font-bold transition-all active:scale-95 shadow-2xl shadow-primary/30 border-none">
                  <span className="inline-flex items-center min-w-[5rem] min-[375px]:min-w-[6rem] md:min-w-[7rem] justify-center">
                    {typedText}
                    <span className="ml-0.5 w-[2px] h-5 md:h-7 bg-white animate-pulse" />
                  </span>
                  <ChevronRight className="ml-1 w-5 h-5 md:w-8 md:h-8" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Trust Indicators - Forced inline on mobile and optimized gaps */}
          <div className="flex flex-row flex-nowrap items-center justify-center md:justify-start gap-x-2 min-[375px]:gap-x-4 min-[425px]:gap-x-8 sm:gap-x-12 md:gap-x-16 animate-in fade-in duration-1000 delay-500 w-full mt-4 md:mt-12 overflow-visible">
            <div className="flex flex-col items-center text-center md:items-start md:text-left shrink-0">
              <p className="text-[10px] min-[375px]:text-xs min-[425px]:text-sm sm:text-xl md:text-2xl lg:text-h3 font-display font-bold text-gold leading-none">Equipo</p>
              <p className="text-[6px] min-[375px]:text-[7px] min-[425px]:text-[8px] md:text-xs lg:text-eyebrow text-white/80 uppercase font-black mt-1 tracking-widest whitespace-nowrap">Certificado ANSV</p>
            </div>
            
            <div className="flex flex-col items-center text-center md:items-start md:text-left shrink-0">
              <p className="text-[10px] min-[375px]:text-xs min-[425px]:text-sm sm:text-xl md:text-2xl lg:text-h3 font-display font-bold text-gold leading-none">+5 años</p>
              <p className="text-[6px] min-[375px]:text-[7px] min-[425px]:text-[8px] md:text-xs lg:text-eyebrow text-white/80 uppercase font-black mt-1 tracking-widest whitespace-nowrap">formando pilotos</p>
            </div>
            
            <div className="flex flex-col items-center text-center md:items-start md:text-left shrink-0">
              <div className="flex gap-0.5 min-[375px]:gap-1 justify-center md:justify-start pb-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} strokeWidth={0} className={cn("w-2 h-2 min-[375px]:w-2.5 min-[375px]:h-2.5 min-[425px]:w-3 min-[425px]:h-3 sm:w-5 sm:h-5 md:w-6 md:h-6 transition-all duration-300", i < starCount ? "text-yellow-400 fill-yellow-400 scale-110" : "text-white/20 fill-white/20")} />
                ))}
              </div>
              <p className="text-[6px] min-[375px]:text-[7px] min-[425px]:text-[8px] md:text-xs lg:text-eyebrow text-white/80 uppercase font-black mt-0.5 tracking-widest whitespace-nowrap">Recomendados</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll arrow - Fixed at the left to avoid overlapping content */}
      <div className="absolute bottom-6 left-6 z-30 animate-bounce opacity-40 hidden sm:block">
        <ChevronDown className="w-6 h-6 text-white" />
      </div>
    </section>
  );
};