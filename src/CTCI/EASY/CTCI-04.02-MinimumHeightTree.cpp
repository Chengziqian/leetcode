//
// Created by ZiqianCheng on 2021/5/27.
//

// EASY https://leetcode-cn.com/problems/minimum-height-tree-lcci/

/*
 * Given a sorted (increasing order) array with unique integer elements,
 * write an algorithm to create a binary search tree with minimal height.

Example:

Given sorted array: [-10,-3,0,5,9],

One possible answer is: [0,-3,9,-10,null,5]，which represents the following tree:

          0
         / \
       -3   9
       /   /
     -10  5

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
  TreeNode* sortedArrayToBST(vector<int>& nums) {
    return help(nums, 0, nums.size() - 1);
  }

  TreeNode* help(vector<int>& nums, int left, int right) {
    if (left > right) return NULL;
    int mid = (left + right) / 2;
    TreeNode* root = new TreeNode(nums[mid]);
    root->left = help(nums, left, mid - 1);
    root->right = help(nums, mid + 1, right);
    return root;
  }
};