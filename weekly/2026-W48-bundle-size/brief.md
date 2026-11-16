# Week 2 · Bundle size and code splitting (Fri 2026-11-27)

**Area:** Performance  
**Time box:** 2h

## Scenario
"The first load ships 1.4MB of JS and half of it is for screens most users never open." Cut the initial bundle and prove it.

## Target
Create a small Vite + React app in `weekly/2026-W48-bundle-size/app/` with deliberate bloat:
- Import all of `lodash` for one `debounce`.
- Import a full date library plus all locales for one date format.
- A heavy chart or markdown renderer used only on a hidden "Reports" route.
- Barrel file re-exporting 40 components (import one, tree-shaking doubtful).
- A big JSON file imported at the top level.

Add the project to `pnpm-workspace.yaml` (`weekly/*/app`) when you create it.

## Steps
1. **Baseline:** `vite build` + `rollup-plugin-visualizer` (or `vite-bundle-visualizer`). Record total and initial JS (raw and gzip) and number of chunks.
2. **Diagnose:** rank the top 5 contributors with the treemap; separate "needed on first paint" from "needed later".
3. **Fix:** replace/trim dependencies (named imports, lighter alternatives, native APIs); `React.lazy` + `Suspense` route split; dynamic `import()` the heavy feature on interaction; load JSON on demand; preload on hover/idle for the lazy route.
4. **Guardrail:** add a size budget check script that fails the build when initial JS exceeds a threshold (this becomes a CI step in Month 2).

## Deliverable
`report.md` with a before/after table (initial JS gzip, total JS, chunk count, Lighthouse TBT) and the treemap screenshots.

## Senior question
When does code splitting make performance *worse*, and how do you decide the boundary between chunks?
