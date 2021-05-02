// 04/25/2021 EASY

// https://leetcode-cn.com/problems/increasing-order-search-tree

/*
Given the root of a binary search tree, rearrange the tree in in-order so that the leftmost node in the tree is now the root of the tree, and every node has no left child and only one right child.

 

Example 1:


Input: root = [5,3,6,2,4,null,8,1,null,null,null,7,9]
Output: [1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9]
Example 2:


Input: root = [5,1,7]
Output: [1,null,5,null,7]
 

Constraints:

The number of nodes in the given tree will be in the range [1, 100].
0 <= Node.val <= 1000

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
function increasingBST(root: TreeNode | null): TreeNode | null {
  if (!root) return root;
  const dummy = new TreeNode();
  let cur = dummy;
  const stack: TreeNode[] = [];
  let p: TreeNode | null = root;
  while (stack.length || p) {
    if (p) {
      stack.push(p);
      p = p.left;
    } else {
      const current = stack.pop();
      p = current.right;
      cur.right = current;
      current.left = null;
      cur = cur.right;
    }
  }
  return dummy.right;
};
