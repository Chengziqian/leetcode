// 05/19/2021 MEDIUM

// https://leetcode-cn.com/problems/cong-shang-dao-xia-da-yin-er-cha-shu-lcof/

#include <queue>
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
  vector<int> levelOrder(TreeNode *root) {
    vector<int> ans;
    if (!root)
      return ans;
    queue<TreeNode *> q;
    q.push(root);
    while (!q.empty()) {
      TreeNode *cur = q.front();
      q.pop();
      ans.push_back(cur->val);
      if (cur->left)
        q.push(cur->left);
      if (cur->right)
        q.push(cur->right);
    }
    return ans;
  }
};