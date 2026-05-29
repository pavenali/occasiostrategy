/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Occasio Strategy palette
        ink: {
          DEFAULT: '#0d0a1f',
          50: '#08060f',
          100: '#0d0a1f',
          200: '#13102a',
          300: '#1a1334',
          400: '#221842',
          500: '#2a1f52',
        },
        paper: {
          DEFAULT: '#f6f3ff',
          dim: '#ece6ff',
          muted: '#a8a2c6',
          subtle: '#736d92',
        },
        violet: {
          50: '#f3eeff',
          100: '#e5dbff',
          200: '#c4b5fd',
          300: '#a78bfa',
          400: '#8b5cf6',
          500: '#7c3aed',
          600: '#6d4ed8',
          700: '#5b3bb8',
        },
        // Semantic aliases
        bg: {
          base: '#0d0a1f',
          surface: '#13102a',
          elevated: '#1a1334',
          border: '#241a4a',
          'border-strong': '#33256b',
        },
      },
      fontFamily: {
        sans: ['Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Manrope', 'ui-sans-serif', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.04em',
        tighter: '-0.025em',
        tracked: '0.18em',
        beam: '0.32em',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'fade-up': 'fadeUp 0.9s ease-out forwards',
        'beam-glow': 'beamGlow 6s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 6s ease-in-out infinite',
        'float': 'float 8s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        beamGlow: {
          '0%, 100%': { opacity: '0.5', transform: 'scaleX(0.9)' },
          '50%': { opacity: '0.85', transform: 'scaleX(1)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.35' },
          '50%': { opacity: '0.6' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      backgroundImage: {
        'beam': 'linear-gradient(90deg, rgba(167, 139, 250, 0.05) 0%, #8b5cf6 65%, #a78bfa 100%)',
        'beam-soft': 'linear-gradient(90deg, transparent 0%, rgba(139, 92, 246, 0.6) 50%, transparent 100%)',
        'brand-grad': 'linear-gradient(135deg, #6d4ed8 0%, #0d0a1f 65%)',
        'violet-glow-radial': 'radial-gradient(ellipse at top, rgba(139, 92, 246, 0.18) 0%, transparent 60%)',
      },
      boxShadow: {
        'beam': '0 0 32px rgba(139, 92, 246, 0.25)',
        'beam-strong': '0 0 50px rgba(139, 92, 246, 0.4)',
        'card': '0 1px 0 rgba(255, 255, 255, 0.04) inset, 0 8px 24px rgba(0, 0, 0, 0.45)',
        'card-hover': '0 1px 0 rgba(167, 139, 250, 0.15) inset, 0 12px 36px rgba(0, 0, 0, 0.55)',
      },
      borderRadius: {
        'xl': '14px',
        '2xl': '20px',
        '3xl': '28px',
      },
    },
  },
  plugins: [],
}
