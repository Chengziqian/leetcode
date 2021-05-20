// 05/18/2021 MEDIUM

// https://leetcode-cn.com/problems/shu-de-zi-jie-gou-lcof/

#include <iostream>
struct TreeNode {
  int val;
  TreeNode *left;
  TreeNode *right;
  TreeNode(int x) : val(x), left(NULL), right(NULL) {}
};
class Solution {
public:
    bool isSubStructure(TreeNode* A, TreeNode* B) {
      if (!B) return false;
      return isSame(A, B) || (A && isSubStructure(A->left, B)) || (A && isSubStructure(A->right, B));
    }

    bool isSame(TreeNode* A, TreeNode* B) {
      if ((!A && !B) || (A && !B)) return true;
      if (!A && B) return false;
      if (A->val != B->val) return false;
      return isSame(A->left, B->left) && isSame(A->right, B->right);
    }
};