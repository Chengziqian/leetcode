// 04/08/2021 MEDIUM

// https://leetcode-cn.com/problems/legal-binary-search-tree-lcci/

/*
Implement a function to check if a binary tree is a binary search tree.

Example 1:

Input:
    2
   / \
  1   3
Output: true
Example 2:

Input:
    5
   / \
  1   4
     / \
    3   6
Output: false
Explanation: Input: [5,1,4,null,null,3,6].
     the value of root node is 5, but its right child has value 4.

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

// function isValidBST(root: TreeNode | null): boolean {
//   const stack: TreeNode[] = [];
//   let p: TreeNode | null = root;
//   let preVal = Number.MIN_SAFE_INTEGER;
//   while (stack.length || p) {
//     if (p) {
//       stack.push(p);
//       p = p.left;
//     } else {
//       const cur = stack.pop();
//       const curVal = cur.val;
//       if (curVal <= preVal) return false;
//       preVal = curVal;
//       p = cur.right;
//     }
//   }
//   return true;
// };

function isValidBST(root: TreeNode | null): boolean {
  return check(root, Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER);
  
  function check(root: TreeNode | null, upper: number, lower: number): boolean {
    if (!root) return true;
    if (root.val <= lower || root.val >= upper) return false;
    return check(root.left, root.val, lower) && check(root.right, upper, root.val);
  }
};
