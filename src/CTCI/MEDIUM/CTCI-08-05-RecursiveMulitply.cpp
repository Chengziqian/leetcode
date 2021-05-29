//
// Created by ZiqianCheng on 2021/5/29.
//

// MEDIUM https://leetcode-cn.com/problems/recursive-mulitply-lcci/

/*
 * Write a recursive function to multiply two positive integers without using the * operator. You can use addition, subtraction, and bit shifting, but you should minimize the number of those operations.

Example 1:

 Input: A = 1, B = 10
 Output: 10
Example 2:

 Input: A = 3, B = 4
 Output: 12
Note:

The result will not overflow.

 */

class Solution {
public:
  int multiply(int A, int B) {
    if (!A) return 0;
    int value = multiply(A >> 1, B);
    return A & 1 ? value + value + B : value + value;
  }
};