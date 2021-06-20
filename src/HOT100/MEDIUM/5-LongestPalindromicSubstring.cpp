//
// Created by ZiqianCheng on 2021/6/18.
//

// MEDIUM https://leetcode-cn.com/problems/longest-palindromic-substring

/*
 * Given a string s, return the longest palindromic substring in s.

 

Example 1:

Input: s = "babad"
Output: "bab"
Note: "aba" is also a valid answer.
Example 2:

Input: s = "cbbd"
Output: "bb"
Example 3:

Input: s = "a"
Output: "a"
Example 4:

Input: s = "ac"
Output: "a"
 

Constraints:

1 <= s.length <= 1000
s consist of only digits and English letters (lower-case and/or upper-case),

 */

#include <vector>
#include <string>
using namespace std;
class Solution {
public:
  string longestPalindrome(string s) {
    int n = s.size();
    vector<vector<bool>> dp(n, vector<bool>(n, false));
    int maxLen = 0;
    string ans;
    for (int i = 0; i < n; ++i) {
      dp[i][i] = true;
      if (i < n - 1) {
        dp[i][i + 1] = s[i] == s[i + 1];
      }
    }
    for (int i = n - 2; i >= 0; --i) {
      for (int j = i + 2; j < n; ++j) {
        dp[i][j] = s[i] == s[j] && dp[i + 1][j - 1];
      }
    }
    for (int i = 0; i < n; ++i) {
      for (int j = i; j < n; ++j) {
        if (dp[i][j] && j - i + 1 > maxLen) {
          maxLen = j - i + 1;
          ans = s.substr(i, j - i + 1);
        }
      }
    }
    return ans;
  }
};