"use client";

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { PlaceHolderImages } from '@/app/lib/placeholder-images';
import { 
  ChevronLeft, 
  ChevronRight, 
  Play 
} from 'lucide-react';

export const Gallery = () => {
  const videoList = PlaceHolderImages.filter(img => img.id.startsWith('gallery-video-'));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const mainVideoRef = useRef<HTMLVideoElement | null>(null);
  const DURATION_PER_VIDEO = 6500; // 6.5 segundos por video

  const nextVideo = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % videoList.length);
    setProgress(0);
  }, [videoList.length]);

  const prevVideo = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + videoList.length) % videoList.length);
    setProgress(0);
  }, [videoList.length]);

  const goToVideo = (index: number) => {
    setCurrentIndex(index);
    setProgress(0);
    setIsPlaying(true);
  };

  // Soporte para gestos de deslizamiento táctil en móviles (Swipe)
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;
    if (diff > 45) {
      nextVideo();
    } else if (diff < -45) {
      prevVideo();
    }
    setTouchStartX(null);
  };

  // Timer para la transición automática de turno
  useEffect(() => {
    if (!isPlaying) return;

    const intervalTime = 50;
    const increment = (intervalTime / DURATION_PER_VIDEO) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          nextVideo();
          return 0;
        }
        return prev + increment;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [isPlaying, nextVideo]);

  // Manejo de reproducción fluida al cambiar de video
  useEffect(() => {
    if (mainVideoRef.current) {
      mainVideoRef.current.currentTime = 0;
      if (isPlaying) {
        mainVideoRef.current.play().catch(() => {});
      }
    }
  }, [currentIndex, isPlaying]);

  const togglePlay = () => {
    if (mainVideoRef.current) {
      if (isPlaying) {
        mainVideoRef.current.pause();
      } else {
        mainVideoRef.current.play().catch(() => {});
      }
    }
    setIsPlaying(!isPlaying);
  };

  // Helper para obtener índices relativos en el collage
  const getRelativeIndex = (offset: number) => {
    return (currentIndex + offset + videoList.length) % videoList.length;
  };

  const currentMedia = videoList[currentIndex];
  const prevMedia1 = videoList[getRelativeIndex(-1)];
  const prevMedia2 = videoList[getRelativeIndex(-2)];
  const nextMedia1 = videoList[getRelativeIndex(1)];
  const nextMedia2 = videoList[getRelativeIndex(2)];

  return (
    <section id="galeria" className="relative py-14 sm:py-20 md:py-28 bg-background overflow-hidden">
      {/* Contenedor principal */}
      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          
          {/* Encabezado */}
          <div className="mb-8 sm:mb-12 text-center">
            <span className="kicker text-primary mb-3 inline-block bg-primary/10 border border-primary/20 px-4 py-1.5 rounded-full font-sans text-xs sm:text-sm font-bold uppercase tracking-wider">
              MOMENTOS AL VOLANTE
            </span>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white font-display mb-3 tracking-tight">
              Así vivimos cada <span className="text-primary">clase práctica</span>
            </h2>
            <p className="text-xs sm:text-base text-slate-300 max-w-[65ch] mx-auto font-sans leading-relaxed">
              Videos reales de nuestros alumnos dominando el vehículo en Río Gallegos. Experiencia 100% práctica y dinámica.
            </p>
          </div>

          {/* Collage Circular & Escenario de Video 3D (Optimizado para Mobile y Desktop) */}
          <div 
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            className="relative w-full max-w-5xl h-[440px] sm:h-[500px] md:h-[560px] flex items-center justify-center select-none"
          >
            
            {/* Video Secundario - Lejano Izquierda (-2) en pantallas grandes */}
            <div 
              onClick={() => goToVideo(getRelativeIndex(-2))}
              className="hidden lg:flex absolute -left-8 xl:-left-12 top-1/2 -translate-y-1/2 w-40 xl:w-44 aspect-[9/16] rounded-3xl border border-white/15 bg-zinc-900 overflow-hidden cursor-pointer opacity-25 -rotate-12 scale-75 transition-all duration-700 hover:opacity-60 hover:scale-80 z-0 transform-gpu"
              title="Ver video anterior"
            >
              <video
                src={prevMedia2?.imageUrl}
                muted
                playsInline
                preload="metadata"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Video Secundario - Izquierda (-1) */}
            <div 
              onClick={() => goToVideo(getRelativeIndex(-1))}
              className="absolute left-[-10%] sm:left-4 md:left-12 lg:left-20 top-1/2 -translate-y-1/2 w-[48vw] max-w-[200px] sm:max-w-[220px] md:max-w-[240px] aspect-[9/16] rounded-2xl sm:rounded-3xl border border-white/20 bg-zinc-900 overflow-hidden cursor-pointer opacity-40 sm:opacity-55 -rotate-6 scale-80 sm:scale-85 transition-all duration-500 hover:opacity-90 hover:scale-90 z-10 transform-gpu"
              title="Click para ver este video"
            >
              <video
                src={prevMedia1?.imageUrl}
                muted
                playsInline
                preload="metadata"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Video Secundario - Lejano Derecha (+2) en pantallas grandes */}
            <div 
              onClick={() => goToVideo(getRelativeIndex(2))}
              className="hidden lg:flex absolute -right-8 xl:-right-12 top-1/2 -translate-y-1/2 w-40 xl:w-44 aspect-[9/16] rounded-3xl border border-white/15 bg-zinc-900 overflow-hidden cursor-pointer opacity-25 rotate-12 scale-75 transition-all duration-700 hover:opacity-60 hover:scale-80 z-0 transform-gpu"
              title="Ver siguiente video"
            >
              <video
                src={nextMedia2?.imageUrl}
                muted
                playsInline
                preload="metadata"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Video Secundario - Derecha (+1) */}
            <div 
              onClick={() => goToVideo(getRelativeIndex(1))}
              className="absolute right-[-10%] sm:right-4 md:right-12 lg:right-20 top-1/2 -translate-y-1/2 w-[48vw] max-w-[200px] sm:max-w-[220px] md:max-w-[240px] aspect-[9/16] rounded-2xl sm:rounded-3xl border border-white/20 bg-zinc-900 overflow-hidden cursor-pointer opacity-40 sm:opacity-55 rotate-6 scale-80 sm:scale-85 transition-all duration-500 hover:opacity-90 hover:scale-90 z-10 transform-gpu"
              title="Click para ver este video"
            >
              <video
                src={nextMedia1?.imageUrl}
                muted
                playsInline
                preload="metadata"
                className="w-full h-full object-cover"
              />
            </div>

            {/* VIDEO PRINCIPAL (CENTRO / PRIMER PLANO) */}
            <div className="relative z-20 w-[68vw] max-w-[270px] sm:max-w-[300px] md:max-w-[320px] aspect-[9/16] rounded-[2rem] sm:rounded-[2.2rem] border-2 border-primary bg-zinc-950 overflow-hidden transition-all duration-500 transform-gpu shadow-none">
              {/* Video Tag con aceleración por hardware */}
              <video
                ref={mainVideoRef}
                src={currentMedia?.imageUrl}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="w-full h-full object-cover will-change-transform"
              />

              {/* Punto pulsante indicador */}
              <div className="absolute top-3 left-3 sm:top-3.5 sm:left-3.5 z-30 flex items-center justify-center p-1.5 sm:p-2 rounded-full bg-black/60 backdrop-blur-md border border-white/20">
                <span className="relative flex h-2 sm:h-2.5 w-2 sm:w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 sm:h-2.5 w-2 sm:w-2.5 bg-emerald-500"></span>
                </span>
              </div>

              {/* Barra de progreso de turno del video */}
              <div className="absolute bottom-0 left-0 right-0 h-1 sm:h-1.5 bg-white/20 z-30">
                <div 
                  className="h-full bg-primary transition-all duration-75 ease-linear"
                  style={{ width: `${progress}%` }}
                />
              </div>

              {/* Botón flotante central de Play/Pause en caso de pausa */}
              {!isPlaying && (
                <div 
                  onClick={togglePlay}
                  className="absolute inset-0 z-30 flex items-center justify-center bg-black/30 backdrop-blur-[2px] cursor-pointer"
                >
                  <div className="p-3.5 sm:p-4 rounded-full bg-primary text-white shadow-lg transform transition-transform hover:scale-110">
                    <Play className="w-6 h-6 sm:w-8 sm:h-8 ml-0.5 fill-white" />
                  </div>
                </div>
              )}
            </div>

            {/* Flecha Izquierda (Anterior) */}
            <button
              onClick={prevVideo}
              className="absolute left-2 sm:left-6 md:left-10 z-30 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-zinc-900/90 hover:bg-primary active:bg-primary text-white border border-white/25 flex items-center justify-center transition-all transform hover:scale-110 active:scale-95 cursor-pointer"
              aria-label="Video anterior"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Flecha Derecha (Siguiente) */}
            <button
              onClick={nextVideo}
              className="absolute right-2 sm:right-6 md:right-10 z-30 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-zinc-900/90 hover:bg-primary active:bg-primary text-white border border-white/25 flex items-center justify-center transition-all transform hover:scale-110 active:scale-95 cursor-pointer"
              aria-label="Siguiente video"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};



