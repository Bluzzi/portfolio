---
description: Check, update and repair dependencies
---

The outdated dependency report is injected below:

!`pnpm outdated`

1. Present the report in the chat, grouped as patch / minor / major, with current → target versions.
2. Ask me which packages to update, and wait for my answer.
3. Update only the approved packages with `pnpm up <package>@latest` (one command per package, so a failure is attributable).
4. Run `pnpm run lint:fix`, `pnpm run ts:check` and `pnpm run pw:test`, and fix every error caused by the updates.
5. For each updated package, check its changelog or release notes for breaking changes, search the repo for affected APIs, and report what is impacted.
