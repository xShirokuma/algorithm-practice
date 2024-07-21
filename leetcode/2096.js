function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

function getDirections(root, startValue, destValue) {
    const findPath = (node, target, path) => {
        if (!node) return null;
        if (node.val === target) return path;
        return (
            findPath(node.left, target, path + 'L') ||
            findPath(node.right, target, path + 'R')
        );
    };

    const lca = (node, p, q) => {
        if (!node || node.val === p || node.val === q) return node;
        const left = lca(node.left, p, q);
        const right = lca(node.right, p, q);
        return left && right ? node : left || right;
    };

    const commonAncestor = lca(root, startValue, destValue);
    const pathToStart = findPath(commonAncestor, startValue, '');
    const pathToDest = findPath(commonAncestor, destValue, '');

    return 'U'.repeat(pathToStart.length) + pathToDest;
}
