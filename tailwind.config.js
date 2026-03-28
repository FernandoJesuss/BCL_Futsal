/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0A1F44",   
        secondary: "#E11D48",
        accent: "#FFFFFF",   
      }
    },
  },
  plugins: [],
}