//
// Created by ZiqianCheng on 2021/5/27.
//

// EASY https://leetcode-cn.com/problems/check-balance-lcci/

/*
 * Implement a function to check if a binary tree is balanced.
 * For the purposes of this question, a balanced tree is defined to be a tree such that
 * the heights of the two subtrees of any node never differ by more than one.


Example 1:

Given tree [3,9,20,null,null,15,7]
    3
   / \
  9  20
    /  \
   15   7
return true.
Example 2:

Given [1,2,2,3,3,null,null,4,4]
      1
     / \
    2   2
   / \
  3   3
 / \
4   4
return false.
 */

struct TreeNode {
  int val;
  TreeNode *left;
  TreeNode *right;
  TreeNode(int x) : val(x), left(NULL), right(NULL) {}
};
class Solution {
public:
  bool isBalanced(TreeNode* root) {
    return help(root) != -1;
  }

  int help(TreeNode* root) {
    if (!root) return 0;
    int left = help(root->left);
    int right = help(root->right);
    if (left == -1 || right == -1) return -1;
    if (abs(left - right) > 1) return -1;
    return max(left, right) + 1;
  }
};