// 12/09/2020 MEDIUM

// https://leetcode-cn.com/problems/maximum-width-of-binary-tree/

/*
Given a binary tree, write a function to get the maximum width of the given tree. The maximum width of a tree is the maximum width among all levels.

The width of one level is defined as the length between the end-nodes (the leftmost and right most non-null nodes in the level, where the null nodes between the end-nodes are also counted into the length calculation.

It is guaranteed that the answer will in the range of 32-bit signed integer.

Example 1:

Input: 

           1
         /   \
        3     2
       / \     \  
      5   3     9 

Output: 4
Explanation: The maximum width existing in the third level with the length 4 (5,3,null,9).
Example 2:

Input: 

          1
         /  
        3    
       / \       
      5   3     

Output: 2
Explanation: The maximum width existing in the third level with the length 2 (5,3).
Example 3:

Input: 

          1
         / \
        3   2 
       /        
      5      

Output: 2
Explanation: The maximum width existing in the second level with the length 2 (3,2).
Example 4:

Input: 

          1
         / \
        3   2
       /     \  
      5       9 
     /         \
    6           7
Output: 8
Explanation:The maximum width existing in the fourth level with the length 8 (6,null,null,null,null,null,null,7).
 

Constraints:

The given binary tree will have between 1 and 3000 nodes.


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

function widthOfBinaryTree(root: TreeNode | null): number {
  if (!root) return 0;
  const queue: TreeNode[] = [];
  root.val = 0;
  queue.push(root);
  let ans = 1;
  while (queue.length) {
    const len = queue.length;
    let delta = queue[0].val - 1;
    for (let i = 0; i < len; i++) {
      const cur = queue.shift() as TreeNode;
      if (cur.left) {
        cur.left.val = (cur.val - delta) * 2;
        queue.push(cur.left);
      }
      if (cur.right) {
        cur.right.val = (cur.val - delta) * 2 + 1;
        queue.push(cur.right)
      }
    }
    if (queue.length) {
      const first = queue[0];
      const last = queue[queue.length - 1];
      ans = Math.max(last.val - first.val + 1, ans);
    }
  }
  return ans;
};
