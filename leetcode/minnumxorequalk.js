var minOperations = function(nums, k) {
    const n = nums.length;
    const preXOR = new Array(n + 1).fill(0);
    for (let i = 0; i < n; i++) {
        preXOR[i + 1] = preXOR[i] ^ nums[i];
    }

    const count = new Map();
    let res = 0;
    for (let i = 0; i <= n; i++) {
        res += (count.get(preXOR[i] ^ k) || 0);
        count.set(preXOR[i], (count.get(preXOR[i]) || 0) + 1);
    }
    return res !== 0 ? n - res : -1;
};
