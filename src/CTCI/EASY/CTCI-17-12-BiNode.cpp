//
// Created by ZiqianCheng on 2021/6/7.
//

// EASY https://leetcode-cn.com/problems/binode-lcci

/*
 * The data structure TreeNode is used for binary tree, but it can also used to represent a single linked list (where left is null, and right is the next node in the list).
 * Implement a method to convert a binary search tree (implemented with TreeNode) into a single linked list.
 * The values should be kept in order and the operation should be performed in place (that is, on the original data structure).

Return the head node of the linked list after converting.

Note: This problem is slightly different from the original one in the book.

 

Example:

Input:  [4,2,5,1,3,null,6,0]
Output:  [0,null,1,null,2,null,3,null,4,null,5,null,6]
Note:

The number of nodes will not exceed 100000.

 */

#include <stack>
using namespace std;
struct TreeNode {
  int val;
  TreeNode *left;
  TreeNode *right;
  TreeNode(int x) : val(x), left(NULL), right(NULL) {}
};
class Solution {
private:
  TreeNode* dummy = new TreeNode();
  TreeNode* pre = dummy;
public:
  TreeNode* convertBiNode(TreeNode* root, TreeNode* ans = nullptr) {
    if (!root) return ans;
    root->right = convertBiNode(root->right, ans);
    ans = convertBiNode(root->left, root);
    root->left = nullptr;
    return ans;
  }

  void help(TreeNode* cur) {
    if (!cur) return;
    help(cur->left);
    pre->right = cur;
    cur->left = nullptr;
    pre = cur;
    help(cur->right);
  }
};