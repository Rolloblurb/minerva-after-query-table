import { useEffect, useRef } from 'react'

export function SelectAllCheckbox({ checked, onChange, someSelected }) {
  const ref = useRef(null)
  useEffect(() => {
    // BUG: indeterminate missing - should set ref.current.indeterminate = someSelected
  }, [someSelected, checked])

  return (
    <input
      ref={ref}
      type="checkbox"
      aria-label="Select all rows"
      checked={checked}
      onChange={onChange}
    />
  )
}
