//
// Created by ZiqianCheng on 2021/5/28.
//

// EASY https://leetcode-cn.com/problems/convert-integer-lcci/

/*
 * Write a function to determine the number of bits you would need to flip to convert integer A to integer B.

Example1:

 Input: A = 29 (0b11101), B = 15 (0b01111)
 Output: 2
Example2:

 Input: A = 1，B = 2
 Output: 2
Note:

-2147483648 <= A, B <= 2147483647
 */

class Solution {
public:
  int convertInteger(int A, int B) {
    int xorValue = A ^ B;
    int ans = 0;
    while (xorValue) {
      if (xorValue & 1) ans++;
      xorValue = (unsigned)xorValue >> 1;
    }
    return ans;
  }
};