
import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/app/lib/placeholder-images';
import { ChevronRight, Star } from 'lucide-react';

export const Hero = () => {
  const heroImg = PlaceHolderImages.find(img => img.id === 'hero-bg');

  return (
    <section id="inicio" className="relative h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImg?.imageUrl || ''}
          alt={heroImg?.description || 'Driving school background'}
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImg?.imageHint}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-1 mb-6">
            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            <span className="text-sm font-semibold text-foreground">La academia #1 de la región</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold font-headline leading-tight mb-6 text-foreground">
            Tu camino hacia la <span className="text-primary">Libertad</span> comienza aquí.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            En Ruta Segura, no solo te enseñamos a manejar; te preparamos para ser un conductor responsable, seguro y con total confianza en las calles.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="h-14 px-8 text-lg bg-primary hover:bg-primary/90 rounded-full">
              Empezar Cursos
              <ChevronRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full border-primary text-primary hover:bg-primary/5">
              Nuestros Planes
            </Button>
          </div>
          
          <div className="mt-12 flex items-center gap-8">
            <div>
              <p className="text-3xl font-bold text-foreground">10k+</p>
              <p className="text-sm text-muted-foreground">Alumnos Graduados</p>
            </div>
            <div className="w-px h-10 bg-border"></div>
            <div>
              <p className="text-3xl font-bold text-foreground">98%</p>
              <p className="text-sm text-muted-foreground">Aprobación Primera Vez</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
