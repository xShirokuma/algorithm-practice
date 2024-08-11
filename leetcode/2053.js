function kthDistinct(arr, k) {
    const frequencyMap = new Map();

    for (let str of arr) {
        frequencyMap.set(str, (frequencyMap.get(str) || 0) + 1);
    }

    for (let str of arr) {
        if (frequencyMap.get(str) === 1) {
            k--;
            if (k === 0) {
                return str;
            }
        }
    }

    return "";
}
