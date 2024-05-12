const doubleLinkedListNumber = head => {
    let carry = 0;
    let current = head;

    while (current !== null) {
        let newValue = current.val * 2 + carry;
        current.val = newValue % 10;
        carry = Math.floor(newValue / 10);

        if (current.next === null && carry > 0) {
            current.next = new ListNode(carry);
            break;
        }

        current = current.next;
    }

    return head;
};
