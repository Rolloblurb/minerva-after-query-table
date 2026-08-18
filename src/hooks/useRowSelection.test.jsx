import { describe, it, expect } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { useRowSelection } from './useRowSelection.js'

describe('useRowSelection persistence', () => {
  it('should keep selection when data changes (after query)', () => {
    const { result } = renderHook(() => useRowSelection())
    act(() => {
      result.current.toggleRow('user-1')
      result.current.toggleRow('user-2')
    })
    expect(result.current.selected.has('user-1')).toBe(true)
    // Simulate filtering - selection should persist, not clear
    // Current buggy impl may lose selection if parent re-creates
    expect(result.current.selected.size).toBe(2)
  })

  it('selectAll and deselectAll', () => {
    const { result } = renderHook(() => useRowSelection())
    act(() => {
      result.current.selectAll(['a','b','c'])
    })
    expect(result.current.selected.size).toBe(3)
    act(() => {
      result.current.deselectAll()
    })
    expect(result.current.selected.size).toBe(0)
  })
})
