var minDays = function(bloomDay, m, k) {
    const n = bloomDay.length;

    if (m * k > n) {
        return -1;
    }

    const canMakeBouquets = (days) => {
        let bouquets = 0;
        let flowers = 0;

        for (let i = 0; i < n; i++) {
            if (bloomDay[i] <= days) {
                flowers++;
                if (flowers === k) {
                    bouquets++;
                    flowers = 0;
                }
            } else {
                flowers = 0;
            }

            if (bouquets >= m) {
                return true;
            }
        }

        return false;
    };

    let left = Math.min(...bloomDay);
    let right = Math.max(...bloomDay);

    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (canMakeBouquets(mid)) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return left;
};
