/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: { 
      backgroundImage: {
      'mobile': "url('./images/bg-mobile.jpg')",
      'mobile-light': "url('./images/bg-mobile-light.jpg')",
      'moon-stars': "url('./images/moon-stars.svg')",
      'sun': "url('./images/sun.svg')",
    },
    keyframes: {
      'slide-back': {
        '0%': { left: '50%' },
        '100%': { left: 0 },
      },
      'slide-in': {
        '0%': { left: 0 },
        '100%': { left: '50%' },
      },
    },
    animation: {
      'slide-back': 'slide-back 0.2s',
      'slide-in': 'slide-in 0.2s forwards',
    },
  },
  },
  plugins: [],
}