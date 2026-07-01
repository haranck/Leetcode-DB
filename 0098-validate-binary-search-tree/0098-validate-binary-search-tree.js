/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
    let node = root
    function validBst(node, min, max) {
        if (!node) return true

        if (node.val >= max || node.val <= min) return false
 
        return (
            validBst(node.left, min, node.val) &&
            validBst(node.right, node.val, max)
        )
    }
    return validBst(node, min = -Infinity, max = Infinity)
};








