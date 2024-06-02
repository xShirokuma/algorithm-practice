function singleNumber(nums) {
  let xorResult = 0
  for (let num of nums) {
    xorResult ^= num
  }

  let diff = xorResult & -xorResult

  let num1 = 0,
    num2 = 0
  for (let num of nums) {
    if ((num & diff) === 0) {
      num1 ^= num
    } else {
      num2 ^= num
    }
  }

  return [num1, num2]
}
