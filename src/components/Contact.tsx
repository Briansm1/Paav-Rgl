"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Send, ExternalLink } from 'lucide-react';
import { PlaceHolderImages } from '@/app/lib/placeholder-images';

export const Contact = () => {
  const mapImg = PlaceHolderImages.find(img => img.id === 'map-location');

  return (
    <section id="contacto" className="py-20 md:py-32 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-primary uppercase bg-primary/10 rounded-full">
            Estamos para Ayudarte
          </span>
          <h2 className="text-4xl md:text-6xl font-bold font-headline mb-6 tracking-tight text-foreground">
            Inicia tu viaje <span className="text-primary italic">hoy</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            ¿Tienes dudas? Visítanos o envíanos un mensaje. Nuestro equipo está listo para asesorarte.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-20 items-stretch">
          <div className="lg:col-span-5 flex flex-col gap-10">
            <div className="bg-slate-50 dark:bg-slate-900 p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-border/50 h-full flex flex-col justify-between">
              <div>
                <h4 className="text-2xl font-bold mb-10 tracking-tight">Datos de Contacto</h4>
                <div className="space-y-10">
                  <div className="flex items-start gap-6">
                    <div className="bg-white dark:bg-slate-800 p-4 rounded-[1.2rem] shadow-sm shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-bold text-lg mb-1">Visítanos</p>
                      <p className="text-muted-foreground leading-relaxed">Calle de la Seguridad #123,<br />Ciudad del Conductor, CP 45000</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-6">
                    <div className="bg-white dark:bg-slate-800 p-4 rounded-[1.2rem] shadow-sm shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-bold text-lg mb-1">Llámanos</p>
                      <p className="text-muted-foreground font-medium">+57 (300) 123 4567</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-6">
                    <div className="bg-white dark:bg-slate-800 p-4 rounded-[1.2rem] shadow-sm shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-bold text-lg mb-1">Escríbenos</p>
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
                    <span className="font-bold text-foreground">Abrir Mapa</span>
                    <ExternalLink className="w-4 h-4 text-muted-foreground" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 bg-white dark:bg-slate-900 p-8 md:p-16 rounded-[2.5rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-border relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-3xl"></div>
            <div className="relative z-10">
              <h4 className="text-3xl font-bold mb-10 tracking-tight">Formulario de Inscripción</h4>
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground ml-1">Nombre</label>
                    <Input placeholder="Ej. Juan Pérez" className="h-16 rounded-2xl bg-slate-50 border-none focus-visible:ring-2 focus-visible:ring-primary shadow-inner text-lg" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground ml-1">Teléfono</label>
                    <Input placeholder="+57 ..." className="h-16 rounded-2xl bg-slate-50 border-none focus-visible:ring-2 focus-visible:ring-primary shadow-inner text-lg" />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground ml-1">Email Corporativo o Personal</label>
                  <Input type="email" placeholder="correo@ejemplo.com" className="h-16 rounded-2xl bg-slate-50 border-none focus-visible:ring-2 focus-visible:ring-primary shadow-inner text-lg" />
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground ml-1">¿Qué plan te interesa?</label>
                  <Textarea placeholder="Cuéntanos un poco sobre tus objetivos o dudas..." className="min-h-[180px] rounded-3xl bg-slate-50 border-none focus-visible:ring-2 focus-visible:ring-primary shadow-inner text-lg pt-4" />
                </div>
                <Button className="w-full h-20 bg-primary hover:bg-primary/90 text-xl font-bold rounded-2xl shadow-xl transition-all active:scale-[0.98] group flex items-center justify-center gap-3">
                  Enviar Solicitud de Información
                  <Send className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Button>
                <p className="text-center text-muted-foreground text-sm font-medium">
                  Al enviar, aceptas nuestras políticas de tratamiento de datos.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
