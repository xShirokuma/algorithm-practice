var findMinHeightTrees = function(n, edges) {
    if (n === 1) return [0];

    const adjacencyList = new Array(n).fill(null).map(() => []);
    const degree = new Array(n).fill(0);

    for (const [u, v] of edges) {
        adjacencyList[u].push(v);
        adjacencyList[v].push(u);
        degree[u]++;
        degree[v]++;
    }

    let leaves = [];

    for (let i = 0; i < n; i++) {
        if (degree[i] === 1) {
            leaves.push(i);
        }
    }

    while (n > 2) {
        const newLeaves = [];
        for (const leaf of leaves) {
            const neighbor = adjacencyList[leaf].pop();
            degree[neighbor]--;
            if (degree[neighbor] === 1) {
                newLeaves.push(neighbor);
            }
            n--;
        }
        leaves = newLeaves;
    }

    return leaves;
};
