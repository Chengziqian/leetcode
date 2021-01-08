// 01/04/2021 EASY

// https://leetcode-cn.com/problems/er-cha-sou-suo-shu-de-di-kda-jie-dian-lcof/

/*
给定一棵二叉搜索树，请找出其中第k大的节点。

 

示例 1:

输入: root = [3,1,4,null,2], k = 1
   3
  / \
 1   4
  \
   2
输出: 4
示例 2:

输入: root = [5,3,6,2,4,null,null,1], k = 3
       5
      / \
     3   6
    / \
   2   4
  /
 1
输出: 4
 

限制：

1 ≤ k ≤ 二叉搜索树元素个数

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

// function kthLargest(root: TreeNode | null, k: number): number {
//   const arr: number[] = [];
//   let p = root;
//   const stack: TreeNode[] = [];
//   while (stack.length || p) {
//     if (p) {
//       stack.push(p);
//       p = p.left;
//     } else {
//       const cur = stack.pop() as TreeNode;
//       arr.push(cur.val);
//       p = cur.right;
//     }
//   }
//   return arr[arr.length - k];
// };

function kthLargest(root: TreeNode | null, k: number): number {
  let count = 0;
  let p = root;
  const stack: TreeNode[] = [];
  while (stack.length || p) {
    if (p) {
      stack.push(p);
      p = p.right;
    } else {
      const cur = stack.pop() as TreeNode;
      count++;
      if (count === k) return cur.val
      p = cur.right;
    }
  }
  return -1;
};
