//
// Created by ZiqianCheng on 2021/6/2.
//

// EASY https://leetcode-cn.com/problems/factorial-zeros-lcci/

/*
 * Write an algorithm which computes the number of trailing zeros in n factorial.

Example 1:

Input: 3
Output: 0
Explanation: 3! = 6, no trailing zero.
Example 2:

Input: 5
Output: 1
Explanation: 5! = 120, one trailing zero.
Note: Your solution should be in logarithmic time complexity.
 */

class Solution {
public:
  int trailingZeroes(int n) {
    int ans = 0
    while(n > 1) {
      ans += n / 5;
      n /= 5;
    }
    return ans;
  }
};