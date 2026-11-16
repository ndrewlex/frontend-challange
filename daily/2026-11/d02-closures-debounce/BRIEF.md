# d02 · Closures: debounce, throttle, once, memoize

**Track:** JS (Tue)  
**Time box:** 75 min build + 30 min write-up

## Goal
Understand closures and `this` by writing the utilities you use every day, with tests proving the behavior.

## Requirements
Implement in `utils.ts` (typed generics) with a test file `utils.test.ts` (Vitest fake timers):
- `debounce(fn, ms, { leading?, trailing? })` with `.cancel()` and `.flush()`
- `throttle(fn, ms)` (leading + trailing call)
- `once(fn)`
- `memoize(fn, keyResolver?)` with a `.cache` you can clear

## Constraints
- No lodash. No classes.
- Preserve `this` and arguments; type them so `debounce(fn)` has `fn`'s parameter types.
- Memoize must not leak without a way to bound it (add `maxSize` with LRU eviction as the last step).

## Acceptance criteria
- [ ] Tests cover: rapid calls collapse, trailing arguments are the latest, cancel prevents call, flush calls immediately
- [ ] `throttle` fires at most once per window
- [ ] Types: `debounced('a')` errors if `fn` takes a number
- [ ] `pnpm test` and `pnpm typecheck` pass

## Stretch
- `debounce` returning a Promise of the last result.
- `AbortSignal` support to cancel.

## Senior question
In a React component, why does `debounce(handler, 300)` created inside the render body silently not debounce?

## References
MDN: Closures · Vitest: fake timers
