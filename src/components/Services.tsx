import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/app/lib/placeholder-images';
import { BookOpen, Award, ShieldCheck, Brain, Clock } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const SteeringWheel = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="2.5" />
    <path d="M12 14.5v5.5" />
    <path d="M9.5 10.5l-5-2.5" />
    <path d="M14.5 10.5l5-2.5" />
  </svg>
);

const services = [
  {
    title: 'Mentalidad de piloto',
    description: 'Aprendé a gestionar los nervios, eliminar los miedos y ganar confianza para tomar decisiones con mayor seguridad al volante.',
    icon: <Brain className="w-10 h-10 text-primary" />,
    imgId: 'mentalidad'
  },
  {
    title: 'Teoría y manejo preventivo',
    description: 'Conocé las normas de tránsito y aprendé a identificar riesgos antes de que se conviertan en un problema.',
    icon: <BookOpen className="w-10 h-10 text-primary" />,
    imgId: 'service-theory'
  },
  {
    title: 'Técnica de conducción',
    description: 'Practicá el control del vehículo y las maniobras necesarias para conducir de manera segura y fluida.',
    icon: <SteeringWheel className="w-10 h-10 text-primary" />,
    imgId: 'tecnica'
  }
];

export const Services = () => {
  return (
    <section id="servicios" className="relative py-20 md:py-32 bg-background overflow-hidden">
      {/* Top and Bottom transitions */}
      <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-background via-background/50 to-transparent pointer-events-none z-10"></div>
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background via-background/50 to-transparent pointer-events-none z-10"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16 md:mb-24 px-4">
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-primary uppercase bg-primary/10 rounded-full">
            NUESTRA METODOLOGÍA
          </span>
          <h2 className="text-4xl md:text-6xl font-bold font-headline mb-6 tracking-tight text-foreground">
            Confianza, criterio y técnica <span className="text-primary italic">al volante</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Nuestra formación combina preparación emocional, conocimientos de tránsito y práctica para que avances de manera clara y progresiva.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: false,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4 md:-ml-8 lg:-ml-12 flex lg:justify-center">
              {services.map((service, index) => {
                const img = PlaceHolderImages.find(p => p.id === service.imgId) || PlaceHolderImages[0];
                return (
                  <CarouselItem key={index} className="pl-4 md:pl-8 lg:pl-12 basis-[85%] sm:basis-1/2 lg:basis-1/3 py-4">
                    <Card className="h-full relative overflow-hidden border-none bg-secondary shadow-xl rounded-[2.5rem]">
                      <div className="relative aspect-square overflow-hidden bg-black">
                        <Image 
                          src={img?.imageUrl || ''} 
                          alt={service.title} 
                          fill 
                          priority={index < 3}
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover"
                          data-ai-hint={img?.imageHint}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>
                        <div className="absolute bottom-6 left-6 text-white">
                          {service.icon}
                        </div>
                      </div>
                      <CardHeader className="pt-8 px-6 text-center lg:text-left">
                        <CardTitle className="text-xl md:text-2xl font-bold">{service.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="px-6 pb-8 text-center lg:text-left">
                        <p className="text-muted-foreground text-sm md:text-base leading-relaxed">{service.description}</p>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            
            <div className="md:hidden text-center mt-6 text-[10px] text-muted-foreground uppercase tracking-[0.2em] font-black animate-pulse">
              Desliza para ver nuestros pilares →
            </div>
          </Carousel>
        </div>

        <div className="mt-24 md:mt-40 p-1 md:p-2 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 rounded-[2.5rem] overflow-hidden shadow-2xl mx-auto max-w-[1400px]">
          <div className="bg-secondary rounded-[2.4rem] p-8 md:p-12 lg:p-16">
            <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-12 lg:gap-16">
              {/* Columna 1: Título */}
              <div className="text-center lg:text-left">
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1]">
                  Una formación <span className="text-primary italic">adaptada</span> a tu proceso
                </h3>
              </div>

              {/* Columna 2: Video */}
              <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden shadow-2xl border border-white/5 bg-black">
                <video 
                  src="https://i.imgur.com/3YGoxMZ.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="none"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Columna 3: Incisos/Beneficios */}
              <div className="space-y-8">
                {[
                  { 
                    icon: <ShieldCheck className="w-6 h-6 text-primary" />, 
                    title: 'Práctica en situaciones reales:',
                    text: 'Realizá tus clases en vehículos modernos y desarrollá experiencia en escenarios reales de conducción.' 
                  },
                  { 
                    icon: <Award className="w-6 h-6 text-primary" />, 
                    title: 'Acompañamiento paso a paso:',
                    text: 'Nuestro equipo certificado te guía durante cada clase para resolver tus dudas, mejorar tu técnica y avanzar con mayor seguridad.' 
                  },
                  { 
                    icon: <Clock className="w-6 h-6 text-primary" />, 
                    title: 'Clases según tu disponibilidad:',
                    text: 'Organizamos un cronograma que se adapte a tus horarios, tanto si trabajás como si estudiás.' 
                  }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="shrink-0 bg-primary/10 p-2.5 rounded-xl shadow-inner">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-foreground font-bold text-sm md:text-base leading-tight mb-1">{item.title}</p>
                      <p className="text-foreground/80 font-medium text-sm md:text-base leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};