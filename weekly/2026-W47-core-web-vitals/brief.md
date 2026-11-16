# Week 1 · Core Web Vitals baseline (Fri 2026-11-20)

**Area:** Performance  
**Time box:** 2h

## Scenario
"The signup page feels slow on mobile and our SEO team says LCP is poor." You must find out whether that is true, why, and fix the biggest cause.

## Target
Your `daily/2026-11/d01-semantic-form-layout` page. Before you start, deliberately make it worse in a copy (`weekly/2026-W47-core-web-vitals/src/`):
- Add a 1.5MB unoptimized hero image above the fold, with no `width`/`height`.
- Load a web font with no `font-display` and no preload.
- Add a render-blocking `<script>` in `<head>` doing a 300ms busy loop.
- Inject a late banner that pushes content down after 1s.
- Attach a heavy click handler (200ms sync work) to the submit button.

## Steps
1. **Baseline:** Lighthouse mobile (Slow 4G, 4× CPU) × 3 runs, take the median. Record LCP, CLS, TBT, and INP via the `web-vitals` library logged to the console (install it in this folder; log locally only, send nothing anywhere).
2. **Diagnose:** Performance panel → identify the LCP element and its phases (TTFB, load delay, load time, render delay). Identify each layout shift source and the long tasks.
3. **Fix** in order of impact: responsive/modern image with `width`/`height` and `fetchpriority="high"`; font `font-display: swap` + preload; defer/remove the blocking script; reserve space for the banner; break up or defer the click work (`requestIdleCallback` / yielding).
4. **Re-measure** the same way and fill `report.md`.

## Deliverable
`report.md` from `weekly/_template/report.md`, with before/after table and screenshots of the traces.

## Targets
LCP < 2.5s · CLS < 0.1 · INP < 200ms (lab proxy: TBT < 200ms).

## Senior question
Lab data vs field data: why can Lighthouse say "good" while real users have poor INP, and what would you add to production to know?
