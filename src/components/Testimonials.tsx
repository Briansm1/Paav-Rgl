"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/app/lib/placeholder-images';
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

const testimonials = [
  {
    name: 'Daniela Rojas',
    content: 'Queríamos agradecerles por el acompañamiento en este proceso tan importante para nuestra hija: ayudarla a perder sus miedos, a creer en que podía lograrlo y, sobre todo, sentirse segura en cada movimiento. El esfuerzo de esta licencia es de ella, pero sin ayuda no hubiese sido posible. La paciencia y técnicas son increíbles, y las palabras de aliento ya son de otro nivel.',
    headerImageId: 'achievement-daniela',
    role: 'Egresada'
  },
  {
    name: 'Julia Geoia',
    content: '¡Hola! La verdad es que la academia es súper recomendable, tanto por la calidad de la enseñanza como por la atención. Pude superar mis miedos y también los conos jajaja. El profesor es un genio: tiene muchísima paciencia, es muy respetuoso y explica de manera clara y práctica.',
    role: 'Egresada'
  },
  {
    name: 'Candelaria Pereyra',
    content: '¡Holi! La verdad, súper conforme con las clases. Mi sorprendió haber aprendido un montón en poco tiempo y el hecho de que después practiqué con autos reales y no conos me dejó muy sorprendida. Brian es súper buena onda: explica re bien, es claro, paciente ante todo, súper seguro y divertido. ¡10/10!',
    headerImageId: 'achievement-candelaria',
    role: 'Egresada'
  },
  {
    name: 'Maria Silisque',
    content: '¡EXCELENTE DIEZ! Recomiendo, super responsable, respetuoso y con una paciencia de oro. Gracias!!',
    role: 'Egresada'
  },
  {
    name: 'Lautaro Ramirez',
    content: 'Muy recomendable la escuela de manejo. La mejor atención que recibí y todo excelente; pude concretar mi meta de recibir mi licencia de conducir gracias a las clases intensivas que me brindaron. El instructor es una persona muy paciente y profesional.',
    headerImageId: 'achievement-lautaro',
    role: 'Egresado'
  },
  {
    name: 'Javier Peña',
    content: '¡Hola! recomiendo, todo excelente y práctico, me sirvió un montón.',
    role: 'Egresado'
  },
  {
    name: 'Alejandra Merlo',
    content: 'Simplemente quería agradecer de corazón haberme cruzado con la academia. Era algo que me costaba un montón y que procrastiné mucho tiempo; gracias a la confianza, el apoyo y sobre todo la paciencia, pude lograrlo. ¡No se dan una idea de lo importante que esto es para mí!',
    headerImageId: 'achievement-alejandra',
    role: 'Egresada'
  },
  {
    name: 'Maura Rivero',
    content: 'Brian, excelente profe, gracias por la paciencia y dedicación.',
    role: 'Egresada'
  },
  {
    name: 'Damaris Peñaloza',
    content: 'Si se pudo 💪🏻, muchísimas gracias por el acompañamiento.',
    headerImageId: 'achievement-damaris',
    role: 'Egresada'
  }
];

export const Testimonials = () => {
  return (
    <section id="testimonios" className="relative py-20 md:py-32 overflow-hidden bg-background">
      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <div className="text-center mb-16 md:mb-20 px-4 max-w-4xl mx-auto">
          <span className="kicker text-accent mb-6 inline-block bg-accent/10 px-4 py-1.5 rounded-full">
            EXPERIENCIAS REALES
          </span>
          <h2 className="text-h2 font-display text-foreground text-center mb-6">
            Historias de quienes confiaron en <span className="text-primary">nosotros</span>
          </h2>
          <p className="text-body-lg text-muted-foreground max-w-[68ch] mx-auto">
            Personas que llegaron con dudas, nervios o poca experiencia y hoy cuentan cómo fue su proceso de aprendizaje.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((t, index) => {
              const headerImg = t.headerImageId ? PlaceHolderImages.find(p => p.id === t.headerImageId) : null;
              const hasContent = t.content && t.content.trim().length > 0;
              return (
                <Card key={index} className="h-full border-none shadow-xl rounded-[2.5rem] bg-card relative overflow-hidden flex flex-col group transition-all duration-300 hover:shadow-2xl">
                  {headerImg && (
                    <div className={cn("relative w-full overflow-hidden border-b border-white/5 bg-black/20", hasContent ? "aspect-[16/10]" : "aspect-[4/5]")}>
                      <Image src={headerImg.imageUrl} alt={t.name} fill className="transition-transform duration-500 group-hover:scale-105 object-cover" />
                    </div>
                  )}
                  <CardContent className={cn("p-8 flex flex-col relative", hasContent ? "flex-grow" : "absolute bottom-0 left-0 right-0 z-20 text-white")}>
                    {hasContent && (
                      <div className="mb-6">
                        <div className="flex gap-0.5 mb-4">
                          {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />)}
                        </div>
                        <p className="text-body text-muted-foreground italic leading-[1.65] max-w-[68ch]">
                          "{t.content}"
                        </p>
                      </div>
                    )}
                    <div className="pt-6 border-t border-white/5">
                      <p className="font-semibold text-body-lg text-foreground">{t.name}</p>
                      <p className="text-eyebrow font-bold text-primary uppercase mt-1">EGRESADA PILOT'S</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
