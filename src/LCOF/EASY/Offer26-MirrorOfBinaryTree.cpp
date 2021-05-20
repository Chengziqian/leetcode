// 05/18/2021 EASY

// https://leetcode-cn.com/problems/er-cha-shu-de-jing-xiang-lcof/

#include <iostream>
struct TreeNode {
  int val;
  TreeNode *left;
  TreeNode *right;
  TreeNode(int x) : val(x), left(NULL), right(NULL) {}
};
class Solution {
public:
    TreeNode* mirrorTree(TreeNode* root) {
      if (!root) return root;
      TreeNode* tmp = root->left;
      root->left = mirrorTree(root->right);
      root->right = mirrorTree(tmp);
      return root;
    }
};