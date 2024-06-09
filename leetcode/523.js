function checkSubarraySum(nums, k) {
    let remainderMap = new Map();
    remainderMap.set(0, -1);

    let prefixSum = 0;

    for (let i = 0; i < nums.length; i++) {
        prefixSum += nums[i];

        let remainder = prefixSum % k;

        if (remainder < 0) remainder += k;

        if (remainderMap.has(remainder)) {
            if (i - remainderMap.get(remainder) > 1) {
                return true;
            }
        } else {
            remainderMap.set(remainder, i);
        }
    }

    return false;
}
