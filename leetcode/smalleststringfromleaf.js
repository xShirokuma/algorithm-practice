function smallestFromLeaf(root) {
    let smallest = '~';

    function dfs(node, currentStr) {
        if (!node) return;

        currentStr = String.fromCharCode(97 + node.val) + currentStr;

        if (!node.left && !node.right) {
            if (currentStr < smallest) {
                smallest = currentStr;
            }
            return;
        }

        dfs(node.left, currentStr);
        dfs(node.right, currentStr);
    }

    dfs(root, '');
    return smallest;
}
