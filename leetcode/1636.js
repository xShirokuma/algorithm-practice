function frequencySort(nums) {
    let frequencyMap = new Map();
    for (let num of nums) {
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    }

    nums.sort((a, b) => {
        let freqA = frequencyMap.get(a);
        let freqB = frequencyMap.get(b);

        if (freqA === freqB) {
            return b - a;
        }

        return freqA - freqB;
    });

    return nums;
}
