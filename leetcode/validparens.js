/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const puncArr = []
  for (char of s) {
    if (char.match(/[\(\{\[]+/)) puncArr.push(char)
    else {
      const prev = puncArr.pop()
      if (char === ")") {
        if (prev !== "(") return false
      } else if (char === "}") {
        if (prev !== "{") return false
      } else if (char === "]") {
        if (prev !== "[") return false
      }
    }
  }
  if (puncArr.length !== 0) return false
  return true
}
