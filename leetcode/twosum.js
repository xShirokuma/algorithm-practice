/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const hash = new Map()
  let res
  nums.forEach((num, i) => {
    let req = target - num
    if (hash.get(req) !== undefined) res = [hash.get(req), i]
    hash.set(num, i)
  })
  return res
}
