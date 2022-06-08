module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "white": {
        "normal": "white",
        "smooth": "#fefefe"
      },
      "black": "black",
      "gray": "rgba(142, 169, 191)",

      "primary": {
        "normal": "rgba(28, 231, 252)",
        "transparent": "rgba(28, 231, 252, 0.15)",
      }
    },

    fontFamily: {
      "sans": ["Roboto", "sans-serif"]
    },

    borderWidth: {
      DEFAULT: "2px",
    },

    backgroundImage: {
      "header-gradiant": "radial-gradient(ellipse at bottom, #0b1829 0%, #000000 100%)",
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