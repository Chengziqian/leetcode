//
// Created by ZiqianCheng on 2021/5/27.
//

// MEDIUM https://leetcode-cn.com/problems/successor-lcci/

/*
 * Write an algorithm to find the "next" node (i.e., in-order successor) of a given node in a binary search tree.

Return null if there's no "next" node for the given node.

Example 1:

Input: root = [2,1,3], p = 1

  2
 / \
1   3

Output: 2
Example 2:

Input: root = [5,3,6,2,4,null,null,1], p = 6

      5
     / \
    3   6
   / \
  2   4
 /
1

Output: null

 */

struct TreeNode {
  int val;
  TreeNode *left;
  TreeNode *right;
  TreeNode(int x) : val(x), left(NULL), right(NULL) {}
};
class Solution {
public:
  TreeNode* inorderSuccessor(TreeNode* root, TreeNode* p) {
    TreeNode* nearestParent = nullptr;
    TreeNode* cur = root;
    while (cur != p) {
      if (cur->val < p->val) {
        cur = cur->right;
      } else {
        nearestParent = cur;
        cur = cur->left;
      }
    }
    if (!cur) return nullptr;
    if (cur->right) {
      TreeNode* next = cur->right;
      while (next->left) next = next->left;
      return next;
    } else {
      return nearestParent;
    }
  }
};