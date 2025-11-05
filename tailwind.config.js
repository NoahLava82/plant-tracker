/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        greenCustomStart: "#16a34a",
        greenCustomMiddle: "#22c55e",
        greenCustomEnd: "#4ade80",
      },
    },
  },
  plugins: [],
};
