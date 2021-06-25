//
// Created by ZiqianCheng on 2021/6/21.
//

// HARD https://leetcode-cn.com/problems/longest-valid-parentheses/

/*
 * Given a string containing just the characters '(' and ')',
 * find the length of the longest valid (well-formed) parentheses substring.

 

Example 1:

Input: s = "(()"
Output: 2
Explanation: The longest valid parentheses substring is "()".
Example 2:

Input: s = ")()())"
Output: 4
Explanation: The longest valid parentheses substring is "()()".
Example 3:

Input: s = ""
Output: 0
 

Constraints:

0 <= s.length <= 3 * 104
s[i] is '(', or ')'.
 */

#include <string>
using namespace std;
class Solution {
public:
  int longestValidParentheses(string s) {
    int ans = 0;
    int n = s.size();
    vector<int> dp(n + 1, 0);
    for (int i = 2; i <= n; ++i) {
      if (s[i - 1] == ')') {
        if (s[i - 2] == '(') dp[i] = dp[i - 2] + 2;
        else if (i - dp[i - 1] - 2 >= 0 && s[i - dp[i - 1] - 2] == '(') dp[i] = dp[i - 1] + 2 + dp[i - dp[i - 1] - 2];
      }
      ans = max(ans, dp[i]);
    }
    return ans;
  }
};