var makeGood = function(s) {
    const stack = [];

    for (let char of s) {
        const prevChar = stack[stack.length - 1];

        if (prevChar && Math.abs(prevChar.charCodeAt(0) - char.charCodeAt(0)) === 32) {
            stack.pop();
        } else {
            stack.push(char);
        }
    }

    return stack.join('');
};
