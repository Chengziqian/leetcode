// 03/04/2021 HARD

// https://leetcode-cn.com/problems/numbers-with-repeated-digits

/*
Given a positive integer N, 
return the number of positive integers less than or equal to N that have at least 1 repeated digit.

 

Example 1:

Input: 20
Output: 1
Explanation: The only positive number (<= 20) with at least 1 repeated digit is 11.
Example 2:

Input: 100
Output: 10
Explanation: The positive numbers (<= 100) with atleast 1 repeated digit are 11, 22, 33, 44, 55, 66, 77, 88, 99, and 100.
Example 3:

Input: 1000
Output: 262
 

Note:

1 <= N <= 10^9

 */
function numDupDigitsAtMostN(N: number): number {
  const d: number[] = [];
  const used: number[] = new Array(10).fill(0);
  let n = N;
  while (n) {
    d.push(n % 10);
    n = Math.floor(n / 10);
  }
  let ans = 0;
  for (let i = d.length - 1; i > 0; i--) {
    ans += 9 * A(9, i - 1);
  }
  
  for (let i = d.length - 1; i >= 0; i--) {
    let num = d[i];
    for (let j = i === d.length - 1 ? 1 : 0; j < num; j++) {
      if (used[j] > 0) continue;
      ans += A(10 - (d.length - i), i);
    }
    used[num]++;
    if (used[num] > 1) break;
    if (i === 0) {
      ans++;
    }
  }
  
  return N - ans;
  
  function A(n: number, m: number) {
    return f(n) / f(n - m);
  }
  
  function f(n: number): number {
    if (n === 1 || n === 0) return 1;
    return n * f(n - 1);
  }
};
