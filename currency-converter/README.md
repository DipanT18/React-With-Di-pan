# currency-converter

## Goal
Converts currency values using rates from CurrencyAPI via custom hook.

## Core File Flow
`src/main.jsx -> src/App.jsx -> src/mount.jsx`

## Data Flow
1. User edits amount/from/to currencies.
2. `useCurrencyinfo(fromCurrency)` fetches latest rates.
3. `App` derives `convertedAmount` using source/target rates.
4. Converted value is rendered live as state changes.

## Connectivity
- `mount.jsx` isolates API fetch logic.
- `App.jsx` controls form interactions and conversion formula.
