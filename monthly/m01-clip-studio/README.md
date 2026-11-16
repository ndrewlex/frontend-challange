# M1 · Clip Studio (Weekends, Nov 21 – Dec 13, 2026)

A generic "video clip studio" dashboard. All data is mocked locally; **no** company APIs, brand, or copy.

## Goal
Learn app-level structure: routing, theming, folders at scale, conventions, deployment.

## Stack
Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 (`@theme` tokens) · deployed to Vercel (or Docker).

Scaffold on the first weekend: `pnpm create next-app monthly/m01-clip-studio`, then add `monthly/*` to `pnpm-workspace.yaml`.

## Milestones

### Weekend 1: Foundations
- [ ] App scaffolded; route groups `(marketing)` and `(app)` with separate layouts
- [ ] Design tokens in `app/globals.css` `@theme` (color scale, semantic colors, spacing, radius, type, breakpoints)
- [ ] `cn()` helper (`clsx` + `tailwind-merge`)
- [ ] Light/dark theme without flash; theme switcher
- [ ] Folder conventions written down (see ADR-001)

### Weekend 2: Core UI
- [ ] Shell: sidebar + topbar, responsive (drawer on mobile)
- [ ] Pages: Dashboard, Projects list, Project detail, Settings
- [ ] Reuse graduated components from `@fc/ui` (Dialog, Tabs) where they fit
- [ ] Mock data layer: a typed in-repo API (`/app/api/*` route handlers with static data)
- [ ] Loading, empty, and error UI for every data view (`loading.tsx`, `error.tsx`, `not-found.tsx`)

### Weekend 3: Data and state
- [ ] Server Components for reads; a client store only for UI state
- [ ] Search, filter, sort synced to URL search params
- [ ] One mutation with optimistic UI
- [ ] Metadata and Open Graph per page

### Weekend 4: Ship
- [ ] Production build clean; Lighthouse ≥ 90 on all four categories for the main pages
- [ ] Deployed to a public URL; env vars via platform settings (none committed)
- [ ] README with architecture diagram, folder map, how to run
- [ ] ADRs: 001 folder structure, 002 styling/tokens, 003 data fetching
- [ ] Monthly retro + skill-matrix update

## Suggested structure

```
src/
├─ app/
│  ├─ (marketing)/
│  ├─ (app)/dashboard|projects|settings/
│  ├─ api/
│  ├─ globals.css      # @theme tokens
│  └─ layout.tsx
├─ components/         # shared, generic
├─ features/           # feature-scoped components, hooks, types
├─ lib/                # utils, cn(), fetch wrapper
├─ stores/
├─ types/
└─ mocks/
docs/adr/
```

## Definition of done
Typecheck + lint pass, no console errors, keyboard-usable, responsive 320–1440px, deployed, ADRs written.

## Senior question for the retro
What would you change in the folder structure if this app grew to 10 teams? Where do the boundaries (and lint rules) go?
