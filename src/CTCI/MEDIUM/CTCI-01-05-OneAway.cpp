//
// Created by ZiqianCheng on 2021/5/25.
//

// MEDIUM https://leetcode-cn.com/problems/one-away-lcci/

/*
 * There are three types of edits that can be performed on strings:
 * insert a character, remove a character, or replace a character.
 * Given two strings, write a function to check if they are one edit (or zero edits) away.

 

Example 1:

Input:
first = "pale"
second = "ple"
Output: True
Example 2:

Input:
first = "pales"
second = "pal"
Output: False

 */

#include <string>
#include <algorithm>
using namespace std;
class Solution {
public:
  bool oneEditAway(string first, string second) {
    int m = first.size();
    int n = second.size();
    vector<vector<int>> dp(m + 1, vector<int>(n + 1, 0));
    for (int i = 1; i <= m; ++i) dp[i][0] = i;
    for (int j = 1; j <= n; ++j) dp[0][j] = j;
    for (int i = 1; i <= m; ++i) {
      for (int j = 1; j <= n; ++j) {
        if (first[i - 1] == second[j - 1]) {
          dp[i][j] = dp[i - 1][j - 1];
        } else {
          dp[i][j] += min(dp[i - 1][j], min(dp[i][j - 1], dp[i - 1][j - 1])) + 1;
        }
      }
    }
    return dp[m][n] <= 1;
  }
};