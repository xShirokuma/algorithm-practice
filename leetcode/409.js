function longestPalindrome(s) {
    let charCount = new Map();

    for (let char of s) {
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }

    let length = 0;
    let hasOdd = false;

    for (let count of charCount.values()) {
        if (count % 2 === 0) {
            length += count;
        } else {
            length += count - 1;
            hasOdd = true;
        }
    }

    if (hasOdd) {
        length += 1;
    }

    return length;
}
