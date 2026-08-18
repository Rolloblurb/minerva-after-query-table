// BUG: pagination after query - this util paginates before filtering in some flows, should be after
export function paginate(data, page, pageSize) {
  const start = (page - 1) * pageSize
  return data.slice(start, start + pageSize)
}

export function getPageCount(total, pageSize) {
  return Math.ceil(total / pageSize)
}
