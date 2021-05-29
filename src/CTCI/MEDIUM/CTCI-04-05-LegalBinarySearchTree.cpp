//
// Created by ZiqianCheng on 2021/5/27.
//

// MEDIUM https://leetcode-cn.com/problems/legal-binary-search-tree-lcci/

/*
 * Implement a function to check if a binary tree is a binary search tree.

Example 1:

Input:
    2
   / \
  1   3
Output: true
Example 2:

Input:
    5
   / \
  1   4
     / \
    3   6
Output: false
Explanation: Input: [5,1,4,null,null,3,6].
     the value of root node is 5, but its right child has value 4.

 */


#include <stack>
#include <limits.h>
using namespace std;
struct TreeNode {
  int val;
  TreeNode *left;
  TreeNode *right;
  TreeNode(int x) : val(x), left(NULL), right(NULL) {}
};
class Solution {
public:
  bool isValidBST(TreeNode* root) {
    TreeNode* pre = nullptr;
    stack<TreeNode*> s;
    TreeNode* p = root;
    while (!s.empty() || p) {
      if (p) {
        s.push(p);
        p = p->left;
      } else {
        TreeNode* r = s.top();
        s.pop();
        if (pre && r->val <= pre->val) return false;
        pre = r;
        p = r->right;
      }
    }
    return true;
  }
};