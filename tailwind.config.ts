import { type Config } from 'tailwindcss';

export default {
  darkMode: 'media',
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    colors: {
      background: {
        DEFAULT: 'hsl(var(--neutral-0))',
      },
      foreground: {
        DEFAULT: 'hsl(var(--primary-500))',
      },
    },
    fontSize: {
      'heading-1': 'var(--text-3xl)',
      'heading-2': 'var(--text-2xl)',
      'heading-3': 'var(--text-xl)',
      'heading-4': 'var(--text-lg)',
      'heading-5': 'var(--text-md)',
      body: 'var(--text-base)',
      caption: 'var(--text-sm)',
    },
    lineHeight: {
      tight: 'var(--leading-tight)',
      snug: 'var(--leading-snug)',
      normal: 'var(--leading-normal)',
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
