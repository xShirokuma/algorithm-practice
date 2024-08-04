var minimumDeletions = function(s) {
    const n = s.length;
    let bCount = 0;
    let minDeletions = 0;

    for (let i = 0; i < n; i++) {
        if (s[i] === 'a') {
            minDeletions = Math.min(minDeletions + 1, bCount);
        } else {
            bCount++;
        }
    }

    return minDeletions;
};
