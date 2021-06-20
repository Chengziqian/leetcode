//
// Created by ZiqianCheng on 2021/6/11.
//


struct TreeNode {
	int val;
	struct TreeNode *left;
	struct TreeNode *right;
	TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
};

#include <vector>
using namespace std;
class Solution {
private:
  int maxValue = 0;
  vector<int> maxPath;
public:
  /**
   * Note: 类名、方法名、参数名已经指定，请勿修改
   *
   *
   *
   * @param nodes TreeNode类
   * @return int整型vector
   */
  vector<int> getMostGold(TreeNode* nodes) {
    vector<int> path;
    dfs(nodes, 0, path);
    return maxPath;
  }

  void dfs(TreeNode* nodes, int curValue, vector<int>& path) {
    if (!nodes) {
      if (curValue > maxValue) {
        maxValue = curValue;
        maxPath = path;
      }
      return;
    }
    path.push_back(nodes->val);
    dfs(nodes->left, curValue + nodes->val, path);
    dfs(nodes->right, curValue + nodes->val, path);
    path.pop_back();
  }
};
