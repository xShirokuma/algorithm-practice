function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val);
    this.left = (left===undefined ? null : left);
    this.right = (right===undefined ? null : right);
}

function delNodes(root, to_delete) {
    const toDeleteSet = new Set(to_delete);
    const result = [];

    const helper = (node, isRoot) => {
        if (!node) return null;

        const rootDeleted = toDeleteSet.has(node.val);
        if (isRoot && !rootDeleted) {
            result.push(node);
        }

        node.left = helper(node.left, rootDeleted);
        node.right = helper(node.right, rootDeleted);

        return rootDeleted ? null : node;
    };

    helper(root, true);
    return result;
}
