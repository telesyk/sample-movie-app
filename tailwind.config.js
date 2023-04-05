/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'custom-light': '#F6F1F1',
        'custom-blue-400': '#19A7CE',
        'custom-blue-600': '#146C94',
        'custom-grey-800': '#333333',
      },
      screens: {
        xl: '1200px',
      },
    },
  },
  plugins: [],
};
