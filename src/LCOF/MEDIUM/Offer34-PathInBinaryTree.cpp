// 05/19/2021 MEDIUM

// https://leetcode-cn.com/problems/er-cha-shu-zhong-he-wei-mou-yi-zhi-de-lu-jing-lcof/

#include <vector>
using namespace std;
struct TreeNode {
  int val;
  TreeNode *left;
  TreeNode *right;
  TreeNode() : val(0), left(nullptr), right(nullptr) {}
  TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
  TreeNode(int x, TreeNode *left, TreeNode *right)
      : val(x), left(left), right(right) {}
};
class Solution {
public:
  vector<vector<int>> pathSum(TreeNode *root, int target) {
    vector<vector<int>> ans;
    vector<int> path;
    dfs(target, root, path, ans);
    return ans;
  }

  void dfs(int target, TreeNode *root, vector<int> &path,
           vector<vector<int>> &ans) {
    if (!root)
      return;
    if (target == root->val && !root->left && !root->right) {
      path.push_back(root->val);
      ans.push_back(path);
      path.pop_back();
      return;
    }
    path.push_back(root->val);
    dfs(target - root->val, root->left, path, ans);
    dfs(target - root->val, root->right, path, ans);
    path.pop_back();
  }
};