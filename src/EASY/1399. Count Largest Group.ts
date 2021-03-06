// 02/05/2021 EASY

// https://leetcode-cn.com/problems/count-largest-group/

/*
Given an integer n. Each number from 1 to n is grouped according to the sum of its digits. 

Return how many groups have the largest size.

 

Example 1:

Input: n = 13
Output: 4
Explanation: There are 9 groups in total, they are grouped according sum of its digits of numbers from 1 to 13:
[1,10], [2,11], [3,12], [4,13], [5], [6], [7], [8], [9]. There are 4 groups with largest size.
Example 2:

Input: n = 2
Output: 2
Explanation: There are 2 groups [1], [2] of size 1.
Example 3:

Input: n = 15
Output: 6
Example 4:

Input: n = 24
Output: 5
 

Constraints:

1 <= n <= 10^4

 */

function countLargestGroup(n: number): number {
  const record: Map<number, number> = new Map<number, number>();
  let maxSize = 0;
  for (let i = 1; i <= n; i++) {
    let c = i;
    let sum = 0;
    while (c) {
      sum += c % 10;
      c = Math.floor(c / 10);
    }
    if (!record.has(sum)) {
      record.set(sum, 0);
    }
    record.set(sum, record.get(sum) + 1);
    maxSize = Math.max(maxSize, record.get(sum));
  }
  let ans = 0;
  record.forEach(value => value === maxSize && ans++);
  return ans;
};
