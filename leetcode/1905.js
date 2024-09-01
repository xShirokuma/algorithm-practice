var countSubIslands = function (grid1, grid2) {
  const rows = grid1.length
  const cols = grid1[0].length

  function dfs(x, y, grid, mark) {
    if (x < 0 || x >= rows || y < 0 || y >= cols || grid[x][y] === 0) return
    grid[x][y] = mark
    dfs(x - 1, y, grid, mark)
    dfs(x + 1, y, grid, mark)
    dfs(x, y - 1, grid, mark)
    dfs(x, y + 1, grid, mark)
  }

  const markedGrid1 = grid1.map((row) => row.slice())
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (markedGrid1[i][j] === 1) {
        dfs(i, j, markedGrid1, 2)
      }
    }
  }

  let count = 0
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid2[i][j] === 1) {
        let isSubIsland = true
        function checkSubIsland(x, y) {
          if (x < 0 || x >= rows || y < 0 || y >= cols) return
          if (grid2[x][y] === 0) return
          grid2[x][y] = 0
          if (markedGrid1[x][y] !== 2) isSubIsland = false
          checkSubIsland(x - 1, y)
          checkSubIsland(x + 1, y)
          checkSubIsland(x, y - 1)
          checkSubIsland(x, y + 1)
        }
        checkSubIsland(i, j)
        if (isSubIsland) count++
      }
    }
  }

  return count
}
