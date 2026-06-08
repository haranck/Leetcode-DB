/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    let smallDummy = new ListNode(0)
    let largeDummy = new ListNode(0)

    let small = smallDummy
    let large = largeDummy
    let current = head
    while(current){
        if(current.val < x) {
            small.next = current
            small = small.next
        }else {
            large.next = current
            large = large.next
        }
        current = current.next
    }
    large.next = null
    small.next = largeDummy.next
    return smallDummy.next
};