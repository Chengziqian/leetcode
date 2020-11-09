// 09/30/2020 MEDIUM

// https://leetcode-cn.com/problems/insert-into-a-binary-search-tree/

/**
 * 
 * Given the root node of a binary search tree (BST) and a value to be inserted into the tree, insert the value into the BST. Return the root node of the BST after the insertion. It is guaranteed that the new value does not exist in the original BST.

 Note that there may exist multiple valid ways for the insertion, as long as the tree remains a BST after insertion. You can return any of them.

 For example, 

 Given the tree:
 4
 / \
 2   7
 / \
 1   3
 And the value to insert: 5
 You can return this binary search tree:

 4
 /   \
 2     7
 / \   /
 1   3 5
 This tree is also valid:

 5
 /   \
 2     7
 / \
 1   3
 \
 4
  

 Constraints:

 The number of nodes in the given tree will be between 0 and 10^4.
 Each node will have a unique integer value from 0 to -10^8, inclusive.
 -10^8 <= val <= 10^8
 It's guaranteed that val does not exist in the original BST.
 */
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
import { TreeNode } from '../../types/index';

function insertIntoBST(root: TreeNode | null, val: number): TreeNode | null {
  if (!root) return new TreeNode(val);
  if (root.val < val) root.right = insertIntoBST(root.right, val);
  if (root.val > val) root.left = insertIntoBST(root.left, val);
  return root;
};

// function insertIntoBST(root: TreeNode | null, val: number): TreeNode | null {
//   if (!root) return new TreeNode(val);
//   let p: TreeNode | null = root;
//   while (p) {
//     if (p.val > val) {
//       if (!p.left) {
//         p.left = new TreeNode(val);
//         break;
//       } else {
//         p = p.left;
//       }
//     } else {
//       if (!p.right) {
//         p.right = new TreeNode(val);
//         break;
//       } else {
//         p = p.right;
//       }
//     }
//   }
//   return root;
// };


