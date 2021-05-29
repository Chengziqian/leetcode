//
// Created by ZiqianCheng on 2021/5/28.
//

// EASY https://leetcode-cn.com/problems/reverse-bits-lcci/

/*
 * You have an integer and you can flip exactly one bit from a 0 to a 1.
 * Write code to find the length of the longest sequence of 1s you could create.

Example 1:

Input: num = 1775(11011101111)
Output: 8
Example 2:

Input: num = 7(0111)
Output: 4

 */

class Solution {
public:
  int reverseBits(int num) {
    int cur = 0;
    int len = 0;
    int ans = 1;
    for (int i = 0; i <= 31; ++i) {
      if (num & (1 << i)) {
        cur += 1;
        len += 1;
      } else {
        len = cur + 1;
        cur = 0;
      }
      ans = max(ans, len);
    }
    return ans;
  }
};