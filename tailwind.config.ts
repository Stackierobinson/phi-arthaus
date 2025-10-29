import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // PHI ArtHaus Color Palette - Basquiat/Warhol/Kahlo Inspired
        'basquiat-yellow': '#FFD700',
        'basquiat-cyan': '#00BFFF',
        'warhol-pink': '#FF1493',
        'warhol-orange': '#FF6347',
        'kahlo-teal': '#008B8B',
        'kahlo-coral': '#FF6B6B',
        'electric-purple': '#9D00FF',
      },
      fontFamily: {
        sans: ['Helvetica Neue', 'Arial', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.2em',
      },
      boxShadow: {
        'warhol': '6px 6px 0px rgba(0, 0, 0, 0.8)',
        'warhol-hover': '9px 9px 0px rgba(0, 0, 0, 0.8)',
        'basquiat': '6px 6px 0px #FFD700',
        'basquiat-hover': '9px 9px 0px #FFD700',
        'pink': '6px 6px 0px #FF1493',
        'pink-hover': '9px 9px 0px #FF1493',
      },
    },
  },
  plugins: [],
}
export default config
