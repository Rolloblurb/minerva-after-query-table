import { useState, useCallback } from 'react'

export function useRowSelection() {
  const [selected, setSelected] = useState(new Set())

  const toggleRow = useCallback((id) => {
    setSelected((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }, [])

  const selectAll = useCallback((ids) => {
    setSelected(new Set(ids))
  }, [])

  const deselectAll = useCallback(() => {
    setSelected(new Set())
  }, [])

  // BUG: does not handle persistence correctly when filtered data changes - caller clears selection unintentionally
  const isSelected = useCallback((id) => selected.has(id), [selected])

  return { selected, toggleRow, selectAll, deselectAll, isSelected, setSelected }
}
