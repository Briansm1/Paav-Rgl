"use client";

import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fade-in' | 'slide-up' | 'slide-in-right' | 'slide-in-left';
  delay?: number;
}

export const ScrollReveal = ({ 
  children, 
  className, 
  animation = 'slide-up',
  delay = 0 
}: ScrollRevealProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    const currentRef = domRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const animations = {
    'fade-in': 'animate-in fade-in duration-1000',
    'slide-up': 'animate-in fade-in slide-in-from-bottom-10 duration-1000',
    'slide-in-right': 'animate-in fade-in slide-in-from-right-10 duration-1000',
    'slide-in-left': 'animate-in fade-in slide-in-from-left-10 duration-1000',
  };

  return (
    <div
      ref={domRef}
      className={cn(
        'opacity-0',
        isVisible && animations[animation],
        isVisible && 'opacity-100',
        className
      )}
      style={{ animationDelay: `${delay}ms`, animationFillMode: 'both' }}
    >
      {children}
    </div>
  );
};
