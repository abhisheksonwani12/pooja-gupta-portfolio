'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { PORTFOLIO_DATA, SocialFeedItem } from '@/data/portfolioContent';
import {
  Heart,
  MessageCircle,
  Share2,
  Play,
  Sparkles,
  Instagram,
  ArrowUpRight,
  Bookmark,
  Volume2,
  CheckCircle2,
  X,
  TrendingUp,
  Zap,
} from 'lucide-react';

const FILTER_TABS = ['ALL SHOWCASE', 'REELS', 'CAROUSELS', 'POSTS', 'CAMPAIGNS'] as const;

export default function SocialShowcase() {
  const [activeTab, setActiveTab] = useState<string>('ALL SHOWCASE');
  const [likedItems, setLikedItems] = useState<Record<string, boolean>>({});
  const [selectedFeedItem, setSelectedFeedItem] = useState<SocialFeedItem | null>(null);

  const toggleLike = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    setLikedItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredItems = activeTab === 'ALL SHOWCASE'
    ? PORTFOLIO_DATA.socialShowcase
    : PORTFOLIO_DATA.socialShowcase.filter((item) => {
        if (activeTab === 'REELS') return item.type === 'Reel';
        if (activeTab === 'CAROUSELS') return item.type === 'Carousel';
        if (activeTab === 'POSTS') return item.type === 'Post' || item.type === 'Story';
        if (activeTab === 'CAMPAIGNS') return item.type === 'Campaign';
        return true;
      });

  return (
    <section
      id="social-showcase"
      className="py-24 md:py-36 bg-[#090A0C] text-ivory border-b border-charcoal-800 relative overflow-hidden selection:bg-accent selection:text-charcoal-900"
    >
      {/* 🌟 COOL DYNAMIC ATMOSPHERIC BACKGROUND */}
      {/* Ambient Radial Glow 1 (Lime Glow) */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[140px] pointer-events-none" />
      
      {/* Ambient Radial Glow 2 (Cobalt Glow) */}
      <div className="absolute top-1/2 -right-40 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none" />
      
      {/* Ambient Radial Glow 3 (Bottom Center) */}
      <div className="absolute -bottom-32 left-1/3 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[150px] pointer-events-none" />

      {/* Cyber-Editorial Subtle Grid Background */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #FFFFFF 1px, transparent 1px), linear-gradient(to bottom, #FFFFFF 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 relative z-10">
        
        {/* Section Header with Cool Live Ticker */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-12 border-b border-charcoal-800">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/30 text-[11px] font-heading font-bold uppercase tracking-widest text-accent">
                <Zap className="w-3.5 h-3.5 fill-current" />
                <span>Live Content Laboratory</span>
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold tracking-tight text-white leading-[1.08]">
              DESIGNED FOR THE FEED.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-white to-white/60">
                BUILT FOR ATTENTION.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-white/70 font-body max-w-xl mt-4 leading-relaxed">
              Mobile-first creative content engineered with 3-second hook retention, cinematic framing, and viral storytelling frameworks.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {FILTER_TABS.map((tab) => {
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-full text-xs font-heading font-bold uppercase tracking-wider transition-all duration-300 ${
                    isActive
                      ? 'bg-accent text-charcoal-900 shadow-[0_0_20px_rgba(204,255,0,0.3)] scale-105'
                      : 'bg-charcoal-800/80 hover:bg-charcoal-700 text-white/70 hover:text-white border border-charcoal-700'
                  }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>
        </div>

        {/* ⚡ COOL STREAMING MARQUEE TICKER */}
        <div className="my-10 py-3 px-6 rounded-2xl bg-charcoal-900/80 border border-charcoal-800/80 backdrop-blur-md overflow-hidden flex items-center shadow-inner">
          <div className="flex items-center gap-8 whitespace-nowrap animate-[marquee_25s_linear_infinite] text-xs font-mono tracking-widest text-white/60 uppercase">
            <span className="flex items-center gap-2 text-accent font-bold">
              <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
              9:16 VERTICAL VIRAL HOOKS
            </span>
            <span>✦</span>
            <span>HIGH-RETENTION CAROUSELS</span>
            <span>✦</span>
            <span className="text-white font-semibold">10M+ CUMULATIVE IMPRESSIONS</span>
            <span>✦</span>
            <span>STOP-AND-STARE COLOR GRADES</span>
            <span>✦</span>
            <span className="text-accent">ALGORITHM-TUNED PACING</span>
            <span>✦</span>
            <span>BRAND VOICE & CONVERSIONS</span>
          </div>
        </div>

        {/* 📱 DYNAMIC SOCIAL FEED GRID WITH PHONE MOCKUP AESTHETICS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-6 items-start">
          {filteredItems.map((item, idx) => {
            const isLiked = likedItems[item.id];

            return (
              <div
                key={item.id}
                onClick={() => setSelectedFeedItem(item)}
                className={`group relative rounded-3xl overflow-hidden bg-[#131518] border border-charcoal-700/80 hover:border-accent/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)] cursor-pointer ${
                  idx === 1 || idx === 4 ? 'lg:translate-y-4' : ''
                }`}
              >
                {/* Top Smartphone Status Bar */}
                <div className="px-5 py-3 bg-[#131518] border-b border-charcoal-800 flex items-center justify-between text-[11px] font-mono text-white/50">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-white tracking-wider">09:41</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] uppercase tracking-wider text-accent font-bold bg-accent/10 px-2 py-0.5 rounded">
                      {item.type}
                    </span>
                  </div>
                </div>

                {/* Creator Header Bar */}
                <div className="px-5 py-3 flex items-center justify-between border-b border-charcoal-800/60 bg-[#16191D]/80">
                  <div className="flex items-center gap-2.5">
                    <div className="relative w-7 h-7 rounded-full overflow-hidden border border-accent/40">
                      <Image
                        src={PORTFOLIO_DATA.personal.heroImage}
                        alt="Pooja Gupta"
                        fill
                        className="object-cover object-top"
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-1">
                        <span className="text-xs font-heading font-bold text-white">poojagupta.social</span>
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 fill-blue-400/20" />
                      </div>
                      <span className="text-[10px] text-white/50 block font-body -mt-0.5">{item.brand}</span>
                    </div>
                  </div>

                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-charcoal-700 text-white/70">
                    {item.tag}
                  </span>
                </div>

                {/* Media Image Viewport */}
                <div className={`relative w-full ${item.aspectRatio} overflow-hidden bg-black`}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-95 group-hover:brightness-100"
                  />

                  {/* Dark Vignette Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-black/30" />

                  {/* Floating Action Badge for Reels: Audio Equalizer */}
                  {item.type === 'Reel' && (
                    <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-[11px] font-mono">
                      <Volume2 className="w-3.5 h-3.5 text-accent" />
                      <div className="flex items-end gap-0.5 h-3">
                        <span className="w-0.5 h-2 bg-accent animate-pulse" />
                        <span className="w-0.5 h-3 bg-accent animate-bounce" />
                        <span className="w-0.5 h-1.5 bg-accent animate-pulse" />
                      </div>
                    </div>
                  )}

                  {/* Center Play Button with Neon Pulse */}
                  {item.type === 'Reel' && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="w-14 h-14 rounded-full bg-accent/90 text-charcoal-900 flex items-center justify-center shadow-[0_0_25px_rgba(204,255,0,0.5)] group-hover:scale-115 transition-transform">
                        <Play className="w-6 h-6 fill-current translate-x-0.5" />
                      </div>
                    </div>
                  )}

                  {/* Floating Click to Inspect Pill */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white text-charcoal-900 text-[11px] font-heading font-bold uppercase tracking-wider shadow-lg">
                      <span>Inspect Hook</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>

                {/* Bottom Interactive Feed Controls */}
                <div className="p-5 bg-[#131518] space-y-3">
                  <div className="flex items-center justify-between">
                    {/* Like, Comment, Share Actions */}
                    <div className="flex items-center gap-4">
                      <button
                        type="button"
                        onClick={(e) => toggleLike(e, item.id)}
                        className="flex items-center gap-1.5 text-xs font-mono transition-transform active:scale-125"
                      >
                        <Heart
                          className={`w-4 h-4 transition-colors ${
                            isLiked
                              ? 'text-rose-500 fill-rose-500'
                              : 'text-white/80 hover:text-rose-400'
                          }`}
                        />
                        <span className={isLiked ? 'text-rose-400 font-bold' : 'text-white/70'}>
                          {isLiked ? 'Liked' : item.likes || '12.4K'}
                        </span>
                      </button>

                      <div className="flex items-center gap-1.5 text-xs font-mono text-white/70">
                        <MessageCircle className="w-4 h-4 text-white/80" />
                        <span>{item.comments || '142'}</span>
                      </div>

                      <div className="flex items-center gap-1.5 text-xs font-mono text-white/70">
                        <Share2 className="w-4 h-4 text-white/80" />
                        <span>{item.shares || '890'}</span>
                      </div>
                    </div>

                    <Bookmark className="w-4 h-4 text-white/50 hover:text-accent cursor-pointer transition-colors" />
                  </div>

                  {/* Title & Caption */}
                  <div className="pt-2 border-t border-charcoal-800">
                    <p className="text-xs font-heading font-bold text-white tracking-tight">
                      {item.title}
                    </p>
                    <p className="text-[11px] text-white/50 font-body line-clamp-1 mt-0.5">
                      Strategy engineered for maximum algorithmic push & audience retention.
                    </p>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom Callout & Instagram Button with Cool Border Glow */}
        <div className="mt-20 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-charcoal-900 via-[#14161B] to-charcoal-900 border border-charcoal-700/90 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
          <div className="space-y-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <Instagram className="w-5 h-5 text-accent" />
              <span className="text-base font-heading font-bold text-white">
                Daily Feed Breakdowns & Creative Experiments
              </span>
            </div>
            <p className="text-xs sm:text-sm text-white/60 font-body">
              Follow along on Instagram for behind-the-scenes strategy, hook formulas, and aesthetic direction.
            </p>
          </div>

          <a
            href={PORTFOLIO_DATA.personal.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent text-charcoal-900 font-heading font-bold text-xs uppercase tracking-widest hover:bg-accent-hover transition-all duration-300 shadow-[0_0_25px_rgba(204,255,0,0.25)] whitespace-nowrap"
          >
            <span>VIEW MORE ON INSTAGRAM</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

      </div>

      {/* 🔍 INTERACTIVE FEED ITEM STRATEGY INSPECTOR MODAL */}
      {selectedFeedItem && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 md:p-10 animate-fade-in-up"
          onClick={() => setSelectedFeedItem(null)}
        >
          <div
            className="bg-[#121418] text-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-charcoal-700 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-72 sm:h-80 w-full overflow-hidden">
              <Image
                src={selectedFeedItem.image}
                alt={selectedFeedItem.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121418] via-transparent to-black/60" />

              <button
                type="button"
                onClick={() => setSelectedFeedItem(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/60 text-white hover:bg-black flex items-center justify-center transition-colors border border-white/20"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-6 left-6 right-6 space-y-1">
                <span className="text-[11px] font-mono uppercase tracking-widest text-accent font-bold px-2.5 py-0.5 rounded bg-black/60 border border-accent/30 inline-block">
                  {selectedFeedItem.type} · {selectedFeedItem.tag}
                </span>
                <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white">
                  {selectedFeedItem.title}
                </h3>
                <p className="text-xs text-white/70 font-body">Brand: {selectedFeedItem.brand}</p>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <h4 className="text-xs font-heading font-bold uppercase tracking-widest text-accent mb-2 flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>The Content Strategy & Hook Formula</span>
                </h4>
                <p className="text-sm sm:text-base text-white/80 font-body leading-relaxed">
                  Engineered with a 1.8-second pattern interrupt to halt scroll fatigue. Combines high-contrast typography, trending rhythmic sound pacing, and value-packed storytelling designed to drive high save-to-impression ratios.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-charcoal-800">
                <div className="p-4 rounded-xl bg-charcoal-850 border border-charcoal-700/60 text-center">
                  <div className="text-lg sm:text-xl font-heading font-bold text-accent">{selectedFeedItem.likes || '32.4K'}</div>
                  <div className="text-[11px] text-white/50 mt-0.5">Likes Received</div>
                </div>
                <div className="p-4 rounded-xl bg-charcoal-850 border border-charcoal-700/60 text-center">
                  <div className="text-lg sm:text-xl font-heading font-bold text-white">{selectedFeedItem.shares || '2.4K'}</div>
                  <div className="text-[11px] text-white/50 mt-0.5">Direct Shares</div>
                </div>
                <div className="p-4 rounded-xl bg-charcoal-850 border border-charcoal-700/60 text-center">
                  <div className="text-lg sm:text-xl font-heading font-bold text-white">92.4%</div>
                  <div className="text-[11px] text-white/50 mt-0.5">Retention Rate</div>
                </div>
              </div>

              <div className="pt-4 border-t border-charcoal-800 flex justify-between items-center">
                <span className="text-xs text-white/50">Curated by Pooja Gupta</span>
                <a
                  href={PORTFOLIO_DATA.personal.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-charcoal-900 text-xs font-heading font-bold uppercase tracking-wider hover:bg-accent transition-colors"
                >
                  <span>Open On Instagram</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
