/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Bonsad', 'sans-serif'],
        menu: ['Rouletta', 'sans-serif'],
      },
      colors: {
        background: '#323232',
        foreground: '#171717',
        gold: 'rgb(174, 154, 100)',
      },
    },
  },
  plugins: [],
}
