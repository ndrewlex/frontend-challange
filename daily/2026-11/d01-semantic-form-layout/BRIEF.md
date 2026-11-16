# d01 · Semantic signup form + responsive layout

**Track:** HTML/CSS (Mon)  
**Time box:** 75 min build + 30 min write-up

## Goal

Build a form and page layout that works with keyboard, screen reader, and any viewport, using no framework and no CSS libraries.

## Requirements

Build a "Create account" page: header, main, footer, and a centered card with a form.

- Fields: full name, email, password (with show/hide toggle), country (select), terms checkbox.
- Inline hint text and error message per field (static markup is fine today; JS only for the toggle).
- Two-column layout ≥ 768px (form left, benefits list right); single column below.

## Constraints

- Semantic elements only where possible (`header`, `main`, `section`, `form`, `fieldset`, `label`, `button`).
- Every control has a programmatically associated `<label>`; hints/errors linked with `aria-describedby`.
- Layout via CSS Grid + `gap`; **no** fixed widths in px for the card (use `min()`/`clamp()`/`ch`).
- All colors/spacing/radius as CSS custom properties on `:root`.
- Visible `:focus-visible` style; respect `prefers-reduced-motion`.

## Acceptance criteria

- [ ] Tab order matches visual order; every control reachable and operable by keyboard
- [ ] Clicking a label focuses its control
- [ ] Lighthouse accessibility score ≥ 95
- [ ] No horizontal scroll at 320px
- [ ] Zoom to 200% still usable

## Stretch

- `prefers-color-scheme: dark` theme by only overriding the custom properties.
- Use `:has()` to style a field wrapper when its input is `:invalid`.

## Senior question

Why is `placeholder` not a replacement for `<label>`, and what are two other things it breaks?

## Self-review checklist

See `daily/_template/BRIEF.md`.

## References

MDN: HTML forms guide · MDN: `:focus-visible` · WAI-ARIA Authoring Practices (forms)
