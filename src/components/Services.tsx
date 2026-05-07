import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/app/lib/placeholder-images';
import { Car, BookOpen, Clock, Award, ShieldCheck, Zap } from 'lucide-react';

const services = [
  {
    title: 'Cursos para Principiantes',
    description: 'Aprende desde lo más básico hasta obtener tu licencia con nuestro método paso a paso.',
    icon: <Car className="w-10 h-10 text-primary" />,
    imgId: 'service-beginner',
    tag: 'Popular'
  },
  {
    title: 'Perfeccionamiento',
    description: '¿Miedo al tráfico? Recupera tu confianza con clases personalizadas de manejo avanzado.',
    icon: <Clock className="w-10 h-10 text-primary" />,
    imgId: 'service-advanced',
    tag: 'Especializado'
  },
  {
    title: 'Teoría de Tránsito',
    description: 'Domina las normas y señales viales para aprobar tu examen teórico sin dificultades.',
    icon: <BookOpen className="w-10 h-10 text-primary" />,
    imgId: 'service-theory',
    tag: 'Académico'
  }
];

export const Services = () => {
  const instructorImg = PlaceHolderImages.find(img => img.id === 'driving-instructor');

  return (
    <section id="servicios" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-primary uppercase bg-primary/10 rounded-full">
            Nuestros Servicios
          </span>
          <h2 className="text-4xl md:text-6xl font-bold font-headline mb-6 tracking-tight text-foreground">
            Conducir por <span className="text-primary italic">aprender</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Combinamos tecnología moderna con instructores expertos para ofrecerte la formación vial más completa del mercado.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {services.map((service, index) => {
            const img = PlaceHolderImages.find(p => p.id === service.imgId);
            return (
              <Card key={index} className="group relative overflow-hidden border-none bg-secondary shadow-xl hover:shadow-2xl transition-all duration-500">
                <div className="relative h-64 overflow-hidden">
                  <Image 
                    src={img?.imageUrl || ''} 
                    alt={service.title} 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    data-ai-hint={img?.imageHint}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider bg-white/10 backdrop-blur-md text-white rounded-lg shadow-sm border border-white/20">
                      {service.tag}
                    </span>
                  </div>
                  <div className="absolute bottom-6 left-6 text-white">
                    {service.icon}
                  </div>
                </div>
                <CardHeader className="pt-8">
                  <CardTitle className="text-2xl font-bold group-hover:text-primary transition-colors">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-base leading-relaxed mb-6">{service.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-24 md:mt-40 p-1 md:p-2 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 rounded-[2.5rem] overflow-hidden shadow-2xl">
          <div className="bg-secondary rounded-[2.4rem] p-8 md:p-16 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="lg:w-1/2 w-full">
              <h3 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight">
                ¿Por qué somos la mejor opción?
              </h3>
              <div className="grid grid-cols-1 gap-8">
                {[
                  { icon: <ShieldCheck className="w-6 h-6 text-primary" />, text: 'Vehículos modernos con sistema de doble pedal para tu seguridad.' },
                  { icon: <Award className="w-6 h-6 text-primary" />, text: 'Instructores certificados con más de 10 años de experiencia.' },
                  { icon: <Zap className="w-6 h-6 text-primary" />, text: 'Horarios 100% flexibles que se adaptan a tu ritmo de vida.' }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-5">
                    <div className="shrink-0 mt-1 bg-primary/10 p-3 rounded-2xl shadow-inner">
                      {item.icon}
                    </div>
                    <p className="text-foreground/80 font-medium text-lg md:text-xl leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 w-full relative h-[350px] md:h-[550px] rounded-3xl overflow-hidden shadow-2xl group">
              <Image 
                src={instructorImg?.imageUrl || ''} 
                alt={instructorImg?.description || "Instrucción profesional"} 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-1000"
                data-ai-hint={instructorImg?.imageHint}
              />
              <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};