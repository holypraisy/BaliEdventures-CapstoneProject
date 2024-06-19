/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgColor: '#2E6B4D',
        sndbgColor: '#5C8A6A',
        thdbgColor: '#A9C8A3',
        bgOrange: '#F57E00',
        sndbgOrange : '#F5E1B8',
      },
    },
  },
  plugins: [],
}
