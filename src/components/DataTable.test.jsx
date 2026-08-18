import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { DataTable } from './DataTable.jsx'

const data = [
  { id: '1', name: 'Alice', email: 'alice@example.com', role: 'Engineer' },
  { id: '2', name: 'Bob', email: 'bob@example.com', role: 'Designer' },
]

describe('DataTable filtering', () => {
  it('renders rows', () => {
    render(<DataTable data={data} selected={new Set()} onToggleRow={() => {}} onSelectAll={() => {}} onDeselectAll={() => {}} />)
    expect(screen.getByText('Alice')).toBeInTheDocument()
  })
})
