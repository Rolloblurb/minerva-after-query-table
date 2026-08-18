# minerva-after-query-table

After query table with search, pagination, selection persistence, abortable fetch, and a11y.

## Bugs intentionally present for MINERVA Fix tasks
- useAbortableFetch race condition
- useFilteredData derived state bug (missing data dep)
- useRowSelection persistence
- SelectAllCheckbox indeterminate missing
- Dialog focus trap incomplete
- useFocusReturn not returning focus
- pagination after query ordering

## Scripts
- npm run dev
- npm test
- npm run build
