# Roadmap: 12 weeks (starts Mon 2026-11-16)

Three 4-week blocks. Each block ends with a monthly project and a retro.

## Weekly drills (Fridays)

| Week | Date (Fri) | Theme | Skill area |
| ---- | ---------- | ----- | ---------- |
| 1 | 2026-11-20 | Core Web Vitals baseline (LCP, CLS, INP) | Performance |
| 2 | 2026-11-27 | Bundle size and code splitting | Performance |
| 3 | 2026-12-04 | Rendering performance (rerenders, virtualization) | Performance |
| 4 | 2026-12-11 | XSS, sanitization, CSP | Security |
| 5 | 2026-12-18 | Auth storage: cookies vs tokens, CSRF | Security |
| 6 | 2026-12-25 | Dependency and supply-chain hygiene | Security |
| 7 | 2027-01-01 | Accessibility audit and keyboard flows | Quality |
| 8 | 2027-01-08 | Design tokens, theming, Tailwind v4 `@theme` | Design system |
| 9 | 2027-01-15 | State architecture: server vs client state | Architecture |
| 10 | 2027-01-22 | Debugging drills (seeded bugs) | Problem solving |
| 11 | 2027-01-29 | Refactoring a legacy-style component | Problem solving |
| 12 | 2027-02-05 | Frontend system design (timeline editor / real-time feed) | Architecture |

Only weeks 1–2 have briefs now. Ask for the next ones a week ahead so they can adapt to what you struggled with.

## Monthly projects (weekends)

| Block | Project | Focus |
| ----- | ------- | ----- |
| M1 (wk 1–4) | `m01-clip-studio`: Next.js 16, Tailwind v4, tokens, theming, route groups, deploy | Structure, theming, folders, deployment |
| M2 (wk 5–8) | Same app: Vitest + RTL, Playwright, GitHub Actions, Lighthouse CI, husky + lint-staged | Testing, CI/CD |
| M3 (wk 9–12) | `m03-*`: real-time + heavy UI: SSE, virtualization, drag and drop, on top of `@fc/ui` + Storybook | Scale, design system |

## Daily skill tracks (cycle repeats)

- **HTML/CSS:** semantics, forms, a11y, grid, container queries, custom properties, logical properties, responsive type, theming.
- **JS:** closures, `this`, prototypes, async and races, iterators, event loop, debounce/throttle, `Promise` utilities, event emitter, immutability.
- **React component:** headless dialog, tabs, combobox, tooltip, toast, popover, accordion, menu (focus management, portals, refs).
- **React module:** data hook, form with validation, optimistic update, infinite/virtualized list, drag and drop, context vs store, error boundaries, Suspense.

## Soft skills (woven in)

- One ADR per monthly project.
- A real PR description for every weekly report (problem, approach, trade-offs, screenshots/metrics).
- Self-review your own diff before calling anything done.
- Weekly retro in `progress/retros/`; monthly re-rate in `progress/skill-matrix.md`.

## Patterns worth studying from the source platform repo (study, then clean-room)

App Router and route groups · Tailwind v4 `@theme` tokens · `cn()` helper · TanStack Query vs Zustand boundaries · SSE/WebSocket service layers · `react-virtual` · dnd-kit · lint rules that enforce architecture (file size, no magic values) · husky + lint-staged.

From the source editor repo (until it's taken down): Radix/shadcn + `cva` variants · zod · Jest + RTL style · timeline-editor UI complexity · hotkeys.
