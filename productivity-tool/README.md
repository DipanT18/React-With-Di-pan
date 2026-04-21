# productivity-tool

## Goal
Multi-route productivity dashboard (tasks, weather, clock, settings, insights).

## Core File Flow
`src/main.jsx -> router -> src/layout.jsx -> route components`

## Route Connectivity
- `/` -> `Dashboard`
- `/tasks` -> `TasksPage`
- `/insights` -> `Insights`
- `/settings` -> `Settings`

## Data Flow
- `Tasks` keeps local todo list state and renders CRUD actions.
- `Clock` updates current time every second.
- `Weather` pulls live weather via `useWeather` custom hook.
- `Layout` composes global frame (`Header`, side widgets, `Outlet`, `Footer`).
