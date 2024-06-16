function minIncrementForUnique(nums) {
    nums.sort((a, b) => a - b);

    let moves = 0;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] <= nums[i - 1]) {
            let requiredIncrement = nums[i - 1] + 1 - nums[i];
            moves += requiredIncrement;
            nums[i] = nums[i - 1] + 1;
        }
    }

    return moves;
}
