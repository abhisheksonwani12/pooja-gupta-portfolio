import React from 'react';
import Image from 'next/image';
import { PORTFOLIO_DATA } from '@/data/portfolioContent';
import { MapPin, Target, Users, Wrench } from 'lucide-react';

export default function AboutPooja() {
  return (
    <section id="about" className="py-24 md:py-36 bg-ivory text-charcoal border-b border-ivory-border relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        
        {/* Section Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Portrait Photo with Editorial Frame */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden bg-charcoal-100 border border-ivory-border aspect-[4/5] shadow-xl">
              <Image
                src={PORTFOLIO_DATA.personal.aboutImage}
                alt="Pooja Gupta — Creative Direction & Social Strategy"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-[center_25%] filter contrast-[1.02]"
              />
              
              {/* Subtle vignette & editorial tag */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="text-xs font-heading font-semibold uppercase tracking-widest text-accent">
                  Pooja Gupta
                </p>
                <p className="text-sm font-body text-white/90">
                  Strategist · Creator · Cultural Observer
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Bio & Core Values */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Eyebrow & Title */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-[1px] bg-charcoal" />
                <span className="text-xs font-heading font-bold uppercase tracking-widest text-charcoal-400">
                  About Me
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold tracking-tight text-charcoal">
                {PORTFOLIO_DATA.about.heading}
              </h2>
            </div>

            {/* Core Philosophy Statement */}
            <div className="p-6 rounded-2xl bg-ivory-card border-l-4 border-l-charcoal border border-ivory-border">
              <p className="text-lg sm:text-xl font-heading font-semibold text-charcoal leading-snug">
                &ldquo;{PORTFOLIO_DATA.about.statement}&rdquo;
              </p>
            </div>

            {/* Narrative Paragraphs */}
            <div className="space-y-4 text-charcoal-600 font-body text-base leading-relaxed">
              <p>{PORTFOLIO_DATA.about.body1}</p>
              <p>{PORTFOLIO_DATA.about.body2}</p>
            </div>

            {/* Personal Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-ivory-border">
              {PORTFOLIO_DATA.about.details.map((detail, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-ivory-card border border-ivory-border">
                  <span className="text-[11px] font-heading font-bold uppercase tracking-wider text-charcoal-400 block mb-1">
                    {detail.label}
                  </span>
                  <span className="text-sm font-heading font-semibold text-charcoal">
                    {detail.value}
                  </span>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
