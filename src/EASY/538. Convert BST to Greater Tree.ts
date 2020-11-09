// 09/21/2020 EASY

// https://leetcode-cn.com/problems/convert-bst-to-greater-tree/

/**
 * Given a Binary Search Tree (BST), convert it to a Greater Tree such that every key of the original BST is changed to the original key plus sum of all keys greater than the original key in BST.

 Example:

 Input: The root of a Binary Search Tree like this:
 5
 /   \
 2     13

 Output: The root of a Greater Tree like this:
 18
 /   \
 20     13
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

// inorder
import { TreeNode } from '../../types/index'
// function convertBST(root: TreeNode | null): TreeNode | null {
//   let sum = 0;
//   function inorder(root: TreeNode | null) {
//     if (!root) return;
//     inorder(root.right);
//     root.val = root.val + sum;
//     sum = root.val;
//     inorder(root.left);
//     return;
//   }
//   inorder(root);
//   return root;
// };

function convertBST(root: TreeNode | null): TreeNode | null {
  if (!root) return root;
  let sum = 0;
  const stack: TreeNode[] = [];
  let p: TreeNode | null = root;
  while (p) {
    stack.push(p);
    p = p.right;
  }
  while (stack.length) {
    let cur: TreeNode | null = stack.pop() as TreeNode;
    cur.val += sum;
    sum = cur.val;
    cur = cur.left;
    while (cur) {
      stack.push(cur);
      cur = cur.right;
    }
  }
  return root;
};
