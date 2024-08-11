function spiralMatrixIII(R, C, rStart, cStart) {
    const result = [];
    let directions = [
        [0, 1],
        [1, 0],
        [0, -1],
        [-1, 0]
    ];
    let steps = 1;
    let directionIndex = 0;
    let row = rStart, col = cStart;

    result.push([row, col]);

    while (result.length < R * C) {
        for (let i = 0; i < 2; i++) {
            for (let j = 0; j < steps; j++) {
                row += directions[directionIndex][0];
                col += directions[directionIndex][1];

                if (row >= 0 && row < R && col >= 0 && col < C) {
                    result.push([row, col]);
                }
            }
            directionIndex = (directionIndex + 1) % 4;
        }
        steps++;
    }

    return result;
}
