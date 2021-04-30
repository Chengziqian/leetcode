// 11/12/2020 MEDIUM

// https://leetcode-cn.com/problems/lowest-common-ancestor-of-deepest-leaves/

/*
Given the root of a binary tree, return the lowest common ancestor of its deepest leaves.

Recall that:

The node of a binary tree is a leaf if and only if it has no children
The depth of the root of the tree is 0. if the depth of a node is d, the depth of each of its children is d + 1.
The lowest common ancestor of a set S of nodes, is the node A with the largest depth such that every node in S is in the subtree with root A.
Note: This question is the same as 865: https://leetcode.com/problems/smallest-subtree-with-all-the-deepest-nodes/

 

Example 1:


Input: root = [3,5,1,6,2,0,8,null,null,7,4]
Output: [2,7,4]
Explanation: We return the node with value 2, colored in yellow in the diagram.
The nodes coloured in blue are the deepest leaf-nodes of the tree.
Note that nodes 6, 0, and 8 are also leaf nodes, but the depth of them is 2, but the depth of nodes 7 and 4 is 3.
Example 2:

Input: root = [1]
Output: [1]
Explanation: The root is the deepest node in the tree, and it's the lca of itself.
Example 3:

Input: root = [0,1,3,null,2]
Output: [2]
Explanation: The deepest leaf node in the tree is 2, the lca of one node is itself.
 

Constraints:

The number of nodes in the tree will be in the range [1, 1000].
0 <= Node.val <= 1000
The values of the nodes in the tree are unique.

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

// function lcaDeepestLeaves(root: TreeNode | null): TreeNode | null {
//   let ans = root;
//   if (!root) return root;
//   let maxDepth = depth(root);
//   travel(root, 1);
//   function depth (root: TreeNode | null): number {
//     if (!root) return 0;
//     else return Math.max(depth(root.left), depth(root.right)) + 1;
//   }
//   function travel(root: TreeNode | null, currentDepth: number): boolean {
//     if (!root) {
//       return maxDepth === currentDepth - 1;
//     } else {
//       const inLeft = travel(root.left, currentDepth + 1);
//       const inRight = travel(root.right, currentDepth + 1);
//       if (inLeft && inRight) {
//         ans = root;
//       }
//       return inRight || inLeft;
//     }
//   }
//   return ans;
// };

// function lcaDeepestLeaves(root: TreeNode | null): TreeNode | null {
//   if (!root) return null;
//   const leftHeight = depth(root.left);
//   const rightHeight = depth(root.right);
//   if (leftHeight === rightHeight) return root;
//   return leftHeight < rightHeight ? lcaDeepestLeaves(root.right) : lcaDeepestLeaves(root.left);
//  
//   function depth(root: TreeNode | null): number {
//     if (!root) return 0;
//     else return Math.max(depth(root.left), depth(root.right)) + 1;
//   }
// };

function lcaDeepestLeaves(root: TreeNode | null): TreeNode | null {
  let ans: TreeNode = null;
  let max: number = 0;
  dfs(root, 0);
  return ans;
  function dfs(root: TreeNode, depth: number): number {
    if (!root) return depth;
    const left = dfs(root.left, depth + 1);
    const right = dfs(root.right, depth + 1);
    if (left === right && left >= max) {
      max = left;
      ans = root;
    }
    return Math.max(left, right);
  }
};

