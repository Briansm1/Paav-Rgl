"use client";

import React from 'react';
import Image from 'next/image';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/app/lib/placeholder-images';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Carlos Mendoza',
    role: 'Alumno Graduado',
    content: 'Increíble experiencia. Los instructores tienen mucha paciencia y las clases teóricas son muy dinámicas. Aprobé mi examen a la primera.',
    imgId: 'student-1'
  },
  {
    name: 'Sofía Rodríguez',
    role: 'Alumna Graduada',
    content: 'Tenía mucho miedo al tráfico, pero gracias a Ruta Segura ahora manejo con total confianza por toda la ciudad. ¡Altamente recomendados!',
    imgId: 'student-2'
  },
  {
    name: 'Juan Pablo Duarte',
    role: 'Curso Intensivo',
    content: 'El servicio es de primera. Los vehículos están impecables y te dan todas las herramientas para ser un conductor responsable.',
    imgId: 'student-3'
  }
];

export const Testimonials = () => {
  return (
    <section id="testimonios" className="py-16 md:py-24 bg-secondary overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-accent font-bold tracking-widest uppercase text-xs md:text-sm mb-4">Lo que dicen de nosotros</h2>
          <h3 className="text-3xl md:text-5xl font-bold font-headline text-foreground">Testimonios de Éxito</h3>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-12">
          <Carousel 
            opts={{ 
              align: "start", 
              loop: true 
            }} 
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((t, index) => {
                const img = PlaceHolderImages.find(p => p.id === t.imgId);
                return (
                  <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                    <Card className="h-full border-none shadow-xl rounded-3xl m-1 hover:shadow-2xl transition-shadow duration-300 bg-card">
                      <CardContent className="p-8 flex flex-col h-full">
                        <Quote className="w-10 h-10 text-primary/15 mb-6 shrink-0" />
                        <p className="text-base md:text-lg italic text-muted-foreground mb-8 flex-grow leading-relaxed">
                          "{t.content}"
                        </p>
                        <div className="flex items-center gap-4 mt-auto">
                          <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-primary/30 p-0.5">
                            <div className="relative w-full h-full rounded-full overflow-hidden">
                              <Image 
                                src={img?.imageUrl || ''} 
                                alt={t.name} 
                                fill 
                                className="object-cover"
                                data-ai-hint={img?.imageHint}
                              />
                            </div>
                          </div>
                          <div>
                            <p className="font-bold text-foreground text-lg">{t.name}</p>
                            <p className="text-sm text-primary font-semibold">{t.role}</p>
                            <div className="flex gap-0.5 mt-1.5">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            
            <div className="hidden sm:block">
              <CarouselPrevious className="-left-12 h-12 w-12 bg-card text-primary border-white/10 hover:bg-primary hover:text-white transition-all shadow-md" />
              <CarouselNext className="-right-12 h-12 w-12 bg-card text-primary border-white/10 hover:bg-primary hover:text-white transition-all shadow-md" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};