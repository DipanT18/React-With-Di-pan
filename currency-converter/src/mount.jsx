// File logic note: This file is documented for revision-friendly learning.
// Custom hook: fetches rate table for the selected base currency.

import {useState, useEffect} from 'react'

function useCurrencyinfo(currency) {
    const[data, setdata] = useState({})
    const key = import.meta.env.VITE_API_KEY;
    useEffect (() => {
        fetch(`https://api.currencyapi.com/v3/latest?apikey=${key}&base_currency=${currency}`)
        .then((res) => res.json())
        .then((res) => setdata(res.data))
        .catch((err) => console.log(err))
    }, [currency])

    return data     
}   

export default useCurrencyinfo;