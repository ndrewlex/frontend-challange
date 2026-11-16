# d04 · `useFetch`: loading, errors, races, cancellation

**Track:** React module (Thu)  
**Time box:** 75 min build + 30 min write-up

## Goal
Feel why server state is hard by building a small data hook, then articulate what TanStack Query solves for you.

## Requirements
`useFetch<T>(url, { enabled? })` returns `{ data, error, status, refetch }` where `status` is `'idle' | 'loading' | 'success' | 'error'`.

Use a **local mock** (an in-file `fakeFetch` with random delay and a failure toggle). No real network or company endpoints.

## Constraints
- Abort the previous request when `url` changes or the component unmounts (`AbortController`).
- A slow earlier response must never overwrite a newer one (prove with a test).
- No `useEffect` data-fetching bugs: dependency array correct, no stale closures.
- Discriminated union types so `data` is non-null when `status === 'success'`.

## Acceptance criteria
- [ ] Test: changing `url` rapidly shows only the last response
- [ ] Test: unmount mid-request produces no state update warning
- [ ] `refetch()` keeps old data visible while loading (stale-while-revalidate)
- [ ] Typecheck narrows `data` correctly

## Stretch
- In-memory cache keyed by URL with a `staleTime`.
- Dedupe concurrent identical requests.

## Senior question
List three problems this hook still has that TanStack Query solves, and one case where you would still not use it.

## References
React docs: "You Might Not Need an Effect", "Synchronizing with Effects" · TanStack Query docs: "Important Defaults"
