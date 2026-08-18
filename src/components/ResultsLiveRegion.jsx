export function ResultsLiveRegion({ count, query }) {
  return (
    <div aria-live="polite" aria-atomic="true" className="sr-only">
      {count === 0 ? 'No results' : `${count} results${query ? ` for ${query}` : ''}`}
    </div>
  )
}
