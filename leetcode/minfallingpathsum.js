var minFallingPathSum = function(matrix) {
    const n = matrix.length;
    const m = matrix[0].length;

    const dp = new Array(n).fill(0).map(() => new Array(m).fill(0));

    for (let j = 0; j < m; j++) {
        dp[0][j] = matrix[0][j];
    }

    for (let i = 1; i < n; i++) {
        let min1 = Infinity, min2 = Infinity;
        for (let j = 0; j < m; j++) {
            if (dp[i - 1][j] < min1) {
                min2 = min1;
                min1 = dp[i - 1][j];
            } else if (dp[i - 1][j] < min2) {
                min2 = dp[i - 1][j];
            }
        }

        for (let j = 0; j < m; j++) {
            dp[i][j] = matrix[i][j] + (dp[i - 1][j] === min1 ? min2 : min1);
        }
    }

    let minSum = Infinity;
    for (let j = 0; j < m; j++) {
        minSum = Math.min(minSum, dp[n - 1][j]);
    }

    return minSum;
};
