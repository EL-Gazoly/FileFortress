/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily : {
      sans : ['Open Sans', 'sans-serif'],
      poppins : ['Poppins', 'sans-serif'],
      roboto : ['Roboto', 'sans-serif']
    },
    extend: {
      colors : {
        bg: '#F6F9FC',
        primary: '#121432',
        blueGray: '#A8ACBF',
        subBlack: '#4C4D4C',
        secondary: '#6672FB',
        folderBg: '#D9D9D9'
      }
    },
  },
  plugins: [],
}