var longestIdealSubsequence = function(s, k) {
    let maxLength = 0;

    for (let i = 0; i < s.length; i++) {
        let currentLength = 1;
        let maxDiff = 0;

        for (let j = i + 1; j < s.length; j++) {
            const diff = Math.abs(s.charCodeAt(j) - s.charCodeAt(j - 1));
            if (diff <= k) {
                currentLength++;
                maxDiff = Math.max(maxDiff, diff);
            } else {
                break;
            }
        }

        if (maxDiff <= k) {
            maxLength = Math.max(maxLength, currentLength);
        }
    }

    return maxLength;
};
