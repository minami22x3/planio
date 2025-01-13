import { type Config } from 'tailwindcss';

export default {
  darkMode: 'media',
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      black: 'hsl(var(--neutral-1000))',
      background: 'hsl(var(--neutral-0))',
      foreground: 'hsl(var(--primary-500))',
      input: 'hsl(var(--secondary-200))',
      ring: 'hsl(var(--primary-400))',
      caption: 'hsl(var(--neutral-400))',
      line: 'hsl(var(--neutral-200))',
      primary: {
        DEFAULT: 'hsl(var(--primary-500))',
        foreground: 'hsl(var(--neutral-0))',
      },
      secondary: {
        DEFAULT: 'hsl(var(--neutral-500))',
        foreground: 'hsl(var(--neutral-25))',
      },
      destructive: {
        DEFAULT: 'hsl(var(--error-300))',
        foreground: 'hsl(var(--error-50))',
      },
      outline: {
        DEFAULT: 'hsl(var(--neutral-0))',
        foreground: 'hsl(var(--primary-500))',
      },
      accent: {
        DEFAULT: 'hsl(var(--neutral-50))',
        foreground: 'hsl(var(--primary-500))',
      },
      muted: {
        DEFAULT: 'hsl(var(--neutral-500))',
        foreground: 'hsl(var(--neutral-400))',
      },
    },
    fontFamily: {
      epilogue: 'var(--font-epilogue-serif)',
    },
    fontSize: {
      'heading-1': 'var(--text-3xl)',
      'heading-2': 'var(--text-2xl)',
      'heading-3': 'var(--text-xl)',
      'heading-4': 'var(--text-lg)',
      'heading-5': 'var(--text-md)',
      body: 'clamp(12px, 3.25vw, 16px)',
      caption: 'var(--text-sm)',
    },
    lineHeight: {
      none: 'none',
      tight: 'var(--leading-tight)',
      snug: 'var(--leading-snug)',
      normal: 'var(--leading-normal)',
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
