//
// Created by ZiqianCheng on 2021/5/24.
//

// EASY https://leetcode-cn.com/problems/er-cha-shu-de-zui-jin-gong-gong-zu-xian-lcof/

#include <vector>
using namespace std;
struct TreeNode {
  int val;
  TreeNode *left;
  TreeNode *right;
  TreeNode(int x) : val(x), left(NULL), right(NULL) {}
};
class Solution {
private:
  TreeNode* ans;
public:
  TreeNode* lowestCommonAncestor(TreeNode* root, TreeNode* p, TreeNode* q) {
    help(root, p, q);
    return ans;
  }

  bool help(TreeNode* root, TreeNode* p, TreeNode* q) {
    if (!root) return false;
    bool inLeft = help(root->left, p, q);
    bool inRight = help(root->right, p, q);
    if (root == p || root == q || (inLeft && inRight)) {
      ans = root;
      return true;
    }
    return inRight || inLeft;
  }
};