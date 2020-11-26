// 11/23/2020 EASY

// https://leetcode-cn.com/problems/univalued-binary-tree/

/* 
A binary tree is univalued if every node in the tree has the same value.

Return true if and only if the given tree is univalued.

 

Example 1:


Input: [1,1,1,1,1,null,1]
Output: true
Example 2:


Input: [2,2,2,5,2]
Output: false
 

Note:

The number of nodes in the given tree will be in the range [1, 100].
Each node's value will be an integer in the range [0, 99].

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

function isUnivalTree(root: TreeNode | null): boolean {
  if (!root) return false;
  const queue: TreeNode[] = [];
  const val = root.val;
  queue.push(root);
  while (queue.length) {
    const cur = queue.shift() as TreeNode;
    if (cur.val !== val) return false;
    else {
      if (cur.left) queue.push(cur.left);
      if (cur.right) queue.push(cur.right);
    }
  }
  return true;
};
