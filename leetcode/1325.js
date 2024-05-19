/**
 * @param {TreeNode} root
 * @param {number} target
 * @return {TreeNode}
 */
var removeLeafNodes = function(root, target) {
    const removeLeaves = (node, target) => {
        if (!node) return null;

        node.left = removeLeaves(node.left, target);
        node.right = removeLeaves(node.right, target);

        if (!node.left && !node.right && node.val === target) {
            return null;
        }

        return node;
    };

    return removeLeaves(root, target);
};
