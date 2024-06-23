var maxSatisfied = function(customers, grumpy, X) {
    let totalSatisfied = 0;
    let extraSatisfied = 0;
    let maxExtraSatisfied = 0;

    for (let i = 0; i < customers.length; i++) {
        if (grumpy[i] === 0) {
            totalSatisfied += customers[i];
        }

        if (grumpy[i] === 1) {
            extraSatisfied += customers[i];
        }

        if (i >= X) {
            if (grumpy[i - X] === 1) {
                extraSatisfied -= customers[i - X];
            }
        }

        maxExtraSatisfied = Math.max(maxExtraSatisfied, extraSatisfied);
    }

    return totalSatisfied + maxExtraSatisfied;
};
