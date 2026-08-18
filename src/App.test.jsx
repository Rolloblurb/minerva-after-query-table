import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from './App.jsx'

describe('App integration', () => {
  it('renders table and search', () => {
    render(<App />)
    expect(screen.getByText(/After Query Table/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Search table/i)).toBeInTheDocument()
  })
})
