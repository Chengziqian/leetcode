/*
Given a string s, return the number of palindromic substrings in it.

A string is a palindrome when it reads the same backward as forward.

A substring is a contiguous sequence of characters within the string.

 

Example 1:

Input: s = "abc"
Output: 3
Explanation: Three palindromic strings: "a", "b", "c".
Example 2:

Input: s = "aaa"
Output: 6
Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".
 

Constraints:

1 <= s.length <= 1000
s consists of lowercase English letters.
*/
#include <iostream>
#include <vector>
#include <string>
using namespace std;
class Solution {
public:
    int countSubstrings(string s) {
      int n = s.size();
      vector<vector<bool>> dp(n, vector<bool>(n, false));
      int ans = n;
      for (int i = 0; i < n; i++) {
        dp[i][i] = true;
      }
      for (int i = n - 1; i >= 0; --i) {
        for (int j = i + 1; j < n; ++j) {
          if (s[i] == s[j]) {
            if (i + 1 == j) dp[i][j] = true;
            else dp[i][j] = dp[i + 1][j - 1];
          }
          if (dp[i][j]) ans++;
        }
      }
      return ans;
    }
};

int main() {
  Solution s;
  cout << s.countSubstrings("abc") << endl;
  cout << s.countSubstrings("aaa") << endl;
  cout << s.countSubstrings("caaabbaacc") << endl;
  return 0;
}