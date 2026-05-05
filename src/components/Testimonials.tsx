
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
    <section id="testimonios" className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-accent font-bold tracking-widest uppercase text-sm mb-4">Lo que dicen de nosotros</h2>
          <h3 className="text-4xl font-bold font-headline text-foreground">Testimonios de Éxito</h3>
        </div>

        <div className="relative max-w-5xl mx-auto px-12">
          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            <CarouselContent>
              {testimonials.map((t, index) => {
                const img = PlaceHolderImages.find(p => p.id === t.imgId);
                return (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                    <Card className="h-full border-none shadow-lg m-2">
                      <CardContent className="p-8">
                        <Quote className="w-10 h-10 text-primary/20 mb-4" />
                        <p className="text-lg italic text-muted-foreground mb-6">"{t.content}"</p>
                        <div className="flex items-center gap-4">
                          <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-primary">
                            <Image 
                              src={img?.imageUrl || ''} 
                              alt={t.name} 
                              fill 
                              className="object-cover"
                              data-ai-hint={img?.imageHint}
                            />
                          </div>
                          <div>
                            <p className="font-bold text-foreground">{t.name}</p>
                            <p className="text-sm text-primary font-medium">{t.role}</p>
                            <div className="flex gap-0.5 mt-1">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-3 h-3 text-yellow-500 fill-yellow-500" />
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
            <CarouselPrevious className="-left-4 bg-primary text-white hover:bg-primary/90" />
            <CarouselNext className="-right-4 bg-primary text-white hover:bg-primary/90" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};
