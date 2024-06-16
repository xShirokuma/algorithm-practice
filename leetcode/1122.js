function relativeSortArray(arr1, arr2) {
    const indexMap = new Map();
    for (let i = 0; i < arr2.length; i++) {
        indexMap.set(arr2[i], i);
    }

    arr1.sort((a, b) => {
        if (indexMap.has(a) && indexMap.has(b)) {
            return indexMap.get(a) - indexMap.get(b);
        }
        if (indexMap.has(a)) {
            return -1;
        }
        if (indexMap.has(b)) {
            return 1;
        }
        return a - b;
    });

    return arr1;
}
