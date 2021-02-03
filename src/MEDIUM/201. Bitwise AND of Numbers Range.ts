// 02/02/2021 MEDIUM

// https://leetcode-cn.com/problems/bitwise-and-of-numbers-range/

/*
Given a range [m, n] where 0 <= m <= n <= 2147483647, 
return the bitwise AND of all numbers in this range, inclusive.

Example 1:

Input: [5,7]
Output: 4
Example 2:

Input: [0,1]
Output: 0

 */

function rangeBitwiseAnd(m: number, n: number): number {
  if (m === n) return m;
  let mask = 1 << 30;
  let ans = 0;
  while (mask) {
    if ((m & mask) !== (n & mask)) return ans;
    ans |= (mask & m);
    mask >>= 1;
  }
  return ans;
};
