function luckyNumbers(matrix) {
    const minRow = new Set();
    const maxCol = new Set();

    for (let i = 0; i < matrix.length; i++) {
        let min = Infinity;
        let minIndex = -1;
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] < min) {
                min = matrix[i][j];
                minIndex = j;
            }
        }
        minRow.add(matrix[i][minIndex]);
    }

    for (let j = 0; j < matrix[0].length; j++) {
        let max = -Infinity;
        for (let i = 0; i < matrix.length; i++) {
            if (matrix[i][j] > max) {
                max = matrix[i][j];
            }
        }
        maxCol.add(max);
    }

    const result = [];
    minRow.forEach(value => {
        if (maxCol.has(value)) {
            result.push(value);
        }
    });

    return result;
}
