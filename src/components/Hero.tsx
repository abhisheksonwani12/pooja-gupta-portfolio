'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { PORTFOLIO_DATA } from '@/data/portfolioContent';
import { ArrowDown, ArrowUpRight } from 'lucide-react';

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[95vh] lg:min-h-screen w-full flex items-center bg-[#0C0D0E] text-ivory overflow-hidden pt-24 pb-16 md:py-0"
    >
      {/* Background & Editorial Photography Container */}
      <div className="absolute inset-0 z-0 select-none overflow-hidden">
        {/* Editorial Photo Positioned to the Right with Subtle Parallax */}
        <div
          className="absolute inset-0 md:left-1/3 lg:left-2/5 w-full md:w-2/3 lg:w-3/5 h-full transition-transform duration-700 ease-out"
          style={{
            transform: `translateY(${scrollY * 0.12}px) scale(1.04)`,
          }}
        >
          <Image
            src={PORTFOLIO_DATA.personal.heroImage}
            alt="Pooja Gupta — Social Media Manager & Content Strategist"
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 60vw"
            className="object-cover object-[55%_30%] md:object-[50%_25%] lg:object-[45%_22%] filter brightness-[0.95] contrast-[1.03]"
          />
        </div>

        {/* Sophisticated Multi-Layer Editorial Gradient Overlays */}
        {/* Left-to-right gradient ensuring text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0C0D0E] via-[#0C0D0E]/85 md:via-[#0C0D0E]/75 to-transparent z-10 w-full md:w-3/4" />
        {/* Bottom vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0C0D0E] via-transparent to-[#0C0D0E]/20 z-10" />
        {/* Mobile overlay for crisp contrast */}
        <div className="absolute inset-0 bg-black/45 md:bg-transparent z-10" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 sm:px-8 md:px-12 w-full py-12 lg:py-20 flex flex-col justify-center min-h-[80vh]">
        <div className="max-w-3xl lg:max-w-3xl space-y-6 md:space-y-8">
          
          {/* Eyebrow & Live Availability Badge */}
          <div className="flex flex-wrap items-center gap-3 animate-fade-in-up">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[11px] md:text-xs font-heading font-medium tracking-widest uppercase text-ivory/90">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse-dot" />
              <span>{PORTFOLIO_DATA.hero.availabilityText}</span>
            </span>
            <span className="hidden sm:inline-block text-white/30 text-xs">•</span>
            <span className="text-[11px] md:text-xs font-heading tracking-widest uppercase text-white/70 font-semibold">
              {PORTFOLIO_DATA.hero.eyebrow}
            </span>
          </div>

          {/* Pooja Gupta Name Tag */}
          <div className="inline-flex items-center gap-3 animate-fade-in-up">
            <span className="w-8 h-[2px] bg-accent" />
            <span className="text-sm md:text-base font-heading font-bold uppercase tracking-widest text-accent">
              Pooja Gupta
            </span>
          </div>

          {/* Main Large Editorial Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold tracking-tight leading-[1.08] text-white text-balance animate-fade-in-up delay-100">
            I TURN SOCIAL MEDIA{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/95 to-white/75">
              INTO BRANDS
            </span>{' '}
            PEOPLE <span className="underline decoration-accent decoration-2 underline-offset-8">REMEMBER.</span>
          </h1>

          {/* Supporting Subheadline */}
          <p className="text-base sm:text-lg md:text-xl text-white/75 font-body font-normal leading-relaxed max-w-xl animate-fade-in-up delay-200">
            {PORTFOLIO_DATA.hero.subheadline}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2 animate-fade-in-up delay-300">
            {/* Primary CTA */}
            <button
              type="button"
              onClick={() => handleScrollTo('work')}
              className="group inline-flex items-center justify-center gap-3 bg-accent text-charcoal-900 font-heading font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-full hover:bg-accent-hover transition-all duration-300 shadow-[0_0_25px_rgba(204,255,0,0.25)] hover:shadow-[0_0_35px_rgba(204,255,0,0.4)] active:scale-95"
            >
              <span>{PORTFOLIO_DATA.hero.ctaPrimary}</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>

            {/* Secondary CTA */}
            <button
              type="button"
              onClick={() => handleScrollTo('contact')}
              className="group inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/15 backdrop-blur-md text-white border border-white/20 font-heading font-semibold text-xs uppercase tracking-widest px-8 py-4 rounded-full transition-all duration-300 active:scale-95"
            >
              <span>{PORTFOLIO_DATA.hero.ctaSecondary}</span>
            </button>
          </div>

        </div>

        {/* Bottom Editorial Details & Scroll Indicator */}
        <div className="mt-16 md:mt-24 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-heading tracking-widest text-white/50 animate-fade-in-up delay-400">
          <div className="flex items-center gap-6">
            <span>EDITORIAL STRATEGY</span>
            <span className="hidden md:inline">•</span>
            <span className="hidden md:inline">ORGANIC GROWTH</span>
            <span className="hidden md:inline">•</span>
            <span className="hidden md:inline">CREATIVE DIRECTION</span>
          </div>

          <button
            type="button"
            onClick={() => handleScrollTo('intro')}
            className="group inline-flex items-center gap-2 text-white/60 hover:text-accent transition-colors cursor-pointer"
          >
            <span>{PORTFOLIO_DATA.hero.scrollText}</span>
            <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Floating Photo Name Caption */}
      <div className="hidden md:flex absolute bottom-8 right-8 lg:right-16 z-20 items-center gap-3 px-4 py-2 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-white">
        <span className="w-2 h-2 rounded-full bg-accent" />
        <span className="text-xs font-heading font-bold uppercase tracking-widest text-white">Pooja Gupta</span>
        <span className="text-white/40 text-xs">|</span>
        <span className="text-[11px] font-heading text-white/70 uppercase tracking-wider">Social Strategist</span>
      </div>
    </section>
  );
}
