var maximumGain = function(s, x, y) {
    let score = 0;
    let firstPair = x;
    let secondPair = y;
    let firstPairScore = 1;
    let secondPairScore = 1;

    if (x.length !== 2 || y.length !== 2) {
        return score;
    }

    if (x === 'ab' && y === 'ba') {
        firstPairScore = 2;
        secondPairScore = 1;
    } else if (x === 'ba' && y === 'ab') {
        firstPairScore = 1;
        secondPairScore = 2;
    }

    if (firstPairScore > secondPairScore) {
        score += removePairs(s, firstPair, firstPairScore);
        score += removePairs(s, secondPair, secondPairScore);
    } else {
        score += removePairs(s, secondPair, secondPairScore);
        score += removePairs(s, firstPair, firstPairScore);
    }

    return score;
};

function removePairs(s, pair, pairScore) {
    let stack = [];
    let tempScore = 0;

    for (let char of s) {
        if (stack.length > 0 && stack[stack.length - 1] === pair[0] && char === pair[1]) {
            stack.pop();
            tempScore += pairScore;
        } else {
            stack.push(char);
        }
    }

    return tempScore;
}
