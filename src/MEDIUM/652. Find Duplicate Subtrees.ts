// 09/10/2020 MEDIUM

// https://leetcode.com/problems/find-duplicate-subtrees/

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
import { TreeNode } from '../../types/index'
function findDuplicateSubtrees(root: TreeNode | null): Array<TreeNode | null> {
  const ans: TreeNode[] = [];
  const map: {[Key: string]: number} = {};
  dfs(root);
  return ans;
  
  function dfs(root: TreeNode | null) {
    if (!root) return '#';
    const str: string = `${root.val},${dfs(root.left)},${dfs(root.right)}`;
    if (map[str]) map[str]++;
    else map[str] = 1;
    if (map[str] === 2) ans.push(root);
    return str
  }
};
