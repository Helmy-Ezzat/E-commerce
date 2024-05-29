import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        cerulean: '#1B6392',
        blue_gray: '#DDE8EF',
      },
      fontFamily: {
        font_public_sans: ['font-sans', 'sans-serif'],
        purple: ['Purple Purse', 'serif'],
      },
    },
  },
  plugins: [],
}
export default config;
