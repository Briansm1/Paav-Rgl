import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/app/lib/placeholder-images';
import { ShieldCheck, Award, Clock } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const services = [
  {
    title: 'Mentalidad de piloto',
    description: 'Aprendé a gestionar los nervios, eliminar los miedos y ganar confianza para tomar decisiones con mayor seguridad al volante.',
    imgId: 'mentalidad'
  },
  {
    title: 'Teoría y manejo preventivo',
    description: 'Conocé las normas de tránsito y aprendé a identificar riesgos antes de que se conviertan en un problema.',
    imgId: 'service-theory'
  },
  {
    title: 'Técnicas de conducción',
    description: 'Practicá el control del vehículo y las maniobras necesarias para conducir de manera segura y fluida.',
    imgId: 'tecnica'
  }
];

export const Services = () => {
  return (
    <section id="servicios" className="relative py-20 md:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16 md:mb-24 px-4">
          <span className="kicker kicker text-primary mb-6 inline-block bg-primary/10 px-4 py-1.5 rounded-full">
            NUESTRA METODOLOGÍA
          </span>
          <h2 className="text-h2 font-display text-foreground mb-6">
            Confianza, criterio y técnica <span className="text-primary">al volante</span>
          </h2>
          <p className="text-body-lg text-muted-foreground mx-auto max-w-[68ch]">
            Nuestra formación combina preparación emocional, conocimientos de tránsito y práctica para que avances de manera clara y progresiva.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-12">
            {services.map((service, index) => {
              const img = PlaceHolderImages.find(p => p.id === service.imgId) || PlaceHolderImages[0];
              return (
                <Card key={index} className="h-full relative overflow-hidden border-none bg-secondary shadow-xl rounded-[2.5rem] flex flex-col">
                  <div className="relative aspect-square overflow-hidden bg-black">
                    <Image src={img?.imageUrl || ''} alt={service.title} fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>
                  </div>
                  <CardHeader className="pt-8 px-6 text-center lg:text-left">
                    <CardTitle className="text-h3 font-sans font-semibold tracking-tight">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="px-6 pb-8 text-center lg:text-left flex-grow">
                    <p className="text-body text-muted-foreground max-w-[68ch]">{service.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        <div className="mt-24 md:mt-40 p-1 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 rounded-[2.5rem] overflow-hidden shadow-2xl mx-auto max-w-[1400px]">
          <div className="bg-secondary rounded-[2.4rem] p-8 md:p-12 lg:p-16">
            <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-12 lg:gap-16">
              <div className="text-center lg:text-left">
                <h3 className="text-h2 font-display leading-[1.1]">
                  Una formación <span className="text-primary">adaptada</span> a tu proceso
                </h3>
              </div>
              <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden shadow-2xl border border-white/5 bg-black">
                <video src="https://i.imgur.com/3YGoxMZ.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover" />
              </div>
              <div className="space-y-8">
                {[
                  { icon: <ShieldCheck className="w-6 h-6 text-primary" />, title: 'Práctica en situaciones reales:', text: 'Realizá tus clases en vehículos modernos y desarrollá experiencia en escenarios reales de conducción.' },
                  { icon: <Award className="w-6 h-6 text-primary" />, title: 'Acompañamiento paso a paso:', text: 'Nuestro equipo guía tu proceso para resolver dudas, mejorar tu técnica y avanzar con mayor seguridad.' },
                  { icon: <Clock className="w-6 h-6 text-primary" />, title: 'Clases según tu disponibilidad:', text: 'Organizamos un cronograma que se adapte a tus horarios, tanto si trabajás como si estudiás.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="shrink-0 bg-primary/10 p-2.5 rounded-xl">{item.icon}</div>
                    <div>
                      <p className="text-foreground font-semibold text-body leading-tight mb-1">{item.title}</p>
                      <p className="text-foreground/80 font-normal text-body max-w-[68ch]">{item.text}</p>
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
