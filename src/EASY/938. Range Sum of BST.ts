// 09/23/2020 EASY

// https://leetcode-cn.com/problems/range-sum-of-bst/

/**
 * Given the root node of a binary search tree, 
 * return the sum of values of all nodes with value between L and R (inclusive).

 The binary search tree is guaranteed to have unique values.

 Example 1:

 Input: root = [10,5,15,3,7,null,18], L = 7, R = 15
 Output: 32
 Example 2:

 Input: root = [10,5,15,3,7,13,18,1,null,6], L = 6, R = 10
 Output: 23

 Note:

 The number of nodes in the tree is at most 10000.
 The final answer is guaranteed to be less than 2^31.
 * 
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
// function rangeSumBST(root: TreeNode | null, L: number, R: number): number {
//   if (!root) return 0;
//   const stack: TreeNode[] = [];
//   let p: TreeNode | null = root;
//   let ans = 0;
//   while (p || stack.length) {
//     if (p) {
//       stack.push(p);
//       p = p.left;
//     } else {
//       const currentTreeNode = stack.pop() as TreeNode;
//       if (currentTreeNode.val >= L && currentTreeNode.val <= R) {
//         ans += currentTreeNode.val;
//       }
//       p = currentTreeNode.right;
//     }
//   }
//   return ans;
// };

function rangeSumBST(root: TreeNode | null, L: number, R: number): number {
  return sum(root);
  function sum(root: TreeNode | null): number {
    if (!root) return 0;
    if (root.val < L) return sum(root.right);
    else if (root.val > R) return sum(root.left);
    else return root.val + sum(root.right) + sum(root.left);
  }
};
