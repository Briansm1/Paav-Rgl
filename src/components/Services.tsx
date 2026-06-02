
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
    description: 'Trabajamos la gestión de tus emociones al volante para que logres superar los miedos y conduzcas con total seguridad y confianza.',
    icon: <Brain className="w-10 h-10 text-primary" />,
    imgId: 'mentalidad'
  },
  {
    title: 'Teoría basada en el marco legal y al tráfico real',
    description: 'Profundizamos en las normas de tránsito y el manejo preventivo para que logres anticiparte al entorno y tomes decisiones inteligentes en la calle.',
    icon: <BookOpen className="w-10 h-10 text-primary" />,
    imgId: 'service-theory'
  },
  {
    title: 'Técnica profesional aplicable',
    description: 'Desarrollamos tus habilidades mediante una práctica estructurada para que logres el dominio total del vehículo y conviertas el manejo en algo natural y fluido.',
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
            ¿Qué te brindamos?
          </span>
          <h2 className="text-4xl md:text-6xl font-bold font-headline mb-6 tracking-tight text-foreground">
            Conducir es <span className="text-primary italic">más que solo manejar</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Revolucionamos la enseñanza vial combinando conocimiento de vanguardia con <span className="text-primary font-bold">nuestra metodología exclusiva</span> de 3 pilares: <span className="text-primary font-bold">mentalidad</span> para darte confianza, <span className="text-primary font-bold">teoría</span> para un aprendizaje sólido, y <span className="text-primary font-bold">tecnica</span> para el dominio total del vehículo
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

        <div className="mt-24 md:mt-40 p-1 md:p-2 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 rounded-[2.5rem] overflow-hidden shadow-2xl mx-auto max-w-6xl">
          <div className="bg-secondary rounded-[2.4rem] p-8 md:p-16 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="lg:w-1/2 w-full text-center lg:text-left">
              <h3 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight">
                ¿Por qué somos los más elegidos?
              </h3>
              <div className="grid grid-cols-1 gap-8">
                {[
                  { icon: <ShieldCheck className="w-6 h-6 text-primary" />, text: 'Aprendizaje en un entorno real: Practica en vehículos modernos, seguros y con el máximo confort.' },
                  { icon: <Award className="w-6 h-6 text-primary" />, text: 'Guía profesional y experta: Nuestro equipo certificado te acompaña paso a paso, brindándote la tranquilidad y técnica que necesitas para dominar el volante.' },
                  { icon: <Clock className="w-6 h-6 text-primary" />, text: 'A tu propia medida: ¿Trabajas o estudias? No hay problema. Armamos un cronograma de clases que se adapte a tus tiempos.' }
                ].map((item, i) => (
                  <div key={i} className="flex flex-col sm:flex-row items-center lg:items-start gap-5">
                    <div className="shrink-0 mt-1 bg-primary/10 p-3 rounded-2xl shadow-inner">
                      {item.icon}
                    </div>
                    <p className="text-foreground/80 font-medium text-lg md:text-xl leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 w-full relative h-[300px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <video 
                src="https://i.imgur.com/3YGoxMZ.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
