var openLock = function(deadends, target) {
    const dead = new Set(deadends);
    const visited = new Set();
    const queue = [];

    if (dead.has('0000')) return -1;
    queue.push('0000');
    visited.add('0000');

    let steps = 0;

    while (queue.length > 0) {
        const size = queue.length;

        for (let i = 0; i < size; i++) {
            const current = queue.shift();

            if (current === target) return steps;

            if (dead.has(current)) continue;

            for (let j = 0; j < 4; j++) {
                const up = (parseInt(current[j]) + 1) % 10;
                const down = (parseInt(current[j]) + 9) % 10;

                const upState = current.substring(0, j) + up + current.substring(j + 1);
                const downState = current.substring(0, j) + down + current.substring(j + 1);

                if (!visited.has(upState)) {
                    queue.push(upState);
                    visited.add(upState);
                }

                if (!visited.has(downState)) {
                    queue.push(downState);
                    visited.add(downState);
                }
            }
        }

        steps++;
    }

    return -1;
};
