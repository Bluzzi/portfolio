---
name: route
description: Create or modify a page/route in this React Router v8 portfolio
---

## Steps

1. Create the route module in `src/routes/[name].tsx`:
   - Default-export the page component.
   - Import generated types with `import type { Route } from "./+types/[name]"` (these files are produced by `react-router typegen`; never create or edit them by hand).
   - Export `meta` via `Route.MetaFunction` when the page needs metadata.
2. Register the route in `src/routes.ts`: `index("./routes/[name].tsx")` for the home page or `route("path", "./routes/[name].tsx")`. A module in `src/routes/` is NOT live until registered here.
3. Colocate sections and components as `[name].<section>.tsx` files next to the route module (see `[home].about.tsx`). These are plain components, not routes; never register them.
4. Extract reusable data to `src/lib/configs/` (`skill`, `experience`) when a section is data-driven, with images as hand-written public path strings.

## Constraints

- All user-visible content is French; code and comments are English.
- Tailwind default theme tokens are wiped in `src/lib/styles/tailwind.css`: only the explicitly listed sizes/colors/radii/shadows exist.
- Validate with `pnpm run ts:check` and `pnpm run pw:test`.
