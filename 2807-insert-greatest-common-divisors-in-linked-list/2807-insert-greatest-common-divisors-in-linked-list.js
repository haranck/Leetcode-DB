/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertGreatestCommonDivisors = function(head) {
    function GCD(num1,num2){
        while(num2!==0){
            let temp = num2
            num2 = num1%num2
            num1 = temp
        }
        return num1
    }
    let current = head

    while(current&&current.next){

        let divisor = GCD(current.val,current.next.val)

        let newNode = new ListNode(divisor)

        newNode.next= current.next
        current.next = newNode

        current = newNode.next
    }
    return head
};