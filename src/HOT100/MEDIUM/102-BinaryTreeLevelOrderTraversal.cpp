//
// Created by ZiqianCheng on 2021/7/1.
//

// MEDIUM https://leetcode-cn.com/problems/binary-tree-level-order-traversal/

/*
 *Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

 

Example 1:


Input: root = [3,9,20,null,null,15,7]
Output: [[3],[9,20],[15,7]]
Example 2:

Input: root = [1]
Output: [[1]]
Example 3:

Input: root = []
Output: []
 

Constraints:

The number of nodes in the tree is in the range [0, 2000].
-1000 <= Node.val <= 1000

 */

#include <queue>
#include <vector>
using namespace std;
struct TreeNode {
  int val;
  TreeNode *left;
  TreeNode *right;
  TreeNode() : val(0), left(nullptr), right(nullptr) {}
  TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
  TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
};
class Solution {
public:
  vector<vector<int>> levelOrder(TreeNode* root) {
    vector<vector<int>> ans;
    if (!root) return ans;
    queue<TreeNode*> q;
    q.push(root);
    while (!q.empty()) {
      int size = q.size();
      vector<int> cur;
      for (int i = 0; i < size; ++i) {
        TreeNode* curNode = q.front();
        q.pop();
        cur.push_back(curNode->val);
        if (curNode->left) q.push(curNode->left);
        if (curNode->right) q.push(curNode->right);
      }
      ans.emplace_back(cur);
    }
    return ans;
  }
};