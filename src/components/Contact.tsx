"use client";

import React from 'react';
import { Mail, MessageSquare, MapPin, ExternalLink, Send } from 'lucide-react';
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  name: z.string().min(2, { message: 'El nombre es obligatorio' }),
  email: z.string().email({ message: 'Email inválido' }),
  rating: z.string().min(1, { message: 'La calificación es obligatoria' }),
  review: z.string().min(10, { message: 'Por favor escribe una reseña más detallada' }),
});

export const Contact = () => {
  const { toast } = useToast();
  const mapImg = PlaceHolderImages.find(img => img.id === 'map-location');
  const mapUrl = "https://www.google.com/maps/search/?api=1&query=Plaza+San+Martin+Rio+Gallegos+Santa+Cruz";
  const phoneNumber = "542966265603";
  const whatsappUrl = `https://wa.me/${phoneNumber}`;
  const emailAddress = "pilotosasesalvolante@gmail.com";

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      rating: '5',
      review: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(`Reseña enviada a ${emailAddress}:`, values);
    toast({
      title: "¡Reseña recibida!",
      description: "Gracias por compartir tu experiencia con nosotros. Tu opinión es muy valiosa.",
    });
    form.reset();
  }

  return (
    <section id="contacto" className="py-20 md:py-32 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-primary uppercase bg-primary/10 rounded-full">
            Nuestra Comunidad
          </span>
          <h2 className="text-4xl md:text-6xl font-bold font-headline mb-6 tracking-tight text-foreground">
            Tu opinión es <span className="text-primary italic">nuestro motor</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            ¿Ya eres un as al volante? Comparte tu experiencia y ayuda a otros a iniciar su camino hacia la libertad.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-stretch">
          <div className="flex flex-col gap-10">
            <div className="bg-slate-50 dark:bg-slate-900 p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-border/50 h-full flex flex-col justify-between">
              <div>
                <h4 className="text-2xl font-bold mb-10 tracking-tight">Canales de atención</h4>
                <div className="space-y-10">
                  <div className="flex items-start gap-6">
                    <div className="bg-white dark:bg-slate-800 p-4 rounded-[1.2rem] shadow-sm shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-bold text-lg mb-1">Zona de cobertura</p>
                      <p className="text-muted-foreground leading-relaxed">Río Gallegos, Santa Cruz, Argentina, Z9400</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-6">
                    <div className="bg-white dark:bg-slate-800 p-4 rounded-[1.2rem] shadow-sm shrink-0">
                      <MessageSquare className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-bold text-lg mb-1">WhatsApp</p>
                      <a 
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground font-medium hover:text-primary transition-colors block"
                      >
                        +54 2966 265603
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-6">
                    <div className="bg-white dark:bg-slate-800 p-4 rounded-[1.2rem] shadow-sm shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-bold text-lg mb-1">Consultas</p>
                      <a 
                        href={`mailto:${emailAddress}`}
                        className="text-muted-foreground font-medium hover:text-primary transition-colors"
                      >
                        {emailAddress}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 h-64 md:h-80 w-full relative group rounded-[2rem] overflow-hidden shadow-2xl">
                <img 
                  src={mapImg?.imageUrl || ''} 
                  alt={mapImg?.description || 'Ubicación Plaza San Martín'} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  data-ai-hint="Plaza San Martin"
                />
                <div className="absolute inset-0 bg-primary/20 backdrop-blur-[1px] group-hover:backdrop-blur-none transition-all duration-500"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <a 
                    href={mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/95 dark:bg-slate-800/95 p-5 rounded-[1.5rem] shadow-2xl flex items-center gap-3 transform group-hover:scale-110 transition-transform duration-500 border border-white"
                  >
                    <MapPin className="w-6 h-6 text-primary" />
                    <span className="font-bold text-foreground">Ver en Maps</span>
                    <ExternalLink className="w-4 h-4 text-muted-foreground" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-10">
            <div className="bg-white dark:bg-slate-900 p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-border/50 h-full">
              <div className="mb-8 text-center md:text-left">
                <h4 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight">Cuéntanos tu experiencia</h4>
                <p className="text-muted-foreground">
                  Tu opinión será enviada a nuestro equipo para seguir mejorando día a día.
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
                          <Input placeholder="Tu nombre" {...field} className="rounded-xl border-slate-200 focus:ring-primary" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                      name="rating"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Calificación</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="rounded-xl border-slate-200 focus:ring-primary">
                                <SelectValue placeholder="Califica" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {[5, 4, 3, 2, 1].map((val) => (
                                <SelectItem key={val} value={val.toString()}>
                                  <div className="flex items-center gap-2">
                                    {val} {val === 1 ? 'estrella' : 'estrellas'}
                                  </div>
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="review"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Tu reseña</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Cuéntanos qué fue lo que más te gustó de tus clases..." 
                            className="rounded-xl border-slate-200 focus:ring-primary min-h-[120px]" 
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
                    Enviar reseña
                    <Send className="w-5 h-5" />
                  </Button>
                </form>
              </Form>
              
              <p className="mt-6 text-center text-[10px] text-muted-foreground uppercase tracking-widest font-bold">
                ¡GRACIAS POR CONFIAR!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};