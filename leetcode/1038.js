var bstToGst = function(root) {
    let sum = 0;

    const transform = (node) => {
        if (!node) return;

        // Traverse the right subtree first
        transform(node.right);

        // Update the sum and the node's value
        sum += node.val;
        node.val = sum;

        // Traverse the left subtree
        transform(node.left);
    };

    transform(root);
    return root;
};
