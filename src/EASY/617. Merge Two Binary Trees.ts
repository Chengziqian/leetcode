// 09/23/2020 EASY

// https://leetcode-cn.com/problems/merge-two-binary-trees/
/**
 * Given two binary trees and imagine that when you put one of them to cover the other, 
 * some nodes of the two trees are overlapped while the others are not.

 You need to merge them into a new binary tree. 
 The merge rule is that if two nodes overlap, 
 hen sum node values up as the new value of the merged node. Otherwise, 
 the NOT null node will be used as the node of new tree.

 Example 1:

 Input:
 Tree 1                     Tree 2
 1                         2
 / \                       / \
 3   2                     1   3
 /                           \   \
 5                             4   7
 Output:
 Merged tree:
 3
 / \
 4   5
 / \   \
 5   4   7
  

 Note: The merging process must start from the root nodes of both trees.
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

function mergeTrees(t1: TreeNode | null, t2: TreeNode | null): TreeNode | null {
  if (!t1) return t2;
  if (!t2) return t1;
  const ans = new TreeNode(t1.val + t2.val, null, null);
  ans.left = mergeTrees(t1.left, t2.left);
  ans.right = mergeTrees(t1.right, t2.right);
  return ans;
};
