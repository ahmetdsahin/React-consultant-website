/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    colors: {
      purple: "#9e3ffd",
      white: "#fff",
      black: "#16163f",
      gray: "#f8f0ff",
    },
  },
  plugins: [],
};
