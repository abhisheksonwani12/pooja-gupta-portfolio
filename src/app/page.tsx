import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Introduction from '@/components/Introduction';
import Expertise from '@/components/Expertise';
import SelectedWork from '@/components/SelectedWork';
import SocialShowcase from '@/components/SocialShowcase';
import ImpactResults from '@/components/ImpactResults';
import Process from '@/components/Process';
import AboutPooja from '@/components/AboutPooja';
import Testimonials from '@/components/Testimonials';
import FinalCTA from '@/components/FinalCTA';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-ivory text-charcoal selection:bg-accent selection:text-charcoal-900">
      {/* Sticky & Blur Floating Navigation */}
      <Navbar />

      {/* 01: Hero Section (90-100vh Full-Bleed Editorial Background) */}
      <Hero />

      {/* 02: Editorial Statement & Introduction */}
      <Introduction />

      {/* 03: Expertise & Service Blocks */}
      <Expertise />

      {/* 04: Selected Work - Asymmetric Magazine Grid & Case Studies */}
      <SelectedWork />

      {/* 05: Social Media Showcase - Mobile-First Feed Wall */}
      <SocialShowcase />

      {/* 06: Impact & Growth Statistics */}
      <ImpactResults />

      {/* 07: 4-Step Editorial Process */}
      <Process />

      {/* 08: About Pooja - Human & Personal Section */}
      <AboutPooja />

      {/* 09: Testimonials & Endorsements */}
      <Testimonials />

      {/* 10: Final High-Impact CTA */}
      <FinalCTA />

      {/* 11: Contact Form & Coordinates */}
      <Contact />

      {/* 12: Minimal Brand Footer */}
      <Footer />
    </main>
  );
}
