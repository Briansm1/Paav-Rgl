
"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { PlaceHolderImages } from '@/app/lib/placeholder-images';

export const Contact = () => {
  const mapImg = PlaceHolderImages.find(img => img.id === 'map-location');

  return (
    <section id="contacto" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-accent font-bold tracking-widest uppercase text-xs md:text-sm mb-4">¿Hablamos?</h2>
          <h3 className="text-3xl md:text-4xl font-bold font-headline mb-6 text-foreground">Ubicación y Contacto</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white dark:bg-slate-800 p-6 md:p-10 rounded-3xl shadow-xl border border-border">
              <h4 className="text-2xl font-bold mb-8">Nuestra Academia</h4>
              <div className="space-y-8">
                <div className="flex items-start gap-5">
                  <div className="bg-primary/10 p-3.5 rounded-2xl shadow-inner shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-lg">Dirección</p>
                    <p className="text-muted-foreground text-base">Calle de la Seguridad #123, Ciudad del Conductor</p>
                  </div>
                </div>
                <div className="flex items-start gap-5">
                  <div className="bg-primary/10 p-3.5 rounded-2xl shadow-inner shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-lg">Teléfono</p>
                    <p className="text-muted-foreground text-base">+57 (300) 123 4567</p>
                  </div>
                </div>
                <div className="flex items-start gap-5">
                  <div className="bg-primary/10 p-3.5 rounded-2xl shadow-inner shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-lg">Email</p>
                    <p className="text-muted-foreground text-base underline decoration-primary/30">info@rutasegura.com</p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-12 h-64 sm:h-80 w-full bg-slate-200 dark:bg-slate-700 rounded-3xl flex items-center justify-center relative overflow-hidden group cursor-pointer border border-border">
                <img 
                  src={mapImg?.imageUrl || ''} 
                  alt={mapImg?.description || 'Ubicación'} 
                  className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700"
                  data-ai-hint={mapImg?.imageHint}
                />
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500"></div>
                <div className="relative z-10 text-center bg-white/90 dark:bg-slate-800/90 p-4 rounded-2xl shadow-xl backdrop-blur-sm transform group-hover:scale-105 transition-transform">
                  <MapPin className="w-10 h-10 text-primary mx-auto mb-2" />
                  <span className="font-bold text-foreground">Abrir Google Maps</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 bg-white dark:bg-slate-800 p-6 md:p-10 rounded-3xl shadow-xl border border-border">
            <h4 className="text-2xl font-bold mb-8">Solicita Información</h4>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Nombre Completo</label>
                  <Input placeholder="Tu nombre" className="h-14 rounded-xl focus:ring-primary border-muted" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Teléfono</label>
                  <Input placeholder="Tu número" className="h-14 rounded-xl focus:ring-primary border-muted" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Email</label>
                <Input type="email" placeholder="correo@ejemplo.com" className="h-14 rounded-xl focus:ring-primary border-muted" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Mensaje o Interés</label>
                <Textarea placeholder="Cuéntanos en qué plan estás interesado..." className="min-h-[150px] rounded-xl focus:ring-primary border-muted" />
              </div>
              <Button className="w-full h-16 bg-accent hover:bg-accent/90 text-xl font-bold rounded-2xl shadow-lg transition-transform active:scale-[0.98]">
                Enviar Solicitud
                <Send className="ml-2 w-6 h-6" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
