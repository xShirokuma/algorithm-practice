class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

const removeNodes = (head, nodes) => {
    const dummy = new ListNode(-1);
    dummy.next = head;

    let current = dummy;

    while (current.next) {
        if (nodes.includes(current.next.val)) {
            current.next = current.next.next;
        } else {
            current = current.next;
        }
    }

    return dummy.next;
};
