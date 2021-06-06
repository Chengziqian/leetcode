//
// Created by ZiqianCheng on 2021/6/2.
//

// EASY https://leetcode-cn.com/problems/maximum-lcci/

/*
 * Write a method that finds the maximum of two numbers. You should not use if-else or any other comparison operator.

Example:

Input:  a = 1, b = 2
Output:  2

 */

class Solution {
public:
  int maximum(int a, int b) {
    long long diff = ((long long)a - b);
    int k = 1 + (diff >> 63);
    return a * k + b * (!k);
  }
};