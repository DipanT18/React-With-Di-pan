# password-generator

## Goal
Shows hook composition for random password generation and clipboard copy.

## Core File Flow
`src/main.jsx -> src/App.jsx`

## Data Flow
1. Length and toggle controls update component state.
2. `password_generator` recomputes password using selected character set.
3. `useEffect` regenerates on dependency changes.
4. Copy button uses `ref` + clipboard API.

## Connectivity
All logic and UI currently exist in `App.jsx`; `main.jsx` only mounts.
