module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "white": "#ffffff",
      "gray": "rgba(142, 169, 191)",
      
      "blue": "#0b1829",
      "black": "black",

      "primary": {
        "normal": "rgba(28, 231, 252)",
        "transparent": "rgba(28, 231, 252, 0.15)",
      }
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

    borderWidth: {
      DEFAULT: "2px",
    },
   
    backgroundImage: {
      // "header": "radial-gradient(ellipse at bottom, #0b1829 0%, #000000 100%)",
      // "header": "radial-gradient(ellipse at top, #0b1829 0%, #000000 50%)",
      "header": "radial-gradient(ellipse at bottom right, #0b1829 0%, #000000 60%)",

      "about": "radial-gradient(ellipse at top right, #0b1829 0%, #000000 60%)",
    },

    extend: {
      height: {
        "navbar": "4.5rem",
        "navbar-adjust": "calc(100% - 4.5rem)",
        "0.5": "2px"
      },

      transitionProperty: {
        "cursor": "background-color, opacity, transform, mix-blend-mode"
      }
    },
  },
  plugins: [],
};