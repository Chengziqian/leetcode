// 09/14/2020 MEDIUM

// https://leetcode-cn.com/problems/binary-tree-inorder-traversal/


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

// Recursion
// function inorderTraversal(root: TreeNode | null): number[] {
//   const arr: number[] = [];
//   travel(root);
//   function travel(root: TreeNode | null) {
//     if (!root) return;
//     travel(root.left);
//     arr.push(root.val);
//     travel(root.right);
//   }
//   return arr;
// };


// Queue
function inorderTraversal(root: TreeNode | null): number[] {
  const arr: number[] = [];
  if (!root) return arr;
  const stack: TreeNode[] = [];
  let p: TreeNode | null = root;
  while (p || stack.length) {
    while (p) {
      stack.push(p);
      p = p.left;
    }
    if (stack.length) {
      p = stack.pop() as TreeNode;
      arr.push(p.val);
      p = p.right;
    }
  }
  return arr;
};
