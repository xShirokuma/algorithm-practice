/**
 * @param {number[][]} grid
 * @return {number}
 */
var getMaximumGold = function(grid) {
    const m = grid.length;
    const n = grid[0].length;
    let maxGold = 0;

    const dfs = (x, y, currentGold) => {
        if (x < 0 || y < 0 || x >= m || y >= n || grid[x][y] === 0) {
            return currentGold;
        }

        const gold = grid[x][y];
        grid[x][y] = 0;

        const up = dfs(x - 1, y, currentGold + gold);
        const down = dfs(x + 1, y, currentGold + gold);
        const left = dfs(x, y - 1, currentGold + gold);
        const right = dfs(x, y + 1, currentGold + gold);

        grid[x][y] = gold;

        return Math.max(up, down, left, right);
    };

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] > 0) {
                maxGold = Math.max(maxGold, dfs(i, j, 0));
            }
        }
    }

    return maxGold;
};
