import React from 'react';
import { PORTFOLIO_DATA } from '@/data/portfolioContent';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Process() {
  return (
    <section id="process" className="py-24 md:py-36 bg-ivory text-charcoal border-b border-ivory-border relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-16 border-b border-ivory-border">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[1px] bg-charcoal" />
              <span className="text-xs font-heading font-bold uppercase tracking-widest text-charcoal-400">
                Methodology
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold tracking-tight text-charcoal">
              HOW I WORK
            </h2>
          </div>
          <p className="text-sm md:text-base text-charcoal-500 font-body max-w-md">
            A battle-tested 4-step framework designed to eliminate guesswork and build predictable organic momentum.
          </p>
        </div>

        {/* 4-Step Editorial Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-12">
          {PORTFOLIO_DATA.process.map((item, idx) => (
            <div
              key={item.step}
              className="relative p-8 rounded-2xl bg-ivory-card border border-ivory-border hover:border-charcoal transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Step Number & Connector */}
                <div className="flex items-center justify-between pb-6 border-b border-ivory-border">
                  <span className="text-3xl font-heading font-extrabold text-charcoal group-hover:text-charcoal-900">
                    {item.step}
                  </span>
                  <span className="text-xs font-mono text-charcoal-400 uppercase tracking-wider">
                    PHASE // 0{idx + 1}
                  </span>
                </div>

                {/* Step Title & Tagline */}
                <h3 className="text-xl font-heading font-bold text-charcoal mt-6 tracking-tight">
                  {item.title}
                </h3>
                <span className="inline-block text-xs font-heading font-semibold text-charcoal-500 mt-1 mb-4 uppercase tracking-wider">
                  {item.tagline}
                </span>

                {/* Description */}
                <p className="text-sm text-charcoal-600 font-body leading-relaxed mb-6">
                  {item.description}
                </p>

                {/* Key Deliverables / Actions */}
                <div className="space-y-2 pt-4 border-t border-ivory-border/60">
                  {item.keyActions.map((action, aIdx) => (
                    <div key={aIdx} className="flex items-start gap-2 text-xs text-charcoal-500 font-body">
                      <CheckCircle2 className="w-3.5 h-3.5 text-charcoal-400 mt-0.5 flex-shrink-0" />
                      <span>{action}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Step Indicator */}
              <div className="mt-8 pt-4 border-t border-ivory-border/60 flex items-center justify-between text-xs font-heading text-charcoal-400">
                <span>Step {idx + 1} of 4</span>
                {idx < 3 && <ArrowRight className="w-4 h-4 text-charcoal-300" />}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
