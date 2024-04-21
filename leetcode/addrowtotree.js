function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

function addOneRow(root, v, d) {
    if (d === 1) {
        return new TreeNode(v, root);
    }

    const queue = [root];
    let depth = 1;

    while (queue.length && depth < d - 1) {
        let size = queue.length;

        for (let i = 0; i < size; i++) {
            const node = queue.shift();

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        depth++;
    }

    while (queue.length) {
        const node = queue.shift();

        const tempLeft = node.left;
        const tempRight = node.right;

        node.left = new TreeNode(v);
        node.left.left = tempLeft;

        node.right = new TreeNode(v);
        node.right.right = tempRight;
    }

    return root;
}
