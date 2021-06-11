//
// Created by ZiqianCheng on 2021/6/5.
//

// EASY https://leetcode-cn.com/problems/add-without-plus-lcci/

/*
 * Write a function that adds two numbers. You should not use + or any arithmetic operators.

Example:

Input: a = 1, b = 1
Output: 2
 */


class Solution {
public:
  int add(int a, int b) {
    while (b) {
      int sum = a ^ b;
      int carry = (unsigned int)(a & b) << 1;
      a = sum;
      b = carry;
    }
    return a;
  }
};