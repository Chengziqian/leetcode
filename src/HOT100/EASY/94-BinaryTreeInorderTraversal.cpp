//
// Created by ZiqianCheng on 2021/7/1.
//

// EASY https://leetcode-cn.com/problems/binary-tree-inorder-traversal

/*
 * Given the root of a binary tree, return the inorder traversal of its nodes' values.

 

Example 1:


Input: root = [1,null,2,3]
Output: [1,3,2]
Example 2:

Input: root = []
Output: []
Example 3:

Input: root = [1]
Output: [1]
Example 4:


Input: root = [1,2]
Output: [2,1]
Example 5:


Input: root = [1,null,2]
Output: [1,2]
 

Constraints:

The number of nodes in the tree is in the range [0, 100].
-100 <= Node.val <= 100

 */


#include <vector>
#include <stack>
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
  vector<int> inorderTraversal(TreeNode* root) {
    stack<TreeNode*> s;
    TreeNode* p = root;
    vector<int> ans;
    while (p || !s.empty()) {
      if (p) {
        s.push(p);
        p = p->left;
      } else {
        TreeNode* cur = s.top();
        s.pop();
        ans.push_back(cur->val);
        p = cur->right;
      }
    }
    return ans;
  }
};