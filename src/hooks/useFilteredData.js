import { useState, useEffect } from 'react'

// BUG: derived state anti-pattern - stores filtered in state and doesn't resync correctly when data changes
export function useFilteredData(data, query) {
  const [filtered, setFiltered] = useState(data)

  useEffect(() => {
    if (!query) {
      setFiltered(data)
    } else {
      const lower = query.toLowerCase()
      setFiltered(
        data.filter(
          (row) =>
            row.name.toLowerCase().includes(lower) ||
            row.email.toLowerCase().includes(lower) ||
            row.role.toLowerCase().includes(lower)
        )
      )
    }
  }, [query]) // BUG: missing data dependency, stale when data changes after query

  return filtered
}
