---
description: Draft and publish a GitHub release following repo conventions
---

Draft a new GitHub release for this repository, then wait for my validation before publishing:

1. Summarize the injected commit list. A merge commit only references its PR, the real changes sit in the branch commits listed above it, so inspect them with `git show <sha>` when a change is unclear. If the list is empty, tell me there is nothing to release and stop.
2. Draft the release notes following the syntax rules below, and propose a version number.
3. Ask me to validate or adjust the draft, and wait for my answer.
4. On validation, make sure local `main` matches `origin/main` and the tree is clean, write the body to a temporary file outside the repository, publish with `gh release create <tag> --repo Bluzzi/portfolio --title "V<version>" --notes-file <file>`, then verify the release appears as Latest with `gh release list --repo Bluzzi/portfolio --limit 3`.

## Syntax rules

- The release title is `VX.Y.Z`, the tag is `X.Y.Z`, the body is in English.
- The body has exactly two sections, in this order: `## 🧱 What's new` for user-facing additions, `## 🚧 Refactor` for internal changes, tooling and dependency upgrades.
- One line per change: concise and neutral. Do not repeat the subject on both sides of the colon (bad: "Docker support: the portfolio can now be built and run from a `Dockerfile`", good: "Deployment on Railway with a `Dockerfile` instead of Vercel").
- Mention external contributors with an `[@name](https://github.com/name)` link and reference their PR with a `[#N](https://github.com/Bluzzi/portfolio/pull/N)` link.
- Never use em dashes, prefer commas, parentheses, colons or separate sentences.
- Versioning: breaking changes are ignored, a release with new features bumps the minor version, fixes and refactors only bump the patch version. The major version is reserved for a visual rework of the portfolio.

## Context

The 3 latest releases, as a structure and syntax reference:

!`gh api repos/Bluzzi/portfolio/releases -q '.[0:3][] | "## " + (.name // "untitled") + " (tag " + .tag_name + ")\n\n" + (.body // "empty body") + "\n"'`

The commits since the latest tag:

!`git fetch origin --tags && git log --oneline "$(git describe --tags --abbrev=0)..HEAD"`
