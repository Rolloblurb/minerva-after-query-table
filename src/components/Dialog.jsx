import { useEffect, useRef } from 'react'

export function Dialog({ open, onClose, children }) {
  const dialogRef = useRef(null)

  useEffect(() => {
    if (open) {
      dialogRef.current?.focus()
    }
  }, [open])

  if (!open) return null

  // BUG: focus trap incomplete - does not trap Tab / Shift+Tab, does not handle Escape properly

  return (
    <div role="dialog" aria-modal="true" className="dialog-overlay">
      <div ref={dialogRef} tabIndex={-1} className="dialog-content">
        {children}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  )
}
