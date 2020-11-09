// 10/26/2020 MEDIUM

// https://leetcode-cn.com/problems/maximum-difference-between-node-and-ancestor/

/*

Given the root of a binary tree, find the maximum value V for which there exists different nodes A and B where V = |A.val - B.val| and A is an ancestor of B.

(A node A is an ancestor of B if either: any child of A is equal to B, or any child of A is an ancestor of B.)

 

Example 1:



Input: [8,3,10,1,6,null,14,null,null,4,7,13]
Output: 7
Explanation: 
We have various ancestor-node differences, some of which are given below :
|8 - 3| = 5
|3 - 7| = 4
|8 - 1| = 7
|10 - 13| = 3
Among all possible differences, the maximum value of 7 is obtained by |8 - 1| = 7.
 

Note:

The number of nodes in the tree is between 2 and 5000.
Each node will have value between 0 and 100000.

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

// back track
// function maxAncestorDiff(root: TreeNode | null): number {
//   const ancestors: Array<TreeNode | null> = [];
//   let res = 0;
//   backTrack(root);
//   return res;
//   function backTrack(root: TreeNode | null) {
//     if (!root) return;
//     let max = 0;
//     for (let i = 0; i < ancestors.length; i++) {
//       const currentAncestor = ancestors[i] as TreeNode
//       max = Math.max(max, Math.abs(currentAncestor.val - root.val));
//     }
//     res = Math.max(max, res);
//     ancestors.push(root);
//     backTrack(root.left);
//     backTrack(root.right);
//     ancestors.pop();
//   }
// };

// DFS
function maxAncestorDiff(root: TreeNode | null): number {
  if (!root) return 0;
  let ans = 0;
  dfs(root, root.val, root.val);
  return ans;
  function dfs(root: TreeNode | null, min: number, max: number) {
    if (!root) return;
    const maxDiff = Math.max(Math.abs(max - root.val), Math.abs(min - root.val));
    ans = Math.max(ans, maxDiff);
    dfs(root.left, Math.min(root.val, min), Math.max(root.val, max));
    dfs(root.right, Math.min(root.val, min), Math.max(root.val, max));
  }
};
