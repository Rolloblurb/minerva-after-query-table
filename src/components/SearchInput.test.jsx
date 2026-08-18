import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { SearchInput } from './SearchInput.jsx'

describe('SearchInput', () => {
  it('renders and allows typing', async () => {
    let val = ''
    const onChange = (v) => { val = v }
    render(<SearchInput value={val} onChange={onChange} />)
    const input = screen.getByLabelText(/search table/i)
    expect(input).toBeInTheDocument()
    await userEvent.type(input, 'test')
  })
})
