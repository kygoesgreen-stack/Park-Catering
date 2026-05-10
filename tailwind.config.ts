import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          900: '#1a2e1a',
          800: '#243824',
          700: '#2e472e',
          600: '#3a5a3a',
        },
        charcoal: {
          900: '#1c1c1c',
          800: '#2a2a2a',
          700: '#3a3a3a',
          600: '#4a4a4a',
        },
        cream: {
          50: '#fefdfb',
          100: '#fdf9f0',
          200: '#faf0dc',
        },
        ember: {
          500: '#c85a1e',
          600: '#b04a14',
          700: '#8a3a10',
        },
      },
      fontFamily: {
        serif: ['var(--font-fraunces)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'fluid-2xl': 'clamp(1.5rem, 3vw + 1rem, 2.5rem)',
        'fluid-3xl': 'clamp(2rem, 4vw + 1rem, 3.5rem)',
        'fluid-4xl': 'clamp(2.5rem, 5vw + 1rem, 4.5rem)',
        'fluid-5xl': 'clamp(3rem, 6vw + 1.5rem, 6rem)',
      },
      spacing: {
        'section': 'clamp(5rem, 10vw, 10rem)',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(32px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

export default config