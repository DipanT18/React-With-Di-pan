# react-router

## Goal
Demonstrates layout-based routing and nested route rendering.

## Core File Flow
`src/main.jsx -> RouterProvider -> Layout -> page components`

## Route Connectivity
- `/` -> `Home`
- `/about` -> `About`
- `/contact` -> `Contact`
- `/user/:id` -> `User`
- `/github` -> `Github`

## Data Flow
- Navigation through `NavLink` changes route state.
- Router renders matching component into `Outlet`.
- `Github` route fetches profile data and displays API response.
