/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#F3F8FF",
        orange: "#FFA734",
        darkblue: "#000848",
        mellemblue: "#348BFF",
        beige: "#FFFDFA",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
