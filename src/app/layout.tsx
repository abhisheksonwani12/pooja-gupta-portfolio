import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Pooja Gupta — Social Media Manager & Content Strategist',
  description:
    'I turn social media into brands people remember. Strategy, content and creative direction for brands that want to stand out online.',
  keywords: [
    'Pooja Gupta',
    'Social Media Manager',
    'Content Strategist',
    'Creative Director',
    'Social Media Strategy India',
    'Brand Communication',
    'Instagram Reels Growth',
    'Editorial Social Media',
  ],
  authors: [{ name: 'Pooja Gupta' }],
  creator: 'Pooja Gupta',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://poojagupta.design',
    title: 'Pooja Gupta — Social Media Manager & Content Strategist',
    description:
      'I turn social media into brands people remember. Strategy, content and creative direction for brands that want to stand out online.',
    siteName: 'Pooja Gupta Portfolio',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200&auto=format&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Pooja Gupta — Social Media Manager & Content Strategist',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pooja Gupta — Social Media Manager & Content Strategist',
    description: 'I turn social media into brands people remember.',
    creator: '@poojagupta',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: '#0F1012',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Manrope:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-ivory text-charcoal font-body antialiased selection:bg-accent selection:text-charcoal-900 overflow-x-hidden min-h-screen">
        {children}
      </body>
    </html>
  );
}
