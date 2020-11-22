// 11/21/2020 EASY

// https://leetcode-cn.com/problems/binary-tree-paths/

/*
Given a binary tree, return all root-to-leaf paths.

Note: A leaf is a node with no children.

Example:

Input:

   1
 /   \
2     3
 \
  5

Output: ["1->2->5", "1->3"]

Explanation: All root-to-leaf paths are: 1->2->5, 1->3

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

function binaryTreePaths(root: TreeNode | null): string[] {
  const ans: string[] = [];
  let currentPath = "";
  dfs(root);
  return ans.map(p => p.slice(2));

  function dfs(root: TreeNode | null) {
    if (!root) return;
    const originPath = currentPath;
    currentPath += `->${root.val}`;
    if (!root.left && !root.right) {
      ans.push(currentPath)
    } else {
      dfs(root.left);
      dfs(root.right);
    }
    currentPath = originPath;
    return;
  }
};