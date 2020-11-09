// 10/19/2020 MEDIUM

// https://leetcode-cn.com/problems/palindromic-substrings/

/*
Given a string, your task is to count how many palindromic substrings in this string.

The substrings with different start indexes or end indexes are counted as different substrings even they consist of same characters.

Example 1:

Input: "abc"
Output: 3
Explanation: Three palindromic strings: "a", "b", "c".
 

Example 2:

Input: "aaa"
Output: 6
Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".
 

Note:

The input string length won't exceed 1000.
 */

function countSubstrings(s: string): number {
  const dp: boolean[][] = [];
  for (let i = 0; i < s.length; i++) {
    dp.push(new Array(s.length).fill(false));
  }
  let ans = 0;
  for (let j = 0; j < s.length; j++) {
    for (let i = 0; i <= j; i++) {
      if (s[i] === s[j] && (j - i < 2 || dp[i + 1][j - 1])) {
        dp[i][j] = true;
        ans++;
      }
    }
  }
  return ans;
};
