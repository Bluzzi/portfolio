---
name: e2e-test
description: Write or modify Playwright e2e tests in this repo
---

## Layout

- One file per page/feature in `e2e/`, plain TypeScript (e.g. `e2e/home.ts`; no `.spec` suffix, `testMatch: **/*.ts`).
- Chromium only. `pnpm run pw:test` runs everything; `pnpm run pw:test e2e/home.ts` or `pnpm run pw:test -g "title"` for a focused run.
- The Playwright config builds and serves the production app itself on localhost:3000, and reuses a server already running there locally.
- If Playwright reports missing browsers, run `pnpm run pw:setup` once (installs Chromium).

## Conventions

- Select elements by role and accessible name first (`getByRole`), then narrow with `.filter({ hasText })`. Avoid low-level `locator()`/CSS/XPath selectors: they break on markup changes that don't affect users.
- Each test starts with a short, neutral JSDoc explaining WHY it exists: the silent failure it catches (SSR crash, hydration mismatch, broken image, crawler-visible 404...).
- Segment test steps with comments ending in a colon: `// Navigate to the home page:`, `// Check the HTTP status:`.
- Rely on auto-waiting assertions (`toBeVisible`, `toHaveAttribute`, `toHaveCount`) instead of sleeps, and on strict mode to catch missing or duplicated elements.
- Content assertions are deliberately brittle (exact French strings, exact counts). Update them consciously when content legitimately changes; never weaken them to make a test pass.
