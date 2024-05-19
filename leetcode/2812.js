/**
 * @param {number[][]} grid
 * @return {number}
 */
var maximumSafenessFactor = function(grid) {
    const m = grid.length;
    const n = grid[0].length;

    const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];

    const queue = [];
    const distance = Array.from({ length: m }, () => Array(n).fill(Infinity));

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                queue.push([i, j]);
                distance[i][j] = 0;
            }
        }
    }

    while (queue.length > 0) {
        const [x, y] = queue.shift();

        for (const [dx, dy] of directions) {
            const newX = x + dx;
            const newY = y + dy;

            if (newX >= 0 && newY >= 0 && newX < m && newY < n) {
                if (distance[newX][newY] > distance[x][y] + 1) {
                    distance[newX][newY] = distance[x][y] + 1;
                    queue.push([newX, newY]);
                }
            }
        }
    }

    let left = 0;
    let right = Math.min(distance[0][0], distance[m-1][n-1]);

    const isPathSafe = (minDistance) => {
        const visited = Array.from({ length: m }, () => Array(n).fill(false));
        const stack = [[0, 0]];
        visited[0][0] = true;

        while (stack.length > 0) {
            const [x, y] = stack.pop();

            for (const [dx, dy] of directions) {
                const newX = x + dx;
                const newY = y + dy;

                if (newX === m - 1 && newY === n - 1 && distance[newX][newY] >= minDistance) {
                    return true;
                }

                if (newX >= 0 && newY >= 0 && newX < m && newY < n && !visited[newX][newY] && distance[newX][newY] >= minDistance) {
                    visited[newX][newY] = true;
                    stack.push([newX, newY]);
                }
            }
        }

        return false;
    }

    while (left < right) {
        const mid = Math.floor((left + right + 1) / 2);

        if (isPathSafe(mid)) {
            left = mid;
        } else {
            right = mid - 1;
        }
    }

    return left;
};
