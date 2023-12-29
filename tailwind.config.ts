import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'

export default {
  darkMode: 'class',
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.mdx',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-graphik)'],
      },
      typography: {
        quoteless: {
          css: {
            'blockquote p:first-of-type::before': { content: 'none' },
            'blockquote p:first-of-type::after': { content: 'none' },
          },
        },
      },
      keyframes: {
        rotateHalf: {
          '0%': { transform: 'rotate(0)' },
          '100%': { transform: 'rotate(-180deg)' },
        },
        text: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
        'accordion-down': {
          from: { height: 0 as any },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 as any },
        },
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'spin-surround':
          'rotateHalf 1.5s cubic-bezier(0.64, 0.45, 0.07, 0.44) infinite',
        'text-gradient-background':
          'text 3s cubic-bezier(0.64, 0.45, 0.07, 0.44) infinite',
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        // with-alpha: 'oklch(66.35% 0.299 7.04 / 0.2)',
        'gradient-purple': 'oklch(49.07% 0.272 300.45)', // #7d00d9 - French Violet
        'gradient-pink': 'oklch(64.53% 0.292 2.47)', // #ff0080 - Bright Pink
        'gradient-orange': 'oklch(67.3% 0.266 25.039656026515278)', // #ff4d4d - Orange-Red (Crayola)
        'gradient-yellow': 'oklch(85.82% 0.201 91.19)', // #fbca00 - Philippine Yellow
        'gradient-blue': 'oklch(59.59% 0.24 255.09156059071347)', // #007cf0 - Azure
        'gradient-cyan': 'oklch(81.58% 0.189 190.74037768509325)', // #01dfd8 - Bright Turquoise
        'gradient-green': '#15c064', // TODO: Make this oklch
        'gradient-turquoise': '#80FF72',
        // background: '#0B0F1A',
      },
      boxShadow: {
        // neon: "0 0 0.9rem theme('colors.gradient-purple'), 0 0 0.1rem theme('colors.gradient-pink')",
        neon: "0 0 1rem theme('colors.gradient-purple')",
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [typography, require('tailwindcss-animate')],
} satisfies Config
