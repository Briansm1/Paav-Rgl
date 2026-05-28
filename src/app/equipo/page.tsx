
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Award, ShieldCheck, CheckCircle2, Eye } from 'lucide-react';
import { PlaceHolderImages } from '@/app/lib/placeholder-images';

const teamMembers = [
  {
    name: 'Brian',
    role: 'Instructor Principal y Fundador',
    description: 'Especialista en mentalidad al volante y técnicas de conducción defensiva. Con más de 5 años formando conductores que hoy circulan con completa autonomía y seguridad.',
    profileImg: PlaceHolderImages.find(img => img.id === 'instructor-brian-profile')?.imageUrl || '',
    certUrl: 'https://drive.google.com/file/d/1V6xtlebZbeOtOUkfx6eshNXJAywFtkh2/view?usp=sharing',
    specialties: ['MENTALIDAD DE PILOTO', 'ESTACIONAMIENTO DE PRECISIÓN', 'GESTIÓN DEL MIEDO'],
  }
];

export default function EquipoPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-24 pb-12 md:pt-32 md:pb-20 bg-secondary/30 border-b border-white/5">
        <div className="container mx-auto px-4 text-center">
          <Link href="/#inicio" className="inline-flex items-center gap-2 text-primary font-bold mb-4 hover:underline">
            <ArrowLeft className="w-4 h-4" />
            Volver al inicio
          </Link>
          <h1 className="text-3xl md:text-5xl font-bold font-headline mb-4 text-foreground">
            Nuestro <span className="text-primary">Equipo</span>
          </h1>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-24 md:space-y-32">
            {teamMembers.map((member, index) => (
              <div key={index} className="max-w-6xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center lg:items-start">
                  
                  {/* Profile Section */}
                  <div className="w-full lg:w-1/3 flex flex-col items-center lg:items-start text-center lg:text-left gap-6">
                    <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-2xl border-2 border-primary/20 bg-secondary">
                      <Image 
                        src={member.profileImg} 
                        alt={member.name} 
                        fill 
                        className="object-cover"
                        style={{ objectPosition: 'center 15%' }}
                      />
                    </div>
                    <div className="space-y-2">
                      <h2 className="text-3xl font-bold tracking-tight text-white">{member.name}</h2>
                      <p className="text-primary font-bold uppercase tracking-widest text-sm">{member.role}</p>
                    </div>
                    <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                      {member.specialties.map((spec, i) => (
                        <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold text-slate-300 uppercase tracking-widest">
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Details & Certificate Section */}
                  <div className="w-full lg:w-2/3 space-y-12">
                    <div className="bg-secondary p-8 md:p-12 rounded-[2.5rem] border border-white/5 shadow-xl">
                      <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-white">
                        <ShieldCheck className="w-6 h-6 text-primary" />
                        Sobre su formación
                      </h3>
                      <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                        {member.description}
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex items-start gap-4">
                          <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                          <p className="text-foreground/90 font-medium">Instructor certificado con aval nacional</p>
                        </div>
                        <div className="flex items-start gap-4">
                          <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1" />
                          <p className="text-foreground/90 font-medium">Experto en psicología vial</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-primary/10 to-transparent p-8 md:p-12 rounded-[2.5rem] border border-primary/20 shadow-lg">
                      <div className="flex flex-col sm:flex-row gap-8 items-center justify-between">
                        <h3 className="text-2xl font-bold flex items-center gap-3 text-white">
                          <Award className="w-7 h-7 text-gold" />
                          Certificación profesional
                        </h3>
                        
                        <a 
                          href={member.certUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="no-underline"
                        >
                          <Button className="rounded-2xl bg-primary hover:bg-primary/90 text-white gap-3 font-bold px-10 h-16 text-lg transition-all active:scale-95 shadow-none border-none">
                            <Eye className="w-6 h-6" />
                            Ver
                          </Button>
                        </a>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/20 border-t border-white/5">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Listo para empezar tus clases?</h2>
          <p className="text-muted-foreground text-lg mb-10">
            Sumate a la academia N°1 de la región y aprendé con profesionales que realmente se preocupan por tu progreso.
          </p>
          <Link href="/#planes">
            <Button size="lg" className="h-14 px-12 rounded-full bg-primary hover:bg-primary/90 font-bold text-lg animate-heartbeat">
              Ver programas disponibles
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
