// 03/08/2021 HARD

// https://leetcode-cn.com/problems/palindrome-partitioning-ii/

/*
Given a string s, partition s such that every substring of the partition is a palindrome.

Return the minimum cuts needed for a palindrome partitioning of s.

 

Example 1:

Input: s = "aab"
Output: 1
Explanation: The palindrome partitioning ["aa","b"] could be produced using 1 cut.
Example 2:

Input: s = "a"
Output: 0
Example 3:

Input: s = "ab"
Output: 1
 

Constraints:

1 <= s.length <= 2000
s consists of lower-case English letters only.
 */
import { PriorityQueue } from '../../utils/PriorityQueue';

function minCut(s: string): number {
  const dp: boolean[][] = new Array(s.length);
  const f: number[] = new Array(s.length).fill(Number.MAX_SAFE_INTEGER);
  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(s.length).fill(true);
  }
  for (let i = s.length - 1; i >= 0; i--) {
    for (let j = i + 1; j < s.length; j++) {
      dp[i][j] = s[i] === s[j] && dp[i + 1][j - 1];
    }
  }
  for (let j = 0; j < s.length; j++) {
    if (dp[0][j]) f[j] = 0;
    else {
      for (let i = 1; i <= j; i++) {
        if (dp[i][j]) {
          f[j] = Math.min(f[j], f[i - 1] + 1);
        }
      }
    }
  }
  return f[s.length - 1];
};
