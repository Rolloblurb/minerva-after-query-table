import { useState, useMemo } from 'react'
import { paginate, getPageCount } from '../utils/pagination.js'

export function usePagination(data, pageSize = 10) {
  const [page, setPage] = useState(1)
  const pageCount = useMemo(() => getPageCount(data.length, pageSize), [data.length, pageSize])
  const paginatedData = useMemo(() => paginate(data, page, pageSize), [data, page, pageSize])

  // Reset page if out of bounds
  if (page > pageCount && pageCount > 0) {
    setPage(pageCount)
  }

  return { page, setPage, pageCount, paginatedData }
}
