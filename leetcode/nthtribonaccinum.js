var tribonacci = function(n) {
    if (n === 0) return 0;
    if (n === 1 || n === 2) return 1;

    let a = 0, b = 1, c = 1;

    for (let i = 3; i <= n; i++) {
        const temp = a + b + c;
        a = b;
        b = c;
        c = temp;
    }

    return c;
};
