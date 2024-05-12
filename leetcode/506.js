const findRelativeRanks = scores => {
    const sortedScores = [...scores].sort((a, b) => b - a);

    const ranks = {};

    for (let i = 0; i < sortedScores.length; i++) {
        const score = sortedScores[i];
        if (i === 0) ranks[score] = "Gold Medal";
        else if (i === 1) ranks[score] = "Silver Medal";
        else if (i === 2) ranks[score] = "Bronze Medal";
        else ranks[score] = `${i + 1}`;
    }

    return scores.map(score => ranks[score]);
};
