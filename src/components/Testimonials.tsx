import React from 'react';
import { PORTFOLIO_DATA } from '@/data/portfolioContent';
import { Quote } from 'lucide-react';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-36 bg-ivory text-charcoal border-b border-ivory-border relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-16 border-b border-ivory-border">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[1px] bg-charcoal" />
              <span className="text-xs font-heading font-bold uppercase tracking-widest text-charcoal-400">
                Endorsements
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold tracking-tight text-charcoal">
              KIND WORDS
            </h2>
          </div>
          <p className="text-sm md:text-base text-charcoal-500 font-body max-w-md">
            Feedback from founders, brand leaders, and creative directors who have collaborated on campaigns.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
          {PORTFOLIO_DATA.testimonials.map((item, idx) => (
            <div
              key={item.id}
              className="relative p-8 rounded-2xl bg-ivory-card border border-ivory-border hover:border-charcoal transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <Quote className="w-8 h-8 text-charcoal-300 group-hover:text-charcoal transition-colors mb-6" />
                <p className="text-base sm:text-lg text-charcoal-800 font-body leading-relaxed font-normal italic">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-6 mt-8 border-t border-ivory-border">
                <div className="font-heading font-bold text-charcoal text-base">
                  {item.author}
                </div>
                <div className="text-xs text-charcoal-500 font-body mt-0.5">
                  {item.role}, <span className="font-semibold text-charcoal-700">{item.company}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
