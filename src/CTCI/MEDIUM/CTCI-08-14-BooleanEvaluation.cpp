//
// Created by ZiqianCheng on 2021/5/31.
//

// MEDIUM https://leetcode-cn.com/problems/boolean-evaluation-lcci/
/*
 * Given a boolean expression consisting of the symbols 0 (false), 1 (true), & (AND), | (OR), and ^ (XOR),
 * and a desired boolean result value result,
 * implement a function to count the number of ways of parenthesizing the expression such that it evaluates to result.

Example 1:

Input: s = "1^0|0|1", result = 0

Output: 2
Explanation: Two possible parenthesizing ways are:
1^(0|(0|1))
1^((0|0)|1)
Example 2:

Input: s = "0&0&0&1^1|0", result = 1

Output: 10
Note:

There are no more than 19 operators in s.

 */

#include <string>
#include <vector>
using namespace std;
class Solution {
public:
  int countEval(string s, int result) {
    int n = s.size();
    vector<vector<vector<int>>> dp(n, vector<vector<int>>(n, vector<int>(2, 0)));
    for (int i = 0; i < n; ++i) {
      if (s[i] == '0' || s[i] == '1') {
        dp[i][i][s[i] - '0'] = 1;
      }
    }
    for (int i = n - 3; i >= 0; i -= 2) {
      for (int j = i + 2; j < n; j += 2) {
        for (int k = i + 1; k < j; k += 2) {
          dp[i][j][getValue(0, 0, s[k])] += dp[i][k - 1][0] * dp[k + 1][j][0];
          dp[i][j][getValue(0, 1, s[k])] += dp[i][k - 1][0] * dp[k + 1][j][1];
          dp[i][j][getValue(1, 0, s[k])] += dp[i][k - 1][1] * dp[k + 1][j][0];
          dp[i][j][getValue(1, 1, s[k])] += dp[i][k - 1][1] * dp[k + 1][j][1];
        }
      }
    }
    return dp[0][n - 1][result];
  }

  int getValue(int left, int right, char op) {
    switch (op) {
      case '&':
        return left & right;
      case '|':
        return left | right;
      case '^':
        return left ^ right;
      default:
        return 0;
    }
  }
};