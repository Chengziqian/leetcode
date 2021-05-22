//
// Created by ZiqianCheng on 2021/5/21.
//

// MEDIUM https://leetcode-cn.com/problems/shu-zi-xu-lie-zhong-mou-yi-wei-de-shu-zi-lcof/

#include <string>
using namespace std;
class Solution {
public:
  int findNthDigit(int n) {
    int start = 1;
    long long digit = 1;
    long long offset = 9;
    while (n > offset) {
      n -= offset;
      digit++;
      start *= 10;
      offset = 9 * digit * start;
    }
    long long num = start + (n - 1) / digit;
    return to_string(num)[(n - 1) % digit] - '0';
  }
};