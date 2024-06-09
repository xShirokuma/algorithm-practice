function commonChars(words) {
    let minFreq = Array(26).fill(Infinity);

    function getFreq(word) {
        let freq = Array(26).fill(0);
        for (let char of word) {
            freq[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }
        return freq;
    }

    for (let word of words) {
        let wordFreq = getFreq(word);
        for (let i = 0; i < 26; i++) {
            minFreq[i] = Math.min(minFreq[i], wordFreq[i]);
        }
    }

    let result = [];
    for (let i = 0; i < 26; i++) {
        while (minFreq[i] > 0) {
            result.push(String.fromCharCode(i + 'a'.charCodeAt(0)));
            minFreq[i]--;
        }
    }

    return result;
}
