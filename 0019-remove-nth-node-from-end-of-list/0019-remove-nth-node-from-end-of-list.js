/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    let length = 0
    let current = head

    while (current) {
        length++
        current = current.next
    }

    let target = length - n
    if (target === 0) {
        head = head.next
        return head
    }
    current = head
    for (let i = 0; i < target - 1; i++) {
        current = current.next
    }
    current.next = current.next.next
    return head
};