---
name: check
description: Run the CI-equivalent verification before finishing changes
---

## Steps

Run, in this order, and fix every failure before moving to the next step:

1. `pnpm run lint:fix` (CI runs plain `pnpm run lint`; keep the auto-fixes)
2. `pnpm run ts:check` (runs `react-router typegen && tsc`)
3. `pnpm run pw:test` (builds and serves the production bundle on localhost:3000 itself, so it also covers the CI build job)

## Constraints

- Never run bare `tsc`: `.react-router/` is gitignored and route modules import `Route.*` types from `./+types/*` that only exist after typegen.
- When everything passes, summarize what was fixed. Do not commit unless the user explicitly asks.
