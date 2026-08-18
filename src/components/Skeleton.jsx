export function Skeleton() {
  return (
    <div className="skeleton">
      {Array.from({ length: 5 }).map((_, i) => (
        <div key={i} className="skeleton-row" />
      ))}
    </div>
  )
}
