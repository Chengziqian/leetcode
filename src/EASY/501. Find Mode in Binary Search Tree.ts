// 09/24/2020 EASY

// https://leetcode-cn.com/problems/find-mode-in-binary-search-tree/

/**
 * Given a binary search tree (BST) with duplicates, 
 * find all the mode(s) (the most frequently occurred element) in the given BST.

 Assume a BST is defined as follows:

 The left subtree of a node contains only nodes with keys less than or equal to the node's key.
 The right subtree of a node contains only nodes with keys greater than or equal to the node's key.
 Both the left and right subtrees must also be binary search trees.
  

 For example:
 Given BST [1,null,2,2],

 1
 \
 2
 /
 2
  

 return [2].

 Note: If a tree has more than one mode, you can return them in any order.

 Follow up: Could you do that without using any extra space? (Assume that the implicit stack space incurred due to recursion does not count).
 
 * 
 * 
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

function findMode(root: TreeNode | null): number[] {
  let ans: number[] = [];
  if (!root) return ans;
  const stack: TreeNode[] = [];
  let currentVal: number = 0;
  let currentValCount: number = 0;
  let maxCount: number = 0;
  let p: TreeNode | null = root;
  while (p || stack.length) {
    if (p) {
      stack.push(p);
      p = p.left;
    } else {
      const cur: TreeNode = stack.pop() as TreeNode;
      if (cur.val === currentVal) {
        currentValCount++;
      } else {
        currentVal = cur.val;
        currentValCount = 1;
      }
      if (maxCount === currentValCount) {
        ans.push(cur.val);
      }
      if (maxCount < currentValCount) {
        maxCount = currentValCount;
        ans = [cur.val];
      }
      p = cur.right;
    }
  }
  return ans;
};
