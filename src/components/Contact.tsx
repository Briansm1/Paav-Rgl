
"use client";

import React, { useState } from 'react';
import { Mail, MessageSquare, MapPin, Send, Loader2, ShieldCheck, Info } from 'lucide-react';
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
import { useFirestore } from '@/firebase/provider';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { errorEmitter } from '@/firebase/error-emitter';
import { FirestorePermissionError } from '@/firebase/errors';

const formSchema = z.object({
  name: z.string().min(2, { message: 'El nombre es obligatorio' }),
  email: z.string().email({ message: 'Email inválido' }),
  rating: z.string().min(1, { message: 'La calificación es obligatoria' }),
  review: z.string().min(10, { message: 'Por favor escribe una reseña más detallada' }),
});

export const Contact = () => {
  const { toast } = useToast();
  const firestore = useFirestore();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const academyEmail = "soporte@pilotosasesalvolante.shop";

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      rating: '5',
      review: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    
    // 1. Guardar en la colección de reseñas para el historial interno
    const reviewData = {
      ...values,
      createdAt: serverTimestamp(),
    };

    addDoc(collection(firestore, 'reviews'), reviewData)
      .catch(async (error) => {
        const permissionError = new FirestorePermissionError({
          path: 'reviews',
          operation: 'create',
          requestResourceData: reviewData,
        });
        errorEmitter.emit('permission-error', permissionError);
      });

    // 2. Preparar el correo manual (mailto)
    const subject = encodeURIComponent(`Nueva Reseña de Estudiante: ${values.name}`);
    const body = encodeURIComponent(
      `Hola equipo de Pilotos - Ases al Volante,\n\n` +
      `Quiero compartir mi experiencia:\n\n` +
      `Nombre: ${values.name}\n` +
      `Email: ${values.email}\n` +
      `Calificación: ${values.rating} estrellas\n\n` +
      `Reseña:\n"${values.review}"\n\n` +
      `(Recordatorio: Adjuntar aquí la foto de mi licencia para la referencia)\n\n` +
      `Saludos!`
    );

    // 3. Notificar al usuario
    toast({
      title: "Abriendo tu correo...",
      description: "Se abrirá tu aplicación de correo. ¡No olvides adjuntar la foto de tu licencia!",
    });

    // 4. Abrir cliente de correo
    setTimeout(() => {
      window.location.href = `mailto:${academyEmail}?subject=${subject}&body=${body}`;
      
      // Resetear formulario después de un momento
      form.reset();
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contacto" className="relative py-20 md:py-32 bg-background overflow-hidden">
      {/* Soft gradient transitions */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background z-0">
        <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-background via-background/50 to-transparent pointer-events-none z-10"></div>
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background via-background/50 to-transparent pointer-events-none z-10"></div>
      </div>

      <div className="container mx-auto px-4 relative z-20">
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-20 items-start">
          <div className="flex flex-col gap-10">
            <div className="bg-card p-6 md:p-12 rounded-[2.5rem] shadow-2xl border border-white/5 h-full">
              <div className="mb-8 text-center">
                <h4 className="text-xl md:text-3xl font-bold mb-3 md:mb-4 tracking-tight">Contanos tu experiencia</h4>
                <p className="text-sm md:text-base text-muted-foreground">
                  Al completar el formulario, se abrirá tu aplicación de correo para que nos envíes la reseña de forma segura.
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
                    name="review"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Tu reseña</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Contanos qué fue lo que más te gustó..." 
                            className="rounded-xl bg-white/5 border-white/10 focus:ring-primary text-white min-h-[100px] md:min-h-[120px]" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Bloque de recordatorio y privacidad */}
                  <div className="bg-secondary/50 p-5 rounded-2xl border border-white/5 space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="bg-primary/20 p-2 rounded-lg shrink-0">
                        <Info className="w-4 h-4 text-primary" />
                      </div>
                      <p className="text-xs md:text-sm text-foreground/80 leading-relaxed font-medium">
                        <strong>Importante:</strong> Cuando se abra tu e-mail, recordá adjuntar la foto de tu licencia para que podamos compartir tu logro.
                      </p>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="bg-green-500/20 p-2 rounded-lg shrink-0">
                        <ShieldCheck className="w-4 h-4 text-green-500" />
                      </div>
                      <p className="text-xs md:text-sm text-foreground/80 leading-relaxed font-medium">
                        <strong>Tu privacidad es prioridad:</strong> Nosotros nos encargamos de tapar todos tus datos sensibles (DNI, domicilio, etc.) antes de usar la foto como referencia.
                      </p>
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full h-12 md:h-14 bg-primary hover:bg-primary/90 text-white text-base md:text-lg font-bold rounded-xl shadow-lg transition-all active:scale-[0.98] flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Procesando...
                      </>
                    ) : (
                      <>
                        Enviar reseña por email
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </Button>
                </form>
              </Form>
              
              <p className="mt-6 text-center text-[10px] text-muted-foreground uppercase tracking-widest font-bold">
                ¡GRACIAS POR CONFIAR EN NOSOTROS!
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-10">
            <div className="bg-secondary p-8 md:p-10 lg:p-12 rounded-[2.5rem] shadow-xl border border-white/5">
              <h4 className="text-xl md:text-2xl font-bold mb-8 md:mb-10 tracking-tight text-center">Canales de atención</h4>
              <div className="space-y-6 md:space-y-8">
                <div className="flex items-start gap-4 md:gap-6">
                  <div className="bg-white/5 p-3 md:p-4 rounded-[1.2rem] shadow-sm shrink-0">
                    <MapPin className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-base md:text-lg mb-1">Zona de cobertura</p>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">Río Gallegos, Santa Cruz, Argentina</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 md:gap-6">
                  <div className="bg-white/5 p-3 md:p-4 rounded-[1.2rem] shadow-sm shrink-0">
                    <MessageSquare className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-base md:text-lg mb-1">WhatsApp</p>
                    <a 
                      href="https://wa.me/5492966265603"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm md:text-base text-muted-foreground font-medium hover:text-primary transition-colors block"
                    >
                      +54 9 2966 265603
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4 md:gap-6">
                  <div className="bg-white/5 p-3 md:p-4 rounded-[1.2rem] shadow-sm shrink-0">
                    <Mail className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                  </div>
                  <div className="overflow-hidden">
                    <p className="font-bold text-base md:text-lg mb-1">Email</p>
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
        </div>
      </div>
    </section>
  );
};
