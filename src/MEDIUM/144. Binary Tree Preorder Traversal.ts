// 10/27/2020 MEDIUM

// https://leetcode-cn.com/problems/binary-tree-preorder-traversal/

/*

Given the root of a binary tree, return the preorder traversal of its nodes' values.

 

Example 1:


Input: root = [1,null,2,3]
Output: [1,2,3]
Example 2:

Input: root = []
Output: []
Example 3:

Input: root = [1]
Output: [1]
Example 4:


Input: root = [1,2]
Output: [1,2]
Example 5:


Input: root = [1,null,2]
Output: [1,2]
 

Constraints:

The number of nodes in the tree is in the range [0, 100].
-100 <= Node.val <= 100
 

Follow up:

Recursive solution is trivial, could you do it iteratively?

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

function preorderTraversal(root: TreeNode | null): number[] {
  const stack: TreeNode[] = [];
  const ans: number[] = [];
  let p: TreeNode | null = root;
  while (stack.length || p) {
    if (p) {
      ans.push(p.val);
      stack.push(p);
      p = p.left;
    } else {
      const cur = stack.pop() as TreeNode;
      p = cur.right;
    }
  }
  return ans;
};
