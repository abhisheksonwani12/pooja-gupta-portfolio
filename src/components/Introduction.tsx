import React from 'react';
import { PORTFOLIO_DATA } from '@/data/portfolioContent';
import { Sparkles } from 'lucide-react';

export default function Introduction() {
  return (
    <section id="intro" className="py-24 md:py-36 bg-ivory text-charcoal border-b border-ivory-border relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        {/* Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column - Section Index / Small Label */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <span className="w-8 h-[1px] bg-charcoal" />
              <span className="text-xs font-heading font-bold uppercase tracking-widest text-charcoal-400">
                {PORTFOLIO_DATA.intro.label}
              </span>
            </div>

            <div className="p-6 bg-ivory-card border border-ivory-border rounded-2xl flex flex-col gap-3">
              <div className="flex items-center gap-2 text-xs font-heading font-semibold text-charcoal uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-charcoal-500" />
                <span>Creative Philosophy</span>
              </div>
              <p className="text-xs text-charcoal-500 leading-relaxed font-body">
                Social media is the digital storefront of modern culture. Every aesthetic choice, word, and timing decision communicates your brand values.
              </p>
            </div>
          </div>

          {/* Right Column - Large Typographic Statement & Bio */}
          <div className="lg:col-span-8 space-y-10">
            {/* Big Editorial Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5.5xl font-heading font-bold tracking-tight leading-[1.15] text-charcoal text-balance">
              GOOD SOCIAL MEDIA ISN&apos;T JUST ABOUT POSTING.{' '}
              <span className="text-charcoal-400 font-normal">
                IT&apos;S ABOUT CREATING A REASON TO STOP, FEEL AND REMEMBER.
              </span>
            </h2>

            {/* Supporting Copy with generous line-height */}
            <div className="pt-4 border-t border-ivory-border space-y-6">
              <p className="text-lg sm:text-xl text-charcoal-600 font-body leading-relaxed font-normal">
                {PORTFOLIO_DATA.intro.paragraph}
              </p>

              {/* Tag Pills */}
              <div className="flex flex-wrap gap-2 pt-2">
                {[
                  'Strategic Storytelling',
                  'Audience Retention',
                  'Organic Growth Systems',
                  'Aesthetic Brand Identity',
                  'Cross-Platform Distribution',
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-1.5 rounded-full text-xs font-heading font-medium bg-ivory-card border border-ivory-border text-charcoal-600 hover:border-charcoal-300 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
