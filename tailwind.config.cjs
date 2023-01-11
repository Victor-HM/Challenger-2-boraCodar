/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.tsx",
    "./index.html"
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          800: '#271A45'
        }
      }
    },
    fontFamily: {
      sans: ['Lato', 'sans-serif'],
      crimson: ['Crimson Pro', 'sans-serif']
    }
  },
  plugins: [],
}