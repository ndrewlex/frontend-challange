# Clean-room pattern labs

Purpose: understand how patterns in the company's frontend work by rebuilding them **from scratch** in a generic domain.

## Hard rules (company policy)

1. **Never** read, copy, or reference credentials, `.env*`, `.pem` keys, API endpoints, tracker/analytics code, or monitoring config from the source repos.
2. **Never** paste company source code here. Study a pattern, close the file, then write your own version from memory and docs.
3. Use a generic domain ("video clip studio", "asset library") and **mock data** only.
4. No company names, internal URLs, or product copy in commits.

## Lab ideas (pattern → what to build)

| Pattern | Lab |
| ------- | --- |
| Tailwind v4 `@theme` tokens + `cn()` | Token file + `cn()` helper + one themed Button |
| Query vs store boundary | Mock list: server state in TanStack Query, UI state in Zustand |
| SSE/WebSocket service layer | Fake event stream (local script) + reconnecting client + store |
| Virtualized list | 50k-row list with `@tanstack/react-virtual` |
| Drag and drop reorder | Sortable list with dnd-kit, keyboard-accessible |
| Architecture-enforcing lint | ESLint rules for file size and no magic values |
| `cva` variants | Button/Badge variants with typed props |
| Timeline UI (editor) | Zoomable timeline with draggable clips (mock data) |

Add a folder per lab with a short `NOTES.md`: what the pattern solves, how I built it, trade-offs.
