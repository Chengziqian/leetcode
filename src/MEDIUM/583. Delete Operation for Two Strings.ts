// 01/01/2021 MEDIUM

// https://leetcode-cn.com/problems/delete-operation-for-two-strings/

/* 
Given two words word1 and word2, find the minimum number of steps required to make word1 and word2 the same, where in each step you can delete one character in either string.

Example 1:
Input: "sea", "eat"
Output: 2
Explanation: You need one step to make "sea" to "ea" and another step to make "eat" to "ea".
Note:
The length of given words won't exceed 500.
Characters in given words can only be lower-case letters.

*/

function minDistance(word1: string, word2: string): number {
  const dp: number[][] = new Array(word1.length + 1);
  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(word2.length + 1).fill(0);
  }
  for (let i = 0; i <= word1.length; i++) {
    for (let j = 0; j <= word2.length; j++) {
      if (i === 0 || j === 0) continue;
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }
  return word2.length + word1.length - 2 * dp[word1.length][word2.length];
};