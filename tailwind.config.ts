import type { Config } from "tailwindcss";
import { neutral } from "tailwindcss/colors";

export default {
  content: {
    files: ["./src/**/*.{js,ts,jsx,tsx}"]
  },
  theme: {
    colors: {
      "transparent": "transparent",
      "white": "#ffffff",
      "black": "#000000",
      "blue": "#1d4ed8",
      "green": "#15803d",
      "gray": neutral
    },

    fontSize: {
      "sm": "0.8rem",
      "base": "1rem",
      "lg": "1.125rem",
      "xl": "1.25rem",
      "2xl": "1.5rem",
      "3xl": ["2rem", { lineHeight: "1" }]
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

    boxShadow: {
      DEFAULT: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)"
    },

    borderRadius: {
      DEFAULT: "0.25rem",
      "lg": "0.5rem",
      "full": "9999px"
    }
  },
  plugins: []
} satisfies Config;