
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { PlaceHolderImages } from '@/app/lib/placeholder-images';

export const Contact = () => {
  const mapImg = PlaceHolderImages.find(img => img.id === 'map-location');

  return (
    <section id="contacto" className="py-24 bg-slate-50 dark:bg-slate-900/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-accent font-bold tracking-widest uppercase text-sm mb-4">¿Hablamos?</h2>
          <h3 className="text-4xl font-bold font-headline mb-6 text-foreground">Ubicación y Contacto</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-border">
              <h4 className="text-2xl font-bold mb-6">Nuestra Academia</h4>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold">Dirección</p>
                    <p className="text-muted-foreground">Calle de la Seguridad #123, Ciudad del Conductor</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold">Teléfono</p>
                    <p className="text-muted-foreground">+57 (300) 123 4567</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold">Email</p>
                    <p className="text-muted-foreground">info@rutasegura.com</p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-10 h-64 w-full bg-slate-200 dark:bg-slate-700 rounded-xl flex items-center justify-center relative overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer">
                <img 
                  src={mapImg?.imageUrl || ''} 
                  alt={mapImg?.description || 'Ubicación'} 
                  className="absolute inset-0 w-full h-full object-cover opacity-50"
                  data-ai-hint={mapImg?.imageHint}
                />
                <div className="relative z-10 text-center">
                  <MapPin className="w-12 h-12 text-primary mx-auto mb-2" />
                  <span className="font-bold text-foreground">Ver en Google Maps</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-border">
            <h4 className="text-2xl font-bold mb-6">Solicita Información</h4>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold">Nombre Completo</label>
                  <Input placeholder="Tu nombre" className="h-12" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold">Teléfono</label>
                  <Input placeholder="Tu número" className="h-12" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold">Email</label>
                <Input type="email" placeholder="correo@ejemplo.com" className="h-12" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold">Mensaje o Interés</label>
                <Textarea placeholder="Cuéntanos en qué plan estás interesado..." className="min-h-[120px]" />
              </div>
              <Button className="w-full h-14 bg-accent hover:bg-accent/90 text-lg font-bold">
                Enviar Mensaje
                <Send className="ml-2 w-5 h-5" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
