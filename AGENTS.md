# AGENTS.md

## Stack

- React Router v8 framework mode with SSR (`ssr: true`, app directory is `src`, not `app`), on Vite + React 19 + Tailwind CSS v4.
- Package manager is pnpm.
- Testing is Playwright e2e only, with no unit test framework.

## Before finishing changes

Load the `check` skill and run its verification steps, fixing any failure. Never run bare `tsc`: `.react-router/` is gitignored and route modules import `Route.*` types from `./+types/*` that only exist after typegen.

## Conventions

- The site content is French (UI strings, `<html lang="fr">`, dayjs date formatting) but code, identifiers and comments are English.
- Never use em dashes in anything you write: code comments, docs, instruction files, commit messages. Prefer commas, parentheses, colons or separate sentences.
- Segment code into logical blocks with a short English comment ending in a colon, like `// Navigate to the home page:` in `e2e/home.ts` or `// Plugins:` in `src/lib/utils/day-js.ts`. This exact style is used across the repo.
- Import app code with the `#/*` alias (maps to `src/*`).
- Tailwind default theme tokens are wiped in `src/lib/styles/tailwind.css` (`--text-*`, `--color-*`, `--shadow-*`, `--radius-*: initial`). Only the explicitly listed tokens exist, so `text-4xl` or `text-red-500` won't resolve; add tokens there instead of assuming defaults.
- Never search or read `node_modules/`, `build/`, `.react-router/`, `playwright-report/` or `test-results/`: build artifacts and generated code, searching them only wastes context.
- ESLint runs `@bluzzi/eslint-config`, which also enforces stylistic code-style rules; the exact active rule list is documented at https://eslint.camilledugas.me/rules.
- When a GitHub workflow (`.github/workflows/ci.yml`) or a package script changes, update the CI-related verification steps, the `check` skill (`.opencode/skills/check.md`) and the `/check` command (`.opencode/commands/check.md`) accordingly.
