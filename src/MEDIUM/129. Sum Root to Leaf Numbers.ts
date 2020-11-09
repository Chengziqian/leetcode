// 10/19/2020 MEDIUM

// https://leetcode-cn.com/problems/sum-root-to-leaf-numbers/

/*

Given a binary tree containing digits from 0-9 only, each root-to-leaf path could represent a number.

An example is the root-to-leaf path 1->2->3 which represents the number 123.

Find the total sum of all root-to-leaf numbers.

Note: A leaf is a node with no children.

Example:

Input: [1,2,3]
    1
   / \
  2   3
Output: 25
Explanation:
The root-to-leaf path 1->2 represents the number 12.
The root-to-leaf path 1->3 represents the number 13.
Therefore, sum = 12 + 13 = 25.
Example 2:

Input: [4,9,0,5,1]
    4
   / \
  9   0
 / \
5   1
Output: 1026
Explanation:
The root-to-leaf path 4->9->5 represents the number 495.
The root-to-leaf path 4->9->1 represents the number 491.
The root-to-leaf path 4->0 represents the number 40.
Therefore, sum = 495 + 491 + 40 = 1026.

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

function sumNumbers(root: TreeNode | null): number {
  const arr: string[] = [];
  let path: number[] = [];
  if (!root) return 0;
  backTrace(root);
  let ans = 0;
  arr.forEach(i => ans = +i + ans);
  return ans
  function backTrace(root: TreeNode) {
    if (!root.left && !root.right) {
      path.push(root.val);
      arr.push(path.join(''))
      return;
    }
    path.push(root.val);
    if (root.left) {
      backTrace(root.left);
      path.pop();
    }
    if (root.right) {
      backTrace(root.right);
      path.pop();
    }
  }
};
