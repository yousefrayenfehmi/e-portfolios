/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'cyber-blue': '#00f5ff',
        'cyber-purple': '#8b5cf6',
        'cyber-pink': '#ec4899',
        'cyber-green': '#10b981',
      },
      animation: {
        'blob': 'blob 7s infinite',
        'gradient': 'gradient 3s ease infinite',
        'reverse': 'reverse-spin 3s linear infinite',
        'scan': 'scan 3s infinite',
        'fadeInUp': 'fadeInUp 0.8s ease-out forwards',
        'rotate-in': 'rotate-in 0.8s ease-out forwards',
        'grid-move': 'grid-move 20s linear infinite',
        'shine': 'shine 2s infinite',
        'pulse-ring': 'pulse-ring 2s infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        blob: {
          '0%, 100%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
          '33%': {
            transform: 'translate(30px, -50px) scale(1.1)',
          },
          '66%': {
            transform: 'translate(-20px, 20px) scale(0.9)',
          },
        },
        gradient: {
          '0%, 100%': {
            'background-position': '0% 50%',
          },
          '50%': {
            'background-position': '100% 50%',
          },
        },
        'reverse-spin': {
          'from': {
            transform: 'rotate(360deg)',
          },
          'to': {
            transform: 'rotate(0deg)',
          },
        },
        scan: {
          '0%': {
            transform: 'translateX(-100%)',
            opacity: '0',
          },
          '50%': {
            opacity: '1',
          },
          '100%': {
            transform: 'translateX(100%)',
            opacity: '0',
          },
        },
        fadeInUp: {
          'from': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          'to': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'rotate-in': {
          'from': {
            opacity: '0',
            transform: 'rotate(-180deg) scale(0.5)',
          },
          'to': {
            opacity: '1',
            transform: 'rotate(0deg) scale(1)',
          },
        },
        'grid-move': {
          '0%': { 'background-position': '0 0' },
          '100%': { 'background-position': '50px 50px' },
        },
        shine: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'pulse-ring': {
          '0%': {
            transform: 'scale(0.8)',
            opacity: '1',
          },
          '100%': {
            transform: 'scale(2.4)',
            opacity: '0',
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backgroundSize: {
        '300%': '300%',
      },
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [],
  safelist: [
    // Animation delays
    'animation-delay-100',
    'animation-delay-200',
    'animation-delay-300',
    'animation-delay-500',
    'animation-delay-600',
    'animation-delay-700',
    'animation-delay-800',
    'animation-delay-900',
    'animation-delay-1000',
    'animation-delay-1100',
    'animation-delay-1200',
    'animation-delay-1300',
    'animation-delay-1400',
    'animation-delay-1500',
    'animation-delay-1600',
    'animation-delay-1700',
    'animation-delay-1800',
    'animation-delay-1900',
    'animation-delay-2000',
    'animation-delay-2100',
    'animation-delay-2200',
    'animation-delay-2300',
    'animation-delay-3000',
    'animation-delay-3500',
    'animation-delay-4000',
    // Custom classes
    'card-futuristic',
    'hover-lift',
    'shine-effect',
    'glass-effect',
    'skill-card',
    'section-modern',
    'hex-grid',
    'animate-blob',
    'animate-gradient',
    'animate-reverse',
    'animate-scan',
    'animate-fadeInUp',
    'animate-rotate-in',
    'bg-300%',
    // Gradient text
    'bg-gradient-to-r',
    'from-cyan-400',
    'via-purple-500',
    'to-pink-500',
    'bg-clip-text',
    'text-transparent',
  ],
} 