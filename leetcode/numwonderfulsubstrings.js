var wonderfulSubstrings = function(word) {
    const count = new Map();
    count.set(0, 1);
    let bitmask = 0;
    let result = 0;

    for (let i = 0; i < word.length; i++) {
        bitmask ^= 1 << (word.charCodeAt(i) - 97);
        result += count.get(bitmask) || 0;

        for (let j = 0; j < 10; j++) {
            let targetBitmask = bitmask ^ (1 << j);
            result += count.get(targetBitmask) || 0;
        }

        count.set(bitmask, (count.get(bitmask) || 0) + 1);
    }

    return result;
};
