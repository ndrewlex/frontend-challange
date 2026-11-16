# Frontend Challenge

A 2-hours-a-day system for growing from mid to senior frontend. Three cadences that build on each other:

| Cadence | When | Folder | Output |
| ------- | ---- | ------ | ------ |
| Daily | Mon–Thu, 2h | `daily/` | A small exercise + a 5-line write-up |
| Weekly | Fri, 2h | `weekly/` | A drill with **measured** before/after numbers (`report.md`) |
| Monthly | Sat–Sun, ~16h/month | `monthly/` | A full app with an ADR, tests (from M2), and a deploy |

Plan for the whole quarter: [ROADMAP.md](ROADMAP.md). Track yourself in [progress/](progress/).

## Session format (2h)

**Daily (Mon–Thu):** 15 min review yesterday's notes → 75 min build → 30 min write-up in `progress/log.md` and answer the "senior question".

**Weekly (Fri):** read `brief.md` → measure the baseline → change → measure again → write `report.md` (what changed, what the numbers say, what you'd do next).

**Monthly (Sat–Sun):** work from the project's `README.md` milestones; write one ADR (`docs/adr/`) per major decision.

## Daily rotation

| Day | Focus |
| --- | ----- |
| Mon | HTML / CSS |
| Tue | JavaScript |
| Wed | React component |
| Thu | React module (hook, form, data, state) |

## Commands

```bash
pnpm install
pnpm dev          # one dev server for all daily exercises
pnpm test         # vitest for daily + packages
pnpm typecheck
pnpm lint
```

Open an exercise at `http://localhost:5173/<month>/<exercise-folder>/`, e.g. `/2026-11/d01-semantic-form-layout/`.

## Creating a new daily exercise

Copy `daily/_template/` to `daily/YYYY-MM/dNN-short-name/`, fill in `BRIEF.md`, then work. Vanilla days: `index.html` + CSS/JS. React days: `index.html` loading `main.tsx`.

## Graduation

A daily React component that is tested, accessible, and token-styled moves into `packages/ui` (see its README). Weekly drills then target your own code.

## Rules for company-derived practice

- Never use credentials, `.env`, `.pem` files, endpoints, trackers, or monitoring config from the source repos.
- Only study **patterns**. Re-implement from scratch in `labs/ui-patterns/` with a generic domain and mock data. See that folder's README.
- GreatFrontend is a lookup, not the curriculum: pick only questions matching the current week's theme.
