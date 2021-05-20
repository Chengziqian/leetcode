// 05/19/2021 MEDIUM

// https://leetcode-cn.com/problems/cong-shang-dao-xia-da-yin-er-cha-shu-ii-lcof/

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
  vector<vector<int>> levelOrder(TreeNode *root) {
    vector<vector<int>> ans;
    if (!root)
      return ans;
    queue<TreeNode *> q;
    q.push(root);
    while (!q.empty()) {
      int k = q.size();
      vector<int> currentLayer;
      while (k--) {
        TreeNode *cur = q.front();
        q.pop();
        currentLayer.push_back(cur->val);
        if (cur->left)
          q.push(cur->left);
        if (cur->right)
          q.push(cur->right);
      }
      ans.push_back(currentLayer);
    }
    return ans;
  }
};