function removeKdigits(num, k) {
    const stack = [];

    for (let digit of num) {
        while (k > 0 && stack.length && stack[stack.length - 1] > digit) {
            stack.pop();
            k--;
        }
        stack.push(digit);
    }

    while (k > 0) {
        stack.pop();
        k--;
    }

    while (stack.length && stack[0] === '0') {
        stack.shift();
    }

    const result = stack.join('');

    return result === '' ? '0' : result;
}
