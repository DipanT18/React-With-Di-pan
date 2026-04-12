import { useState, useEffect } from 'react'

function useFind(base, target) {
  const [rate, setRate] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!base || !target) return;

    setLoading(true)

    // base = 'bitcoin', 'ethereum', etc.
    // target = 'usd', 'eur', etc.
    fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${base}&vs_currencies=${target}`)
      .then(res => res.json())
      .then(data => {
        setRate(data[base][target])
        setLoading(false)
      })
      .catch(err => {
        setError(err.message)
        setLoading(false)
      })

  }, [base, target])

  return { rate, loading, error }
}

export default useFind