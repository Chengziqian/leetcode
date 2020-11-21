// 11/20/2020 EASY

// https://leetcode-cn.com/problems/add-without-plus-lcci/

/*
Write a function that adds two numbers. You should not use + or any arithmetic operators.

Example:

Input: a = 1, b = 1
Output: 2
 

Note:

a and b may be 0 or negative.
The result fits in 32-bit integer.

 */

function add(a: number, b: number): number {
  while (b) {
    const sum = a ^ b;
    const carry = (a & b) << 1;
    a = sum;
    b = carry;
  }
  return a;
};
