// 09/25/2020 MEDIUM

// https://leetcode-cn.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/

/**
 * Given inorder and postorder traversal of a tree, construct the binary tree.

 Note:
 You may assume that duplicates do not exist in the tree.

 For example, given

 inorder = [9,3,15,20,7]
 postorder = [9,15,7,20,3]
 Return the following binary tree:

 3
 / \
 9  20
 /  \
 15   7
 
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
function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
  if (!postorder.length) return null;
  const rootVal = postorder.pop() as number;
  const root = new TreeNode(rootVal);
  const inOrderIndex = inorder.findIndex(item => item === rootVal);
  if (inOrderIndex === -1) return null;
  const leftInorder = inorder.slice(0, inOrderIndex);
  const rightInorder = inorder.slice(inOrderIndex + 1);
  const leftPostorder = postorder.slice(0, leftInorder.length);
  const rightPostorder = postorder.slice(leftInorder.length);
  root.left = buildTree(leftInorder, leftPostorder);
  root.right = buildTree(rightInorder, rightPostorder);
  return root;
};
