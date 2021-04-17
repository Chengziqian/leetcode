// 04/13/2021 EASY

// https://leetcode-cn.com/problems/minimum-distance-between-bst-nodes/

/*
Given the root of a Binary Search Tree (BST), return the minimum difference between the values of any two different nodes in the tree.

Note: This question is the same as 530: https://leetcode.com/problems/minimum-absolute-difference-in-bst/

 

Example 1:


Input: root = [4,2,6,1,3]
Output: 1
Example 2:


Input: root = [1,0,48,null,null,12,49]
Output: 1
 

Constraints:

The number of nodes in the tree is in the range [2, 100].
0 <= Node.val <= 105
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
import { TreeNode } from '../../types/index'
function minDiffInBST(root: TreeNode | null): number {
  if (!root) return 0;
  const stack: TreeNode[] = [];
  let p = root;
  let preVal = Number.MIN_SAFE_INTEGER;
  let ans = Number.MAX_SAFE_INTEGER;
  while(p || stack.length) {
    if (p) {
      stack.push(p);
      p = p.left
    } else {
      const cur = stack.pop();
      ans = Math.min(ans, cur.val - preVal);
      preVal = cur.val;
      p = cur.right;
    }
  }
  return ans;
};