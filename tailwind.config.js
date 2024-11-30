/** @type {import('tailwindcss').Config} */

module.exports = {
  important: true,
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Public Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
