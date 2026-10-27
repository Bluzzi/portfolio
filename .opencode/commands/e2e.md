---
description: Run or debug e2e tests
---

Run the e2e tests selected by $ARGUMENTS (a file like `e2e/home.ts`, a title filter, or nothing for the whole suite) with `pnpm run pw:test`.

On failure:
1. Read the failure output and the saved trace under `test-results/` (traces are always on) to find the root cause.
2. Fix the product code, not the test, unless the test itself is wrong.
3. Never weaken or delete an assertion to make a test pass; brittle content assertions are deliberate.
