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
var isBalanced = function (root) {
    function height(node) {
        if (!node) return 0
        let left = height(node.left)
        let right = height(node.right)
        return Math.max(left, right) + 1
    }

    if (!root) return true

    let leftHeight = height(root.left)
    let rightHeight = height(root.right)

    if (Math.abs(leftHeight - rightHeight) > 1) {
        return false
    }

    return isBalanced(root.left) && isBalanced(root.right)
};