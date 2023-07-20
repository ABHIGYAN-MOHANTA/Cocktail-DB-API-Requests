/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    darkSelector: ".dark-mode", // Add this line to enable class-based dark mode
  },
  variants: {
    extend: {
      backgroundColor: ["dark"], // Add this line to enable background color in dark mode
      textColor: ["dark"], // Add this line to enable text color in dark mode
    },
  },
  plugins: [],
};
