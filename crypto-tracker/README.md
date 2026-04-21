# crypto-tracker

## Goal
Crypto price conversion UI using a custom data-fetching hook.

## Core File Flow
`src/main.jsx -> src/App.jsx -> src/Find.jsx`

## Data Flow
1. User selects coin and amount in `App`.
2. `useFind(base, target)` runs `fetch` inside `useEffect`.
3. Hook returns `{ rate, loading, error }`.
4. `App` computes converted amount and renders result state.

## Connectivity
- `Find.jsx` is the API abstraction layer.
- `App.jsx` handles presentation + derived calculation.
