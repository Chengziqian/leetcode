// 0929/2020 MEDIUM

// https://leetcode-cn.com/problems/binary-tree-postorder-traversal/


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
// function postorderTraversal(root: TreeNode | null): number[] {
//   const ans: number[] = [];
//   function travel(root: TreeNode | null) {
//     if (!root) return;
//     travel(root.left);
//     travel(root.right);
//     ans.push(root.val);
//   }
//   travel(root);
//   return ans;
// };

function postorderTraversal(root: TreeNode | null): number[] {
  const ans: number[] = [];
  let p: TreeNode | null = root;
  const stack: TreeNode[] = [];
  let lastVisited: TreeNode | null = null;
  while (p || stack.length) {
    if (p) {
      stack.push(p);
      p = p.left;
    } else {
      const cur = stack[stack.length - 1] as TreeNode;
      if (!cur.right || lastVisited === cur.right) {
        stack.pop();
        ans.push(cur.val);
        lastVisited = cur;
        p = null;
      } else {
        p = cur.right;
      }
    }
  }
  return ans;
};
