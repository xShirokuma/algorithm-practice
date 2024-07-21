function createBinaryTree(descriptions) {
    const nodes = new Map();
    const children = new Set();

    for (const [parent, child, isLeft] of descriptions) {
        if (!nodes.has(parent)) {
            nodes.set(parent, { val: parent, left: null, right: null });
        }
        if (!nodes.has(child)) {
            nodes.set(child, { val: child, left: null, right: null });
        }

        if (isLeft) {
            nodes.get(parent).left = nodes.get(child);
        } else {
            nodes.get(parent).right = nodes.get(child);
        }

        children.add(child);
    }

    let root = null;
    for (const parent of nodes.keys()) {
        if (!children.has(parent)) {
            root = nodes.get(parent);
            break;
        }
    }

    return root;
}
