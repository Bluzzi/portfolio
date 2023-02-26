// eslint-disable-next-line @typescript-eslint/no-var-requires
const { typewindTransforms } = require("typewind/transform");

/** @type {import("tailwindcss").Config} */
module.exports = {
  content: {
    files: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./lib/**/*.{js,ts,jsx,tsx}"
    ],
    transform: typewindTransforms
  },
  theme: {
    colors: {
      "transparent": "transparent",
      "white": "#ffffff",
      "black": "#000000",
      "blue": "#1d4ed8",
      "green": "#15803d",
      "gray": {
        DEFAULT: "#888",
        1: "#111"
      }
    },

    fontSize: {
      "sm": "0.8rem",
      "base": "1rem",
      "lg": "1.125rem",
      "xl": "1.25rem",
      "2xl": "1.5rem",
      "3xl": ["2rem", { lineHeight: 1 }]
    },

    fontFamily: {
      "sans": ["Ubuntu", "sans-serif"]
    },

    screens: {
      "2xl": { "max": "1535px" },
      "xl": { "max": "1279px" },
      "lg": { "max": "1023px" },
      "md": { "max": "767px" },
      "sm": { "max": "639px" }
    },

    extend: {}
  },
  plugins: []
};