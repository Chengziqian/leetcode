//
// Created by ZiqianCheng on 2021/5/27.
//

// MEDIUM https://leetcode-cn.com/problems/paths-with-sum-lcci/

/*
 * You are given a binary tree in which each node contains an integer value (which might be positive or negative).
 * Design an algorithm to count the number of paths that sum to a given value.
 * The path does not need to start or end at the root or a leaf,
 * but it must go downwards (traveling only from parent nodes to child nodes).

Example:
Given the following tree and  sum = 22,

              5
             / \
            4   8
           /   / \
          11  13  4
         /  \    / \
        7    2  5   1
Output:

3
Explanation: Paths that have sum 22 are: [5,4,11,2], [5,8,4,5], [4,11,7]
Note:

node number <= 10000

 */

#include <unordered_map>
using namespace std;
struct TreeNode {
  int val;
  TreeNode *left;
  TreeNode *right;
  TreeNode(int x) : val(x), left(NULL), right(NULL) {}
};
class Solution {
public:
  int pathSum(TreeNode* root, int sum) {
    if (!root) return 0;
    unordered_map<int, int> preSum;
    preSum[0] = 1;
    int ans = 0;
    int curSum = 0;
    help(root, sum, preSum, ans, curSum);
    return ans;
  }

  void help(TreeNode* root, int target, unordered_map<int, int>& preSum, int& ans, int& curSum) {
    if (!root) {
      return;
    }
    curSum += root->val;
    ans += preSum[curSum - target];
    preSum[curSum]++;
    help(root->left, target, preSum, ans, curSum);
    help(root->right, target, preSum, ans, curSum);
    preSum[curSum]--;
    curSum -= root->val;
  }
};