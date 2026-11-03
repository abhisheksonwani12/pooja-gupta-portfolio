export interface Project {
  id: string;
  title: string;
  client: string;
  category: 'Strategy' | 'Content' | 'Campaigns' | 'Branding';
  industry: string;
  year: string;
  image: string;
  aspectRatio?: 'tall' | 'wide' | 'square' | 'large';
  services: string[];
  description: string;
  longDescription?: string;
  metrics?: { label: string; value: string }[];
  featured?: boolean;
}

export interface Service {
  number: string;
  title: string;
  description: string;
  deliverables: string[];
  highlight: string;
}

export interface SocialFeedItem {
  id: string;
  type: 'Reel' | 'Carousel' | 'Post' | 'Story' | 'Campaign';
  title: string;
  brand: string;
  image: string;
  likes?: string;
  comments?: string;
  shares?: string;
  aspectRatio: 'aspect-[4/5]' | 'aspect-[9/16]' | 'aspect-square' | 'aspect-[16/9]';
  tag: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar?: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  tagline: string;
  description: string;
  keyActions: string[];
}

export const PORTFOLIO_DATA = {
  personal: {
    name: 'Pooja Gupta',
    role: 'Social Media Manager & Content Strategist',
    location: 'India',
    availability: 'Available for select projects',
    email: 'hello@poojagupta.design', // Placeholder - easily replaceable
    phone: '+91 98765 43210',
    instagramUrl: 'https://instagram.com/poojagupta',
    linkedinUrl: 'https://linkedin.com/in/poojagupta',
    twitterUrl: 'https://twitter.com/poojagupta',
    heroImage: '/pooja-hero.jpg', // Pooja Gupta's actual photograph
    aboutImage: '/pooja-about.jpg', // Pooja Gupta's actual photograph
  },

  hero: {
    eyebrow: 'SOCIAL MEDIA MANAGER · CONTENT STRATEGIST',
    headline: 'I TURN SOCIAL MEDIA INTO BRANDS PEOPLE REMEMBER.',
    subheadline: 'Strategy, content and creative direction for brands that want to stand out online.',
    ctaPrimary: 'VIEW MY WORK',
    ctaSecondary: "LET'S COLLABORATE",
    availabilityText: 'AVAILABLE FOR SELECT PROJECTS',
    scrollText: 'SCROLL TO EXPLORE',
  },

  intro: {
    label: 'A LITTLE ABOUT MY WORK',
    headline: "GOOD SOCIAL MEDIA ISN'T JUST ABOUT POSTING. IT'S ABOUT CREATING A REASON TO STOP, FEEL AND REMEMBER.",
    paragraph: "I'm Pooja Gupta, a Social Media Manager and Content Strategist focused on turning ideas into meaningful digital experiences. I work across strategy, content, creative direction and social media management to help brands communicate with clarity and personality.",
    statsCallout: 'Based in India · Collaborating Globally',
  },

  services: [
    {
      number: '01',
      title: 'Social Media Strategy',
      description: 'Platform-specific strategies built around brand goals, audience and growth.',
      deliverables: ['Channel Audit & Competitive Benchmarking', 'Platform Positioning & Audience Personas', 'Growth Roadmaps & KPI Frameworks'],
      highlight: 'Tailored roadmaps for sustainable organic growth.',
    },
    {
      number: '02',
      title: 'Content Strategy',
      description: 'Content pillars, calendars and storytelling systems that keep brands consistent.',
      deliverables: ['Content Pillar Formulation', 'Monthly Editorial Calendars', 'Narrative Storylines & Hook Formulas'],
      highlight: 'Structured systems ensuring reliable daily relevance.',
    },
    {
      number: '03',
      title: 'Content Creation',
      description: 'Reels, carousels, static posts, stories and campaign creatives.',
      deliverables: ['High-Retention Short-Form Video (Reels/TikTok)', 'Educational & Editorial Carousels', 'Curated Stories & Campaign Graphics'],
      highlight: 'Aesthetic visuals crafted specifically for mobile feeds.',
    },
    {
      number: '04',
      title: 'Brand Communication',
      description: 'Developing a recognizable tone of voice and digital personality.',
      deliverables: ['Brand Tone-of-Voice Playbook', 'Social Copywriting Guidelines', 'Visual Identity Social Adaptations'],
      highlight: 'Turning generic messaging into distinctive brand voice.',
    },
    {
      number: '05',
      title: 'Community Management',
      description: 'Creating meaningful interactions and maintaining an active brand community.',
      deliverables: ['Active Audience Engagement & DM Strategy', 'Brand Advocate Programs', 'Crisis Response & Real-time Interaction'],
      highlight: 'Converting casual scrollers into loyal brand advocates.',
    },
    {
      number: '06',
      title: 'Social Media Growth',
      description: 'Using insights, trends and performance data to continuously improve content.',
      deliverables: ['Weekly & Monthly Performance Analytics', 'Viral Trend Adaptation & Rapid Testing', 'Algorithm Optimization & Conversion Funnels'],
      highlight: 'Data-driven iterations that maximize reach and ROI.',
    },
  ] as Service[],

  projects: [
    {
      id: 'pooja-editorial-series',
      title: 'The Autumn Studio Series',
      client: 'Pooja Gupta x Muse Atelier',
      category: 'Campaigns',
      industry: 'Fashion & Creative Direction',
      year: '2025',
      image: '/pooja-photo.jpg',
      aspectRatio: 'tall',
      services: ['Creative Direction', 'Styling Framework', 'Visual Identity'],
      description: 'An intimate editorial exploration of texture, earthy tones, and contemporary lifestyle aesthetics.',
      longDescription: 'Led end-to-end creative direction, set staging, and social distribution for an avant-garde studio lookbook. Designed to showcase organic textures, architectural branch installations, and effortless modern fashion.',
      metrics: [
        { label: 'Organic Reel Views', value: '1.8M+' },
        { label: 'Save-to-Reach Ratio', value: '11.4%' },
        { label: 'Editorial Inquiries', value: '50+' },
      ],
      featured: true,
    },
    {
      id: 'velvet-glow',
      title: 'Velvet & Glow',
      client: 'Velvet Botanicals',
      category: 'Campaigns',
      industry: 'Luxury Skincare',
      year: '2025',
      image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1200&auto=format&fit=crop',
      aspectRatio: 'large',
      services: ['Creative Direction', 'Reels Production', 'Influencer Strategy'],
      description: 'A 360° product launch campaign marrying clean minimalism with sensorial video storytelling.',
      longDescription: 'Developed the end-to-end launch campaign for an indie clean-skincare brand, executing high-aesthetic short-form video content, micro-influencer gifting kits, and a 3-week teaser countdown that sold out the first inventory batch.',
      metrics: [
        { label: 'Organic Video Views', value: '2.4M+' },
        { label: 'Sales Conversion Rate', value: '+42%' },
        { label: 'New Follower Surge', value: '+18.5K' },
      ],
      featured: true,
    },
    {
      id: 'aura-living',
      title: 'Aura Living',
      client: 'Aura Studio',
      category: 'Branding',
      industry: 'Modern Interiors & Architecture',
      year: '2025',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop',
      aspectRatio: 'tall',
      services: ['Brand Tone of Voice', 'Editorial Grid Curation', 'Story Frameworks'],
      description: 'Architectural storytelling that elevated an interior studio into an aspirational lifestyle brand.',
      longDescription: 'Transformed a traditional architecture portfolio feed into a cohesive editorial magazine layout on Instagram, focusing on lighting, materials, and designer philosophy.',
      metrics: [
        { label: 'Save-to-Impression Rate', value: '8.7%' },
        { label: 'Client Inquiries via DM', value: '3.2x' },
      ],
      featured: true,
    },
    {
      id: 'urban-pulse',
      title: 'Urban Pulse',
      client: 'Pulse Activewear',
      category: 'Content',
      industry: 'Athletic Apparel',
      year: '2024',
      image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200&auto=format&fit=crop',
      aspectRatio: 'wide',
      services: ['High-Retention Reels', 'Movement Direction', 'Community Challenges'],
      description: 'Fast-paced, energetic reel series capturing the rhythm of modern city movement.',
      longDescription: 'Curated and produced 24 dynamic athletic reels featuring local running clubs, fitness instructors, and street-style lookbooks to build an authentic urban fitness collective.',
      metrics: [
        { label: 'Average Watch Time', value: '88%' },
        { label: 'User Generated Posts', value: '1,400+' },
      ],
      featured: false,
    },
    {
      id: 'noir-cafe',
      title: 'Noir Atelier & Cafe',
      client: 'Noir Specialty Coffee',
      category: 'Strategy',
      industry: 'Hospitality & F&B',
      year: '2024',
      image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=1200&auto=format&fit=crop',
      aspectRatio: 'square',
      services: ['Platform Strategy', 'Content Pillars', 'Local Community Growth'],
      description: 'Transforming a local specialty roastery into a sought-after cultural destination.',
      longDescription: 'Created an immersive sensory-driven social strategy emphasizing bean origin stories, brew tutorials, and barista culture that drove weekend foot traffic up significantly.',
      metrics: [
        { label: 'Foot Traffic Uplift', value: '+65%' },
        { label: 'Reel Shares', value: '45K+' },
      ],
      featured: true,
    },
    {
      id: 'lumina-jewels',
      title: 'Lumina Fine Jewelry',
      client: 'Lumina Jewels',
      category: 'Campaigns',
      industry: 'Fine Jewelry',
      year: '2025',
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1200&auto=format&fit=crop',
      aspectRatio: 'tall',
      services: ['Editorial Carousels', 'Seasonal Festive Campaign', 'Copywriting'],
      description: 'Festive campaign blending heirloom craftsmanship with contemporary minimalist styling.',
      longDescription: 'Designed carousel breakdowns detailing the heritage, sustainability, and styling versatility of fine gemstone jewelry, resulting in record engagement.',
      metrics: [
        { label: 'Direct Site Referrals', value: '28.4K' },
        { label: 'Engagement Rate', value: '6.4%' },
      ],
      featured: false,
    },
    {
      id: 'solace-wellness',
      title: 'Solace Mind & Body',
      client: 'Solace Tech',
      category: 'Strategy',
      industry: 'Health & Wellness App',
      year: '2024',
      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1200&auto=format&fit=crop',
      aspectRatio: 'wide',
      services: ['Viral Micro-hooks', 'Mental Health Advocacy', 'Growth Funnels'],
      description: 'Empathetic mindfulness content that demystified daily meditation for Gen Z & Millennials.',
      longDescription: 'Architected bite-sized mental wellness carousels and audio-driven reels addressing workplace burnout, breathwork routines, and digital detox.',
      metrics: [
        { label: 'App Installs from Social', value: '54K+' },
        { label: 'Viral Reach (1 Reel)', value: '3.8M' },
      ],
      featured: true,
    },
    {
      id: 'maison-parfum',
      title: 'Maison Éthérée',
      client: 'Éthérée Fragrances',
      category: 'Branding',
      industry: 'Artisanal Perfumery',
      year: '2025',
      image: 'https://images.unsplash.com/photo-1547887537-6158d64c35b3?q=80&w=1200&auto=format&fit=crop',
      aspectRatio: 'large',
      services: ['Olfactory Visuals', 'Packaging Teasers', 'Mood Curation'],
      description: 'Sensory fragrance storytelling translating botanical notes into poetic micro-moments.',
      longDescription: 'Designed an ethereal social launch capturing glass reflections, raw floral ingredients, and moodboard poetry that established high brand prestige from day one.',
      metrics: [
        { label: 'Pre-order Signups', value: '12.8K' },
        { label: 'Instagram Saves', value: '14.2K' },
      ],
      featured: false,
    },
  ] as Project[],

  socialShowcase: [
    {
      id: 'feed-1',
      type: 'Reel',
      title: 'Sensory Skincare Rituals',
      brand: 'Velvet Botanicals',
      image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=800&auto=format&fit=crop',
      likes: '34.2K',
      comments: '482',
      shares: '1.2K',
      aspectRatio: 'aspect-[9/16]',
      tag: 'Viral Video',
    },
    {
      id: 'feed-2',
      type: 'Carousel',
      title: 'The Art of Layering Textures',
      brand: 'Aura Studio',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop',
      likes: '18.9K',
      comments: '310',
      shares: '2.8K',
      aspectRatio: 'aspect-[4/5]',
      tag: '10-Slide Guide',
    },
    {
      id: 'feed-3',
      type: 'Post',
      title: 'Morning Espresso Chemistry',
      brand: 'Noir Specialty',
      image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=800&auto=format&fit=crop',
      likes: '9.4K',
      comments: '128',
      shares: '410',
      aspectRatio: 'aspect-square',
      tag: 'Aesthetic Grid',
    },
    {
      id: 'feed-4',
      type: 'Story',
      title: 'Behind the Scenes Drop',
      brand: 'Pulse Apparel',
      image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=800&auto=format&fit=crop',
      likes: '22.1K',
      comments: '560',
      shares: '940',
      aspectRatio: 'aspect-[9/16]',
      tag: 'Interactive Polls',
    },
    {
      id: 'feed-5',
      type: 'Campaign',
      title: 'Autumn Geometry Launch',
      brand: 'Lumina Jewels',
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=800&auto=format&fit=crop',
      likes: '14.7K',
      comments: '240',
      shares: '1.5K',
      aspectRatio: 'aspect-[4/5]',
      tag: 'Campaign Hero',
    },
    {
      id: 'feed-6',
      type: 'Reel',
      title: '60 Seconds of Calm',
      brand: 'Solace Wellness',
      image: 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?q=80&w=800&auto=format&fit=crop',
      likes: '48.6K',
      comments: '912',
      shares: '7.3K',
      aspectRatio: 'aspect-[9/16]',
      tag: 'Trending Audio',
    },
  ] as SocialFeedItem[],

  impact: {
    heading: 'THE WORK HAS AN IMPACT',
    // Easily editable placeholders as requested
    stats: [
      {
        value: '50+',
        placeholder: 'XX+',
        label: 'Projects Managed',
        description: 'Multi-platform campaigns executed from concept to delivery',
      },
      {
        value: '25+',
        placeholder: 'XX+',
        label: 'Brands Worked With',
        description: 'Lifestyle, wellness, luxury, F&B, tech and creative startups',
      },
      {
        value: '10M+',
        placeholder: 'XXK+',
        label: 'Content Reach',
        description: 'Organic video and feed impressions generated across channels',
      },
      {
        value: '180%',
        placeholder: 'XX%',
        label: 'Average Engagement Growth',
        description: 'Sustained lift in community interactions within 90 days',
      },
    ],
    closingStatement: 'STRATEGY FIRST. CREATIVITY SECOND. RESULTS ALWAYS.',
  },

  process: [
    {
      step: '01',
      title: 'DISCOVER',
      tagline: 'Deep Dive & Diagnostics',
      description: 'Understand the brand, audience, competitors and objectives.',
      keyActions: [
        'Brand audit & social sentiment review',
        'Competitor benchmarking & whitespace mapping',
        'Audience psychographics & consumption habits',
      ],
    },
    {
      step: '02',
      title: 'STRATEGIZE',
      tagline: 'The Master Blueprint',
      description: 'Build the content direction, platform strategy and communication framework.',
      keyActions: [
        'Core content pillars & editorial cadence',
        'Platform selection & tailored distribution matrix',
        'Distinctive tone-of-voice & visual guidelines',
      ],
    },
    {
      step: '03',
      title: 'CREATE',
      tagline: 'Production & Storytelling',
      description: 'Turn strategy into scroll-stopping content and campaigns.',
      keyActions: [
        'High-retention Reels, carousels and static posts',
        'Persuasive copywriting & hook engineering',
        'Asset curation & collaborative review flows',
      ],
    },
    {
      step: '04',
      title: 'OPTIMIZE',
      tagline: 'Iterative Excellence',
      description: 'Review performance, learn from insights and continuously improve.',
      keyActions: [
        'In-depth monthly analytics & attribution reports',
        'Content A/B testing & trend integration',
        'Continuous refinement for compounding reach',
      ],
    },
  ] as ProcessStep[],

  about: {
    heading: 'BEHIND THE STRATEGY',
    statement: 'Behind every post is a thought. Behind every campaign is a strategy.',
    body1: "I enjoy finding the intersection between what a brand wants to say and what its audience actually wants to see. From planning content calendars to shaping brand stories, I bring equal focus to creativity and strategy.",
    body2: "I believe social media shouldn't be treated as an afterthought or a chore of filling empty feed squares. When approached with intentionality, it becomes a living, breathing extension of your brand that builds genuine cultural currency.",
    details: [
      { label: 'Based in', value: 'India (Collaborating Worldwide)' },
      { label: 'Specialization', value: 'Social Media & Content Strategy' },
      { label: 'Working with', value: 'Brands / Startups / Creators' },
      { label: 'Core Tools', value: 'Notion, Figma, Premiere Pro, Meta Suite, Sprout' },
    ],
  },

  testimonials: [
    {
      id: 't-1',
      quote: "Pooja transformed our social presence from disjointed posts into an cohesive, high-end editorial experience. Our audience engagement tripled in less than three months.",
      author: 'Ananya Sharma',
      role: 'Founder & Creative Director',
      company: 'Velvet Botanicals',
    },
    {
      id: 't-2',
      quote: "Working with Pooja was the best investment we made for our brand launch. Her ability to blend crisp aesthetic sense with sharp analytical thinking is extraordinary.",
      author: 'Rohan Mehta',
      role: 'Head of Brand Marketing',
      company: 'Aura Living',
    },
    {
      id: 't-3',
      quote: "She doesn't just create pretty graphics — she builds narratives that actually convert followers into die-hard community members. A true strategic partner.",
      author: 'Meera Iyer',
      role: 'Co-founder',
      company: 'Solace Wellness',
    },
  ] as Testimonial[],

  finalCta: {
    headline: 'HAVE A BRAND THAT DESERVES MORE ATTENTION?',
    subtext: "Let's build a social presence that doesn't just fill a feed — it builds a brand.",
    primaryBtn: "LET'S WORK TOGETHER",
    secondaryBtn: 'INSTAGRAM',
  },

  contact: {
    heading: "LET'S START SOMETHING GOOD.",
    subheading: "Whether you have an established brand ready for a fresh social direction, or a new venture preparing to launch, I'd love to hear from you.",
    fields: {
      name: 'Name',
      email: 'Email',
      company: 'Company / Brand',
      services: 'What are you looking for?',
      message: 'Message',
    },
    serviceOptions: [
      'Social Media Strategy',
      'Content Creation (Reels & Carousels)',
      'Monthly Retainer Management',
      'Campaign & Launch Strategy',
      'Brand Tone & Voice Framework',
      '1:1 Strategy Consultation',
    ],
    details: {
      email: 'hello@poojagupta.design',
      instagram: '@poojagupta.social',
      linkedin: 'linkedin.com/in/poojagupta-social',
      location: 'New Delhi, India (GMT +5:30)',
    },
  },

  footer: {
    brandName: 'POOJA GUPTA',
    tagline: 'Social Media Manager · Content Strategist · Digital Creative',
    copyright: `© ${new Date().getFullYear()} Pooja Gupta. All Rights Reserved.`,
    backToTop: 'Back to top ↑',
  },
};
