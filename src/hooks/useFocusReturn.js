import { useRef, useEffect } from 'react'

export function useFocusReturn(open) {
  const previousFocusRef = useRef(null)

  useEffect(() => {
    if (open) {
      previousFocusRef.current = document.activeElement
    } else {
      // BUG: should return focus but doesn't check if element still in DOM, and timing is wrong
      if (previousFocusRef.current) {
        // missing focus return
      }
    }
  }, [open])
}
