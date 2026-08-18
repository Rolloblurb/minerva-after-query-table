import { useState } from 'react'

export function KeyboardNavList({ items, onSelect }) {
  const [focusedIndex, setFocusedIndex] = useState(0)

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      setFocusedIndex((i) => Math.min(i + 1, items.length - 1))
    } else if (e.key === 'ArrowUp') {
      setFocusedIndex((i) => Math.max(i - 1, 0))
    } else if (e.key === 'Enter') {
      onSelect(items[focusedIndex])
    }
  }

  return (
    <ul role="listbox" onKeyDown={handleKeyDown} tabIndex={0}>
      {items.map((item, idx) => (
        <li
          key={item.id}
          role="option"
          aria-selected={idx === focusedIndex}
          className={idx === focusedIndex ? 'focused' : ''}
        >
          {item.name}
        </li>
      ))}
    </ul>
  )
}
