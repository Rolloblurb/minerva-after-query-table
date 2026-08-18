import { useState, useMemo } from 'react'
import { SearchInput } from './components/SearchInput.jsx'
import { DataTable } from './components/DataTable.jsx'
import { Pagination } from './components/Pagination.jsx'
import { ResultsLiveRegion } from './components/ResultsLiveRegion.jsx'
import { Skeleton } from './components/Skeleton.jsx'
import { useDebouncedValue } from './hooks/useDebouncedValue.js'
import { useFilteredData } from './hooks/useFilteredData.js'
import { useRowSelection } from './hooks/useRowSelection.js'
import { usePagination } from './hooks/usePagination.js'
import { useAbortableFetch } from './hooks/useAbortableFetch.js'
import { mockData } from './utils/mockData.js'

function fakeFetch(query) {
  return () => new Promise((resolve) => {
    const delay = Math.random() * 300 + 100
    setTimeout(() => resolve(mockData), delay)
  })
}

export default function App() {
  const [search, setSearch] = useState('')
  const debouncedSearch = useDebouncedValue(search, 300)
  
  const { data, loading } = useAbortableFetch(fakeFetch(debouncedSearch), [debouncedSearch])
  const baseData = data || mockData

  const filtered = useFilteredData(baseData, debouncedSearch)
  const { page, setPage, pageCount, paginatedData } = usePagination(filtered, 10)
  const { selected, toggleRow, selectAll, deselectAll } = useRowSelection()

  // Reset to page 1 when query changes
  const handleSearchChange = (val) => {
    setSearch(val)
    setPage(1)
  }

  if (loading) return <Skeleton />

  return (
    <div style={{ padding: 24 }}>
      <h1>After Query Table</h1>
      <SearchInput value={search} onChange={handleSearchChange} />
      <ResultsLiveRegion count={filtered.length} query={debouncedSearch} />
      <DataTable
        data={paginatedData}
        selected={selected}
        onToggleRow={toggleRow}
        onSelectAll={selectAll}
        onDeselectAll={deselectAll}
      />
      <Pagination page={page} pageCount={pageCount} onPageChange={setPage} />
      <p>{selected.size} rows selected</p>
    </div>
  )
}
