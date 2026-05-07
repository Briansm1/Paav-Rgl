"use client";

import React from 'react';
import { Mail, Phone, MapPin, ExternalLink, Send } from 'lucide-react';
import { PlaceHolderImages } from '@/app/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  name: z.string().min(2, { message: 'El nombre es obligatorio' }),
  email: z.string().email({ message: 'Email inválido' }),
  phone: z.string().min(7, { message: 'Teléfono inválido' }),
  message: z.string().min(10, { message: 'Por favor escribe un mensaje más detallado' }),
});

export const Contact = () => {
  const { toast } = useToast();
  const mapImg = PlaceHolderImages.find(img => img.id === 'map-location');

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Simulación del envío del formulario
    console.log("Formulario enviado a pilotosasesalvolante@gmail.com:", values);
    toast({
      title: "¡Mensaje enviado!",
      description: "Tus datos han sido recibidos. Nos pondremos en contacto pronto.",
    });
    form.reset();
  }

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
            <div className="bg-white dark:bg-slate-900 p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-border/50 h-full">
              <div className="mb-8">
                <h4 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight">Déjanos tus datos</h4>
                <p className="text-muted-foreground">
                  Completa el formulario y nos pondremos en contacto contigo para agendar tu primera clase.
                </p>
              </div>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nombre completo</FormLabel>
                        <FormControl>
                          <Input placeholder="Escribe tu nombre" {...field} className="rounded-xl border-slate-200 focus:ring-primary" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Correo electrónico</FormLabel>
                        <FormControl>
                          <Input placeholder="tu@email.com" {...field} className="rounded-xl border-slate-200 focus:ring-primary" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Teléfono / WhatsApp</FormLabel>
                        <FormControl>
                          <Input placeholder="Tu número de contacto" {...field} className="rounded-xl border-slate-200 focus:ring-primary" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Mensaje o Consulta</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="¿En qué programa estás interesado?" 
                            className="rounded-xl border-slate-200 focus:ring-primary min-h-[100px]" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button 
                    type="submit" 
                    className="w-full h-14 bg-primary hover:bg-primary/90 text-white text-lg font-bold rounded-xl shadow-lg shadow-primary/20 transition-all active:scale-[0.98] flex items-center justify-center gap-2"
                  >
                    Enviar Información
                    <Send className="w-5 h-5" />
                  </Button>
                </form>
              </Form>
              
              <p className="mt-6 text-center text-[10px] text-muted-foreground uppercase tracking-widest font-bold">
                pilotosasesalvolante@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
