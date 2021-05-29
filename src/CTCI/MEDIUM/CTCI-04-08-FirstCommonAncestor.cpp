//
// Created by ZiqianCheng on 2021/5/27.
//

// MEDIUM https://leetcode-cn.com/problems/first-common-ancestor-lcci/

/*
 * Design an algorithm and write code to find the first common ancestor of two nodes in a binary tree.
 * Avoid storing additional nodes in a data structure. NOTE: This is not necessarily a binary search tree.

For example, Given the following tree: root = [3,5,1,6,2,0,8,null,null,7,4]

    3
   / \
  5   1
 / \ / \
6  2 0  8
  / \
 7   4
Example 1:

Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
Input: 3
Explanation: The first common ancestor of node 5 and node 1 is node 3.
Example 2:

Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
Output: 5
Explanation: The first common ancestor of node 5 and node 4 is node 5.
Notes:

All node values are pairwise distinct.
p, q are different node and both can be found in the given tree.

 */

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
  TreeNode* lowestCommonAncestor(TreeNode* root, TreeNode* p, TreeNode* q) {
    TreeNode* ans;
    help(root, p, q, ans);
    return ans;
  }

  bool help(TreeNode* root, TreeNode* p, TreeNode* q, TreeNode*& ans) {
    if (!root) return false;
    bool inLeft = help(root->left, p, q, ans);
    bool inRight = help(root->right, p, q, ans);
    if (root == p || root == q || (inLeft && inRight)) {
      ans = root;
      return true;
    }
    return inLeft || inRight;
  }
};