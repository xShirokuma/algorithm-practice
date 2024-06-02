function equalSubstring(s, t, maxCost) {
  let left = 0,
    right = 0
  let currentCost = 0
  let maxLength = 0

  while (right < s.length) {
    currentCost += Math.abs(s.charCodeAt(right) - t.charCodeAt(right))

    while (currentCost > maxCost) {
      currentCost -= Math.abs(s.charCodeAt(left) - t.charCodeAt(left))
      left++
    }

    maxLength = Math.max(maxLength, right - left + 1)

    right++
  }

  return maxLength
}
