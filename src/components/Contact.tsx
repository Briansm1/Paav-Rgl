"use client";

import React from 'react';
import { Mail, Phone, MapPin, ExternalLink, ArrowRight } from 'lucide-react';
import { PlaceHolderImages } from '@/app/lib/placeholder-images';
import { Button } from '@/components/ui/button';

export const Contact = () => {
  const mapImg = PlaceHolderImages.find(img => img.id === 'map-location');
  const phoneNumber = "573001234567";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=Hola! Quiero inscribirme.`;

  return (
    <section id="contacto" className="py-20 md:py-32 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-primary uppercase bg-primary/10 rounded-full">
            Canales de Atención
          </span>
          <h2 className="text-4xl md:text-6xl font-bold font-headline mb-6 tracking-tight text-foreground">
            Inicia tu viaje <span className="text-primary italic">hoy</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Estamos listos para acompañarte en cada kilómetro. Elige el medio que prefieras para contactarnos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-stretch">
          <div className="flex flex-col gap-10">
            <div className="bg-slate-50 dark:bg-slate-900 p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-border/50 h-full flex flex-col justify-between">
              <div>
                <h4 className="text-2xl font-bold mb-10 tracking-tight">Nuestra Sede</h4>
                <div className="space-y-10">
                  <div className="flex items-start gap-6">
                    <div className="bg-white dark:bg-slate-800 p-4 rounded-[1.2rem] shadow-sm shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-bold text-lg mb-1">Dirección Principal</p>
                      <p className="text-muted-foreground leading-relaxed">Calle de la Seguridad #123,<br />Ciudad del Conductor, CP 45000</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-6">
                    <div className="bg-white dark:bg-slate-800 p-4 rounded-[1.2rem] shadow-sm shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-bold text-lg mb-1">Línea Directa</p>
                      <p className="text-muted-foreground font-medium">+57 (300) 123 4567</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-6">
                    <div className="bg-white dark:bg-slate-800 p-4 rounded-[1.2rem] shadow-sm shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-bold text-lg mb-1">Correo Electrónico</p>
                      <p className="text-muted-foreground font-medium border-b border-primary/20 inline-block">info@rutasegura.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 h-64 md:h-80 w-full relative group rounded-[2rem] overflow-hidden shadow-2xl">
                <img 
                  src={mapImg?.imageUrl || ''} 
                  alt={mapImg?.description || 'Ubicación'} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  data-ai-hint={mapImg?.imageHint}
                />
                <div className="absolute inset-0 bg-primary/20 backdrop-blur-[1px] group-hover:backdrop-blur-none transition-all duration-500"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="bg-white/95 dark:bg-slate-800/95 p-5 rounded-[1.5rem] shadow-2xl flex items-center gap-3 transform group-hover:scale-110 transition-transform duration-500 border border-white">
                    <MapPin className="w-6 h-6 text-primary" />
                    <span className="font-bold text-foreground">Ver en Maps</span>
                    <ExternalLink className="w-4 h-4 text-muted-foreground" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-10">
            <div className="bg-primary p-8 md:p-16 rounded-[2.5rem] shadow-2xl text-white relative overflow-hidden flex flex-col justify-center h-full">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/20 rounded-full -ml-32 -mb-32 blur-3xl"></div>
              
              <div className="relative z-10 space-y-8">
                <h4 className="text-3xl md:text-5xl font-bold leading-tight">¿Listo para obtener tu licencia?</h4>
                <p className="text-xl text-primary-foreground/90 leading-relaxed">
                  No pierdas más tiempo. Chatea con uno de nuestros asesores y agenda tu primera clase hoy mismo.
                </p>
                
                <div className="pt-8">
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="block">
                    <Button className="w-full h-24 bg-white text-primary hover:bg-slate-50 text-2xl font-bold rounded-[1.5rem] shadow-xl transition-all active:scale-[0.98] flex items-center justify-center gap-4">
                      Inscribirme por WhatsApp
                      <ArrowRight className="w-8 h-8" />
                    </Button>
                  </a>
                  <p className="mt-6 text-center text-primary-foreground/70 font-medium">
                    Atención inmediata de Lunes a Sábado.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
