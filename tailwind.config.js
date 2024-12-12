/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: "#181a20", 
        },
      },
    },
  },
  plugins: [],
}
