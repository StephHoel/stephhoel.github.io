/** @type { import('tailwindcss').Config } */
export const purge = ['./src/**/*.{ js,jsx,ts,tsx}', './public/index.html']
export const theme = {
  fontFamily: {
    jost: ['Jost', 'sans-serif'],
    poppins: ['Poppins', 'Helvetica', 'sans-serif'],
  },
  extend: {
    screens: {
      lg: { min: '700px' },
      sm: { min: '0px', max: '699px' },
    },
    boxShadow: {
      shop: 'rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px',
      name: 'rgba(0, 0, 0, 0.25) 0px 0.5px 1px',
    },
    transitionProperty: {
      shop: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    },
  },
}
