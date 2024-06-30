var minKBitFlips = function(nums, k) {
    let n = nums.length;
    let flip = 0;
    let flipped = new Array(n).fill(0);
    let result = 0;

    for (let i = 0; i < n; i++) {
        if (i >= k) {
            flip ^= flipped[i - k];
        }
        if (nums[i] == flip) {
            if (i + k > n) return -1;
            result++;
            flip ^= 1;
            flipped[i] = 1;
        }
    }

    return result;
};
