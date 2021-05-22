// 05/18/2021 EASY

// https://leetcode-cn.com/problems/dui-cheng-de-er-cha-shu-lcof/

#include <iostream>
struct TreeNode {
  int val;
  TreeNode *left;
  TreeNode *right;
  TreeNode(int x) : val(x), left(NULL), right(NULL) {}
};
class Solution {
public:
    bool isSymmetric(TreeNode* root) {
      if (!root) return true;
      return help(root->left, root->right);
    }
    bool help(TreeNode* p, TreeNode* q) {
      if (!p && !q) return true;
      if ((!p && q) || (p && !q)) return false;
      return p->val == q->val && help(p->left, q->right) && help(p->right, q->left);
    }
};