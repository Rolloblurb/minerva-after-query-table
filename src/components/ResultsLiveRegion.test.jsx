import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ResultsLiveRegion } from './ResultsLiveRegion.jsx'

describe('ResultsLiveRegion', () => {
  it('announces count', () => {
    render(<ResultsLiveRegion count={5} query="test" />)
    const live = screen.getByText(/5 results for test/i)
    expect(live).toBeInTheDocument()
  })

  it('announces no results', () => {
    render(<ResultsLiveRegion count={0} query="xyz" />)
    expect(screen.getByText(/No results/i)).toBeInTheDocument()
  })
})
