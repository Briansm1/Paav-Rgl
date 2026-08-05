
"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown, Instagram, Facebook, Youtube, Book, Laptop, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { PlaceHolderImages } from '@/app/lib/placeholder-images';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [mobileSocialsOpen, setMobileSocialsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#inicio');

  const logoImg = PlaceHolderImages.find(img => img.id === 'academy-logo');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const sections = ['inicio', 'servicios', 'testimonios', 'planes', 'faq'];
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

  // Cerrar menú al cambiar de sección
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Inicio', href: '/#inicio' },
    { name: 'Metodología', href: '/#servicios' },
    { name: 'Experiencias', href: '/#testimonios' },
    { name: 'Planes', href: '/#planes' },
    { name: 'FAQ', href: '/#faq' },
  ];

  const productLinks = [
    { name: 'Programas digitales', href: '/productos/libros', icon: <Book className="w-4 h-4" /> },
    { name: 'Cursos online', href: '/#productos-cursos', icon: <Laptop className="w-4 h-4" /> },
  ];

  const socialLinks = [
    { name: 'Instagram', href: 'https://www.instagram.com/pilotosaav.autoescuela/', icon: <Instagram className="w-4 h-4" /> },
    { name: 'Facebook', href: 'https://www.facebook.com/autoescuela.riogallegos.pilotosasesalvolante', icon: <Facebook className="w-4 h-4" /> },
    { name: 'YouTube', href: 'https://www.youtube.com/@pilotosasesalvolante', icon: <Youtube className="w-4 h-4" /> },
  ];

  const renderNavLink = (link: typeof navLinks[0]) => (
    <Link
      key={link.name}
      href={link.href}
      onClick={() => {
        setActiveSection(link.href);
        setMobileMenuOpen(false);
      }}
      className={cn(
        "relative text-[16px] font-medium transition-colors duration-300",
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
  );

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-black border-b border-white/5",
      isScrolled || mobileMenuOpen ? "py-2 shadow-lg" : "py-4"
    )}>
      <div className="w-full max-w-[1440px] mx-auto px-4 lg:px-6 flex items-center justify-between">
        <Link href="/#inicio" className="flex items-center group relative z-50 -ml-1 lg:-ml-2" onClick={() => {
          setActiveSection('/#inicio');
          setMobileMenuOpen(false);
        }}>
          {logoImg ? (
            <div className="relative h-10 w-40 md:h-12 md:w-48 lg:h-14 lg:w-60 transition-all duration-300">
              <Image src={logoImg.imageUrl} alt={logoImg.description} fill className="object-contain" priority />
            </div>
          ) : (
            <span className="text-xl md:text-2xl font-bold font-display tracking-tight text-white uppercase">
              Pilotos - <span className="text-primary">ases al volante</span>
            </span>
          )}
        </Link>

        <nav className="hidden lg:flex items-center gap-6 lg:gap-8">
          {navLinks.slice(0, 4).map(renderNavLink)}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-[16px] font-medium text-slate-300 hover:text-white outline-none transition-colors">
              Productos <ChevronDown className="w-4 h-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-black border-white/10 text-white p-2 min-w-[220px]">
              {productLinks.map((product) => (
                <DropdownMenuItem key={product.name} asChild className="focus:bg-primary focus:text-white cursor-pointer group">
                  <Link href={product.href} className="flex items-center justify-between gap-3 p-2 rounded-md w-full">
                    <div className="flex items-center gap-3">
                      <span className="text-white group-focus:text-white">{product.icon}</span>
                      <span className="font-semibold text-caption">{product.name}</span>
                    </div>
                    {product.name === 'Cursos online' && (
                      <Badge variant="outline" className="text-[10px] h-4 px-1.5 border-primary/50 text-primary uppercase font-black tracking-tighter group-focus:border-white/50 group-focus:text-white">
                        Próximamente
                      </Badge>
                    )}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          {navLinks.slice(4).map(renderNavLink)}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-[16px] font-medium text-slate-300 hover:text-white outline-none transition-colors">
              Redes <ChevronDown className="w-4 h-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-black border-white/10 text-white p-2 min-w-[160px]">
              {socialLinks.map((social) => (
                <DropdownMenuItem key={social.name} asChild className="focus:bg-primary focus:text-white cursor-pointer">
                  <a href={social.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-2 rounded-md">
                    <span className="text-white">{social.icon}</span>
                    <span className="font-semibold text-caption">{social.name}</span>
                  </a>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        <button className="lg:hidden relative z-50 p-3 min-w-[44px] min-h-[44px] text-white flex items-center justify-center" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
          {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      <div className={cn(
        "fixed inset-0 bg-black z-40 flex flex-col items-center justify-center transition-all duration-500 lg:hidden overflow-y-auto pt-16",
        mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
      )}>
        <nav className="flex flex-col items-center gap-4 p-6 w-full max-w-sm text-center">
          {navLinks.slice(0, 4).map((link) => (
            <Link key={link.name} href={link.href} className={cn("text-2xl font-semibold tracking-tight py-3 min-h-[44px] w-full block", activeSection === link.href ? "text-primary" : "text-white")} onClick={() => {
              setActiveSection(link.href);
              setMobileMenuOpen(false);
            }}>
              {link.name}
            </Link>
          ))}
          
          {/* Productos en Móvil */}
          <div className="w-full flex flex-col items-center">
            <button onClick={() => setMobileProductsOpen(!mobileProductsOpen)} className="flex items-center justify-center gap-2 text-2xl font-semibold text-white py-3 min-h-[44px] w-full">
              Productos <ChevronDown className={cn("w-5 h-5 transition-transform", mobileProductsOpen && "rotate-180")} />
            </button>
            <div className={cn("flex flex-col items-center gap-5 overflow-hidden transition-all duration-300 w-full bg-white/5 rounded-2xl", mobileProductsOpen ? "max-h-72 py-6 mt-2 opacity-100" : "max-h-0 py-0 opacity-0")}>
              {productLinks.map((product) => (
                <div key={product.name} className="flex flex-col items-center gap-1.5">
                  <Link href={product.href} className="text-lg font-semibold text-slate-300 hover:text-primary flex items-center gap-2 py-2" onClick={() => {
                    setMobileMenuOpen(false);
                    setMobileProductsOpen(false);
                  }}>
                    {product.icon} {product.name}
                  </Link>
                  {product.name === 'Cursos online' && (
                    <Badge variant="outline" className="text-[10px] h-5 px-2 border-primary/50 text-primary uppercase font-black">Próximamente</Badge>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Redes en Móvil */}
          <div className="w-full flex flex-col items-center">
            <button onClick={() => setMobileSocialsOpen(!mobileSocialsOpen)} className="flex items-center justify-center gap-2 text-2xl font-semibold text-white py-3 min-h-[44px] w-full">
              Redes <ChevronDown className={cn("w-5 h-5 transition-transform", mobileSocialsOpen && "rotate-180")} />
            </button>
            <div className={cn("flex flex-col items-center gap-5 overflow-hidden transition-all duration-300 w-full bg-white/5 rounded-2xl", mobileSocialsOpen ? "max-h-72 py-6 mt-2 opacity-100" : "max-h-0 py-0 opacity-0")}>
              {socialLinks.map((social) => (
                <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-slate-300 hover:text-primary flex items-center gap-2 py-2" onClick={() => setMobileMenuOpen(false)}>
                  {social.icon} {social.name}
                </a>
              ))}
            </div>
          </div>

          {navLinks.slice(4).map((link) => (
            <Link key={link.name} href={link.href} className={cn("text-2xl font-semibold tracking-tight py-3 min-h-[44px] w-full block", activeSection === link.href ? "text-primary" : "text-white")} onClick={() => {
              setActiveSection(link.href);
              setMobileMenuOpen(false);
            }}>
              {link.name}
            </Link>
          ))}
          
          <div className="w-full pt-4">
            <Link href="/#planes" onClick={() => setMobileMenuOpen(false)}>
              <Button className="w-full h-14 bg-primary hover:bg-primary/90 rounded-full font-bold text-lg flex items-center justify-center gap-2 shadow-none border-none">
                Ver planes <ChevronRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};
