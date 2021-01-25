// 01/09/2021 EASY

// https://leetcode-cn.com/problems/count-odd-numbers-in-an-interval-range/

/*
Given two non-negative integers low and high. Return the count of odd numbers between low and high (inclusive).

 

Example 1:

Input: low = 3, high = 7
Output: 3
Explanation: The odd numbers between 3 and 7 are [3,5,7].
Example 2:

Input: low = 8, high = 10
Output: 1
Explanation: The odd numbers between 8 and 10 are [9].
 

Constraints:

0 <= low <= high <= 10^9

*/

function countOdds(low: number, high: number): number {
  const count = high - low + 1;
  if ((low & 1) && (high & 1)) return (count >> 1) + 1
  else return count >> 1;
};