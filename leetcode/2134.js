var minSwaps = function(nums) {
    const totalOnes = nums.reduce((sum, num) => sum + num, 0);
    const n = nums.length;

    const extendedNums = nums.concat(nums);

    let currentOnes = 0;
    for (let i = 0; i < totalOnes; i++) {
        currentOnes += extendedNums[i];
    }

    let minSwaps = totalOnes - currentOnes;

    for (let i = totalOnes; i < 2 * n; i++) {
        currentOnes += extendedNums[i] - extendedNums[i - totalOnes];
        minSwaps = Math.min(minSwaps, totalOnes - currentOnes);
    }

    return minSwaps;
};
