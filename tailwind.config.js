/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    textColor: (theme) => theme("colors"),
    textColor: {
      primary: "#00344D",
      secondary: "#021922",
      tertiary: "#22CABA",
    },
  },
  plugins: [],
};
