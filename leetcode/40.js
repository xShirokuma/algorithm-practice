var combinationSum2 = function(candidates, target) {
    let result = [];
    candidates.sort((a, b) => a - b);

    const backtrack = (start, currentCombination, currentSum) => {
        if (currentSum === target) {
            result.push([...currentCombination]);
            return;
        }

        for (let i = start; i < candidates.length; i++) {
            if (i > start && candidates[i] === candidates[i - 1]) continue;

            if (currentSum + candidates[i] > target) break;

            currentCombination.push(candidates[i]);

            backtrack(i + 1, currentCombination, currentSum + candidates[i]);

            currentCombination.pop();
        }
    };

    backtrack(0, [], 0);
    return result;
};
