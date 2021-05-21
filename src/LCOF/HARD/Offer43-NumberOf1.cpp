//
// Created by ZiqianCheng on 2021/5/21.
//

// HEAD https://leetcode-cn.com/problems/1nzheng-shu-zhong-1chu-xian-de-ci-shu-lcof/

class Solution {
public:
  int countDigitOne(int n) {
    long long digit = 1;
    long long high = n / 10;
    long long cur = n % 10;
    long long low = 0;
    long long ans = 0;
    while (high || cur) {
      if (cur == 0) ans += high * digit;
      else if (cur == 1) ans += high * digit + low + 1;
      else ans += (high + 1) * digit;
      low += cur * digit;
      cur = high % 10;
      high /= 10;
      digit *= 10;
    }
    return ans;
  }
};