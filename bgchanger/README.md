# bgchanger

## Goal
Shows state-driven UI styling using dynamic background color changes.

## Core File Flow
`src/main.jsx -> src/App.jsx`

## Data Flow
1. Color buttons trigger `setColor`.
2. Updated state is bound to wrapper `style={{ backgroundColor: color }}`.
3. React re-renders with the new background.

## Connectivity
All behavior lives in `App.jsx`; `main.jsx` only mounts it.
