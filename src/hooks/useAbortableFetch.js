import { useState, useEffect, useRef } from 'react'

export function useAbortableFetch(fetcher, deps = []) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const requestIdRef = useRef(0)

  useEffect(() => {
    const requestId = ++requestIdRef.current
    setLoading(true)
    setError(null)
    // BUG: No AbortController, no check if requestId is still latest on resolve
    fetcher()
      .then((result) => {
        // Should check requestId === requestIdRef.current before setting
        setData(result)
        setLoading(false)
      })
      .catch((err) => {
        setError(err)
        setLoading(false)
      })
    // Missing cleanup abort
  }, deps)

  return { data, loading, error }
}
