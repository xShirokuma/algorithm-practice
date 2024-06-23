var maxDistance = function(position, m) {
    position.sort((a, b) => a - b);

    const canPlaceBalls = (d) => {
        let count = 1;
        let lastPosition = position[0];

        for (let i = 1; i < position.length; i++) {
            if (position[i] - lastPosition >= d) {
                count++;
                lastPosition = position[i];
                if (count >= m) {
                    return true;
                }
            }
        }

        return false;
    };

    let left = 1;
    let right = position[position.length - 1] - position[0];

    while (left < right) {
        const mid = Math.floor((left + right + 1) / 2);

        if (canPlaceBalls(mid)) {
            left = mid;
        } else {
            right = mid - 1;
        }
    }

    return left;
};
