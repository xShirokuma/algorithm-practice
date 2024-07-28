function findTheCity(n, edges, distanceThreshold) {
    let dist = Array.from({ length: n }, () => Array(n).fill(Infinity));

    for (let i = 0; i < n; i++) {
        dist[i][i] = 0;
    }

    for (let [from, to, weight] of edges) {
        dist[from][to] = weight;
        dist[to][from] = weight;
    }

    for (let k = 0; k < n; k++) {
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (dist[i][j] > dist[i][k] + dist[k][j]) {
                    dist[i][j] = dist[i][k] + dist[k][j];
                }
            }
        }
    }

    let minNeighbors = Infinity;
    let resultCity = -1;

    for (let i = 0; i < n; i++) {
        let count = 0;
        for (let j = 0; j < n; j++) {
            if (i !== j && dist[i][j] <= distanceThreshold) {
                count++;
            }
        }

        if (count < minNeighbors || (count === minNeighbors && i > resultCity)) {
            minNeighbors = count;
            resultCity = i;
        }
    }

    return resultCity;
}
