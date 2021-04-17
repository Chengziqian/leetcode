// 04/11/2021 MEDIUM

// https://leetcode-cn.com/problems/ugly-number-ii/

/*
Given an integer n, return the nth ugly number.

Ugly number is a positive number whose prime factors only include 2, 3, and/or 5.

 

Example 1:

Input: n = 10
Output: 12
Explanation: [1, 2, 3, 4, 5, 6, 8, 9, 10, 12] is the sequence of the first 10 ugly numbers.
Example 2:

Input: n = 1
Output: 1
Explanation: 1 is typically treated as an ugly number.
 

Constraints:

1 <= n <= 1690

*/

function nthUglyNumber(n: number): number {
  const dp: number[] = new Array(n + 1).fill(1);
  let p2 = 1, p3 = 1, p5 = 1;
  for (let i = 2; i <= n; i++) {
    const num2 = dp[p2] * 2, num3 = dp[p3] * 3, num5 = dp[p5] * 5;
    dp[i] = Math.min(num2, num3, num5);
    if (dp[i] === num2) p2++;
    if (dp[i] === num3) p3++;
    if (dp[i] === num5) p5++;
  }
  return dp[n];
};