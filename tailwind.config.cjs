/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      rose: '#FFE5F0',
      secondary: '#4B0082',
    },
    fontFamily: {
      roboto: 'Roboto, sans-serif',
    },
    extend: {},
  },
  plugins: [],
};
