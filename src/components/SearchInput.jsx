import { useState } from 'react'

export function SearchInput({ value, onChange, placeholder = 'Search...' }) {
  return (
    <input
      type="text"
      role="searchbox"
      aria-label="Search table"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="search-input"
    />
  )
}
