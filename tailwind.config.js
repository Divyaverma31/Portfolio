/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Sora', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        night: {
          950: '#050816',
          900: '#0a0f1f',
          850: '#0d1428',
          800: '#111a33',
          700: '#1a2547',
        },
      },
      animation: {
        blob: 'blob 12s infinite ease-in-out',
        'blob-slow': 'blob 18s infinite ease-in-out reverse',
        'gradient-x': 'gradient-x 8s ease infinite',
        float: 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 12s linear infinite',
      },
      keyframes: {
        blob: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(40px, -60px) scale(1.15)' },
          '66%': { transform: 'translate(-30px, 30px) scale(0.9)' },
        },
        'gradient-x': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
      },
      boxShadow: {
        glow: '0 0 40px -10px rgba(99, 102, 241, 0.5)',
        'glow-cyan': '0 0 40px -10px rgba(34, 211, 238, 0.4)',
        card: '0 8px 32px rgba(2, 6, 23, 0.35)',
      },
      backgroundSize: {
        '200%': '200% 200%',
      },
    },
  },
  plugins: [],
};
