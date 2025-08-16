const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        // Asegúrate de que tus fuentes estén aquí
        'playfair-display': ['"Playfair Display"', ...defaultTheme.fontFamily.serif],
        'roboto': ['Roboto', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'primary': 'var(--color-primary)',
        'secondary': 'var(--color-secondary)',
        'accent': 'var(--color-accent)',
        'background': 'var(--color-background)',
        'text': 'var(--color-text)',
        'verde': 'var(--color-verde)',
      }
    },
  },
  plugins: [],
};
