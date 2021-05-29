//
// Created by ZiqianCheng on 2021/5/28.
//

// EASY https://leetcode-cn.com/problems/exchange-lcci/

/*
 * Write a program to swap odd and even bits in an integer with as few instructions as possible
 * (e.g., bit 0 and bit 1 are swapped, bit 2 and bit 3 are swapped, and so on).

Example1:

 Input: num = 2（0b10）
 Output 1 (0b01)
Example2:

 Input: num = 3
 Output: 3
Note:

0 <= num <= 2^30 - 1
The result integer fits into 32-bit integer.
 */

class Solution {
public:
  int exchangeBits(int num) {
    for (int i = 0; i + 1 < 31; i += 2) {
      if ((num & (1 << i)) ^ ((num & (1 << (i + 1))) >> 1)) {
        if (num & (1 << i)) num &= ~(1 << i);
        else num |= (1 << i);
        if (num & (1 << (i + 1))) num &= ~(1 << (i + 1));
        else num |= (1 << (i + 1));
      }
    }
    return num;
  }
};