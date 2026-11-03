# Pooja Gupta — Social Media Manager & Content Strategist Portfolio

A premium, modern, minimal single-page personal portfolio website for **Pooja Gupta**, crafted with an editorial aesthetic, bold typography, and smooth micro-interactions.

---

## 🎨 Design System

- **Primary Color:** Deep Charcoal (`#0F1012`)
- **Background Color:** Warm Off-White / Soft Ivory (`#F9F8F5`)
- **Secondary Color:** Muted Grey (`#666970`)
- **Accent Color:** Electric Lime (`#CCFF00`)
- **Typography:** Plus Jakarta Sans & Manrope (Headings), Inter (Body)
- **Aesthetic:** High-end creative agency / magazine editorial

---

## 🚀 Quick Start

### 1. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 2. Build for Production
```bash
npm run build
npm run start
```

---

## 📝 Customizing Content & Images

All text, images, metrics, social links, and services are centralized in **[`src/data/portfolioContent.ts`](file:///Users/abhisheksonwani/Downloads/pooja-jii/src/data/portfolioContent.ts)**:

- **Hero & About Photos:** Update `PORTFOLIO_DATA.personal.heroImage` and `aboutImage` (you can also place local photos in `/public/` and reference `/pooja-hero.jpg`).
- **Contact & Socials:** Update `email`, `instagramUrl`, `linkedinUrl`, and `phone`.
- **Selected Work:** Add, edit, or remove case studies in `PORTFOLIO_DATA.projects`.
- **Social Media Showcase:** Update Instagram feed highlights in `PORTFOLIO_DATA.socialShowcase`.
- **Impact Statistics:** Modify the numbers in `PORTFOLIO_DATA.impact.stats`.
- **Services & Process:** Customize deliverables in `PORTFOLIO_DATA.services` and `PORTFOLIO_DATA.process`.

---

## 📂 Project Architecture

```
pooja-jii/
├── src/
│   ├── app/
│   │   ├── globals.css          # Editorial styling, tokens, and animations
│   │   ├── layout.tsx           # SEO metadata, OpenGraph tags, and typography
│   │   └── page.tsx             # Single-page layout connecting all 12 sections
│   ├── components/
│   │   ├── Navbar.tsx           # Transparent-to-blur sticky header + mobile drawer
│   │   ├── Hero.tsx             # Full-bleed editorial portrait hero + parallax
│   │   ├── Introduction.tsx     # Large typographic statement & philosophy
│   │   ├── Expertise.tsx        # 6 minimal capability cards + deliverables
│   │   ├── SelectedWork.tsx     # Asymmetric magazine portfolio grid + modal
│   │   ├── SocialShowcase.tsx   # Mobile-first feed wall (Reels, Carousels, Stories)
│   │   ├── ImpactResults.tsx    # Big editorial metrics + closing mantra
│   │   ├── Process.tsx          # 4-step methodology timeline
│   │   ├── AboutPooja.tsx       # Personal background & credentials
│   │   ├── Testimonials.tsx     # Client quote endorsements
│   │   ├── FinalCTA.tsx         # Closing high-impact action banner
│   │   ├── Contact.tsx          # Interactive inquiry form + direct channels
│   │   └── Footer.tsx           # Brand footer + back to top
│   └── data/
│       └── portfolioContent.ts  # Master editable data source
├── public/                      # Static assets & photos
├── tailwind.config.js           # Tailored editorial color & font config
├── tsconfig.json
└── package.json
```
