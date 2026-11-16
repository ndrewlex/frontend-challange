# d08 · Form module: validation, async checks, accessible errors

**Track:** React module (Thu)  
**Time box:** 75 min build + 30 min write-up

## Goal
Design a reusable form layer (state, validation, submission, error UX) without a form library, then compare to what libraries give you.

## Requirements
Build `useForm<TValues>({ initialValues, validate, onSubmit })` and a `Field` component, used by a "Create project" form:
- Fields: name (required, 3–40 chars), slug (async uniqueness check against a local mock), budget (number ≥ 0), visibility (radio).
- Validate on blur, then on change after first error; all fields on submit.
- Submission: disabled while pending, server error shown in a summary and mapped to the field.

## Constraints
- Types infer from `initialValues`; `errors` keyed by field name.
- Error text linked via `aria-describedby` and `aria-invalid`; error summary receives focus on failed submit.
- Async validation cancels stale checks (reuse the idea from d04).
- Validation is a pure function you can test without React.

## Acceptance criteria
- [ ] Unit tests for `validate`; RTL tests for blur/submit flows
- [ ] Double-clicking submit sends once
- [ ] Focus goes to the first invalid field or the summary on failed submit

## Stretch
- Replace hand-written `validate` with a `zod` schema adapter.
- Dirty/touched tracking and a "leave page?" guard.

## Senior question
Controlled vs uncontrolled inputs: what does each cost in re-renders for a 50-field form, and how would you measure it?

## References
React docs: Managing state · WAI: Form validation and error messages
