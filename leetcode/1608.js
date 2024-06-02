function specialArray(nums) {
  nums.sort((a, b) => a - b)

  let n = nums.length
  for (let i = 0; i <= n; i++) {
    let count = nums.filter((num) => num >= i).length
    if (count === i) {
      return i
    }
  }

  return -1
}
