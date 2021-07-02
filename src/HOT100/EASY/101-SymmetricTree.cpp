//
// Created by ZiqianCheng on 2021/7/1.
//

// EASY https://leetcode-cn.com/problems/symmetric-tree/

/*
 * Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

 

Example 1:


Input: root = [1,2,2,3,4,4,3]
Output: true
Example 2:


Input: root = [1,2,2,null,3,null,3]
Output: false
 

Constraints:

The number of nodes in the tree is in the range [1, 1000].
-100 <= Node.val <= 100
 

Follow up: Could you solve it both recursively and iteratively?
 */

#include <queue>
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
  bool isSymmetric(TreeNode* root) {
    if (!root) return false;
    return check(root->left, root->right);
  }
  bool check(TreeNode* left, TreeNode* right) {
    if (!left && !right) return true;
    if ((!left && right) || (left && !right)) return false;
    if (left->val != right->val) return false;
    return check(left->right, right->left) && check(left->left, right->right);
  }
};

class Solution2 {
public:
  bool isSymmetric(TreeNode* root) {
    if (!root) return false;
    queue<TreeNode*> q;
    q.push(root);
    q.push(root);
    while (!q.empty()) {
      TreeNode* left = q.front(); q.pop();
      TreeNode* right = q.front(); q.pop();
      if (!left && !right) continue;
      if (!left || !right) return false;
      if (left->val != right->val) return false;
      q.push(left->right);
      q.push(right->left);
      q.push(left->left);
      q.push(right->right);
    }
    return true;
  }
};