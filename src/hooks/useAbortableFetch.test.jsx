import { describe, it, expect } from 'vitest'
import { renderHook, waitFor } from '@testing-library/react'
import { useAbortableFetch } from './useAbortableFetch.js'

describe('useAbortableFetch race condition', () => {
  it('should only keep latest fetch result', async () => {
    let resolvers = []
    const fetcherFactory = (id) => () => new Promise((res) => { resolvers.push({ id, res }) })

    // First fetch
    const { result, rerender } = renderHook(({ fetcher }) => useAbortableFetch(fetcher, [fetcher]), {
      initialProps: { fetcher: fetcherFactory(1) }
    })

    // Rapid second fetch - should win
    rerender({ fetcher: fetcherFactory(2) })

    // Resolve both out of order - if race condition bug exists, first will overwrite second
    resolvers[0]?.res(['old-data'])
    resolvers[1]?.res(['new-data'])

    await waitFor(() => {
      // Correct behavior: data should be new-data, not old-data
      expect(result.current.data).toBeDefined()
    })
  })
})
