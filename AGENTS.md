# AGENTS.md

## Stack

- React Router v8 framework mode with SSR (`ssr: true`, app directory is `src`, not `app`), on Vite + React 19 + Tailwind CSS v4.
- Package manager is pnpm; CI and Docker run `pnpm install --frozen-lockfile`.
- Testing is Playwright e2e only — no unit test framework.

## Before finishing changes

Always run, in this order, and fix any failure:

1. `pnpm run lint:fix`
2. `pnpm run ts:check`
3. `pnpm run pw:test`

These three cover all four CI jobs (`.github/workflows/ci.yml`): `ts:check` runs `react-router typegen && tsc` (typecheck), and `pw:test` builds and serves the production bundle itself (`webServer: pnpm run build && pnpm run start` on localhost:3000), so it also covers build + e2e. Never run bare `tsc`: `.react-router/` is gitignored and route modules import `Route.*` types from `./+types/*` that only exist after typegen.

## E2E testing

- Tests live in `e2e/*.ts` (plain `.ts` files, no `.spec` suffix; `testMatch: **/*.ts`). Chromium only, traces always on; a server already running on :3000 is reused locally.
- If Playwright reports missing browsers, run `pnpm run pw:setup` once (installs Chromium).
- Content assertions are deliberately brittle on exact French output (skill count, date strings like `11/07/2022 - 18/01/2023 (6 mois)`, mailto address) to force conscious review of content changes. Update them when content legitimately changes.

## Structure

- Routes are declared manually in `src/routes.ts` — creating a module in `src/routes/` is not enough. A file like `[home].tsx` is a route module; dot-suffixed siblings like `[home].about.tsx` are sections/components/utils belonging to that route, not routes.
- Import app code with the `#/*` alias (maps to `src/*`).
- Page content is data-driven from `src/lib/configs/` (`experience`, `skill`); images are hand-written path strings TypeScript cannot verify (e2e checks every image loads).

## Conventions

- The site content is French (UI strings, `<html lang="fr">`, dayjs date formatting) but code, identifiers and comments are English.
- Segment code into logical blocks with a short English comment ending in a colon — `// Navigate to the home page:` in `e2e/home.ts`, `// Plugins:` in `src/lib/utils/day-js.ts` — this exact style is used across the repo.
- Tailwind default theme tokens are wiped in `src/lib/styles/tailwind.css` (`--text-*`, `--color-*`, `--shadow-*`, `--radius-*: initial`). Only the explicitly listed tokens exist — e.g. `text-4xl` or `text-red-500` won't resolve; add tokens there instead of assuming defaults.
