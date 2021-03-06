// 03/09/2021 HARD

// https://leetcode-cn.com/problems/scramble-string/

/*
We can scramble a string s to get a string t using the following algorithm:

If the length of the string is 1, stop.
If the length of the string is > 1, do the following:
Split the string into two non-empty substrings at a random index, i.e., if the string is s, divide it to x and y where s = x + y.
Randomly decide to swap the two substrings or to keep them in the same order. i.e., after this step, s may become s = x + y or s = y + x.
Apply step 1 recursively on each of the two substrings x and y.
Given two strings s1 and s2 of the same length, return true if s2 is a scrambled string of s1, otherwise, return false.

 

Example 1:

Input: s1 = "great", s2 = "rgeat"
Output: true
Explanation: One possible scenario applied on s1 is:
"great" --> "gr/eat" // divide at random index.
"gr/eat" --> "gr/eat" // random decision is not to swap the two substrings and keep them in order.
"gr/eat" --> "g/r / e/at" // apply the same algorithm recursively on both substrings. divide at ranom index each of them.
"g/r / e/at" --> "r/g / e/at" // random decision was to swap the first substring and to keep the second substring in the same order.
"r/g / e/at" --> "r/g / e/ a/t" // again apply the algorithm recursively, divide "at" to "a/t".
"r/g / e/ a/t" --> "r/g / e/ a/t" // random decision is to keep both substrings in the same order.
The algorithm stops now and the result string is "rgeat" which is s2.
As there is one possible scenario that led s1 to be scrambled to s2, we return true.
Example 2:

Input: s1 = "abcde", s2 = "caebd"
Output: false
Example 3:

Input: s1 = "a", s2 = "a"
Output: true
 

Constraints:

s1.length == s2.length
1 <= s1.length <= 30
s1 and s2 consist of lower-case English letters.

 */
// function isScramble(s1: string, s2: string): boolean {
//   if (s1.length !== s2.length) return false;
//   const n = s1.length;
//   const dp: boolean[][][] = new Array(n);
//   for (let i = 0; i < dp.length; i++) {
//     dp[i] = new Array(n);
//     for (let j = 0; j < dp[i].length; j++) {
//       dp[i][j] = new Array(n + 1).fill(false);
//     }
//   }
//   for (let i = 0; i < s1.length; i++) {
//     for (let j = 0; j < s2.length; j++) {
//       dp[i][j][1] = s1[i] === s2[j];
//     }
//   }
//  
//   for (let k = 2; k <= n; k++) {
//     for (let i = 0; i <= n - k; i++) {
//       for (let j = 0; j <= n - k; j++) {
//         for (let w = 1; w <= k - 1; w++) {
//           if (dp[i][j][w] && dp[i + w][j + w][k - w]) {
//             dp[i][j][k] = true;
//             break;
//           }
//           if (dp[i][j + k - w][w] && dp[i + w][j][k - w]) {
//             dp[i][j][k] = true;
//             break;
//           }
//         }
//       }
//     }
//   }
//   return dp[0][0][n];
// };


function isScramble(s1: string, s2: string): boolean {
  if (s1.length !== s2.length) return false;
  const n = s1.length;
  const memo: boolean[][][] = new Array(n);
  for (let i = 0; i < memo.length; i++) {
    memo[i] = new Array(n);
    for (let j = 0; j < memo[i].length; j++) {
      memo[i][j] = new Array(n + 1);
    }
  }
  return dfs(0, 0, n);
  
  function dfs(i: number, j: number, len: number): boolean {
    if (memo[i][j][len] !== undefined) return memo[i][j][len];
    if (len === 1 && s1[i] === s2[j]) return memo[i][j][len] = true;
    for (let l = 1; l <= len - 1; l++) {
      if (dfs(i, j, l) && dfs(i + l, j + l, len - l)) return memo[i][j][len] = true;
      if (dfs(i, j + len - l, l) && dfs(i + l, j, len - l)) return memo[i][j][len] = true;
    }
    return memo[i][j][len] = false;
  }
};
