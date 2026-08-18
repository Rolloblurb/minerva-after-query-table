import { SelectAllCheckbox } from './SelectAllCheckbox.jsx'

export function DataTable({ data, selected, onToggleRow, onSelectAll, onDeselectAll }) {
  const allIds = data.map((r) => r.id)
  const allSelected = data.length > 0 && allIds.every((id) => selected.has(id))
  const someSelected = allIds.some((id) => selected.has(id)) && !allSelected

  // BUG: selection shell - onSelectAll uses currently visible data only, but does not preserve previous selections outside view

  return (
    <table>
      <thead>
        <tr>
          <th>
            <SelectAllCheckbox
              checked={allSelected}
              someSelected={someSelected}
              onChange={(e) => {
                if (e.target.checked) onSelectAll(allIds)
                else onDeselectAll()
              }}
            />
          </th>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.id}>
            <td>
              <input
                type="checkbox"
                aria-label={`Select ${row.name}`}
                checked={selected.has(row.id)}
                onChange={() => onToggleRow(row.id)}
              />
            </td>
            <td>{row.name}</td>
            <td>{row.email}</td>
            <td>{row.role}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
