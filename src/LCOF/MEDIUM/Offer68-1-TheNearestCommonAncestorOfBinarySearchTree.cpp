//
// Created by ZiqianCheng on 2021/5/24.
//

// EASY https://leetcode-cn.com/problems/er-cha-sou-suo-shu-de-zui-jin-gong-gong-zu-xian-lcof/


#include <vector>
using namespace std;
struct TreeNode {
  int val;
  TreeNode *left;
  TreeNode *right;
  TreeNode(int x) : val(x), left(NULL), right(NULL) {}
};
class Solution {
public:
  TreeNode* lowestCommonAncestor(TreeNode* root, TreeNode* p, TreeNode* q) {
    if (q->val < p->val) {
      swap(p, q);
    }
    return help(root, p->val, q->val);
  }

  TreeNode* help(TreeNode* root, int p, int q) {
    if (root->val >= p && root->val <= q) return root;
    else if (root->val < p) return help(root->right, p, q);
    else return help(root->left, p, q);
  }
};