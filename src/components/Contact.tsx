
"use client";

import React, { useState, useRef } from 'react';
import { Mail, MessageSquare, MapPin, Image as ImageIcon, Send, Loader2, Upload, X, ShieldCheck } from 'lucide-react';
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
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const academyEmail = "soporte@pilotosasesalvolante.shop";
  const academyWhatsApp = "5492966265603";

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      rating: '5',
      review: '',
    },
  });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedImage(e.target.files[0]);
    }
  };

  const removeImage = () => {
    setSelectedImage(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    
    try {
      // 1. Guardar en la colección de reseñas para el historial
      const reviewData = {
        ...values,
        licenseImage: selectedImage ? selectedImage.name : null,
        createdAt: serverTimestamp(),
      };

      addDoc(collection(firestore, 'reviews'), reviewData);

      // 2. Disparar el correo automático vía colección 'mail' (Extensión Trigger Email)
      // Usamos un array en 'to' para asegurar compatibilidad total con la extensión
      addDoc(collection(firestore, 'mail'), {
        to: [academyEmail],
        message: {
          subject: `Nueva Reseña de Estudiante: ${values.name}`,
          text: `Se ha recibido una nueva reseña.\n\nNombre: ${values.name}\nEmail: ${values.email}\nCalificación: ${values.rating} estrellas\nReseña: ${values.review}${selectedImage ? `\nImagen adjunta: ${selectedImage.name}` : ''}`,
          html: `
            <div style="font-family: sans-serif; padding: 20px; color: #333; max-width: 600px; border: 1px solid #eee; border-radius: 12px;">
              <h2 style="color: #213584; border-bottom: 2px solid #213584; padding-bottom: 10px;">Nueva Reseña Recibida</h2>
              <p style="font-size: 16px;"><strong>Nombre:</strong> ${values.name}</p>
              <p style="font-size: 16px;"><strong>Email:</strong> ${values.email}</p>
              <p style="font-size: 16px;"><strong>Calificación:</strong> ${values.rating} / 5 estrellas</p>
              ${selectedImage ? `<p style="font-size: 16px;"><strong>Imagen adjunta:</strong> ${selectedImage.name}</p>` : ''}
              <div style="margin-top: 20px; padding: 15px; background-color: #f3f4f6; border-left: 4px solid #213584; border-radius: 4px;">
                <p style="margin: 0; font-style: italic; line-height: 1.6;">"${values.review}"</p>
              </div>
              <p style="margin-top: 20px; font-size: 12px; color: #666;">Este es un mensaje automático enviado desde el sitio web de Pilotos - Ases al Volante.</p>
            </div>
          `
        }
      });
      
      toast({
        title: "¡Reseña enviada!",
        description: "Muchas gracias por tu opinión. El equipo la recibirá a la brevedad.",
      });

      // 3. Notificación vía WhatsApp (Aviso inmediato)
      const whatsappText = encodeURIComponent(
        `*Nueva Reseña Recibida*\n\n` +
        `*Nombre:* ${values.name}\n` +
        `*Calificación:* ${values.rating} ⭐\n` +
        `*Reseña:* "${values.review}"\n` +
        `${selectedImage ? `*Imagen:* Adjunta en el email` : ''}`
      );
      
      window.open(`https://wa.me/${academyWhatsApp}?text=${whatsappText}`, '_blank');

      // Resetear formulario y estado
      form.reset();
      setSelectedImage(null);
      if (fileInputRef.current) fileInputRef.current.value = '';
      setIsSubmitting(false);

    } catch (e: any) {
      setIsSubmitting(false);
      const permissionError = new FirestorePermissionError({
        path: 'reviews',
        operation: 'create',
        requestResourceData: values,
      });
      errorEmitter.emit('permission-error', permissionError);
    }
  };

  return (
    <section id="contacto" className="relative py-20 md:py-32 bg-background overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background via-background/50 to-transparent pointer-events-none z-10"></div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background via-background/50 to-transparent pointer-events-none z-10"></div>

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
              <div className="mb-8 text-center md:text-left">
                <h4 className="text-xl md:text-3xl font-bold mb-3 md:mb-4 tracking-tight">Contanos tu experiencia</h4>
                <p className="text-sm md:text-base text-muted-foreground">
                  Tu reseña se enviará automáticamente a nuestro equipo y se te abrirá un aviso por WhatsApp.
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

                  {/* Campo de imagen adjunta */}
                  <div className="space-y-3">
                    <div className="space-y-1">
                      <FormLabel>Adjuntar foto de tu licencia (opcional)</FormLabel>
                      <div className="flex items-start gap-2 bg-primary/5 p-3 rounded-lg border border-primary/10">
                        <ShieldCheck className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <p className="text-[11px] text-muted-foreground leading-snug">
                          <strong>Tu privacidad es prioridad:</strong> Antes de compartir tu reseña, nuestro equipo se encargará de tapar cualquier dato sensible o personal de tu licencia para proteger tu identidad.
                        </p>
                      </div>
                    </div>
                    
                    <div 
                      onClick={() => fileInputRef.current?.click()}
                      className="cursor-pointer border-2 border-dashed border-white/10 rounded-xl p-4 flex flex-col items-center justify-center gap-2 hover:bg-white/5 transition-colors bg-white/5"
                    >
                      <input 
                        type="file" 
                        ref={fileInputRef} 
                        onChange={handleImageChange} 
                        accept="image/*" 
                        className="hidden" 
                      />
                      {selectedImage ? (
                        <div className="flex items-center gap-2 w-full justify-between bg-primary/20 p-2 rounded-lg border border-primary/30">
                          <div className="flex items-center gap-2 overflow-hidden">
                            <ImageIcon className="w-4 h-4 text-primary shrink-0" />
                            <span className="text-xs text-primary font-bold truncate">{selectedImage.name}</span>
                          </div>
                          <button type="button" onClick={(e) => { e.stopPropagation(); removeImage(); }}>
                            <X className="w-4 h-4 text-primary hover:text-white" />
                          </button>
                        </div>
                      ) : (
                        <>
                          <Upload className="w-6 h-6 text-muted-foreground" />
                          <span className="text-xs text-muted-foreground font-medium">Presiona para subir una foto</span>
                        </>
                      )}
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full h-12 md:h-14 bg-primary hover:bg-primary/90 text-white text-base md:text-lg font-bold rounded-xl shadow-lg shadow-primary/20 transition-all active:scale-[0.98] flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        Enviar reseña
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
              <h4 className="text-xl md:text-2xl font-bold mb-8 md:mb-10 tracking-tight text-center md:text-left">Canales de atención</h4>
              <div className="space-y-6 md:space-y-8">
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
                      href={`https://wa.me/${academyWhatsApp}`}
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
        </div>
      </div>
    </section>
  );
};
