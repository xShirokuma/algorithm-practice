/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let maxLen = 0
  for (let i = 0; i < s.length - maxLen; i++) {
    let currMaxLen = 0
    let hash = new Map()
    for (let j = i; j < s.length; j++) {
      if (hash.get(s[j]) !== undefined) {
        break
      } else {
        hash.set(s[j], j)
        currMaxLen++
        if (currMaxLen > maxLen) {
          maxLen = currMaxLen
        }
      }
    }
  }
  return maxLen
}
