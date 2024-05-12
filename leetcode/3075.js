const maxHappy = (happiness, groups, k) => {
    const dp = new Array(k + 1).fill(0);

    for (let g = 1; g <= Math.max(...groups); g++) {
        const groupIndices = groups
            .map((group, index) => group === g ? index : -1)
            .filter(index => index !== -1);

        for (const index of groupIndices) {
            for (let j = k; j >= 1; j--) {
                dp[j] = Math.max(dp[j], dp[j - 1] + happiness[index]);
            }
        }
    }

    return dp[k];
};
