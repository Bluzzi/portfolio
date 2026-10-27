---
description: Run CI-equivalent verification and fix failures
---

Run the CI-equivalent verification in order, fixing every failure before moving to the next step:

1. `pnpm run lint:fix` (CI runs plain `pnpm run lint`; keep the auto-fixes)
2. `pnpm run ts:check`
3. `pnpm run pw:test` (this builds and serves the production bundle on localhost:3000 itself, so it also covers the CI build job)

When everything passes, summarize what was fixed. Do not commit unless I explicitly ask.
