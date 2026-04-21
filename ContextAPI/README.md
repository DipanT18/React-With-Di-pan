# ContextAPI

## Goal
Demonstrates how React Context shares login state between sibling components.

## Core File Flow
`src/main.jsx -> src/App.jsx -> Context/UserContextProvider.jsx -> Components/Login.jsx + Components/Profile.jsx`

## Data Flow
1. `Login` captures username/password using local state.
2. On login button click, `setUser` from context updates shared `user` state.
3. `Profile` reads `user` from context and conditionally renders greeting.

## Connectivity
- `UserContext.js` creates the shared context object.
- `UserContextProvider.jsx` owns shared state and injects `value={{ user, setUser }}`.
- Child components consume the provider value with `useContext`.
