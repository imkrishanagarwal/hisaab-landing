import type { Config } from 'tailwindcss'

/**
 * Hisaab landing page — Warm Ledger palette.
 * Mirrors the v3 app design (see hisaab-v2/constants/tokens.ts).
 */
const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Satoshi', 'system-ui', 'sans-serif'],
        serif: ['var(--font-instrument-serif)', 'Instrument Serif', 'Georgia', 'serif'],
        jakarta: ['var(--font-jakarta)', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Warm Ledger palette
        bg: '#F5EFE6',
        surface: '#FBF7F0',
        surface2: '#EDE5D6',
        border: '#E0D6C3',

        text1: '#1C1A17',
        text2: '#4E4A42',
        text3: '#6B655B',

        brand: '#0F3D2E',
        brandSoft: '#E5EFE8',

        accent: '#B84A2E',
        accentSoft: '#F2DDD3',

        pos: '#0F3D2E',
        neg: '#B84A2E',

        // Legacy aliases — kept so any class scattered through the codebase
        // remaps cleanly without a rewrite of every file.
        background: '#F5EFE6',
        foreground: '#1C1A17',
        primary: {
          50:  '#F2DDD3',
          100: '#EAC4B5',
          200: '#E0A491',
          300: '#D58571',
          400: '#CB6952',
          500: '#B84A2E', // accent
          600: '#9F3F26',
          700: '#82331E',
          800: '#642718',
          900: '#491B11',
          950: '#2B1009',
        },
        secondary: {
          50:  '#E5EFE8',
          100: '#C6DCCD',
          200: '#9DC2A9',
          300: '#73A685',
          400: '#4E8A66',
          500: '#2E6E4D',
          600: '#1F583C',
          700: '#154932',
          800: '#0F3D2E', // brand
          900: '#0A2C21',
          950: '#051A14',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'scale-up': 'scaleUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleUp: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
export default config
