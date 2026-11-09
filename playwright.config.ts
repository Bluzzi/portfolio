import { defineConfig, devices } from "@playwright/test";

// Registers the throwing route used by the error page test in the served production build.
// Set here so the webServer command inherits it, and production builds never include it:
process.env.E2E_ERROR_ROUTE = "1";

export default defineConfig({
  testDir: "./e2e",
  testMatch: "**/*.ts",

  fullyParallel: true,
  forbidOnly: Boolean(process.env.CI),
  retries: process.env.CI ? 2 : 0,

  reporter: [
    ["list", { printSteps: true }],
    ["html", { open: "always" }],
  ],

  use: {
    baseURL: "http://localhost:3000",
    trace: "on",
    video: "on-first-retry",
  },

  webServer: {
    command: "pnpm run build && pnpm run start",
    url: "http://localhost:3000",
    reuseExistingServer: !process.env.CI,
    stdout: "pipe",
    stderr: "pipe",
  },

  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
});
