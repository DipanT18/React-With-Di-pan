# counter

## Goal
Demonstrates state updates and functional updater usage.

## Core File Flow
`src/main.jsx -> src/App.jsx`

## Data Flow
- `addValue` calls state updater repeatedly to demonstrate batched updates.
- `removeValue` decrements when the counter is above zero.

## Connectivity
`App.jsx` owns counter state and button handlers; `main.jsx` mounts the app.
