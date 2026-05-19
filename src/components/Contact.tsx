"use client";

import React, { useState } from 'react';
import { Mail, MessageSquare, MapPin, Image as ImageIcon, Send } from 'lucide-react';
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
  FormDescription,
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
  licenseImage: z.any().optional(),
});

export const Contact = () => {
  const { toast } = useToast();
  const [fileName, setFileName] = useState<string | null>(null);
  
  const academyEmail = "pilotosasesalvolante@gmail.com";
  const whatsappUrl = "https://wa.me/5492966265603";

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      rating: '5',
      review: '',
      licenseImage: undefined,
    },
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
      form.setValue('licenseImage', file);
    }
  };

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    // Generar el cuerpo del mail con los datos del formulario
    const subject = encodeURIComponent(`Reseña de Estudiante: ${values.name}`);
    const body = encodeURIComponent(
      `¡Hola Pilotos! Aquí te envío mi reseña:\n\n` +
      `• Nombre: ${values.name}\n` +
      `• Email: ${values.email}\n` +
      `• Calificación: ${values.rating} estrellas\n\n` +
      `Mi Experiencia:\n"${values.review}"\n\n` +
      `[IMPORTANTE: Si tienes la foto de tu licencia, por favor ADJÚNTALA a este correo antes de enviar]`
    );
    
    // Abrir cliente de mail
    window.location.href = `mailto:${academyEmail}?subject=${subject}&body=${body}`;
    
    toast({
      title: "Abriendo correo...",
      description: "Se abrirá tu aplicación de mail para que envíes la reseña. ¡No olvides adjuntar la foto!",
    });
  };

  return (
    <section id="contacto" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-primary uppercase bg-primary/10 rounded-full">
            Nuestra Comunidad
          </span>
          <h2 className="text-3xl md:text-6xl font-bold font-headline mb-6 tracking-tight text-foreground">
            Tu opinión es <span className="text-primary italic">nuestro motor</span>
          </h2>
          <p className="text-base md:text-xl text-muted-foreground leading-relaxed">
            Compartinos tu experiencia y ayuda a otros a iniciar su camino hacia la libertad e independencia
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-20 items-stretch">
          <div className="flex flex-col gap-10">
            <div className="bg-secondary p-6 md:p-12 rounded-[2.5rem] shadow-xl border border-white/5 h-full flex flex-col justify-center">
              <h4 className="text-xl md:text-2xl font-bold mb-8 md:mb-10 tracking-tight text-center md:text-left">Canales de atención</h4>
              <div className="space-y-8 md:space-y-10">
                <div className="flex items-start gap-4 md:gap-6">
                  <div className="bg-white/5 p-3 md:p-4 rounded-[1.2rem] shadow-sm shrink-0">
                    <MapPin className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-base md:text-lg mb-1">Zona de cobertura</p>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">Río Gallegos, Santa Cruz, Argentina, Z9400</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 md:gap-6">
                  <div className="bg-white/5 p-3 md:p-4 rounded-[1.2rem] shadow-sm shrink-0">
                    <MessageSquare className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-base md:text-lg mb-1">WhatsApp</p>
                    <a 
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm md:text-base text-muted-foreground font-medium hover:text-primary transition-colors block"
                    >
                      +54 2966 265603
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4 md:gap-6">
                  <div className="bg-white/5 p-3 md:p-4 rounded-[1.2rem] shadow-sm shrink-0">
                    <Mail className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  </div>
                  <div className="overflow-hidden">
                    <p className="font-bold text-base md:text-lg mb-1">Consultas o propuestas</p>
                    <a 
                      href={`mailto:${academyEmail}`}
                      className="text-sm md:text-base text-muted-foreground font-medium hover:text-primary transition-colors no-underline break-words block"
                    >
                      {academyEmail}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-10">
            <div className="bg-card p-6 md:p-12 rounded-[2.5rem] shadow-2xl border border-white/5 h-full">
              <div className="mb-8 text-center md:text-left">
                <h4 className="text-xl md:text-3xl font-bold mb-3 md:mb-4 tracking-tight">Cuéntanos tu experiencia</h4>
                <p className="text-sm md:text-base text-muted-foreground">
                  Al enviar, se abrirá tu aplicación de correo para terminar el proceso.
                </p>
              </div>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 md:space-y-5">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nombre completo</FormLabel>
                        <FormControl>
                          <Input placeholder="Tu nombre" {...field} className="rounded-xl bg-white/5 border-white/10 focus:ring-primary text-white" />
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
                            <Input placeholder="tu@email.com" {...field} className="rounded-xl bg-white/5 border-white/10 focus:ring-primary text-white" />
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
                              <SelectTrigger className="rounded-xl bg-white/5 border-white/10 focus:ring-primary text-white">
                                <SelectValue placeholder="Califica" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="bg-card border-white/10 text-white">
                              {[5, 4, 3, 2, 1].map((val) => (
                                <SelectItem key={val} value={val.toString()} className="hover:bg-primary/20 cursor-pointer">
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
                    name="licenseImage"
                    render={() => (
                      <FormItem className="space-y-3">
                        <FormLabel>Foto de tu licencia (opcional)</FormLabel>
                        <FormControl>
                          <div className="relative group">
                            <input
                              type="file"
                              accept="image/*"
                              onChange={handleFileChange}
                              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                            />
                            <div className="flex flex-col items-center justify-center border-2 border-dashed border-white/10 rounded-2xl p-4 md:p-6 bg-white/5 group-hover:bg-white/10 transition-colors">
                              {fileName ? (
                                <div className="flex items-center gap-3 text-primary font-medium">
                                  <Send className="w-5 h-5" />
                                  <span className="text-xs md:text-sm truncate max-w-[150px] md:max-w-[200px]">{fileName}</span>
                                </div>
                              ) : (
                                <>
                                  <ImageIcon className="w-6 h-6 md:w-8 md:h-8 text-muted-foreground mb-2" />
                                  <p className="text-[10px] md:text-xs text-muted-foreground font-medium">Click para seleccionar (adjúntala luego en el mail)</p>
                                </>
                              )}
                            </div>
                          </div>
                        </FormControl>
                        <FormDescription className="text-[10px] md:text-[11px] text-slate-400 italic leading-tight">
                          El sistema te pedirá adjuntar esta foto manualmente al abrir tu correo electrónico.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="review"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Tu reseña</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Cuéntanos qué fue lo que más te gustó..." 
                            className="rounded-xl bg-white/5 border-white/10 focus:ring-primary text-white min-h-[100px] md:min-h-[120px]" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    className="w-full h-12 md:h-14 bg-primary hover:bg-primary/90 text-white text-base md:text-lg font-bold rounded-xl shadow-lg shadow-primary/20 transition-all active:scale-[0.98] flex items-center justify-center gap-2"
                  >
                    Enviar por correo
                    <Send className="w-5 h-5" />
                  </Button>
                </form>
              </Form>
              
              <p className="mt-6 text-center text-[10px] text-muted-foreground uppercase tracking-widest font-bold">
                ¡GRACIAS POR CONFIAR EN NOSOTROS!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};