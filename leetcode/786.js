const kthSmallestPrimeFraction = (A, K) => {
    let left = 0;
    let right = 1;

    const n = A.length;
    let count = 0;
    let p = 0;
    let q = 0;

    while (true) {
        count = 0;
        p = 0;

        for (let i = 0; i < n; i++) {
            while (p < n && A[i] >= A[p] * right) {
                p++;
            }
            count += n - p;
            if (p < n && count === K) {
                q = A[i];
                break;
            }
        }

        if (count < K) {
            left = right;
        } else if (count > K) {
            right = (left + right) / 2;
        } else {
            break;
        }
    }

    let maxFraction = 0;
    for (let i = 0; i < n; i++) {
        if (A[i] < q * right && A[i] / q > maxFraction) {
            maxFraction = A[i] / q;
            p = A[i];
        }
    }

    return [p, q];
};
