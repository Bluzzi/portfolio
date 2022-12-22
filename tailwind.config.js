module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    colors: {
      "white": "#ffffff",
      "black": "#000000",
      "gray": "#333333"
    },

    fontSize: {
      "base": "1rem",
      "lg": "1.125rem",
      "xl": "1.25rem",
      "2xl": "1.5rem",
      "3xl": ["4.5rem", { lineHeight: 1 }]
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