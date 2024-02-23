/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let i = 0
  let j = 0
  let combinedNumsArr = []
  while (nums1.length > i || nums2.length > j) {
    if (nums1.length > i && nums2.length > j) {
      if (nums1[i] <= nums2[j]) {
        combinedNumsArr.push(nums1[i])
        i++
      } else {
        combinedNumsArr.push(nums2[j])
        j++
      }
    } else if (nums1.length > i) {
      combinedNumsArr.push(nums1[i])
      i++
    } else {
      combinedNumsArr.push(nums2[j])
      j++
    }
  }

  console.log(combinedNumsArr)
  let isOdd = combinedNumsArr.length % 2
  if (isOdd) {
    return combinedNumsArr[Math.floor(combinedNumsArr.length / 2)]
  } else {
    i = combinedNumsArr.length / 2 - 1
    j = combinedNumsArr.length / 2
    return (combinedNumsArr[i] + combinedNumsArr[j]) / 2
  }
}
