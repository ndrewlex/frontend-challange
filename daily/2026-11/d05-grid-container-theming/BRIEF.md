# d05 · Card grid with container queries and theme switcher

**Track:** HTML/CSS (Mon)  
**Time box:** 75 min build + 30 min write-up

## Goal
Make components responsive to their **container**, not the viewport, and theme them through tokens alone.

## Requirements
- A "project card" component used in a sidebar (narrow), a main grid (medium), and a featured row (wide), the same markup in all three.
- Card layout changes through `@container` queries: stacked → media-left → media-left with actions.
- Theme switcher: light, dark, and one custom brand theme, toggled via `data-theme` on `<html>` and persisted to `localStorage`.

## Constraints
- No media queries for card layout.
- Grid via `repeat(auto-fill, minmax(min(100%, 16rem), 1fr))`.
- Zero hard-coded colors outside the token layer; semantic tokens (`--surface`, `--on-surface`) map to raw palette tokens.
- Avoid theme flash on load (inline script in `<head>` sets the theme before paint).

## Acceptance criteria
- [ ] Resize the sidebar container and the card adapts without touching the viewport
- [ ] Switching theme changes nothing except custom property values
- [ ] No flash of wrong theme on hard reload
- [ ] Contrast ≥ 4.5:1 for text in all three themes

## Stretch
- Respect `prefers-color-scheme` as the default when nothing is stored.
- `@layer` ordering: reset, tokens, components, utilities.

## Senior question
Why do semantic tokens (`--surface`) beat using raw palette tokens (`--gray-100`) in components?

## References
MDN: container queries · web.dev: "Color scheme"
