function minPushesToTypeWordII(word) {
    const n = word.length;
    let totalPushes = 0;
    let currentChar = 'a';

    for (let i = 0; i < n; i++) {
        const targetChar = word[i];

        const clockwiseDistance = (targetChar.charCodeAt(0) - currentChar.charCodeAt(0) + 26) % 26;
        const counterClockwiseDistance = (currentChar.charCodeAt(0) - targetChar.charCodeAt(0) + 26) % 26;

        totalPushes += Math.min(clockwiseDistance, counterClockwiseDistance) + 1;

        currentChar = targetChar;
    }

    return totalPushes;
}
