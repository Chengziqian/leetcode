//
// Created by ZiqianCheng on 2021/5/27.
//

// MEDIUM https://leetcode-cn.com/problems/list-of-depth-lcci/

/*
 * Given a binary tree, design an algorithm which creates a linked list of all the nodes at each depth
 * (e.g., if you have a tree with depth D, you'll have D linked lists). Return a array containing all the linked lists.

 

Example:

Input: [1,2,3,4,5,null,7,8]

        1
       /  \
      2    3
     / \    \
    4   5    7
   /
  8

Output: [[1],[2,3],[4,5,7],[8]]

 */

#include <vector>
#include <queue>
using namespace std;
struct TreeNode {
  int val;
  TreeNode *left;
  TreeNode *right;
  TreeNode(int x) : val(x), left(NULL), right(NULL) {}
};
struct ListNode {
  int val;
  ListNode *next;
  ListNode(int x) : val(x), next(NULL) {}
};
class Solution {
public:
  vector<ListNode*> listOfDepth(TreeNode* tree) {
    vector<ListNode*> ans;
    queue<TreeNode*> q;
    q.push(tree);
    while (!q.empty()) {
      ListNode* dummy = new ListNode();
      ListNode* p = dummy;
      int size = q.size();
      for (int i = 0; i < size; ++i) {
        TreeNode* cur = q.front();
        p->next = new ListNode(cur->val);
        p = p->next;
        q.pop();
        if (cur->left) q.push(cur->left);
        if (cur->right) q.push(cur->right);
      }
      ans.push_back(dummy->next);
    }
    return ans;
  }
};