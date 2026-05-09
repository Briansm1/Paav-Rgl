
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
    name: 'Julia Geoia',
    role: 'Alumna Graduada',
    content: '¡Hola! La verdad es que la academia es súper recomendable, tanto por la calidad de la enseñanza como por la atención. Pude superar mis miedos y también los conos jajaja. El profesor es un genio: tiene muchísima paciencia, es muy respetuoso y explica de manera clara y práctica. La academia es muy completa; brindan material teórico y práctico. Fue una excelente experiencia. ¡Millones de gracias!',
    imgId: 'student-1'
  },
  {
    name: 'Lautaro Ramirez',
    role: 'Licencia Obtenida',
    content: 'Muy recomendable la escuela de manejo. La mejor atención que recibí y muy excelente todo, pude concretar mi meta de recibir mi licencia de conducir gracias a las clases intensivas que me brindaron. El instructor una persona muy paciente y profesional, dando indicaciones claras. Excelente academia brindándome material teórico y práctico para adquirir mucho más conocimiento.',
    imgId: 'student-2'
  },
  {
    name: 'Maria Silisque',
    role: 'Alumna Graduada',
    content: '¡EXCELENTE DIEZ! Recomiendo, súper responsable, respetuoso y con una paciencia de oro. ¡¡Gracias!!',
    imgId: 'student-3'
  },
  {
    name: 'Javier Peña',
    role: 'Alumno Graduado',
    content: 'Hola! Recomiendo, todo excelente y práctico, me sirvió un montón.',
    imgId: 'student-4'
  },
  {
    name: 'Alejandra Merlo',
    role: 'Alumna Graduada',
    content: 'Simplemente quería agradecer de corazón haberme cruzado con la academia. Era algo que me costaba un montón y que procrastiné mucho tiempo. Gracias a la confianza, el apoyo y educación y sobre todo la PACIENCIA y empatía recibida pude lograrlo. No se dan una idea lo importante que esto es para mí.',
    imgId: 'student-5'
  },
  {
    name: 'Daniela Rojas',
    role: 'Familia Pilotos',
    content: 'Queríamos agradecerles por el acompañamiento en este proceso tan importante para nuestra hija, ayudarla a perder sus miedos, a creer en que podía lograrlo y sobre todo sentirse segura en cada movimiento. La paciencia y técnicas son increíbles y las palabras de aliento ya son de otro nivel. Muchísimas gracias Brian.',
    imgId: 'student-6'
  },
  {
    name: 'Maura Rivero',
    role: 'Alumna Graduada',
    content: 'Brian, excelente profe, gracias por la paciencia y dedicación.',
    imgId: 'student-7'
  },
  {
    name: 'Oscar Benítez',
    role: 'Familia Pilotos',
    content: 'Excelente, quiero agradecer al instructor de manejo por su profesionalismo, paciencia y compromiso en la formación de mi hija para obtener su licencia profesional. No solo enseña a conducir, enseña responsabilidad y seguridad. ¡Gracias por acompañarla en este paso tan importante!',
    imgId: 'student-8'
  }
];

export const Testimonials = () => {
  return (
    <section id="testimonios" className="py-20 md:py-32 bg-secondary overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 md:mb-20">
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-accent uppercase bg-accent/10 rounded-full border border-accent/20">
            Lo que dicen de nosotros
          </span>
          <h3 className="text-4xl md:text-6xl font-bold font-headline text-foreground tracking-tight">
            Algunos casos de <span className="text-primary italic">éxito</span>
          </h3>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 md:px-12">
          <Carousel 
            opts={{ 
              align: "start", 
              loop: true,
              dragFree: true
            }} 
            className="w-full relative group"
          >
            <CarouselContent className="-ml-4 md:-ml-6">
              {testimonials.map((t, index) => {
                const img = PlaceHolderImages.find(p => p.id === t.imgId);
                return (
                  <CarouselItem key={index} className="pl-4 md:pl-6 basis-full sm:basis-1/2 lg:basis-1/3 py-4">
                    <Card className="h-full border-none shadow-xl rounded-[2.5rem] transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 group bg-card border border-white/5">
                      <CardContent className="p-8 md:p-10 flex flex-col h-full relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                          <Quote className="w-16 h-16 text-primary rotate-180" />
                        </div>
                        
                        <div className="flex gap-1 mb-6">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                          ))}
                        </div>

                        <p className="text-base md:text-lg italic text-muted-foreground mb-10 flex-grow leading-relaxed relative z-10">
                          "{t.content}"
                        </p>

                        <div className="flex items-center gap-5 mt-auto border-t border-white/5 pt-6">
                          <div className="relative w-14 h-14 rounded-2xl overflow-hidden border-2 border-primary/20 p-0.5 group-hover:border-primary/50 transition-colors">
                            <div className="relative w-full h-full rounded-[0.8rem] overflow-hidden">
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
                            <p className="font-bold text-foreground text-lg tracking-tight">{t.name}</p>
                            <p className="text-sm text-primary font-bold uppercase tracking-wider">{t.role}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            
            <CarouselPrevious className="hidden md:flex -left-4 lg:-left-16 h-14 w-14 bg-card text-primary border-white/10 hover:bg-primary hover:text-white transition-all shadow-xl rounded-2xl" />
            <CarouselNext className="hidden md:flex -right-4 lg:-right-16 h-14 w-14 bg-card text-primary border-white/10 hover:bg-primary hover:text-white transition-all shadow-xl rounded-2xl" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};
