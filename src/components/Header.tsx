
"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown, Instagram, Facebook, Youtube, BookOpen, GraduationCap } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/app/lib/placeholder-images';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#inicio');

  const logoImg = PlaceHolderImages.find(img => img.id === 'academy-logo');

  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
    
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['inicio', 'servicios', 'testimonios', 'planes', 'productos', 'faq'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= -150 && rect.top <= 300;
        }
        return false;
      });
      if (current) setActiveSection(`/#${current}`);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '/#inicio' },
    { name: 'Nuestra metodología', href: '/#servicios' },
    { name: 'Casos de éxito', href: '/#testimonios' },
    { name: 'Programas', href: '/#planes' },
  ];

  const productLinks = [
    { name: 'Libros digitales', href: '/#productos-libros', icon: <BookOpen className="w-4 h-4" /> },
    { name: 'Cursos', href: '/#productos-cursos', icon: <GraduationCap className="w-4 h-4" /> },
  ];

  const socialLinks = [
    { name: 'Instagram', href: 'https://www.instagram.com/pilotos.asesalvolante/', icon: <Instagram className="w-4 h-4" /> },
    { name: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61576666433315', icon: <Facebook className="w-4 h-4" /> },
    { name: 'YouTube', href: 'https://www.youtube.com/@pilotosasesalvolante', icon: <Youtube className="w-4 h-4" /> },
    { 
      name: 'TikTok', 
      href: 'https://www.tiktok.com/@pilotos_asesalvolante', 
      icon: (
        <svg viewBox="0 0 448 512" className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg">
          <path d="M448 209.91a210.06 210.06 0 0 1-122.77-39.25v178.72A162.55 162.55 0 1 1 185 188.31v89.89a74.62 74.62 0 1 0 52.23 71.18V0h88a121.18 121.18 0 0 0 1.86 22.17h.1a122.18 122.18 0 0 0 103.81 102.39 121.43 121.43 0 0 0 67 20.14z"/>
        </svg>
      ) 
    },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-black border-b border-white/5",
        isScrolled || mobileMenuOpen 
          ? "py-2 shadow-lg" 
          : "py-4"
      )}
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link 
          href="/#inicio" 
          className="flex items-center gap-0 group relative z-50 -ml-1 md:-ml-2"
          onClick={() => {
            setActiveSection('/#inicio');
            setMobileMenuOpen(false);
          }}
        >
          {logoImg ? (
            <div className="relative h-12 w-48 md:h-14 md:w-60 transition-all duration-300">
              <Image 
                src={logoImg.imageUrl} 
                alt={logoImg.description} 
                fill
                className="object-contain"
                priority
                data-ai-hint={logoImg.imageHint}
              />
            </div>
          ) : (
            <span className="text-xl md:text-2xl font-bold font-headline tracking-tight text-white">
              Pilotos - <span className="text-primary">ases al volante</span>
            </span>
          )}
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setActiveSection(link.href)}
              className={cn(
                "relative text-sm lg:text-base font-bold transition-colors duration-300",
                activeSection === link.href 
                  ? "text-primary" 
                  : "text-slate-300 hover:text-white"
              )}
            >
              {link.name}
              <span className={cn(
                "absolute -bottom-1 left-0 w-full h-0.5 bg-primary transition-transform duration-300 origin-left",
                activeSection === link.href ? "scale-x-100" : "scale-x-0"
              )} />
            </Link>
          ))}
          
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-sm lg:text-base font-bold text-slate-300 hover:text-white outline-none transition-colors">
              Productos
              <ChevronDown className="w-4 h-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-black border-white/10 text-white p-2 min-w-[180px]">
              {productLinks.map((product) => (
                <DropdownMenuItem key={product.name} asChild>
                  <Link 
                    href={product.href} 
                    className="flex items-center gap-3 p-2 hover:bg-white/10 rounded-md cursor-pointer transition-colors"
                  >
                    <span className="text-primary">{product.icon}</span>
                    <span className="font-bold text-sm">{product.name}</span>
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Link
            href="/#faq"
            onClick={() => setActiveSection('/#faq')}
            className={cn(
              "relative text-sm lg:text-base font-bold transition-colors duration-300",
              activeSection === '/#faq' 
                ? "text-primary" 
                : "text-slate-300 hover:text-white"
            )}
          >
            Preguntas frecuentes
            <span className={cn(
              "absolute -bottom-1 left-0 w-full h-0.5 bg-primary transition-transform duration-300 origin-left",
              activeSection === '/#faq' ? "scale-x-100" : "scale-x-0"
            )} />
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-sm lg:text-base font-bold text-slate-300 hover:text-white outline-none transition-colors">
              Redes
              <ChevronDown className="w-4 h-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-black border-white/10 text-white p-2 min-w-[160px]">
              {socialLinks.map((social) => (
                <DropdownMenuItem key={social.name} asChild>
                  <a 
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-2 hover:bg-white/10 rounded-md cursor-pointer transition-colors"
                  >
                    <span className="text-primary">{social.icon}</span>
                    <span className="font-bold text-sm">{social.name}</span>
                  </a>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Link href="/#planes">
            <Button className="bg-green-600 hover:bg-green-700 text-white rounded-full px-6 font-bold shadow-lg shadow-green-600/20 h-10 text-sm">
              Quiero empezar
            </Button>
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden relative z-50 p-2 text-white focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <div className={cn(
        "fixed inset-0 bg-black z-40 flex flex-col items-center justify-center transition-all duration-500 md:hidden overflow-y-auto",
        mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
      )}>
        <nav className="flex flex-col items-center gap-5 p-6 w-full max-w-xs text-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-2xl font-bold tracking-tight transition-colors",
                activeSection === link.href ? "text-primary" : "text-white"
              )}
              onClick={() => {
                setActiveSection(link.href);
                setMobileMenuOpen(false);
              }}
            >
              {link.name}
            </Link>
          ))}
          
          <div className="flex flex-col items-center gap-3 py-2 border-y border-white/5 w-full">
            <span className="text-primary font-black uppercase tracking-[0.2em] text-[10px]">Productos</span>
            {productLinks.map((product) => (
              <Link
                key={product.name}
                href={product.href}
                className="text-xl font-bold text-white hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {product.name}
              </Link>
            ))}
          </div>

          <Link
            href="/#faq"
            className={cn(
              "text-2xl font-bold tracking-tight transition-colors",
              activeSection === '/#faq' ? "text-primary" : "text-white"
            )}
            onClick={() => {
              setActiveSection('/#faq');
              setMobileMenuOpen(false);
            }}
          >
            Preguntas frecuentes
          </Link>
          
          <div className="w-full pt-4 mt-2">
            <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em] mb-4">Nuestras Redes</p>
            <div className="flex justify-center gap-6">
              {socialLinks.map((social) => (
                <a 
                  key={social.name}
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:text-primary transition-colors"
                  aria-label={social.name}
                >
                  <span className="[&>svg]:w-6 [&>svg]:h-6">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          <Link href="/#planes" onClick={() => setMobileMenuOpen(false)} className="mt-6 w-full">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white w-full h-14 text-lg rounded-xl font-bold">
              Inscribirme ahora
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  );
};
