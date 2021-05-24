//
// Created by ZiqianCheng on 2021/5/24.
//

// HARD https://leetcode-cn.com/problems/strange-printer/

/*
 * There is a strange printer with the following two special properties:

The printer can only print a sequence of the same character each time.
At each turn, the printer can print new characters starting from and ending at any place and will cover the original existing characters.
Given a string s, return the minimum number of turns the printer needed to print it.

 

Example 1:

Input: s = "aaabbb"
Output: 2
Explanation: Print "aaa" first and then print "bbb".
Example 2:

Input: s = "aba"
Output: 2
Explanation: Print "aaa" first and then print "b" from the second place of the string, which will cover the existing character 'a'.
 

Constraints:

1 <= s.length <= 100
s consists of lowercase English letters.
 */

#include <string>
#include <vector>
#include <algorithm>
#include <iostream>
using namespace std;
class Solution {
public:
  int strangePrinter(string s) {
    int n = s.size();
    vector<vector<int>> dp(n, vector<int>(n, 0));
    for (int i = 0; i < n; ++i) dp[i][i] = 1;
    for (int i = n - 1; i >= 0; --i) {
      for (int j = i + 1; j < n; ++j) {
        if (s[i] == s[j]) dp[i][j] = dp[i][j - 1];
        else {
          int minValue = INT_MAX;
          for (int k = i; k < j; ++k) {
            minValue = min(minValue, dp[i][k] + dp[k + 1][j]);
          }
          dp[i][j] = minValue;
        }
      }
    }
    return dp[0][n - 1];
  }
};

int main() {
  Solution s;
  cout << s.strangePrinter("aaabbb") << endl;
  cout << s.strangePrinter("aba") << endl;
  return 0;
}