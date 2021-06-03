//
// Created by 程子骞 on 2021/5/22.
//

// EASY https://leetcode-cn.com/problems/er-cha-sou-suo-shu-de-di-kda-jie-dian-lcof/

#include <stack>
using namespace std;
struct TreeNode {
  int val;
  TreeNode *left;
  TreeNode *right;
  TreeNode(int x) : val(x), left(NULL), right(NULL) {}
};
class Solution {
public:
  int kthLargest(TreeNode* root, int k) {
    stack<TreeNode*> s;
    TreeNode *p = root;
    int count = 0;
    while (p || !s.empty()) {
      if (p) {
        s.push(p);
        p = p->right;
      } else {
        TreeNode* cur = s.top();
        s.pop();
        count++;
        if (count == k) return cur->val;
        p = cur->left;
      }
    }
    return -1;
  }
};