function numSteps(s) {
  let steps = 0
  let carry = 0

  for (let i = s.length - 1; i > 0; i--) {
    let bit = parseInt(s[i])
    if (bit + carry === 1) {
      steps += 2
      carry = 1
    } else {
      steps += 1
    }
  }

  if (carry === 1) {
    steps += 1
  }

  return steps
}
