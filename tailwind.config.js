/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "xxs": "0.625rem"
      },
      fontFamily: {
        "ep": ["Epilogue", "sans-serif"]
      },
      colors: {
        "prime": "#121212"
      }
    },
  },
  plugins: [],
}