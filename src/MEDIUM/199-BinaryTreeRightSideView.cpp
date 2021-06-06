//
// Created by ZiqianCheng on 2021/6/4.
//

// MEDIUM https://leetcode-cn.com/problems/binary-tree-right-side-view/

/*
 * Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

 

Example 1:


Input: root = [1,2,3,null,5,null,4]
Output: [1,3,4]
Example 2:

Input: root = [1,null,3]
Output: [1,3]
Example 3:

Input: root = []
Output: []
 

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
  vector<int> rightSideView(TreeNode* root) {
    stack<TreeNode *> s;
    TreeNode* p = root;
    stack<int> depth;
    vector<int> ans;
    int preDepth = 0;
    while (!s.empty() || p) {
      if (p) {
        s.push(p);
        depth.push(preDepth + 1);
        preDepth += 1;
        if (ans.size() + 1 == preDepth) ans.push_back(p->val);
        p = p->right;
      } else {
        TreeNode* cur = s.top();
        s.pop();
        preDepth = depth.top();
        depth.pop();
        p = cur->left;
      }
    }
    return ans;
  }
};