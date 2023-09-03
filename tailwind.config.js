/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '320px',

      ...defaultTheme.screens,
    },

    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },

    fontFamily:{
      'sans': ['Arial', 'Roboto', 'sans-serif'],

    },
    extend: {},
  },
  plugins: [],
}

