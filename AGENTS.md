# AGENTS.md

## Stack

- React Router v8 framework mode with SSR (`ssr: true`, app directory is `src`, not `app`), on Vite + React 19 + Tailwind CSS v4.
- Package manager is pnpm; CI and Docker run `pnpm install --frozen-lockfile`.
- Testing is Playwright e2e only, with no unit test framework.

## Before finishing changes

Always run, in this order, and fix any failure:

1. `pnpm run lint:fix`
2. `pnpm run ts:check`
3. `pnpm run pw:test`

These three cover all four CI jobs (`.github/workflows/ci.yml`): `ts:check` runs `react-router typegen && tsc` (typecheck), and `pw:test` builds and serves the production bundle itself (`webServer: pnpm run build && pnpm run start` on localhost:3000), so it also covers build + e2e. Never run bare `tsc`: `.react-router/` is gitignored and route modules import `Route.*` types from `./+types/*` that only exist after typegen. Keep this section, the `/check` command (`.opencode/commands/check.md`) and the GitHub CI workflow in sync when jobs or scripts change.

## Skills and commands

- Load the `create-route` skill before creating or modifying a route, its registration in `src/routes.ts`, or its colocated components/sections/utils.
- Load the `e2e-test` skill before writing or modifying e2e tests.
- `/check` runs full CI-equivalent verification, `/update` handles dependency updates, `/e2e` runs or debugs e2e tests.

## Conventions

- The site content is French (UI strings, `<html lang="fr">`, dayjs date formatting) but code, identifiers and comments are English.
- Never use em dashes in anything you write: code comments, docs, instruction files, commit messages. Prefer commas, parentheses, colons or separate sentences.
- Segment code into logical blocks with a short English comment ending in a colon, like `// Navigate to the home page:` in `e2e/home.ts` or `// Plugins:` in `src/lib/utils/day-js.ts`. This exact style is used across the repo.
- Import app code with the `#/*` alias (maps to `src/*`).
- Tailwind default theme tokens are wiped in `src/lib/styles/tailwind.css` (`--text-*`, `--color-*`, `--shadow-*`, `--radius-*: initial`). Only the explicitly listed tokens exist, so `text-4xl` or `text-red-500` won't resolve; add tokens there instead of assuming defaults.
- Never search or read `node_modules/`, `build/`, `.react-router/`, `playwright-report/` or `test-results/`: build artifacts and generated code, searching them only wastes context.
- Content assertions in e2e tests are deliberately brittle on exact French output; update them consciously when content changes (see the `e2e-test` skill).
- ESLint runs `@bluzzi/eslint-config`, which also enforces stylistic code-style rules; the exact active rule list is documented at https://eslint.camilledugas.me/rules.
