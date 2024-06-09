function appendCharacters(s, t) {
    let i = 0;
    let j = 0;

    while (i < s.length && j < t.length) {
        if (s[i] === t[j]) {
            j++;
        }
        i++;
    }
    return t.length - j;
}
