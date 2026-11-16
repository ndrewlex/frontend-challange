# d03 · Headless accessible Dialog (React)

**Track:** React component (Wed)  
**Time box:** 75 min build + 30 min write-up

## Goal
Build a dialog from first principles to learn focus management, portals, and ARIA, the parts people usually delegate to a library.

## Requirements
Compound API:

```tsx
<Dialog open={open} onOpenChange={setOpen}>
  <Dialog.Trigger>Open</Dialog.Trigger>
  <Dialog.Content>
    <Dialog.Title>Delete project</Dialog.Title>
    <Dialog.Description>This cannot be undone.</Dialog.Description>
    <Dialog.Close>Cancel</Dialog.Close>
  </Dialog.Content>
</Dialog>
```

Controlled and uncontrolled (`defaultOpen`) both work.

## Constraints
- Render via `createPortal` to `document.body`.
- `role="dialog"`, `aria-modal`, `aria-labelledby`/`aria-describedby` wired by context (ids from `useId`).
- Focus moves into the dialog on open, is trapped (Tab/Shift+Tab loop), and returns to the trigger on close.
- Escape and backdrop click close; page behind is not scrollable while open.
- No dialog library; no styling opinions beyond a minimal demo page.

## Acceptance criteria
- [ ] RTL tests: opens/closes, Escape, focus return, focus trap, labelled by title
- [ ] Works if Content contains no focusable elements (focus the container)
- [ ] Only one scroll lock when two dialogs are nested

## Stretch
- Nested dialogs with a stack so Escape closes only the topmost.
- `inert` on the rest of the page instead of only `aria-modal`.

## Senior question
What breaks if the portal root is created during render on the server, and how would you make it SSR-safe?

## References
WAI-ARIA APG: Dialog (Modal) pattern · React docs: `createPortal`, `useId`
