//
// Created by ZiqianCheng on 2021/5/24.
//

// MEDIUM https://leetcode-cn.com/problems/qiu-12n-lcof/

class Solution {
public:
  int sumNums(int n) {
    if (n == 1) return 1;
    return n + sumNums(n - 1);
  }
};