var twoSum = function (nums, target) {
  const numToIndex = new Map()

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    const complement = target - num

    if (numToIndex.has(complement)) {
      return [numToIndex.get(complement), i]
    }

    numToIndex.set(num, i)
  }
}
