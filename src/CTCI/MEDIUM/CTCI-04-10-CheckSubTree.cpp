//
// Created by ZiqianCheng on 2021/5/27.
//

// MEDIUM https://leetcode-cn.com/problems/check-subtree-lcci/

/*
 * T1 and T2 are two very large binary trees. Create an algorithm to determine if T2 is a subtree of T1.

A tree T2 is a subtree of T1 if there exists a node n in T1 such that the subtree of n is identical to T2.
 That is, if you cut off the tree at node n, the two trees would be identical.

Note: This problem is slightly different from the original problem.

Example1:

 Input: t1 = [1, 2, 3], t2 = [2]
 Output: true
Example2:

 Input: t1 = [1, null, 2, 4], t2 = [3, 2]
 Output: false
Note:

The node numbers of both tree are in [0, 20000].

 */

struct TreeNode {
  int val;
  TreeNode *left;
  TreeNode *right;
  TreeNode(int x) : val(x), left(NULL), right(NULL) {}
};
class Solution {
public:
  bool checkSubTree(TreeNode* t1, TreeNode* t2) {
    if (!t1) return false;
    if (!t2) return true;
    return isTreeEqual(t1, t2) || checkSubTree(t1->left, t2) || checkSubTree(t1->right, t2);
  }
  bool isTreeEqual(TreeNode* t1, TreeNode* t2) {
    if ((!t1 && t2) || (t1 && !t2)) return false;
    if (!t1 && !t2) return true;
    return t1->val == t2->val && isTreeEqual(t1->left, t2->left) && isTreeEqual(t1->right, t2->right);
  }
};