//
// Created by ZiqianCheng on 2021/7/5.
//

// MEDIUM https://leetcode-cn.com/problems/flatten-binary-tree-to-linked-list/

/*
 * Given the root of a binary tree, flatten the tree into a "linked list":

The "linked list" should use the same TreeNode class where the right child pointer points to the next node in the list and the left child pointer is always null.
The "linked list" should be in the same order as a pre-order traversal of the binary tree.
 

Example 1:


Input: root = [1,2,5,3,4,null,6]
Output: [1,null,2,null,3,null,4,null,5,null,6]
Example 2:

Input: root = []
Output: []
Example 3:

Input: root = [0]
Output: [0]
 

Constraints:

The number of nodes in the tree is in the range [0, 2000].
-100 <= Node.val <= 100
 

Follow up: Can you flatten the tree in-place (with O(1) extra space)?
 */


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
  void flatten(TreeNode* root) {
    help(root);
  }

  TreeNode* help(TreeNode* root) {
    if (!root) return root;
    TreeNode* leftHead = root->left;
    TreeNode* rightHead = root->right;
    TreeNode* leftTail = help(root->left);
    TreeNode* rightTail = help(root->right);
    root->left = nullptr;
    if (leftTail) {
      leftTail->right = rightHead;
      root->right = leftHead;
    }
    if (rightTail) return rightTail;
    else if (leftTail) return leftTail;
    else return root;
  }
};

class Solution2 {
public:
  void flatten(TreeNode* root) {
    TreeNode* cur = root;
    while (cur) {
      if (cur->left) {
        TreeNode* next = cur->left;
        TreeNode* tail = next;
        while (tail->right) tail = tail->right;
        tail->right = cur->right;
        cur->left = nullptr;
        cur->right = next;
      }
      cur = cur->right;
    }
  }
};