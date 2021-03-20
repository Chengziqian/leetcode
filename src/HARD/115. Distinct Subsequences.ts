// 03/27/2021 HARD

// https://leetcode-cn.com/problems/distinct-subsequences/

/*
Given two strings s and t, return the number of distinct subsequences of s which equals t.

A string's subsequence is a new string formed from the original string by deleting some (can be none) of the characters without disturbing the remaining characters' relative positions. (i.e., "ACE" is a subsequence of "ABCDE" while "AEC" is not).

It is guaranteed the answer fits on a 32-bit signed integer.

 

Example 1:

Input: s = "rabbbit", t = "rabbit"
Output: 3
Explanation:
As shown below, there are 3 ways you can generate "rabbit" from S.
rabbbit
rabbbit
rabbbit
Example 2:

Input: s = "babgbag", t = "bag"
Output: 5
Explanation:
As shown below, there are 5 ways you can generate "bag" from S.
babgbag
babgbag
babgbag
babgbag
babgbag
 

Constraints:

0 <= s.length, t.length <= 1000
s and t consist of English letters.

 */

function numDistinct(s: string, t: string): number {
  if (!t.length) return 1;
  if (s.length < t.length) return 0;
  const dp: number[][] = new Array(s.length);
  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(t.length).fill(0);
  }
  dp[0][0] = s[0] === t[0] ? 1 : 0;
  for (let i = 1; i < s.length; i++) {
    if (s[i] === t[0]) {
      dp[i][0] += dp[i - 1][0] + 1;
    } else {
      dp[i][0] = dp[i - 1][0];
    }
  }
  for (let i = 1; i < s.length; i++) {
    for (let j = 1; j <= i && j < t.length; j++) {
      if (s[i] === t[j]) {
        dp[i][j] += dp[i - 1][j - 1] + dp[i - 1][j];
      } else {
        dp[i][j] = dp[i - 1][j];
      }
    }
  }
  return dp[s.length - 1][t.length -1];
};
