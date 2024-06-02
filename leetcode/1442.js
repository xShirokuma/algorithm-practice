function countTriplets(arr) {
  const n = arr.length
  let prefixXOR = new Array(n + 1).fill(0)

  for (let i = 0; i < n; i++) {
    prefixXOR[i + 1] = prefixXOR[i] ^ arr[i]
  }

  let count = 0

  for (let i = 0; i < n; i++) {
    for (let k = i + 1; k < n; k++) {
      if (prefixXOR[i] == prefixXOR[k + 1]) {
        count += k - i
      }
    }
  }

  return count
}
