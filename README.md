# React-With-Di-pan

A structured collection of React learning projects (fundamentals → intermediate features) built as independent Vite apps.

## Repository Structure

- `DipanLearns/` — first React component rendering basics
- `counter/` — state update behavior and batching
- `bgchanger/` — UI state-driven styling
- `password-generator/` — hooks (`useState`, `useCallback`, `useEffect`, `useRef`)
- `tailwindprops/` — props + Tailwind component composition
- `ContextAPI/` — context provider + consumer flow
- `currency-converter/` — custom hook + external rates API
- `crypto-tracker/` — custom hook + external market API
- `react-router/` — route composition and layout-based navigation
- `redux-toolkit/` — global state using Redux Toolkit
- `productivity-tool/` — multi-page app combining router + widgets + todo features
- `custom_react/` — vanilla JS custom React-style experimentation
- `DOM1/` — plain DOM experimentation

## How Projects Are Connected

Projects are independent learning modules. They are connected conceptually, not at runtime:

1. Start with component basics (`DipanLearns`, `counter`).
2. Move to styling/props (`bgchanger`, `tailwindprops`).
3. Learn hooks deeply (`password-generator`).
4. Learn shared state patterns (`ContextAPI`, `redux-toolkit`).
5. Learn routing and page architecture (`react-router`, `productivity-tool`).
6. Learn API data-flow with custom hooks (`currency-converter`, `crypto-tracker`, weather in `productivity-tool`).

## Data Flow Pattern Used Across This Repo

Most apps follow this same pipeline:

`User Event -> React State Update -> Derived UI/Data -> Render`

When API is involved:

`User Event -> Hook Dependency Change -> useEffect Fetch -> Hook State Update -> App Re-render`

When global/shared state is involved:

`User Event -> Context/Redux Update -> Subscriber Component Re-render`

## Revision-Friendly Workflow

- Each project has its own `README.md` with internal flow and file map.
- Focus revisions project-by-project (do not mix concepts).
- Start from each app's `src/main.jsx` and follow imports toward feature components/hooks.
