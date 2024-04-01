var isValidSudoku = function (board) {
  let rowMap = {},
    colMap = {},
    boxMap = {}

  for (let i = 0; i < 9; i++) {
    rowMap[i] = {}
    colMap[i] = {}
    boxMap[i] = {}
  }

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      let num = board[i][j]
      if (num !== ".") {
        if (rowMap[i][num]) {
          return false
        }
        rowMap[i][num] = 1

        if (colMap[j][num]) {
          return false
        }
        colMap[j][num] = 1

        let boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3)
        if (boxMap[boxIndex][num]) {
          return false
        }
        boxMap[boxIndex][num] = 1
      }
    }
  }

  return true
}
