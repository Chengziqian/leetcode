// 04/29/2021 HARD

// https://leetcode-cn.com/problems/nth-magical-number/

/*
A positive integer is magical if it is divisible by either a or b.

Given the three integers n, a, and b, return the nth magical number. Since the answer may be very large, return it modulo 109 + 7.

 

Example 1:

Input: n = 1, a = 2, b = 3
Output: 2
Example 2:

Input: n = 4, a = 2, b = 3
Output: 6
Example 3:

Input: n = 5, a = 2, b = 4
Output: 10
Example 4:

Input: n = 3, a = 6, b = 4
Output: 8
 

Constraints:

1 <= n <= 109
2 <= a, b <= 4 * 104

 */

// function nthMagicalNumber(n: number, a: number, b: number): number {
//   if (a > b) [a, b] = [b, a];
//   const MOD = 1e9 + 7;
//   const lcm = a * b / gcd(a, b);
//   let left = a, right = a * n;
//   while (left <= right) {
//     const mid = Math.floor((left + right) / 2);
//     const aCount = Math.floor(mid / a);
//     const bCount = Math.floor(mid / b);
//     const duplicated = Math.floor(mid / lcm);
//     const currentCount = aCount + bCount - duplicated;
//     if (currentCount > n) right = mid - 1;
//     else if (currentCount < n) left = mid + 1;
//     else return Math.max(a * aCount, b * bCount) % MOD;
//   }
//   return -1;
//   function gcd(a: number, b: number): number {
//     return a === 0 ? b : gcd(b % a, a);
//   }
// };

function nthMagicalNumber(n: number, a: number, b: number): number {
  if (a > b) [a, b] = [b, a];
  const MOD = 1e9 + 7;
  const lcm = a * b / gcd(a, b);
  let left = a, right = a * n;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const aCount = Math.floor(mid / a);
    const bCount = Math.floor(mid / b);
    const duplicated = Math.floor(mid / lcm);
    const currentCount = aCount + bCount - duplicated;
    if (currentCount >= n) right = mid - 1;
    else left = mid + 1;
  }
  return left % MOD;
  function gcd(a: number, b: number): number {
    return a === 0 ? b : gcd(b % a, a);
  }
};
