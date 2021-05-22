// 05/18/2021 MEDIUM

// https://leetcode-cn.com/problems/shu-zhi-de-zheng-shu-ci-fang-lcof/

#include <algorithm>
class Solution {
  public:
    double myPow(double x, int n) {
      bool isNegative = n < 0;
      long long ln = abs((long long)n);
      double ans = 1;
      while (ln) {
        if (ln & 1) ans *= x;
        x *= x;
        ln >>= 1;
      }
      return isNegative ? 1 / ans : ans;
    }
};