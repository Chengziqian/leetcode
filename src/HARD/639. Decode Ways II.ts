// 10/22/2020 HARD

// https://leetcode-cn.com/problems/decode-ways-ii/

/*

A message containing letters from A-Z is being encoded to numbers using the following mapping way:

'A' -> 1
'B' -> 2
...
'Z' -> 26
Beyond that, now the encoded string can also contain the character '*', which can be treated as one of the numbers from 1 to 9.

Given the encoded message containing digits and the character '*', return the total number of ways to decode it.

Also, since the answer may be very large, you should return the output mod 109 + 7.

Example 1:
Input: "*"
Output: 9
Explanation: The encoded message can be decoded to the string: "A", "B", "C", "D", "E", "F", "G", "H", "I".
Example 2:
Input: "1*"
Output: 9 + 9 = 18
Note:
The length of the input string will fit in range [1, 105].
The input string will only contain the character '*' and digits '0' - '9'.

 */

function numDecodings(s: string): number {
  if (!s.length) return 0;
  const MOD = 1e9 + 7;
  const dp: number[] = new Array(s.length + 1).fill(1);
  dp[0] = 1;
  if (s[0] === '*') dp[1] = 9;
  else if (s[0] === '0') return 0;
  for (let i = 2; i <= s.length; i++) {
    if (s[i - 1] === '0') {
      if (s[i - 2] === '1' || s[i - 2] === '2') {
        dp[i] = dp[i - 2];
      } else if (s[i - 2] === '*') {
        dp[i] = dp[i - 2] * 2;
      } else return 0;
    } else if (s[i - 1] === '*') {
      if (s[i - 2] === '1') dp[i] = dp[i - 1] * 9 + dp[i - 2] * 9;
      else if (s[i - 2] === '2') dp[i] = dp[i - 1] * 9 + dp[i - 2] * 6;
      else if (s[i - 2] === '*') dp[i] = dp[i - 1] * 9 + dp[i - 2] * 15;
      else dp[i] = dp[i - 1] * 9;
    } else {
      if (s[i - 2] === '1' || (s[i - 2] === '2' && s[i - 1] >= '1' && s[i - 1] <= '6')) {
        dp[i] = dp[i - 1] + dp[i - 2]
      } else if (s[i - 2] === '*') {
        if (s[i - 1] >= '1' && s[i - 1] <= '6') {
          dp[i] = dp[i - 1] + dp[i - 2] * 2;
        } else {
          dp[i] = dp[i - 1] + dp[i - 2];
        }
      } else dp[i] = dp[i - 1];
    }
  }
  return dp[s.length] % MOD;
};
