/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[][]} descriptions
 * @return {TreeNode}
 */
var createBinaryTree = function(descriptions) {
    let map = new Map();
    let children = new Set();

    for (let [parent, child, isLeft] of descriptions) {

        if (!map.has(parent))
            map.set(parent, new TreeNode(parent));

        if (!map.has(child))
            map.set(child, new TreeNode(child));

        let parentNode = map.get(parent);
        let childNode = map.get(child);

        if (isLeft) {
            parentNode.left = childNode;
        } else {
            parentNode.right = childNode;
        }

        children.add(child);
    }

    for (let [value, node] of map) {
        if (!children.has(value)) {
            return node;
        }
    }
};