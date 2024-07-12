const {nextui} = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "accent": "#E07153",
        "greyText": "#B7B7B7",
        "borderCol": "#E2E1E1",
          "promoBlue": "#d2f6ff",
          "promoRed": "#FFD8DA",
          "promoGreen": "#DBFFCF"
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()]
}

