var reverseParentheses = function(s) {
    let stack = [];

    for (let char of s) {
        if (char === ')') {
            let substr = [];
            while (stack[stack.length - 1] !== '(') {
                substr.push(stack.pop());
            }
            stack.pop();
            stack.push(...substr);
        } else {
            stack.push(char);
        }
    }

    return stack.join('');
};
