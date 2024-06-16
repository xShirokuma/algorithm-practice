function heightChecker(heights) {
    const sortedHeights = [...heights].sort((a, b) => a - b);

    let count = 0;
    for (let i = 0; i < heights.length; i++) {
        if (heights[i] !== sortedHeights[i]) {
            count++;
        }
    }

    return count;
}
