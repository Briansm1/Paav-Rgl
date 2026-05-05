
import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/app/lib/placeholder-images';
import { Car, BookOpen, Clock, Award } from 'lucide-react';

const services = [
  {
    title: 'Cursos para Principiantes',
    description: 'Desde cero hasta tu licencia. Teoría y práctica intensiva con instructores certificados.',
    icon: <Car className="w-10 h-10 text-primary" />,
    imgId: 'service-beginner'
  },
  {
    title: 'Refuerzo y Perfeccionamiento',
    description: '¿Tienes miedo o hace tiempo no conduces? Recupera tu confianza con nuestras clases personalizadas.',
    icon: <Clock className="w-10 h-10 text-primary" />,
    imgId: 'service-advanced'
  },
  {
    title: 'Teoría de Tránsito',
    description: 'Domina las normas de vialidad y señales de tránsito para aprobar tu examen teórico sin problemas.',
    icon: <BookOpen className="w-10 h-10 text-primary" />,
    imgId: 'service-theory'
  }
];

export const Services = () => {
  const instructorImg = PlaceHolderImages.find(img => img.id === 'driving-instructor');

  return (
    <section id="servicios" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-accent font-bold tracking-widest uppercase text-xs md:text-sm mb-4">Nuestra Solución</h2>
          <h3 className="text-3xl md:text-5xl font-bold font-headline mb-6 text-foreground">Aprender es más que solo manejar</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
            Combinamos tecnología, pedagogía moderna y años de experiencia para ofrecerte la mejor formación vial del mercado.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const img = PlaceHolderImages.find(p => p.id === service.imgId);
            return (
              <Card key={index} className="overflow-hidden border-none shadow-xl hover:-translate-y-2 transition-all duration-300">
                <div className="relative h-48 sm:h-56 md:h-64">
                  <Image 
                    src={img?.imageUrl || ''} 
                    alt={service.title} 
                    fill 
                    className="object-cover"
                    data-ai-hint={img?.imageHint}
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-lg">
                    {service.icon}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl md:text-2xl font-bold">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 md:mt-24 p-6 md:p-12 bg-white dark:bg-slate-800/50 rounded-3xl shadow-sm border border-border flex flex-col lg:flex-row items-center gap-10 md:gap-16">
          <div className="lg:w-1/2 w-full order-2 lg:order-1">
            <h4 className="text-2xl md:text-3xl font-bold mb-8">¿Por qué elegir Ruta Segura?</h4>
            <ul className="space-y-6">
              {[
                'Vehículos de última generación con doble pedal.',
                'Instructores amables y pacientes altamente capacitados.',
                'Horarios flexibles que se adaptan a tu ritmo de vida.',
                'Certificación oficial reconocida por las autoridades.'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="shrink-0 mt-1 bg-primary/10 p-1.5 rounded-full">
                    <Award className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-foreground/90 font-medium text-base md:text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:w-1/2 w-full order-1 lg:order-2 relative h-[250px] sm:h-[350px] md:h-[450px] rounded-2xl overflow-hidden shadow-2xl">
            <Image 
              src={instructorImg?.imageUrl || ''} 
              alt={instructorImg?.description || "Instrucción profesional"} 
              fill 
              className="object-cover hover:scale-105 transition-transform duration-700"
              data-ai-hint={instructorImg?.imageHint}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
