/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const freqMap = new Map()
    nums.forEach(num => {
        let freq = freqMap.get(num)
        if(freq) {
            freqMap.set(num, ++freq)
        } else {
            freqMap.set(num, 1)
        }
    });
    const mapArr = [...freqMap.entries()].sort((a,b) => b[1] - a[1])
    const res = []
    mapArr.forEach(entry => {
        res.push(entry[0])
    })
    return res.slice(0, k)
};
