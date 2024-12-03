/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: { gold: '#FFC940',
        grey1:"#EDEDED",
        white1:"#f8fafc"
       },
    },
  },
  plugins: [],
}