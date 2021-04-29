// 04/28/2021 MEDIUM

// https://leetcode-cn.com/problems/sum-of-square-numbers/

/*
Given a non-negative integer c, decide whether there're two integers a and b such that a2 + b2 = c.

 

Example 1:

Input: c = 5
Output: true
Explanation: 1 * 1 + 2 * 2 = 5
Example 2:

Input: c = 3
Output: false
Example 3:

Input: c = 4
Output: true
Example 4:

Input: c = 2
Output: true
Example 5:

Input: c = 1
Output: true
 

Constraints:

0 <= c <= 231 - 1
 */

// function judgeSquareSum(c: number): boolean {
//   const half = c >> 1;
//   for (let i = 0; i * i <= half; i++) {
//     const left = i * i, right = c - left;
//     let sqrt = right;
//     while (sqrt * sqrt > right) {
//       sqrt = Math.floor((sqrt + Math.floor(right / sqrt)) / 2);
//     }
//     if (sqrt * sqrt === right) return true;
//   }
//   return false;
// };

// function judgeSquareSum(c: number): boolean {
//   let low = 0, high = Math.floor(Math.sqrt(c));
//   while (low <= high) {
//     const current = low * low + high * high;
//     if (current > c) high--;
//     else if (current < c) low++
//     else return true;
//   }
//   return false;
// };

function judgeSquareSum(c: number): boolean {
  for (let i = 2; i * i <= c; i++) {
    let count = 0;
    while (c % i === 0) {
      c /= i;
      count++;
    }
    if (i % 4 === 3 && count % 2 !== 0) return false;
  }
  return c % 4 != 3;
};
