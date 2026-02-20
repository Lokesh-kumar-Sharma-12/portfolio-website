import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss(),],
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        neonBlue: '#00f3ff',
        neonPink: '#ff00ff',
        neonGreen: '#00ff88',
      },
      fontFamily: {
        orbitron: ['Orbitron', 'monospace'],
      },
      animation: {
        'grid-move': 'gridMove 20s linear infinite',
        'brand-glow': 'brandGlow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        gridMove: {
          '0%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'translate(50px, 50px)' },
        },
        brandGlow: {
          'from': { 'text-shadow': '0 0 10px #00f3ff, 0 0 20px #00f3ff' },
          'to': { 'text-shadow': '0 0 20px #00f3ff, 0 0 30px #00f3ff, 0 0 40px #00f3ff' },
        }
      }
    },
  },
})