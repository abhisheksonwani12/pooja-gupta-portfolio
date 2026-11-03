/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        charcoal: {
          DEFAULT: '#0F1012',
          50: '#F5F5F6',
          100: '#E6E7E9',
          200: '#CCCCCC',
          300: '#999B9F',
          400: '#666970',
          500: '#3D4046',
          600: '#2A2C31',
          700: '#1F2125',
          800: '#16171A',
          900: '#0F1012',
          950: '#080809',
        },
        ivory: {
          DEFAULT: '#F9F8F5',
          light: '#FFFFFF',
          card: '#F3F0EA',
          border: '#E8E4DC',
          darker: '#E2DDD3',
        },
        accent: {
          DEFAULT: '#CCFF00', // Electric Lime / Acid Citrus
          hover: '#B8E600',
          dark: '#9AC000',
          muted: '#EBFDC5',
          text: '#0F1012',
        },
      },
      fontFamily: {
        heading: ['"Plus Jakarta Sans"', 'Manrope', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        body: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.02em',
        wide: '0.04em',
        wider: '0.08em',
        widest: '0.15em',
      },
      lineHeight: {
        'extra-tight': '1.05',
        'heading': '1.12',
      },
      fontSize: {
        '5.5xl': ['3.25rem', { lineHeight: '1.1' }],
      }
    },
  },
  plugins: [],
}
