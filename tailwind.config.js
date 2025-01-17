/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      "satoshi":["Satoshi", "sans-serif"],
      "inter":["Inter", "sans-serif"]
    },
  
    extend: {
      colors:{
        'gray':'#F2F0F1'
      },
    },
  },
  plugins: [],
}