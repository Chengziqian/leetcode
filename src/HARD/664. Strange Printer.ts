// 04/19/2021 HARD

// https://leetcode-cn.com/problems/strange-printer/

/*
There is a strange printer with the following two special requirements:

The printer can only print a sequence of the same character each time.
At each turn, the printer can print new characters starting from and ending at any places,
and will cover the original existing characters.
Given a string consists of lower English letters only, 
your job is to count the minimum number of turns the printer needed in order to print it.

Example 1:
Input: "aaabbb"
Output: 2
Explanation: Print "aaa" first and then print "bbb".
Example 2:
Input: "aba"
Output: 2
Explanation: Print "aaa" first and then print "b" from the second place of the string, which will cover the existing character 'a'.
Hint: Length of the given string will not exceed 100.

 */

function strangePrinter(s: string): number {
  if (!s.length) return 0;
  const dp: number[][] = new Array(s.length);
  for (let i = 0; i < s.length; i++) {
    dp[i] = new Array(s.length).fill(0);
    dp[i][i] = 1;
  }
  for (let i = s.length - 2; i >= 0; i--) {
    for (let j = i + 1; j < s.length; j++) {
      dp[i][j] = dp[i][j - 1] + 1;
      for (let k = i; k < j; k++) {
        if (s[k] === s[j]) {
          dp[i][j] = Math.min(dp[i][j], dp[i][k] + dp[k + 1][j - 1]);
        }
      }
    }
  }
  return dp[0][s.length - 1];
};
