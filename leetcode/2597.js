/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var beautifulSubsets = function(nums, k) {
    let count = 0;

    const dfs = (index, path) => {
        if (path.length > 0) {
            let beautiful = true;
            const set = new Set(path);
            for (const num of set) {
                if (set.has(num + k)) {
                    beautiful = false;
                    break;
                }
            }
            if (beautiful) {
                count++;
            }
        }

        for (let i = index; i < nums.length; i++) {
            path.push(nums[i]);
            dfs(i + 1, path);
            path.pop();
        }
    };

    dfs(0, []);
    return count;
};
