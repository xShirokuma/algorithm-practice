var maximumImportance = function(n, roads) {
    let degree = new Array(n).fill(0);

    for (let [u, v] of roads) {
        degree[u]++;
        degree[v]++;
    }

    let sortedNodes = [...Array(n).keys()].sort((a, b) => degree[b] - degree[a]);

    let importance = new Array(n);
    for (let i = 0; i < n; i++) {
        importance[sortedNodes[i]] = n - i;
    }

    let totalImportance = 0;
    for (let [u, v] of roads) {
        totalImportance += importance[u] + importance[v];
    }

    return totalImportance;
};
