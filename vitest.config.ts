import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react({ babel: { plugins: ["typewind/babel"] } })],
  test: {
    globals: true,
    environment: "happy-dom",
    setupFiles: "./vitest.setup.ts"
  },
  resolve: {
    alias: [
      { find: /\$(.*)/, replacement: "./$1" }
    ]
  }
});