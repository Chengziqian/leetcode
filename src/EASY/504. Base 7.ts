// 03/19/2021 EASY

// https://leetcode-cn.com/problems/base-7/

/*
Given an integer, return its base 7 string representation.

Example 1:
Input: 100
Output: "202"
Example 2:
Input: -7
Output: "-10"
Note: The input will be in range of [-1e7, 1e7].

 */

function convertToBase7(num: number): string {
  if (num === 0) return '0';
  const isNegative = num < 0;
  num = Math.abs(num);
  let ans = '';
  while (num) {
    ans = (num % 7) + ans;
    num = Math.floor(num / 7);
  }
  return `${isNegative ? '-' : ''}${ans}`;
};
