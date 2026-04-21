# tailwindprops

## Goal
Demonstrates passing props into reusable presentational components.

## Core File Flow
`src/main.jsx -> src/App.jsx -> src/components/card.jsx`

## Data Flow
`App` passes `name`, `position`, and optional `message` props to `Card`; `Card` renders values and fallback button text.

## Connectivity
`Card` is a reusable UI unit and can be instantiated with different prop combinations.
