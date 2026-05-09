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
    function reverse(head) {
        let current = head
        let prev = null
        while (current !== null) {
            let nextNode = current.next
            current.next = prev
            prev = current
            current = nextNode
        }
        return prev
    }

    let rev1 = reverse(l1)
    let rev2 = reverse(l2)

    function listToNumber(head) {
        let num = ""
        while (head) {
            num += head.val
            head = head.next
        }
        return BigInt(num)
        // return Number(num)
    }

    let num1 = listToNumber(rev1)
    let num2 = listToNumber(rev2)
    let total = num1 + num2

    let str = total.toString()

    let dummy = new ListNode(0)

    let current = dummy

    for (let i = 0; i < str.length; i++) {
        current.next = new ListNode(Number(str[i]))
        current = current.next
    }

    return reverse(dummy.next)
};