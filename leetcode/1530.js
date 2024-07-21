function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val);
    this.left = (left===undefined ? null : left);
    this.right = (right===undefined ? null : right);
}

function countPairs(root, distance) {
    let result = 0;

    const dfs = (node) => {
        if (!node) return [];
        if (!node.left && !node.right) return [1];

        const leftDistances = dfs(node.left);
        const rightDistances = dfs(node.right);

        for (const l of leftDistances) {
            for (const r of rightDistances) {
                if (l + r <= distance) {
                    result++;
                }
            }
        }

        const distances = [];
        for (const d of leftDistances) {
            if (d + 1 < distance) distances.push(d + 1);
        }
        for (const d of rightDistances) {
            if (d + 1 < distance) distances.push(d + 1);
        }

        return distances;
    };

    dfs(root);
    return result;
}
