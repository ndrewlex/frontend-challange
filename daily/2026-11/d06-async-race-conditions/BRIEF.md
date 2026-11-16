# d06 · Async: promise utilities and race conditions

**Track:** JS (Tue)  
**Time box:** 75 min build + 30 min write-up

## Goal
Master the event loop and promise semantics by re-implementing the combinators and taming concurrency.

## Requirements
In `async.ts` with tests:
- `promiseAll`, `promiseAllSettled`, `promiseRace`, `promiseAny` (from scratch, no built-ins)
- `retry(fn, { retries, delayMs, backoff })` with exponential backoff and an `AbortSignal`
- `pLimit(concurrency)` returning a limiter that runs at most N tasks at once
- `withTimeout(promise, ms)`

## Constraints
- Order of results must match order of inputs (even when promises resolve out of order).
- Must handle non-promise values and empty arrays like the built-ins.
- No unhandled rejections left dangling (prove with a test).

## Acceptance criteria
- [ ] Each function has tests for happy path, rejection, empty input, mixed values
- [ ] `pLimit(2)` with 5 tasks never exceeds 2 concurrent (assert with a counter)
- [ ] `retry` stops immediately on abort

## Stretch
- Predict the output of 5 event-loop puzzles (`setTimeout`, microtasks, `await`) *before* running them; log your accuracy.

## Senior question
Why can `await` inside a `for...of` loop be correct in one case and a performance bug in another?

## References
MDN: Promise · "Jake Archibald: Tasks, microtasks, queues and schedules"
