/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1A243B',
        'primary-light': '#2A344B'
      },
      fontFamily: {
        'display': ['Cinzel', 'serif'],
        'serif': ['Cormorant Garamond', 'serif'],
        'quicksand': ['Quicksand', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'twinkle': 'twinkle 4s ease-in-out infinite',
        'shooting-star': 'shooting-star 10s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        twinkle: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.5 },
        },
        'shooting-star': {
          '0%': { 
            transform: 'translateX(-150px) rotate(35deg)',
            opacity: 0,
          },
          '5%': { 
            opacity: 1,
          },
          '15%': { 
            opacity: 0,
          },
          '100%': { 
            transform: 'translateX(calc(100vw + 150px)) rotate(35deg)',
            opacity: 0,
          },
        },
      }
    },
  },
  plugins: [],
} 