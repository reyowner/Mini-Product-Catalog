const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brown: {
          50: '#FAF6F1',
          100: '#F3EAE0',
          200: '#E9D5C0',
          300: '#D9BFA0',
          400: '#C8A980',
          500: '#B79460',
          600: '#9A7B4F',
          700: '#7E623F',
          800: '#624A30',
          900: '#463520',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}