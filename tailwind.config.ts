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
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'spin-surround':
          'rotateHalf 1.5s cubic-bezier(0.64, 0.45, 0.07, 0.44) infinite',
        'text-gradient-background':
          'text 5s cubic-bezier(0.64, 0.45, 0.07, 0.44) infinite',
      },
      colors: {
        // with-alpha: 'oklch(66.35% 0.299 7.04 / 0.2)',
        'gradient-purple': 'oklch(49.07% 0.272 300.45)',
        'gradient-pink': 'oklch(64.53% 0.292 2.47)',
        'gradient-orange': 'oklch(67.3% 0.266 25.039656026515278)',
        'gradient-yellow': 'oklch(85.82% 0.201 91.19)',
        'gradient-blue': 'oklch(59.59% 0.24 255.09156059071347)',
        'gradient-cyan': 'oklch(81.58% 0.189 190.74037768509325)',
        background: "theme('colors.slate.900')",
      },
      boxShadow: {
        neon: "0 0 1rem theme('colors.gradient-purple'), 0 0 0.5rem theme('colors.gradient-pink')",
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [typography],
} satisfies Config
