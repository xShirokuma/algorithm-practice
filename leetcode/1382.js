var balanceBST = function(root) {
    let nodes = [];

    const inorderTraversal = (node) => {
        if (!node) return;
        inorderTraversal(node.left);
        nodes.push(node);
        inorderTraversal(node.right);
    };

    const buildBalancedBST = (start, end) => {
        if (start > end) return null;
        let mid = Math.floor((start + end) / 2);
        let node = nodes[mid];
        node.left = buildBalancedBST(start, mid - 1);
        node.right = buildBalancedBST(mid + 1, end);
        return node;
    };

    inorderTraversal(root);

    return buildBalancedBST(0, nodes.length - 1);
};

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val);
    this.left = (left===undefined ? null : left);
    this.right = (right===undefined ? null : right);
}
