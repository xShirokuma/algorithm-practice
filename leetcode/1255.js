/**
 * @param {string[]} words
 * @param {character[]} letters
 * @param {number[]} score
 * @return {number}
 */
var maxScoreWords = function(words, letters, score) {
    const letterCount = Array(26).fill(0);
    for (const letter of letters) {
        letterCount[letter.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }

    const calculateWordScore = (word) => {
        let wordScore = 0;
        for (const char of word) {
            wordScore += score[char.charCodeAt(0) - 'a'.charCodeAt(0)];
        }
        return wordScore;
    };

    const backtrack = (index, currentScore, currentCount) => {
        if (index === words.length) {
            return currentScore;
        }

        let maxScore = backtrack(index + 1, currentScore, currentCount);

        let canUseWord = true;
        const wordCount = Array(26).fill(0);
        for (const char of words[index]) {
            const charIndex = char.charCodeAt(0) - 'a'.charCodeAt(0);
            wordCount[charIndex]++;
            if (wordCount[charIndex] > currentCount[charIndex]) {
                canUseWord = false;
                break;
            }
        }

        if (canUseWord) {
            for (let i = 0; i < 26; i++) {
                currentCount[i] -= wordCount[i];
            }
            maxScore = Math.max(maxScore, backtrack(index + 1, currentScore + calculateWordScore(words[index]), currentCount));
            for (let i = 0; i < 26; i++) {
                currentCount[i] += wordCount[i];
            }
        }

        return maxScore;
    };

    return backtrack(0, 0, letterCount);
};
