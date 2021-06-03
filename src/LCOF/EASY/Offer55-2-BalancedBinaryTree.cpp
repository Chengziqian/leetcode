//
// Created by 程子骞 on 2021/5/22.
//

// EASY https://leetcode-cn.com/problems/ping-heng-er-cha-shu-lcof/

#include <algorithm>
using namespace std;
struct TreeNode {
  int val;
  TreeNode *left;
  TreeNode *right;
  TreeNode(int x) : val(x), left(NULL), right(NULL) {}
};

class Solution {
public:
  bool isBalanced(TreeNode* root) {
    return help(root).second;
  }
  pair<int, bool> help(TreeNode* root) {
    if (!root) return make_pair(0, true);
    pair<int, bool> L = help(root->left);
    pair<int, bool> R = help(root->right);
    return make_pair(max(L.first, R.first) + 1, abs(L.first - R.first) <= 1 && L.second && R.second);
  }
};