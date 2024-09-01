var isBipartite = function (n, edges) {
  const adjList = Array.from({ length: n }, () => [])

  for (const [u, v] of edges) {
    adjList[u].push(v)
    adjList[v].push(u)
  }

  const color = Array(n).fill(-1)

  const bfs = (start) => {
    const queue = [start]
    color[start] = 0

    while (queue.length) {
      const node = queue.shift()
      const currentColor = color[node]

      for (const neighbor of adjList[node]) {
        if (color[neighbor] === -1) {
          color[neighbor] = 1 - currentColor
          queue.push(neighbor)
        } else if (color[neighbor] === currentColor) {
          return false
        }
      }
    }
    return true
  }

  for (let i = 0; i < n; i++) {
    if (color[i] === -1 && !bfs(i)) {
      return false
    }
  }

  return true
}
