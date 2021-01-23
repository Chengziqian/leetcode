// 01/09/2012 HARD

// https://leetcode-cn.com/problems/student-attendance-record-ii/

/* 

Given a positive integer n, 
return the number of all possible attendance records with length n, 
which will be regarded as rewardable. 
The answer may be very large, return it after mod 109 + 7.

A student attendance record is a string that only contains the following three characters:

'A' : Absent.
'L' : Late.
'P' : Present.
A record is regarded as rewardable if it doesn't contain more than one 'A' (absent) or more than two continuous 'L' (late).

Example 1:
Input: n = 2
Output: 8 
Explanation:
There are 8 records with length 2 will be regarded as rewardable:
"PP" , "AP", "PA", "LP", "PL", "AL", "LA", "LL"
Only "AA" won't be regarded as rewardable owing to more than one absent times. 
Note: The value of n won't exceed 100,000.

*/

function checkRecord(n: number): number {
  const dp: number[] = new Array(n <= 5 ? 6 : n + 1);
  const MOD = 1e9 + 7;
  dp[0] = 1;
  dp[1] = 2;
  dp[2] = 4;
  dp[3] = 7;
  for (let i = 4; i <= n; i++) {
    dp[i] = ((2 * dp[i - 1]) % MOD + (MOD - dp[i - 4])) % MOD;
  }
  let sum = dp[n];
  for (let i = 1; i <= n; i++) {
    sum += (dp[i - 1] * dp[n - i]) % MOD;
  }
  return sum % MOD;
};