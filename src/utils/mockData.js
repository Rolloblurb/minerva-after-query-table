export function generateMockData(count = 100) {
  const roles = ['Engineer', 'Designer', 'Manager', 'QA', 'Product']
  return Array.from({ length: count }, (_, i) => ({
    id: `user-${i + 1}`,
    name: `User ${i + 1}`,
    email: `user${i + 1}@example.com`,
    role: roles[i % roles.length],
    active: i % 3 !== 0,
  }))
}
export const mockData = generateMockData()
