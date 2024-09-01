var removeStones = function (stones) {
  const find = (x) => {
    if (parent[x] !== x) {
      parent[x] = find(parent[x])
    }
    return parent[x]
  }

  const union = (x, y) => {
    const rootX = find(x)
    const rootY = find(y)
    if (rootX !== rootY) {
      parent[rootX] = rootY
      count--
    }
  }

  const n = stones.length
  parent = Array.from({ length: n * 2 }, (_, i) => i)
  count = n

  const mapRow = new Map()
  const mapCol = new Map()

  for (const [i, [x, y]] of stones.entries()) {
    if (mapRow.has(x)) {
      union(i, mapRow.get(x))
    }
    if (mapCol.has(y)) {
      union(i, mapCol.get(y))
    }
    mapRow.set(x, i)
    mapCol.set(y, i)
  }

  return n - count
}
