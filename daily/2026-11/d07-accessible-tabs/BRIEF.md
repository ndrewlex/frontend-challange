# d07 · Accessible Tabs (roving tabindex)

**Track:** React component (Wed)  
**Time box:** 75 min build + 30 min write-up

## Goal
Learn composite widget keyboard patterns (roving tabindex, arrow keys) and compound component design with context.

## Requirements
```tsx
<Tabs defaultValue="a" orientation="horizontal" activation="automatic">
  <Tabs.List aria-label="Sections">
    <Tabs.Trigger value="a">A</Tabs.Trigger>
    <Tabs.Trigger value="b" disabled>B</Tabs.Trigger>
    <Tabs.Trigger value="c">C</Tabs.Trigger>
  </Tabs.List>
  <Tabs.Panel value="a">…</Tabs.Panel>
  <Tabs.Panel value="c">…</Tabs.Panel>
</Tabs>
```

## Constraints
- Roles: `tablist`, `tab`, `tabpanel`; `aria-selected`, `aria-controls`, `aria-labelledby` wired via `useId`.
- Only the active tab is in the tab order (roving `tabIndex`); Arrow keys, Home, End move focus; disabled tabs are skipped.
- `activation="manual"` requires Enter/Space to select.
- Controlled and uncontrolled both work. Inactive panels unmounted by default, `keepMounted` option.

## Acceptance criteria
- [ ] RTL tests drive everything through `userEvent.keyboard`
- [ ] Arrow wraps at the ends; vertical orientation uses Up/Down
- [ ] No ids collide when two `Tabs` are on one page

## Stretch
- RTL direction support (`dir="rtl"` flips arrows).
- Extract the roving-focus logic into `useRovingFocus`, reusable for a toolbar or menu.

## Senior question
When would you choose `aria-disabled` over `disabled` for a tab, and what does each do to focus?

## References
WAI-ARIA APG: Tabs pattern · React docs: Passing data deeply with context
