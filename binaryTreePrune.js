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
 * @return {TreeNode}
 */
var pruneTree = function(root) {

    if (!root) return null;

    root.left = pruneTree(root.left);
    root.right = pruneTree(root.right);

    // Si no tienes hijos y tu valor es 0
    if (!root.left && !root.right && root.val === 0) {
        return null; // Poda la hoja
    }

    return root;
};

let tree = {
    val: 1,
    left: null,
    right: {
        val: 0,
        left: {
            val: 0,
            left: null,
            right: null
        },
        right: {
            val: 1,
            left: null,
            right: null
        }
    }
};

console.log(pruneTree(tree));