var maximumNumber = function(nums) {
    let maxPositive = -Infinity;
    let minNegative = Infinity;

    for (const num of nums) {
        if (num > 0 && num > maxPositive) {
            maxPositive = num;
        } else if (num < 0 && num < minNegative) {
            minNegative = num;
        }
    }

    if (maxPositive >= -minNegative) {
        return maxPositive + 1;
    } else {
        return maxPositive;
    }
};
