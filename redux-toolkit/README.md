# redux-toolkit

## Goal
Todo app with global state management using Redux Toolkit.

## Core File Flow
`src/main.jsx -> Provider(store) -> App -> AddTodo + Todos -> todoSlice`

## Data Flow
1. `AddTodo` dispatches `addTodo(payload)`.
2. `todoSlice` reducer appends todo to state.
3. `Todos` reads `state.todos` with `useSelector`.
4. Delete button dispatches `removeTodo(id)`.

## Connectivity
- `App/store.js` configures Redux store.
- `Features/todo/todoSlice.js` defines state + reducers + actions.
- UI components interact via `dispatch` and `selector` hooks.
