function smallestFromLeaf(root) {
    let result = '{';
    dfs(root, '');
    return result;

    function dfs(node, str) {
        if (!node) return;

        let char = String.fromCharCode(97 + node.val);
        let currentStr = char + str;

        if (!node.left && !node.right && currentStr.localeCompare(result) < 0) {
            result = currentStr;
        }

        dfs(node.left, currentStr);
        dfs(node.right, currentStr);
    }
}
