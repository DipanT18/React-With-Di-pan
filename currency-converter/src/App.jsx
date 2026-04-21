// File logic note: This file is documented for revision-friendly learning.
// Converter page: combines controlled inputs with API-backed rate conversion.

import { useState } from 'react'
import './App.css'
import useCurrencyinfo from './mount'

function App() {
  const [amount, setAmount] = useState(1)
  const [fromCurrency, setFromCurrency] = useState('NPR')
  const [toCurrency, setToCurrency] = useState('USD')
  //Fetching rates to App
  const rates = useCurrencyinfo(fromCurrency)

  const convertedAmount = amount * (rates[toCurrency]?.value / rates[fromCurrency]?.value)
  
  return (
    <>

      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
  <h1 className="text-4xl font-bold mb-8 text-gray-800">Currency Converter</h1>

  <div className="flex flex-col sm:flex-row gap-4 bg-white p-6 rounded-xl shadow-lg w-full max-w-lg">
    
    {/* Amount */}
      <div className="flex flex-col">
        <label className="mb-1 text-gray-600 font-medium">Amount</label>
        <input
          type="number"
          value={amount}
          min={0}
          // onChange={(e) => setAmount(Number(e.target.value)) || 1}  --> This shows leading zero because amount is in Number
          onChange={(e) => {
            const value = e.target.value;
            // Allows clearing the field without it snapping to 0
            setAmount(value === "" ? "" : Number(value));
          }}
          className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

    {/* From Currency */}
    <div className="flex flex-col">
      <label className="mb-1 text-gray-600 font-medium">From</label>
      <select
        value={fromCurrency}
        onChange={(e) => setFromCurrency(e.target.value)}
        className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {Object.keys(rates).map((currency) => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))}
      </select>
    </div>

    {/* To Currency */}
    <div className="flex flex-col">
      <label className="mb-1 text-gray-600 font-medium">To</label>
      <select
        value={toCurrency}
        onChange={(e) => setToCurrency(e.target.value)}
        className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {Object.keys(rates).map((currency) => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))}
      </select>
    </div>
  </div>

  {/* Converted Result */}
  <div className="mt-6 bg-blue-100 text-blue-800 font-semibold p-4 rounded-lg shadow-md w-full max-w-lg text-center text-xl">
    {convertedAmount.toFixed(4)} 
  </div>
</div>
    </>
  )
}

export default App
