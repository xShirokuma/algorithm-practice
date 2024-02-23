/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let maxLen = 0
  let start = 0
  let hash = new Map()

  for (let end = 0; end < s.length; end++) {
    if (hash.has(s[end]) && hash.get(s[end]) >= start) {
      start = hash.get(s[end]) + 1
    }

    hash.set(s[end], end)
    maxLen = Math.max(maxLen, end - start + 1)
  }

  return maxLen
}
