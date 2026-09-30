
"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ChevronRight, Star, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export const Hero = () => {
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
      {/* Background Image & Cinematic Effects */}
      <div className="absolute inset-0 z-0 overflow-hidden flex items-center justify-center pointer-events-none">
        {/* Hero Background Image - Shifted down and focused on the sign (70%) on mobile, centered on desktop */}
        <div className="relative w-full h-full flex items-center justify-center translate-y-6 sm:translate-y-10 md:translate-y-14">
          <Image
            src="https://i.imgur.com/VtSts0f.png"
            alt="Pilotos Ases al Volante"
            fill
            priority
            className="object-cover object-[70%_18%] sm:object-[65%_18%] md:object-[center_18%] scale-[0.86] sm:scale-[0.88] md:scale-[0.84] lg:scale-[0.80] origin-top md:origin-center animate-kenburns transition-all duration-700"
            style={{ opacity: 0.85 }}
            sizes="100vw"
          />
        </div>
        
        {/* Dot Matrix Pattern Overlay (Hi-Tech & Compression masking) */}
        <div className="absolute inset-0 z-10 dot-pattern opacity-40 pointer-events-none mix-blend-overlay" />
        
        {/* Ambient Radial Glow for Depth */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-primary/20 rounded-full blur-[140px] pointer-events-none z-10" />
        
        {/* Multi-stage Gradient Mask & Vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-background z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-radial-vignette opacity-70 z-10 pointer-events-none" />
      </div>


      {/* Content Container - Balanced mobile spacing, larger readable typography, clean padding */}
      <div className="w-full max-w-[1440px] mx-auto px-4 min-[375px]:px-6 lg:px-10 relative z-20 flex-1 flex flex-col justify-between pt-20 min-[375px]:pt-24 md:pt-24 pb-6 min-[375px]:pb-8 md:pb-8">
        <div className="w-full flex flex-col justify-between items-center md:items-start gap-6 min-[375px]:gap-8 md:gap-8 flex-1">
          
          {/* Main content block - evenly distributed without crowding */}
          <div className="w-full flex flex-col items-center text-center md:items-start md:text-left gap-6 min-[375px]:gap-7 md:gap-8 flex-1 justify-center">
            <div className="w-full space-y-3 min-[375px]:space-y-4 md:space-y-6">
              {/* Header block with Title and Badge */}
              <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between gap-3 min-[375px]:gap-4 md:gap-6 w-full">
                <h1 className="text-3xl min-[375px]:text-[2.1rem] min-[420px]:text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-display font-semibold text-white drop-shadow-2xl animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-100 leading-[1.14] text-balance text-center md:text-left flex-1 order-last md:order-first">
                  <span className="text-primary">Aprendé</span> a manejar y a <span className="text-primary">dominar</span> las emociones
                </h1>
                
                <div className="shrink-0 px-3.5 py-1.5 min-[375px]:px-4 min-[375px]:py-2 md:px-5 md:py-2 text-[11px] min-[375px]:text-xs sm:text-sm font-bold text-white uppercase tracking-[0.2em] bg-white/10 backdrop-blur-md border border-white/20 rounded-full animate-in fade-in slide-in-from-bottom-4 duration-700 whitespace-nowrap order-first md:order-last md:mt-2 shadow-lg">
                  Autoescuela en Río Gallegos
                </div>
              </div>
              
              <p className="text-sm min-[375px]:text-[0.98rem] min-[420px]:text-base md:text-lg lg:text-xl text-white md:text-white/90 font-medium leading-relaxed max-w-[50ch] animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200 mx-auto md:mx-0 drop-shadow-[0_2px_10px_rgba(0,0,0,1)]">
                Clases prácticas + habilidades clave para superar los nervios, ganar confianza y prepararte para el examen práctico.<br className="hidden sm:block" />
                <span className="block mt-2 text-white/95 md:text-white/70 font-semibold md:font-normal drop-shadow-[0_2px_6px_rgba(0,0,0,1)]">Para personas con o sin experiencia.</span>
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300 w-full sm:w-auto pt-1 sm:pt-0">
              <Link href="#planes" className="w-full sm:w-auto">
                <Button size="lg" className="h-13 min-[375px]:h-14 px-8 min-[375px]:px-10 text-base min-[375px]:text-lg bg-primary hover:bg-primary/90 rounded-full w-full sm:w-auto font-bold transition-all active:scale-95 shadow-2xl shadow-primary/40 border-none">
                  <span className="inline-flex items-center min-w-[6rem] justify-center">
                    {typedText}
                    <span className="ml-0.5 w-[2px] h-5 bg-white animate-pulse" />
                  </span>
                  <ChevronRight className="ml-1 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Trust Indicators - Contained within boundaries, no overflow, auto-wrapping on narrow screens */}
          <div className="w-full max-w-full grid grid-cols-3 gap-1.5 min-[375px]:gap-2 sm:flex sm:flex-row sm:items-center sm:justify-center md:justify-start sm:gap-x-10 md:gap-x-16 animate-in fade-in duration-1000 delay-500 z-20 pt-2 sm:pt-4 md:pt-0 mb-2 sm:mb-4 md:mb-6 border-t border-white/10 sm:border-none">
            <div className="flex flex-col items-center justify-center text-center md:items-start md:text-left min-w-0 px-1">
              <p className="text-xs min-[360px]:text-sm min-[390px]:text-base sm:text-lg md:text-2xl font-display font-bold text-gold leading-none">Equipo</p>
              <p className="text-[8px] min-[360px]:text-[9px] min-[390px]:text-[10px] md:text-xs text-white/85 uppercase font-bold mt-1 tracking-tight sm:tracking-wider leading-tight text-center md:text-left">Certificado ANSV</p>
            </div>
            
            <div className="flex flex-col items-center justify-center text-center md:items-start md:text-left min-w-0 px-1">
              <p className="text-xs min-[360px]:text-sm min-[390px]:text-base sm:text-lg md:text-2xl font-display font-bold text-gold leading-none">+5 años</p>
              <p className="text-[8px] min-[360px]:text-[9px] min-[390px]:text-[10px] md:text-xs text-white/85 uppercase font-bold mt-1 tracking-tight sm:tracking-wider leading-tight text-center md:text-left">formando pilotos</p>
            </div>
            
            <div className="flex flex-col items-center justify-center text-center md:items-start md:text-left min-w-0 px-1">
              <div className="flex gap-0.5 justify-center md:justify-start pb-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} strokeWidth={0} className={cn("w-2.5 h-2.5 min-[360px]:w-3 min-[390px]:w-3.5 sm:w-5 sm:h-5 md:w-6 md:h-6 transition-all duration-300", i < starCount ? "text-yellow-400 fill-yellow-400 scale-110" : "text-white/20 fill-white/20")} />
                ))}
              </div>
              <p className="text-[8px] min-[360px]:text-[9px] min-[390px]:text-[10px] md:text-xs text-white/85 uppercase font-bold mt-1 tracking-tight sm:tracking-wider leading-tight text-center md:text-left">Recomendados</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll arrow */}
      <div className="absolute bottom-4 left-6 z-30 animate-bounce opacity-40 hidden md:block">
        <ChevronDown className="w-5 h-5 text-white" />
      </div>
    </section>
  );
};
