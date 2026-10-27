# AGENTS.md

## Stack

- React Router v8 framework mode with SSR (`ssr: true` in `react-router.config.ts`), on Vite + React 19 + Tailwind CSS v4. Not Next.js — Next patterns (`app/` dir, metadata exports) don't apply.
- Package manager is pnpm; CI and Docker run `pnpm install --frozen-lockfile`.

## Commands

- `pnpm dev` — dev server. `pnpm build` then `pnpm start` — production SSR build/serve.
- `pnpm lint` / `pnpm lint:fix` — ESLint via `@bluzzi/eslint-config`.
- `pnpm ts:check` — runs `react-router typegen && tsc`. Don't run bare `tsc`: `.react-router/types` is generated, and route modules import `Route.*` types from `./+types/*` that only exist after typegen.
- No tests exist. Verification = lint + ts:check + build, matching the three CI jobs in `.github/workflows/ci.yml`.

## Structure

- App directory is `src` (not the default `app`). Routes are declared centrally in `src/routes.ts`: adding a route means creating the module in `src/routes/` AND registering it there.
- Import app code with the `#/*` alias (maps to `src/*` via tsconfig paths + Vite).
- Page content is data-driven from `src/lib/configs/` (`experience`, `skill`, `metadata`); the home page composes `src/routes/*.section.tsx`.

## Gotchas

- Tailwind theme tokens are redefined in `src/lib/styles/tailwind.css` with defaults wiped (`--text-*: initial`, `--color-*: initial`, `--shadow-*: initial`, `--radius-*: initial`). Only the listed sizes/colors exist — e.g. `text-4xl` or `text-red-500` won't resolve; add tokens there instead.
- `/opengraph-image` and `/twitter-image` render PNGs server-side with satori + `@resvg/resvg-wasm`; WASM init is a one-time singleton in `src/lib/components/metadata-image/`. The Geist font is bundled via a `?inline` TTF import, and satori JSX only supports a flexbox subset.
- Site content and `<html lang>` are French.
