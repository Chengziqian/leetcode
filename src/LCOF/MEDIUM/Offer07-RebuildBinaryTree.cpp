// 05/17/2021 MEDIUM

// https://leetcode-cn.com/problems/zhong-jian-er-cha-shu-lcof/

/*
<-- preorder = [3,9,20,15,7] inorder = [9,3,15,20,7]
--> 
    3
   / \
  9  20
    /  \
   15   7
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
    TreeNode* buildTree(vector<int>& preorder, vector<int>& inorder) {
      return help(preorder, 0, preorder.size() - 1, inorder, 0, inorder.size() - 1);
    }
    TreeNode* help(vector<int>& preorder, int preStart, int preEnd, vector<int>& inorder, int inStart, int inEnd) {
      if (preStart > preEnd || inStart > inEnd) return NULL;
      if (preStart == preEnd) return new TreeNode(preorder[preStart]);
      TreeNode* root = new TreeNode(preorder[preStart]);
      int rootIndexInorder = inStart;
      while (rootIndexInorder <= inEnd && inorder[rootIndexInorder] != preorder[preStart]) rootIndexInorder++;
      int leftLen = rootIndexInorder - inStart;
      root->left = help(preorder, preStart + 1, preStart + leftLen, inorder, inStart, rootIndexInorder - 1);
      root->right = help(preorder, preStart + leftLen + 1, preEnd, inorder, rootIndexInorder + 1, inEnd);
      return root;
    }
};