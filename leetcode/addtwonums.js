/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let carry = 0
  let res = new ListNode(0)
  let curr = res
  while (l1 != null || l2 !== null || carry !== 0) {
    let num1 = l1 !== null ? l1.val : 0
    let num2 = l2 !== null ? l2.val : 0
    let sum = num1 + num2 + carry
    carry = Math.floor(sum / 10)
    curr.next = new ListNode(sum % 10)
    curr = curr.next
    if (l1 != null) l1 = l1.next
    if (l2 != null) l2 = l2.next
  }
  return res.next
}
