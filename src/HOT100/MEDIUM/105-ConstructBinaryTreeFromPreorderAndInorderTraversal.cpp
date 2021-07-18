//
// Created by ZiqianCheng on 2021/7/5.
//

// MEDIUM https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal

/*
 * Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary tree and inorder is the inorder traversal of the same tree,
 * construct and return the binary tree.

 

Example 1:


Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
Output: [3,9,20,null,null,15,7]
Example 2:

Input: preorder = [-1], inorder = [-1]
Output: [-1]
 

Constraints:

1 <= preorder.length <= 3000
inorder.length == preorder.length
-3000 <= preorder[i], inorder[i] <= 3000
preorder and inorder consist of unique values.
Each value of inorder also appears in preorder.
preorder is guaranteed to be the preorder traversal of the tree.
inorder is guaranteed to be the inorder traversal of the tree.

 */

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
  TreeNode* buildTree(vector<int>& preorder, vector<int>& inorder) {
    return help(preorder, 0, preorder.size() - 1, inorder, 0, inorder.size() - 1);
  }

  TreeNode* help(vector<int>& preorder, int preStart, int preEnd, vector<int>& inorder, int inStart, int inEnd) {
    if (preStart > preEnd) return nullptr;
    if (inStart > inEnd) return nullptr;
    int rootVal = preorder[preStart];
    TreeNode* ans = new TreeNode(rootVal);
    int index = inStart;
    while (index <= inEnd && inorder[index] != rootVal) index++;
    ans->left = help(preorder, preStart + 1, preStart + index - inStart, inorder, inStart, index - 1);
    ans->right = help(preorder, preStart + index - inStart + 1, preEnd, inorder, index + 1, inEnd);
    return ans;
  }
};