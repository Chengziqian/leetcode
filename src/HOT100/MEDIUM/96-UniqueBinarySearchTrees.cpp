//
// Created by ZiqianCheng on 2021/7/1.
//

// MEDIUM https://leetcode-cn.com/problems/unique-binary-search-trees

/*
 * Given an integer n,
 * return the number of structurally unique BST's (binary search trees)
 * which has exactly n nodes of unique values from 1 to n.

 

Example 1:


Input: n = 3
Output: 5
Example 2:

Input: n = 1
Output: 1
 

Constraints:

1 <= n <= 19

 */

#include <vector>
using namespace std;
class Solution {
public:
  int numTrees(int n) {
    if (n <= 2) return n;
    vector<int> dp(n + 1, 0);
    dp[0] = 1;
    dp[1] = 1;
    dp[2] = 2;
    for (int i = 3; i <= n; ++i) {
      for (int k = 1; k <= i; ++k) {
        dp[i] += dp[k - 1] * dp[i - k];
      }
    }
    return dp[n];
  }
};