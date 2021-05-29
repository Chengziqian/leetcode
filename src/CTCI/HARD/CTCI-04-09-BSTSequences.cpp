//
// Created by ZiqianCheng on 2021/5/27.
//

// HEAD https://leetcode-cn.com/problems/bst-sequences-lcci/

/*
 *A binary search tree was created by traversing through an array from left to right and inserting each element.
 * Given a binary search tree with distinct elements, print all possible arrays that could have led to this tree.

Example:
Given the following tree:

        2
       / \
      1   3
Output:

[
   [2,1,3],
   [2,3,1]
]

 */
#include <vector>
#include <deque>
using namespace std;
struct TreeNode {
  int val;
  TreeNode *left;
  TreeNode *right;
  TreeNode(int x) : val(x), left(NULL), right(NULL) {}
};
class Solution {
public:
  vector<vector<int>> BSTSequences(TreeNode* root) {
    deque<TreeNode*> dq;
    if (root) {
      dq.push_back(root);
    }
    vector<vector<int>> ans;
    vector<int> path;
    backtrace(dq, ans, path);
    return ans;
  }
  void backtrace(deque<TreeNode*> dq, vector<vector<int>>& ans, vector<int>& path) {
    if (dq.empty()) {
      ans.push_back(path);
      return;
    }
    int size = dq.size();
    while(size--) {
      TreeNode* cur = dq.front();
      dq.pop_front();
      int childrenCount = 0;
      if (cur->left) {
        dq.push_back(cur->left);
        childrenCount++;
      }
      if (cur->right) {
        dq.push_back(cur->right);
        childrenCount++;
      }
      path.push_back(cur->val);
      backtrace(dq, ans, path);
      while(childrenCount--) dq.pop_back();
      dq.push_back(cur);
      path.pop_back();
    }
  }
};