//
// Created by ZiqianCheng on 2021/6/5.
//

// HARD https://leetcode-cn.com/problems/number-of-2s-in-range-lcci/

/*
 * Write a method to count the number of 2s that appear in all the numbers between 0 and n (inclusive).

Example:

Input: 25
Output: 9
Explanation: (2, 12, 20, 21, 22, 23, 24, 25)(Note that 22 counts for two 2s.)
Note:

n <= 10^9
 */

class Solution {
private:
  using LL = long long;
public:
  int numberOf2sInRange(int n) {
    LL place = 1;
    LL ans = 0;
    LL pre = n;
    while (pre) {
      LL cur = pre % 10;
      pre /= 10;
      if (cur < 2) {
        ans += pre * place;
      } else if (cur == 2) {
        ans += pre * place + (n % place + 1);
      } else {
        ans += (pre + 1) * place;
      }
      place *= 10;
    }
    return ans;
  }
};