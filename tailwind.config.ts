import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0a0a0f',
        card: '#12121a',
        primary: '#8b5cf6',
        'primary-glow': '#a78bfa',
        secondary: '#06b6d4',
        text: '#ffffff',
        'text-muted': '#71717a',
        border: '#27272a',
        spotify: '#1db954',
        youtube: '#ff0000',
        soundcloud: '#ff5500',
      },
      backdropFilter: {
        glass: 'blur(10px)',
      },
    },
  },
  plugins: [],
};

export default config;
