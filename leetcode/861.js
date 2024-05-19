/**
 * @param {number[][]} grid
 * @return {number}
 */
var matrixScore = function(grid) {
    const m = grid.length;
    const n = grid[0].length;

    for (let i = 0; i < m; i++) {
        if (grid[i][0] === 0) {
            for (let j = 0; j < n; j++) {
                grid[i][j] ^= 1;
            }
        }
    }

    for (let j = 0; j < n; j++) {
        let onesCount = 0;
        for (let i = 0; i < m; i++) {
            if (grid[i][j] === 1) {
                onesCount++;
            }
        }

        if (onesCount < (m + 1) / 2) {
            for (let i = 0; i < m; i++) {
                grid[i][j] ^= 1;
            }
        }
    }

    let score = 0;
    for (let i = 0; i < m; i++) {
        let rowValue = 0;
        for (let j = 0; j < n; j++) {
            rowValue = (rowValue << 1) | grid[i][j];
        }
        score += rowValue;
    }

    return score;
};
