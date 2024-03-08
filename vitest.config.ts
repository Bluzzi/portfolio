import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "happy-dom",
    setupFiles: "./vitest.setup.ts"
  },
  resolve: {
    alias: {
      "#source/lib/": "./lib/",
      "~/": "./public/"
    }
  }
});